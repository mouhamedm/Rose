"use client";

// CustomCursor: a small white precise dot + a soft rose glow that trails behind.
// No scale changes on hover — clean, consistent, editorial.
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    // The dot snaps instantly — feels like the real cursor
    const moveDotX = gsap.quickTo(dot, "x", { duration: 0.05, ease: "none" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.05, ease: "none" });

    // The glow lags softly behind
    const moveGlowX = gsap.quickTo(glow, "x", { duration: 0.55, ease: "power3.out" });
    const moveGlowY = gsap.quickTo(glow, "y", { duration: 0.55, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      moveDotX(e.clientX);
      moveDotY(e.clientY);
      moveGlowX(e.clientX);
      moveGlowY(e.clientY);
    };

    const onMouseEnter = () => {
      gsap.to([dot, glow], { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to([dot, glow], { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    // Show on first move
    gsap.set([dot, glow], { opacity: 0 });
    window.addEventListener("mousemove", onMouseEnter, { once: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Precise white dot — snaps to cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 0 1.5px rgba(0,0,0,0.25)",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          opacity: 0,
          willChange: "transform",
        }}
      />

      {/* Rose circle — trails behind with lag */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(212, 105, 138, 0.35)",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-50%, -50%)",
          opacity: 0,
          willChange: "transform",
        }}
      />
    </>
  );
}
