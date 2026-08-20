"use client";

import { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  active: string | null;
  onChange: (slug: string | null) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* All products button */}
      <button
        onClick={() => onChange(null)}
        className={[
          "text-[0.65rem] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300",
          !active
            ? "bg-[var(--color-rose-main)] text-white border-[var(--color-rose-main)]"
            : "border-[var(--color-ink-soft)]/40 text-[var(--color-ink-soft)] hover:border-[var(--color-rose-main)] hover:text-[var(--color-rose-main)]",
        ].join(" ")}
      >
        Tout
      </button>

      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className={[
            "text-[0.65rem] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300",
            active === cat.slug
              ? "bg-[var(--color-rose-main)] text-white border-[var(--color-rose-main)]"
              : "border-[var(--color-ink-soft)]/40 text-[var(--color-ink-soft)] hover:border-[var(--color-rose-main)] hover:text-[var(--color-rose-main)]",
          ].join(" ")}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
