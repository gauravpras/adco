import { BloomHeroObserver } from "@/components/home/HomeHeroObserver";
import { BloomSurface } from "@/components/BloomSurface";
import { LinkArrow } from "@/components/LinkArrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { SolutionsCatalog } from "@/components/SolutionsCatalog";
import { siteMeta, solutionsClosingCta, solutionsHero } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "À la carte digital services and bundled packages for Bangkok businesses, websites, SEO, social, ads, and more.",
  openGraph: {
    title: `Solutions | ${siteMeta.name}`,
    description: solutionsHero.subhead,
    url: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <BloomHeroObserver heroId="page-hero" />
      <section
        id="page-hero"
        className="relative overflow-hidden pt-28 text-white md:pt-32"
      >
        <BloomSurface variant="solutions" />
        <div className="relative z-10 mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Solutions
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-tight">
              {solutionsHero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              {solutionsHero.subhead}
            </p>
          </FadeIn>
        </div>
      </section>

      <SolutionsCatalog />

      <section className="bg-ink/85 py-16 text-white backdrop-blur-sm md:py-20">
        <div className="mx-auto flex max-w-content flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            {solutionsClosingCta.headline}
          </h2>
          <LinkArrow
            href={solutionsClosingCta.button.href}
            label={solutionsClosingCta.button.label}
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
