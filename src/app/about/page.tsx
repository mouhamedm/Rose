import Image from "next/image";
import type { Metadata } from "next";
import SplitTitle from "@/components/ui/SplitTitle";
import FillButton from "@/components/ui/FillButton";

export const metadata: Metadata = {
  title: "À propos | ROSÉ",
  description:
    "Découvrez l'histoire de la maison ROSÉ, notre vision de la mode féminine et nos engagements.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 overflow-hidden">
      {/* Hero editorial */}
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-rose-main)] mb-4">
              La maison ROSÉ
            </p>
            <SplitTitle as="h1" className="text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--color-ink)]">
              Une vision de l&apos;élégance au féminin
            </SplitTitle>
            <p className="mt-6 text-[var(--color-ink-soft)] text-sm leading-relaxed max-w-md">
              ROSÉ est née d&apos;une conviction simple : la mode féminine devrait
              allier confort, élégance et intemporalité. Chaque pièce est pensée
              pour la femme contemporaine qui refuse de choisir entre style et liberté.
            </p>
            <div className="mt-10">
              <FillButton href="/collection" variant="rose">
                Découvrir la collection
              </FillButton>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/products/robes-longues/robe-vienne-v2.png"
              alt="L'univers ROSÉ — Robe Vienne"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-[var(--color-rose-blush)] py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SplitTitle as="h2" className="text-[clamp(2rem,4vw,3rem)] text-[var(--color-ink)] mb-16 text-center">
            Nos engagements
          </SplitTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: "01",
                title: "Matières nobles",
                desc: "Soies, crêpes, velours — nous sélectionnons des matières d'exception pour chaque création.",
              },
              {
                number: "02",
                title: "Coupes intemporelles",
                desc: "Des silhouettes pensées pour traverser les tendances et accompagner chaque moment de votre vie.",
              },
              {
                number: "03",
                title: "Production responsable",
                desc: "Des ateliers partenaires soigneusement sélectionnés, engagés dans une démarche éthique et durable.",
              },
            ].map((item) => (
              <div key={item.number} className="flex flex-col gap-4">
                <span className="font-serif text-5xl font-light text-[var(--color-rose-soft)]">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
