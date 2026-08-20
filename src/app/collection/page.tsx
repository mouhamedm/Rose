"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductGrid from "@/components/catalog/ProductGrid";
import CategoryFilter from "@/components/catalog/CategoryFilter";
import SplitTitle from "@/components/ui/SplitTitle";
import { CategorySlug } from "@/types";

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug | null>(null);

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="pt-32 lg:pt-40 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-rose-main)] mb-3">
          La collection
        </p>
        <SplitTitle as="h1" className="text-[clamp(2.5rem,6vw,5rem)] text-[var(--color-ink)]">
          Toutes les pièces
        </SplitTitle>
        <p className="mt-4 text-[var(--color-ink-soft)] text-sm max-w-md leading-relaxed">
          {filtered.length} pièce{filtered.length > 1 ? "s" : ""} — des robes aux
          ensembles, chaque création ROSÉ est pensée pour sublimer votre féminité.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-10">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={(slug) => setActiveCategory(slug as CategorySlug | null)}
        />
      </div>

      {/* Grid */}
      <ProductGrid products={filtered} />
    </div>
  );
}
