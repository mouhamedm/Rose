"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { registerGSAPPlugins } from "@/lib/gsap";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";
import FillButton from "@/components/ui/FillButton";
import { categories } from "@/data/categories";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { toggle, isFavorite } = useFavorites();
  const heartRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isFav = isFavorite(product.id);

  const category = categories.find((c) => c.slug === product.category);

  useEffect(() => {
    registerGSAPPlugins();
    const panel = panelRef.current;
    if (!panel) return;
    gsap.fromTo(
      panel,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const handleFavorite = () => {
    toggle(product.id);
    const heart = heartRef.current;
    if (!heart) return;
    gsap.timeline()
      .to(heart, { scale: 1.35, duration: 0.15, ease: "power2.out" })
      .to(heart, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <div ref={panelRef} className="flex flex-col gap-6 opacity-0">
      {/* Category breadcrumb */}
      <p className="text-[0.65rem] tracking-[0.25em] uppercase text-rose-main">
        {category?.name ?? product.category}
      </p>

      {/* Product name */}
      <div>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-ink leading-tight tracking-wide">
          {product.name}
        </h1>
        {product.isNew && (
          <span className="inline-block mt-2 bg-rose-main text-white text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1">
            Nouveau
          </span>
        )}
      </div>

      {/* Price */}
      <p className="font-sans text-2xl font-light text-ink">
        {product.price.toLocaleString("fr-FR")} €
      </p>

      {/* Divider */}
      <div className="h-px bg-rose-soft" />

      {/* Description */}
      <p className="text-ink-soft text-sm leading-relaxed">
        {product.description}
      </p>

      {/* Details list */}
      {product.details && product.details.length > 0 && (
        <ul className="space-y-1.5">
          {product.details.map((detail) => (
            <li
              key={detail}
              className="flex items-center gap-2 text-xs text-ink-soft"
            >
              <span className="w-1 h-1 rounded-full bg-rose-main" />
              {detail}
            </li>
          ))}
        </ul>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <FillButton href="/contact" variant="dark" className="flex-1 justify-center">
          Demander en boutique
        </FillButton>

        {/* Favorite toggle */}
        <button
          ref={heartRef}
          onClick={handleFavorite}
          aria-label={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
          className={[
            "w-12 h-12 flex items-center justify-center border transition-all duration-300",
            isFav
              ? "border-rose-main bg-rose-blush"
              : "border-ink-soft/30 hover:border-rose-main",
          ].join(" ")}
        >
          <Heart
            size={18}
            strokeWidth={1.5}
            fill={isFav ? "var(--color-rose-main)" : "none"}
            color={isFav ? "var(--color-rose-main)" : "var(--color-ink-soft)"}
          />
        </button>
      </div>

      {/* Shipping note */}
      <p className="text-[0.65rem] tracking-wide text-ink-soft/50">
        Livraison offerte dès 150 € · Retours gratuits sous 14 jours
      </p>
    </div>
  );
}
