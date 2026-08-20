import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductsByCategory } from "@/data/products";
import { getProductBySlug } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductGrid from "@/components/catalog/ProductGrid";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/product/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | ROSÉ`,
    description: product.description,
  };
}

export default async function ProductPage(props: PageProps<"/product/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  // Related products: same category, excluding current
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-24 lg:pt-32">
      {/* Breadcrumb */}
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-8">
        <nav className="flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-[var(--color-ink-soft)]/50">
          <Link href="/" className="hover:text-[var(--color-rose-main)] transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/collection" className="hover:text-[var(--color-rose-main)] transition-colors">
            Collection
          </Link>
          <span>/</span>
          <Link
            href={`/collection/${product.category}`}
            className="hover:text-[var(--color-rose-main)] transition-colors"
          >
            {product.category.replace("-", " ")}
          </Link>
          <span>/</span>
          <span className="text-[var(--color-ink)]">{product.name}</span>
        </nav>
      </div>

      {/* Main product layout: gallery + info */}
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-24 px-6 lg:px-12 max-w-[1400px] mx-auto pb-24">
          <div className="h-px bg-[var(--color-rose-soft)] mb-12" />
          <h2 className="font-serif text-2xl lg:text-3xl font-light text-[var(--color-ink)] tracking-wide mb-10">
            Vous aimerez aussi
          </h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}
