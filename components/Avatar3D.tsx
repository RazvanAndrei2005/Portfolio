"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const MODEL = "/avatar/avatar.glb";
// Increased size to fill out the circle horizontally
// Dialed back the size a bit so the shoulders fit nicely
const SIZE = 1.9;
// A much smaller downward nudge
const Y_SHIFT = -0.1;
const LIMIT = { yaw: 0.5, pitch: 0.3 };
const NECK = { pivot: 0.36, from: 0.28, to: 0.42 };

function Character() {
  const { scene } = useGLTF(MODEL);
  const { gl, invalidate } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const uniforms = useRef({
    uYaw: { value: 0 },
    uPitch: { value: 0 },
    uPivot: { value: new THREE.Vector3() },
    uBand: { value: new THREE.Vector2() },
  });

  const fit = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = SIZE / Math.max(size.x, size.y, size.z, 0.0001);
    const offset = center.multiplyScalar(-scale);
    offset.y += Y_SHIFT;
    return { scale, offset };
  }, [scene]);

  useEffect(() => {
    const u = uniforms.current;
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const geo = mesh.geometry;
      geo.computeBoundingBox();
      const b = geo.boundingBox!;
      const h = b.max.y - b.min.y;
      u.uPivot.value.set((b.min.x + b.max.x) / 2, b.min.y + h * NECK.pivot, (b.min.z + b.max.z) / 2);
      u.uBand.value.set(b.min.y + h * NECK.from, b.min.y + h * NECK.to);

      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach((m) => {
        m.onBeforeCompile = (shader) => {
          Object.assign(shader.uniforms, u);
          shader.vertexShader = shader.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
uniform float uYaw;
uniform float uPitch;
uniform vec3 uPivot;
uniform vec2 uBand;
mat3 rotY(float a){ float c = cos(a); float s = sin(a); return mat3(c,0.,-s, 0.,1.,0., s,0.,c); }
mat3 rotX(float a){ float c = cos(a); float s = sin(a); return mat3(1.,0.,0., 0.,c,s, 0.,-s,c); }`
            )
            .replace(
              "#include <beginnormal_vertex>",
              `float neckW = smoothstep(uBand.x, uBand.y, position.y);
mat3 neckR = rotY(uYaw * neckW) * rotX(uPitch * neckW);
vec3 objectNormal = neckR * vec3(normal);
#ifdef USE_TANGENT
vec3 objectTangent = neckR * vec3(tangent.xyz);
#endif`
            )
            .replace(
              "#include <begin_vertex>",
              `vec3 transformed = neckR * (position - uPivot) + uPivot;
#ifdef USE_ALPHAHASH
vPosition = vec3(position);
#endif`
            );
        };
        m.customProgramCacheKey = () => "neck-turn";
        m.needsUpdate = true;
      });
    });
    // With frameloop="demand", draw once so the model shows up after the shader patch
    invalidate();
  }, [scene, invalidate]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = gl.domElement.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mouse.current.x = THREE.MathUtils.clamp((e.clientX - cx) / (window.innerWidth / 2), -1, 1);
      mouse.current.y = THREE.MathUtils.clamp((e.clientY - cy) / (window.innerHeight / 2), -1, 1);
      invalidate(); // wake the render loop
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [gl, invalidate]);

  useFrame((_, dt) => {
    const u = uniforms.current;
    const targetYaw = mouse.current.x * LIMIT.yaw;
    const targetPitch = mouse.current.y * LIMIT.pitch;

    u.uYaw.value = THREE.MathUtils.damp(u.uYaw.value, targetYaw, 6, dt);
    u.uPitch.value = THREE.MathUtils.damp(u.uPitch.value, targetPitch, 6, dt);

    // Keep rendering until the head has settled, then go idle
    if (
      Math.abs(u.uYaw.value - targetYaw) > 0.001 ||
      Math.abs(u.uPitch.value - targetPitch) > 0.001
    ) {
      invalidate();
    }
  });

  return <primitive object={scene} scale={fit.scale} position={fit.offset} />;
}

export default function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 30 }}
      dpr={[1, 1.5]}
      frameloop="demand"
      gl={{ alpha: true, powerPreference: "high-performance" }}
    >
      <hemisphereLight args={["#ffffff", "#AEC4D4", 1.2]} />
      <directionalLight position={[2, 3, 4]} intensity={2.2} />
      <Suspense fallback={null}>
        <Character />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL);