"use client";

// CategoriesGrid: 4 categories displayed with image, hover clip-path reveal,
// and stagger entrance animation on scroll.
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { registerGSAPPlugins } from "@/lib/gsap";
import { categories } from "@/data/categories";
import SplitTitle from "@/components/ui/SplitTitle";

export default function CategoriesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAPPlugins();

    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    // Stagger reveal
    gsap.fromTo(
      cards.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto"
    >
      {/* Section header */}
      <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
        <SplitTitle as="h2" className="text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-ink)]">
          Nos catégories
        </SplitTitle>
        <Link
          href="/collection"
          className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-rose-main)] hover:text-[var(--color-rose-deep)] transition-colors border-b border-[var(--color-rose-main)] pb-0.5"
        >
          Voir tout →
        </Link>
      </div>

      {/* Grid: 2×2 on desktop, 1 col on mobile */}
      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/collection/${cat.slug}`}
            className="group relative overflow-hidden aspect-[4/3] block"
          >
            {/* Image with zoom */}
            <Image
              src={cat.coverImage}
              alt={cat.name}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />

            {/* Category info */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 lg:p-8">
              <h3 className="font-serif text-white text-2xl lg:text-3xl font-light tracking-wide">
                {cat.name}
              </h3>
              <p className="text-white/60 text-xs mt-1.5 leading-relaxed font-sans">
                {cat.description}
              </p>
              {/* Underline reveal on hover */}
              <span className="mt-4 text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-rose-soft)] flex items-center gap-2">
                Explorer
                <span className="inline-block w-0 group-hover:w-8 h-px bg-[var(--color-rose-soft)] transition-all duration-500" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
