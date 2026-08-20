"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { registerGSAPPlugins } from "@/lib/gsap";
import SplitTitle from "@/components/ui/SplitTitle";
import FillButton from "@/components/ui/FillButton";
import { products } from "@/data/products";

const scenes = [
  {
    product: products.find((p) => p.slug === "robe-riviera")!,
    quote: "La légèreté à l'état pur",
    setting: "Paris, printemps",
  },
  {
    product: products.find((p) => p.slug === "ensemble-ivoire")!,
    quote: "Deux pièces, une harmonie",
    setting: "Côte d'Azur, été",
  },
  {
    product: products.find((p) => p.slug === "robe-vienne")!,
    quote: "L'élégance sans effort",
    setting: "Vienne, automne",
  },
  {
    product: products.find((p) => p.slug === "veste-perlee")!,
    quote: "Une pièce d'exception",
    setting: "Milan, hiver",
  },
];

export default function LookbookPage() {
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    registerGSAPPlugins();

    sceneRefs.current.forEach((scene,) => {
      if (!scene) return;
      const img = scene.querySelector(".scene-image");
      const text = scene.querySelector(".scene-text");

      if (img) {
        gsap.to(img, {
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: scene,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 65%",
            },
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <div className="pt-24 lg:pt-32 pb-24 overflow-hidden">
      {/* Header */}
      <div className="px-6 lg:px-12 max-w-350 mx-auto mb-24">
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-rose-main mb-3">
          Éditorial
        </p>
        <SplitTitle as="h1" className="text-[clamp(2.5rem,7vw,6rem)] text-ink">
          Lookbook
        </SplitTitle>
        <p className="mt-4 text-sm text-ink-soft max-w-md leading-relaxed">
          Chaque pièce ROSÉ raconte une histoire. Laissez-vous porter par ces
          mises en scène qui capturent l&apos;essence de la collection.
        </p>
      </div>

      {/* Scenes */}
      {scenes.map((scene, sceneIndex) => {
        const isEven = sceneIndex % 2 === 0;
        return (
          <div
            key={scene.product.id}
            ref={(el) => { sceneRefs.current[sceneIndex] = el; }}
            className={[
              "relative min-h-[80vh] flex items-center overflow-hidden mb-6",
              sceneIndex % 3 === 0 ? "bg-cream" : "bg-rose-blush",
            ].join(" ")}
          >
            {/* Parallax image */}
            <div
              className={[
                "scene-image absolute top-0 w-full lg:w-1/2 h-[120%] translate-y-[-10%]",
                isEven ? "left-0" : "right-0",
              ].join(" ")}
            >
              <Image
                src={scene.product.images[0]}
                alt={scene.product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className={[
                  "absolute inset-0",
                  isEven
                    ? "bg-linear-to-r from-transparent to-cream/80"
                    : "bg-linear-to-l from-transparent to-rose-blush/80",
                ].join(" ")}
              />
            </div>

            {/* Text content */}
            <div
              className={[
                "scene-text relative z-10 px-6 lg:px-16 py-20 w-full lg:w-1/2 opacity-0",
                isEven ? "ml-auto" : "",
              ].join(" ")}
            >
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-rose-main mb-4">
                {scene.setting}
              </p>
              <blockquote className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-ink leading-tight italic max-w-md">
                « {scene.quote} »
              </blockquote>
              <p className="mt-4 font-serif text-xl text-ink-soft font-light">
                {scene.product.name}
              </p>
              <p className="mt-1 text-xs text-ink-soft/60">
                {scene.product.price.toLocaleString("fr-FR")} €
              </p>
              <div className="mt-8">
                <FillButton href={`/product/${scene.product.slug}`} variant="dark">
                  Voir la pièce
                </FillButton>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
