import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductGrid from "@/components/catalog/ProductGrid";
import SplitTitle from "@/components/ui/SplitTitle";
import type { Metadata } from "next";

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata(
  props: PageProps<"/collection/[category]">
): Promise<Metadata> {
  const { category } = await props.params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} | ROSÉ`,
    description: cat.description,
  };
}

export default async function CategoryPage(
  props: PageProps<"/collection/[category]">
) {
  const { category } = await props.params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) notFound();

  const categoryProducts = getProductsByCategory(category);

  return (
    <div className="pt-32 lg:pt-40 pb-24 px-6 lg:px-12 max-w-350 mx-auto">
      {/* Breadcrumb */}
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-rose-main mb-3">
        Collection / {cat.name}
      </p>

      <SplitTitle as="h1" className="text-[clamp(2.5rem,6vw,5rem)] text-ink">
        {cat.name}
      </SplitTitle>

      <p className="mt-4 text-ink-soft text-sm max-w-md leading-relaxed mb-12">
        {cat.description} — {categoryProducts.length} pièce
        {categoryProducts.length > 1 ? "s" : ""}
      </p>

      <ProductGrid products={categoryProducts} />
    </div>
  );
}
