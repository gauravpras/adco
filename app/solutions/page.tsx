import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { PackageCard } from "@/components/PackageCard";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  contactInterestHref,
  packages,
  services,
  siteMeta,
  solutionsClosingCta,
  solutionsHero,
} from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "À la carte digital services and bundled packages for Bangkok businesses — websites, SEO, social, ads, and more.",
  openGraph: {
    title: `Solutions | ${siteMeta.name}`,
    description: solutionsHero.subhead,
    url: "/solutions",
  },
};

export default function SolutionsPage() {
  const standardPackages = packages.filter((p) => !p.isCustom);
  const customPackage = packages.find((p) => p.isCustom);

  return (
    <>
      <Section className="border-b border-ink/10 bg-ink text-white" variant="dark">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Solutions
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {solutionsHero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            {solutionsHero.subhead}
          </p>
        </FadeIn>
      </Section>

      <Section ariaLabelledby="alacarte-heading">
        <FadeIn>
          <h2
            id="alacarte-heading"
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            À la carte
          </h2>
          <p className="mt-3 max-w-2xl text-ink/65">
            Every service can be purchased on its own — no package required.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} id={service.slug} className="scroll-mt-24">
              <ServiceCard service={service} />
              <div className="mt-4">
                <Button
                  href={contactInterestHref(service.slug)}
                  variant="secondary"
                  className="text-sm"
                >
                  Enquire about this service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ink/[0.02]" ariaLabelledby="packages-heading">
        <FadeIn>
          <h2
            id="packages-heading"
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            Packages
          </h2>
          <p className="mt-3 max-w-2xl text-ink/65">
            Starting frameworks — we customize scope and pricing to your
            situation. Ad spend for paid media is billed separately.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {standardPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} featured={index === 0} />
          ))}
        </div>
        {customPackage ? (
          <div className="mt-6">
            <PackageCard pkg={customPackage} />
          </div>
        ) : null}
      </Section>

      <CTABand
        headline={solutionsClosingCta.headline}
        buttonLabel={solutionsClosingCta.button.label}
        buttonHref={solutionsClosingCta.button.href}
      />
    </>
  );
}
