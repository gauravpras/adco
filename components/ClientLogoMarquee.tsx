"use client";

import { clientLogoPlaceholders, localBusinessesSection } from "@/lib/content";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "next/image";

function LogoSlot({
  label,
  logoSrc,
}: {
  label: string;
  logoSrc?: string;
}) {
  return (
    <li
      className="flex h-14 w-[140px] shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4"
      aria-label={label}
    >
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt=""
          width={120}
          height={48}
          className="max-h-10 w-auto object-contain"
        />
      ) : (
        <span className="text-center text-xs font-semibold uppercase tracking-wider text-white/70">
          {label}
        </span>
      )}
    </li>
  );
}

function MarqueeTrack() {
  const items = [...clientLogoPlaceholders, ...clientLogoPlaceholders];

  return (
    <ul className="logo-marquee-track flex w-max items-center gap-6 pr-6">
      {items.map((client, index) => (
        <LogoSlot
          key={`${client.id}-${index}`}
          label={client.label}
          logoSrc={client.logoSrc}
        />
      ))}
    </ul>
  );
}

export function LocalBusinessesSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-adco-purple py-16 text-white md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-tight text-white">
            {localBusinessesSection.title}
          </h2>
          <p className="mt-4 text-white/80">{localBusinessesSection.subhead}</p>
        </FadeIn>
      </div>

      <div className="logo-marquee-mask relative mt-12 w-full">
        <div className="logo-marquee flex overflow-hidden">
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
