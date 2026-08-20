"use client";

// Brand statement: editorial full-bleed section with clip-path reveal
// and large typographic quote. Creates a visual break between product sections.
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { registerGSAPPlugins } from "@/lib/gsap";
import FillButton from "@/components/ui/FillButton";

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    registerGSAPPlugins();

    const section = sectionRef.current;
    if (!section) return;

    // Clip-path reveal: section expands from center on scroll enter
    gsap.fromTo(
      section,
      { clipPath: "inset(8% 4% round 2px)" },
      {
        clipPath: "inset(0% 0% round 0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    // Parallax on inner image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Quote fade in
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
        },
      }
    );

    // Capture ref values so the cleanup uses the same node that was subscribed
    const sectionEl = section;
    const quoteEl = quoteRef.current;

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionEl || st.vars.trigger === quoteEl) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] min-h-[650px] overflow-hidden flex items-center justify-center"
      style={{ clipPath: "inset(3% 2% round 4px)" }}
    >
      {/* Background image */}
      <div ref={imageRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="/images/products/robes-longues/robe-vienne-v2.png"
          alt="L'univers ROSÉ — élégance et féminité"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Quote */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="w-12 h-px bg-[var(--color-rose-soft)] mx-auto mb-8" />
        <blockquote
          ref={quoteRef}
          className="font-serif text-white text-[clamp(1.8rem,4vw,3.5rem)] font-light leading-[1.2] tracking-wide italic opacity-0"
        >
          « L&apos;élégance n&apos;est pas d&apos;être remarquée, c&apos;est
          d&apos;être mémorisée. »
        </blockquote>
        <p className="mt-6 text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-rose-soft)]">
          — Giorgio Armani
        </p>
        <div className="mt-10">
          <FillButton href="/about" variant="outline">
            Notre histoire
          </FillButton>
        </div>
      </div>
    </section>
  );
}
