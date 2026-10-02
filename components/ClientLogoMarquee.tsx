"use client";

import { clientLogos, localBusinessesSection } from "@/lib/content";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "next/image";

function ClientLogoItem({
  label,
  logoSrc,
  width,
  height,
  href,
}: {
  label: string;
  logoSrc: string;
  width: number;
  height: number;
  href?: string;
}) {
  const image = (
    <Image
      src={logoSrc}
      alt={label}
      width={width}
      height={height}
      className="h-14 w-auto md:h-16"
    />
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex shrink-0 items-center justify-center transition opacity-90 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-label={`${label} (opens in new tab)`}
      >
        {image}
      </a>
    );
  }

  return (
    <div className="flex shrink-0 items-center justify-center" aria-label={label}>
      {image}
    </div>
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

        <FadeIn className="mt-12">
          <div className="logo-marquee-mask overflow-hidden">
            <div className="logo-marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className="flex shrink-0 items-center gap-x-12 pr-12 md:gap-x-16 md:pr-16"
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {clientLogos.map((client) => (
                    <li key={`${copy}-${client.id}`}>
                      <ClientLogoItem
                        label={client.label}
                        logoSrc={client.logoSrc}
                        width={client.width}
                        height={client.height}
                        href={client.href}
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
