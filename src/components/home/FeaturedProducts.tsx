"use client";

// Featured products: curated selection with scroll-triggered stagger entrance.
import SplitTitle from "@/components/ui/SplitTitle";
import FillButton from "@/components/ui/FillButton";
import ProductGrid from "@/components/catalog/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
        <SplitTitle as="h2" className="text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-ink)]">
          Sélection du moment
        </SplitTitle>
        <FillButton href="/collection" variant="dark">
          Toute la collection
        </FillButton>
      </div>

      <ProductGrid products={featured} />
    </section>
  );
}
