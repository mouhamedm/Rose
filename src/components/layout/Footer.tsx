import Link from "next/link";

const footerLinks = {
  collection: [
    { href: "/collection/robes-courtes", label: "Robes Courtes" },
    { href: "/collection/robes-longues", label: "Robes Longues" },
    { href: "/collection/ensembles", label: "Ensembles" },
    { href: "/collection/nouveautes", label: "Nouveautés" },
  ],
  maison: [
    { href: "/about", label: "Notre histoire" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-surface text-white pt-20 pb-10 px-6 lg:px-12 mt-auto">
      <div className="max-w-350 mx-auto">
        {/* Logo + tagline + links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-3xl font-light tracking-[0.25em] text-white hover:text-rose-soft transition-colors"
            >
              ROSÉ
            </Link>
            <p className="mt-4 text-[0.8rem] text-white/50 leading-relaxed max-w-xs">
              Prêt-à-porter féminin, créé pour la femme contemporaine qui cultive
              l&apos;élégance au quotidien.
            </p>
          </div>

          {/* Collection */}
          <div>
            <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-rose-soft mb-5">
              Collection
            </h3>
            <ul className="space-y-3">
              {footerLinks.collection.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Maison */}
          <div>
            <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-rose-soft mb-5">
              La Maison
            </h3>
            <ul className="space-y-3">
              {footerLinks.maison.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] text-white/30">
          <span>© {new Date().getFullYear()} ROSÉ | Tous droits réservés</span>
          <span className="tracking-widest uppercase">Élégance · Féminité · Raffinement</span>
        </div>
      </div>
    </footer>
  );
}
