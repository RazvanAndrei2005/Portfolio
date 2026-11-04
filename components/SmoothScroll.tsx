"use client";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // anchors.offset: negative = land higher on the page (section sits lower on screen)
    // tweak the number to taste: -40 (tight) ... -100 (lots of space above)
    <ReactLenis root options={{ lerp: 0.1, anchors: { offset: -64 } }}>
      {children}
    </ReactLenis>
  );
}