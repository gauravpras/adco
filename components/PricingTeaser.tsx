import { LinkArrow } from "@/components/LinkArrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { packages, pricingTeaser } from "@/lib/content";
import Link from "next/link";

export function PricingTeaser() {
  const teaserPackages = pricingTeaser.packageSlugs
    .map((slug) => packages.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="bg-canvas py-16 md:py-24" aria-labelledby="pricing-teaser-heading">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="pricing-teaser-heading"
            className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight"
          >
            Packages that scale with you
          </h2>
          <LinkArrow href={pricingTeaser.cta.href} label={pricingTeaser.cta.label} />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teaserPackages.map((pkg) => {
            const featured = pkg.isMostPopular;
            return (
              <FadeIn key={pkg.id}>
                <article
                  className={`flex h-full flex-col rounded-2xl border p-8 transition hover:shadow-lg ${
                    featured
                      ? "border-ink bg-ink text-white shadow-xl"
                      : "border-ink/10 bg-white"
                  }`}
                >
                  {featured ? (
                    <p className="text-xs font-semibold uppercase tracking-wider text-signal-red">
                      Most popular
                    </p>
                  ) : (
                    <p className="text-xs font-semibold uppercase tracking-wider text-adco-blue">
                      Package
                    </p>
                  )}
                  <h3 className="mt-2 font-display text-2xl font-bold">{pkg.name}</h3>
                  <p
                    className={`mt-2 flex-1 text-sm ${
                      featured ? "text-white/75" : "text-ink/65"
                    }`}
                  >
                    {pkg.teaserOneLiner ?? pkg.tagline}
                  </p>
                  <p
                    className={`mt-6 font-display text-lg font-semibold ${
                      featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {pkg.priceLabel}
                  </p>
                  <Link
                    href={`/solutions#packages-heading`}
                    className={`mt-4 text-sm font-semibold underline-offset-4 hover:underline ${
                      featured ? "text-white" : "text-adco-blue"
                    }`}
                  >
                    View details →
                  </Link>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
