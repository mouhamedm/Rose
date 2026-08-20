"use client";

// Navbar: editorial style with centered logo.
// Becomes opaque after 80px of scroll; transparent at top over hero sections.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "À propos" },
];

const navLinksSub = [
  { href: "/contact", label: "Contact" },
  { href: "/favorites", label: "Favoris" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-based background transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (deferred to avoid setState-in-effect lint error)
  useEffect(() => {
    queueMicrotask(() => setMenuOpen(false));
  }, [pathname]);

  // Entrance animation on mount
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    gsap.fromTo(
      nav,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      <header
        ref={navRef}
        style={{ opacity: 0 }}
        className={[
          "fixed top-0 left-0 right-0 z-[500] transition-all duration-500",
          scrolled || !isHome
            ? "bg-[var(--color-cream)] border-b border-[var(--color-rose-soft)] shadow-sm"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Left navigation links (desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-200",
                    pathname === link.href
                      ? "text-[var(--color-rose-main)]"
                      : "text-[var(--color-ink-soft)] hover:text-[var(--color-rose-main)]",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Centered logo (desktop) / Left logo (mobile) */}
            <Link
              href="/"
              className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 font-serif text-2xl lg:text-3xl font-light tracking-[0.25em] text-[var(--color-ink)] hover:text-[var(--color-rose-main)] transition-colors duration-300"
            >
              ROSÉ
            </Link>

            {/* Right links (desktop) */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
              {navLinksSub.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-200",
                    pathname === link.href
                      ? "text-[var(--color-rose-main)]"
                      : "text-[var(--color-ink-soft)] hover:text-[var(--color-rose-main)]",
                    link.href === "/favorites" ? "flex items-center gap-1.5" : "",
                  ].join(" ")}
                >
                  {link.href === "/favorites" && <Heart size={13} strokeWidth={1.5} />}
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden ml-auto text-[var(--color-ink)] p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-[499] bg-[var(--color-cream)] flex flex-col items-center justify-center transition-all duration-500 lg:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <nav className="flex flex-col items-center gap-8">
          {[...navLinks, ...navLinksSub].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-4xl font-light tracking-widest text-[var(--color-ink)] hover:text-[var(--color-rose-main)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
