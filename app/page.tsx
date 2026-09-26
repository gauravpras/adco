import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LifecycleStepper } from "@/components/LifecycleStepper";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { ProcessRailSection } from "@/components/ProcessStep";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  faqItems,
  homeCtaBand,
  services,
  servicesPreviewCta,
  siteMeta,
  testimonials,
} from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteMeta.defaultTitle,
  description: siteMeta.defaultDescription,
  openGraph: {
    title: siteMeta.defaultTitle,
    description: siteMeta.defaultDescription,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />

      <Section ariaLabelledby="lifecycle-heading">
        <FadeIn>
          <h2
            id="lifecycle-heading"
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            The digital lifecycle
          </h2>
        </FadeIn>
        <div className="mt-8">
          <LifecycleStepper />
        </div>
      </Section>

      <Section className="bg-ink/[0.02]" ariaLabelledby="services-heading">
        <FadeIn>
          <h2
            id="services-heading"
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            What AdCo does
          </h2>
          <p className="mt-3 max-w-2xl text-ink/65">
            Ten standalone services — pick one or combine them into a roadmap
            built for your business.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </div>
        <div className="mt-10">
          <Button href={servicesPreviewCta.href} variant="secondary">
            {servicesPreviewCta.label}
          </Button>
        </div>
      </Section>

      <Section ariaLabelledby="process-heading">
        <ProcessRailSection />
      </Section>

      <Section variant="dark" ariaLabelledby="stories-heading">
        <FadeIn>
          <h2
            id="stories-heading"
            className="font-display text-3xl font-bold tracking-tight md:text-5xl"
          >
            Success stories
          </h2>
          <p className="mt-3 max-w-xl text-white/65">
            Results from Bangkok businesses we&apos;ve partnered with.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Section>

      <Section ariaLabelledby="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <FadeIn>
            <h2
              id="faq-heading"
              className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              FAQ
            </h2>
          </FadeIn>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTABand
        headline={homeCtaBand.headline}
        buttonLabel={homeCtaBand.button.label}
        buttonHref={homeCtaBand.button.href}
      />
    </>
  );
}
