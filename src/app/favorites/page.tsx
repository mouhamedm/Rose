"use client";

import { products } from "@/data/products";
import { useFavorites } from "@/hooks/useFavorites";
import ProductGrid from "@/components/catalog/ProductGrid";
import FillButton from "@/components/ui/FillButton";
import SplitTitle from "@/components/ui/SplitTitle";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="pt-32 lg:pt-40 pb-24 px-6 lg:px-12 max-w-350 mx-auto min-h-screen">
      <div className="mb-12">
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-rose-main mb-3">
          Mes favoris
        </p>
        <SplitTitle as="h1" className="text-[clamp(2.5rem,6vw,5rem)] text-ink">
          Mes coups de cœur
        </SplitTitle>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 gap-6 text-center">
          <Heart size={40} strokeWidth={1} className="text-rose-soft" />
          <p className="font-serif text-2xl font-light text-ink-soft">
            Aucun favori pour l&apos;instant
          </p>
          <p className="text-sm text-ink-soft/60 max-w-xs">
            Parcourez la collection et cliquez sur le cœur pour sauvegarder vos pièces préférées.
          </p>
          <FillButton href="/collection" variant="dark">
            Découvrir la collection
          </FillButton>
        </div>
      ) : (
        <>
          <p className="text-sm text-ink-soft mb-10">
            {favoriteProducts.length} pièce{favoriteProducts.length > 1 ? "s" : ""} sauvegardée
            {favoriteProducts.length > 1 ? "s" : ""}
          </p>
          <ProductGrid products={favoriteProducts} />
        </>
      )}
    </div>
  );
}
