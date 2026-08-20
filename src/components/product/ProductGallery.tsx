"use client";

// ProductGallery: primary image with thumbnail strip.
// Click thumbnails to swap the main image with a smooth crossfade.
import { useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  const switchImage = (index: number) => {
    if (index === activeIndex) return;
    const main = mainRef.current;
    if (!main) {
      setActiveIndex(index);
      return;
    }
    // Crossfade: fade out → swap → fade in
    gsap.to(main, {
      opacity: 0,
      duration: 0.25,
      ease: "power1.in",
      onComplete: () => {
        setActiveIndex(index);
        gsap.to(main, { opacity: 1, duration: 0.35, ease: "power1.out" });
      },
    });
  };

  return (
    <div className="flex flex-col gap-3 lg:sticky lg:top-24">
      {/* Main image */}
      <div
        ref={mainRef}
        className="relative overflow-hidden bg-[var(--color-rose-blush)] aspect-[3/4]"
      >
        <Image
          src={images[activeIndex]}
          alt={`${productName} — vue ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => switchImage(i)}
              aria-label={`Vue ${i + 1}`}
              className={[
                "relative overflow-hidden flex-1 aspect-square transition-all duration-300",
                i === activeIndex
                  ? "ring-1 ring-[var(--color-rose-main)] opacity-100"
                  : "opacity-50 hover:opacity-80",
              ].join(" ")}
            >
              <Image src={src} alt={`Vue ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
