import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStatement from "@/components/home/BrandStatement";

export const metadata: Metadata = {
  title: "ROSÉ | Prêt-à-porter féminin",
  description:
    "Découvrez la collection ROSÉ : robes courtes, robes longues, ensembles et nouveautés. Un univers chic, doux et féminin.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesGrid />
      <FeaturedProducts />
      <BrandStatement />
    </>
  );
}
