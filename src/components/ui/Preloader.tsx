"use client";

// Preloader: cinematic dark-screen experience with the ROSÉ logo only.
// Animation sequence:
//  1. Black screen appears instantly
//  2. Logo fades + scales in from slight distance
//  3. Progress line sweeps across
//  4. Logo fades out upward
//  5. Overlay slides UP (curtain lift) revealing the site
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { registerGSAPPlugins } from "@/lib/gsap";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    registerGSAPPlugins();

    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const line = lineRef.current;
    if (!overlay || !logo || !line) return;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setVisible(false);
      },
    });

    // ── Phase 1: Logo rises from depth, fades in
    tl.fromTo(
      logo,
      { scale: 0.8, opacity: 0, filter: "blur(8px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }
    )

    // ── Phase 2: Progress line sweeps right
    .fromTo(
      line,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
      "-=0.1"
    )

    // ── Brief hold at full presence
    .to({}, { duration: 0.3 })

    // ── Phase 3: Logo + line fade and drift up
    .to(
      [logo, line],
      { opacity: 0, y: -30, duration: 0.55, ease: "power2.in", stagger: 0.06 }
    )

    // ── Phase 4: Overlay slides UP — curtain lift revealing site
    .to(
      overlay,
      { yPercent: -100, duration: 0.9, ease: "power3.inOut" },
      "-=0.15"
    );

    return () => { tl.kill(); };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "var(--color-cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
      }}
    >
      {/* Elegant Typography Logo */}
      <div
        ref={logoRef}
        style={{ opacity: 0, willChange: "transform, opacity" }}
        className="flex flex-col items-center justify-center"
      >
        <span className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.4em] font-light text-white drop-shadow-md">
          ROSÉ
        </span>
      </div>

      {/* Progress line */}
      <div
        ref={lineRef}
        style={{
          width: "100px",
          height: "1px",
          backgroundColor: "rgba(212, 105, 138, 0.7)",
          marginTop: "2.5rem",
          transform: "scaleX(0)",
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
