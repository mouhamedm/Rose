"use client";

import { useState, FormEvent } from "react";
import SplitTitle from "@/components/ui/SplitTitle";
import FillButton from "@/components/ui/FillButton";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo: simulate form submission
    setSent(true);
  };

  return (
    <div className="pt-32 lg:pt-40 pb-24 px-6 lg:px-12 max-w-[900px] mx-auto min-h-screen">
      <div className="mb-12">
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-rose-main)] mb-3">
          Nous contacter
        </p>
        <SplitTitle as="h1" className="text-[clamp(2.5rem,6vw,5rem)] text-[var(--color-ink)]">
          Écrivez-nous
        </SplitTitle>
        <p className="mt-4 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-md">
          Une question sur une pièce, une demande spéciale, ou simplement
          l&apos;envie d&apos;en savoir plus sur la maison ROSÉ — nous sommes à votre écoute.
        </p>
      </div>

      {sent ? (
        <div className="py-20 text-center">
          <div className="w-12 h-px bg-[var(--color-rose-main)] mx-auto mb-8" />
          <p className="font-serif text-3xl font-light text-[var(--color-ink)]">
            Merci pour votre message.
          </p>
          <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
            Nous vous répondrons dans les 24 heures.
          </p>
          <div className="mt-8">
            <FillButton href="/" variant="dark">
              Retour à l&apos;accueil
            </FillButton>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-ink-soft)]"
              >
                Nom
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="border-b border-[var(--color-ink-soft)]/30 bg-transparent pb-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/40 outline-none focus:border-[var(--color-rose-main)] transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-ink-soft)]"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="votre@email.com"
                className="border-b border-[var(--color-ink-soft)]/30 bg-transparent pb-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/40 outline-none focus:border-[var(--color-rose-main)] transition-colors duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-subject"
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-ink-soft)]"
            >
              Sujet
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Votre sujet"
              className="border-b border-[var(--color-ink-soft)]/30 bg-transparent pb-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/40 outline-none focus:border-[var(--color-rose-main)] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-ink-soft)]"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Votre message..."
              className="border-b border-[var(--color-ink-soft)]/30 bg-transparent pb-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/40 outline-none focus:border-[var(--color-rose-main)] transition-colors duration-200 resize-none"
            />
          </div>

          <div className="pt-4">
            <FillButton type="submit" variant="dark">
              Envoyer le message
            </FillButton>
          </div>
        </form>
      )}
    </div>
  );
}
