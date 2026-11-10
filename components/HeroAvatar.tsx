"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const Avatar3D = dynamic(() => import("./Avatar3D"), { ssr: false });

export default function HeroAvatar() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Phones / touch devices: keep the static image (no cursor to follow, saves battery)
    const isTouch = window.matchMedia("(pointer: coarse), (max-width: 767px)").matches;
    if (isTouch) return;

    let cancelled = false;
    fetch("/avatar/avatar.glb", { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setShow3D(r.ok);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative size-56 shrink-0 overflow-hidden rounded-full bg-cream sm:size-64">
      {show3D ? (
        <div className="absolute inset-0">
          <Avatar3D />
        </div>
      ) : (
        <Image
          src="/avatar/razvan.webp"
          alt="Răzvan-Andrei Borca"
          fill
          sizes="(max-width: 639px) 224px, 256px"
          quality={90}
          priority
          className="object-cover"
        />
      )}
    </div>
  );
}