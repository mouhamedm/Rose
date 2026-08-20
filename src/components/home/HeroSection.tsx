"use client";

import { useEffect, useRef } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { registerGSAPPlugins } from "@/lib/gsap";
import FillButton from "@/components/ui/FillButton";
import SplitTitle from "@/components/ui/SplitTitle";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAPPlugins();

    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const parallax = gsap.to(image, {
      y: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const tl = gsap.timeline({ delay: 2.8 });
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      parallax.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-150 overflow-hidden"
    >
      {/* Parallax image */}
      <div
        ref={imageRef}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        <video
          src="/videos/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-top w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-start justify-end pb-32 lg:pb-40 px-6 lg:px-20 max-w-350 mx-auto w-full">
        {/* Main title */}
        <SplitTitle
          as="h1"
          className="text-white text-[clamp(3.5rem,8vw,8rem)] max-w-3xl"
          delay={2.6}
          immediate
        >
          L&apos;élégance, réinventée
        </SplitTitle>

        {/* Subtitle + CTA */}
        <p
          ref={subtitleRef}
          className="mt-6 text-white/70 font-sans text-sm leading-relaxed max-w-sm opacity-0"
        >
          Robes courtes, longues, ensembles - une collection pensée pour la
          femme contemporaine.
        </p>

        <div ref={ctaRef} className="flex gap-4 mt-8 opacity-0 flex-wrap">
          <FillButton href="/collection" variant="outline">
            Découvrir la collection
          </FillButton>
          <FillButton href="/lookbook" variant="rose">
            Lookbook
          </FillButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-3 z-10">
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-white/50 [writing-mode:vertical-rl] rotate-180">
          Défiler
        </span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/70 animate-[scroll-line_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
