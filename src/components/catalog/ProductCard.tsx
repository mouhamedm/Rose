"use client";

// ProductCard: displays product image, name, price, category badge.
// Fill/wipe hover effect reveals info overlay from the bottom.
// Heart button toggles favorite state with a pulse animation.
import { useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";

interface ProductCardProps {
  product: Product;
  index?: number; // used for stagger reference
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { toggle, isFavorite } = useFavorites();
  const fillRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLButtonElement>(null);
  const isFav = isFavorite(product.id);

  // Fill wipe: info overlay slides up from bottom
  const onMouseEnter = () => {
    gsap.to(fillRef.current, {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(fillRef.current, {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 0.4,
      ease: "power2.in",
    });
  };

  // Heart pulse animation on click
  const handleFavorite = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
    const heart = heartRef.current;
    if (!heart) return;
    gsap.timeline()
      .to(heart, { scale: 1.4, duration: 0.15, ease: "power2.out" })
      .to(heart, { scale: 1, duration: 0.25, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <article
      className="product-card group relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-index={index}
    >
      <Link href={`/product/${product.slug}`} className="block">
        {/* Image container with subtle border */}
        <div className="relative overflow-hidden bg-[var(--color-rose-blush)] aspect-[3/4] border border-[var(--color-ink-soft)]/25 group-hover:border-[var(--color-rose-main)]/50 transition-colors duration-300">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* NEW badge */}
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-[var(--color-rose-main)] text-white text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1 z-10">
              Nouveau
            </span>
          )}

          {/* Favorite button */}
          <button
            ref={heartRef}
            onClick={handleFavorite}
            aria-label={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-10"
          >
            <Heart
              size={15}
              strokeWidth={1.5}
              fill={isFav ? "var(--color-rose-main)" : "none"}
              color={isFav ? "var(--color-rose-main)" : "#ffffff"}
            />
          </button>

          {/* Fill/wipe overlay — sleek bottom banner with high-contrast action text */}
          <div
            ref={fillRef}
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-12 bg-[var(--color-rose-main)] scale-y-0 origin-bottom flex items-center justify-between px-4 z-10"
          >
            <span className="text-white text-[0.65rem] tracking-[0.2em] uppercase font-sans font-medium">
              Découvrir le produit
            </span>
            <span className="text-white text-xs font-light">→</span>
          </div>
        </div>

        {/* Card info below image */}
        <div className="pt-3 pb-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-serif text-base font-light text-[var(--color-ink)] tracking-wide">
                {product.name}
              </h3>
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[var(--color-ink-soft)]/60 mt-0.5">
                {product.category.replace("-", " ")}
              </p>
            </div>
            <span className="font-sans text-sm text-[var(--color-ink-soft)] whitespace-nowrap">
              {product.price.toLocaleString("fr-FR")} €
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
