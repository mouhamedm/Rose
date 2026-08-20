"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";

interface FillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "dark" | "outline" | "rose";
  className?: string;
  type?: "button" | "submit";
  id?: string;
}

export default function FillButton({
  children,
  href,
  onClick,
  variant = "dark",
  className = "",
  type = "button",
  id,
}: FillButtonProps) {
  const fillRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const variantStyles: Record<string, { base: string; fillBg: string; textHover: string }> = {
    dark: {
      base: "border border-[var(--color-ink)] text-[var(--color-ink)]",
      fillBg: "bg-[var(--color-rose-main)]",
      textHover: "group-hover:text-white",
    },
    rose: {
      base: "border border-[var(--color-rose-main)] text-[var(--color-rose-main)]",
      fillBg: "bg-[var(--color-rose-main)]",
      textHover: "group-hover:text-white",
    },
    outline: {
      base: "border border-white text-white",
      fillBg: "bg-white",
      textHover: "group-hover:text-[var(--color-ink)]",
    },
  };

  const { base, fillBg } = variantStyles[variant];

  const onMouseEnter = () => {
    const fill = fillRef.current;
    const text = textRef.current;
    if (!fill) return;
    gsap.to(fill, { scaleY: 1, transformOrigin: "bottom", duration: 0.45, ease: "power2.out" });
    if (text) gsap.to(text, { color: variant === "outline" ? "#100d14" : "#ffffff", duration: 0.2 });
  };

  const onMouseLeave = () => {
    const fill = fillRef.current;
    const text = textRef.current;
    if (!fill) return;
    gsap.to(fill, { scaleY: 0, transformOrigin: "bottom", duration: 0.4, ease: "power2.in" });
    if (text) gsap.to(text, { color: "", duration: 0.2 });
  };

  const sharedClassName = [
    "group relative inline-flex items-center justify-center gap-2",
    "px-8 py-3.5 overflow-hidden",
    "text-[0.7rem] tracking-[0.2em] uppercase font-sans font-medium",
    "transition-colors duration-0",
    base,
    className,
  ].join(" ");

  const inner = (
    <>
      <span
        ref={fillRef}
        aria-hidden="true"
        className={["absolute inset-0 z-0 scale-y-0", fillBg].join(" ")}
        style={{ transformOrigin: "bottom" }}
      />
      <span
        ref={textRef}
        className="relative z-10"
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        id={id}
        className={sharedClassName}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      id={id}
      className={sharedClassName}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {inner}
    </button>
  );
}
