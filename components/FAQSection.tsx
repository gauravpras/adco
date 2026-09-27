import { FAQAccordion } from "@/components/FAQAccordion";
import { LinkArrow } from "@/components/LinkArrow";
import { faqItems, faqSection } from "@/lib/content";
import { FadeIn } from "@/components/motion/FadeIn";

export function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content rounded-3xl border border-ink/10 bg-white/80 px-5 py-12 backdrop-blur-sm md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <FadeIn>
            <h2
              id="faq-heading"
              className="font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-tighter"
            >
              FAQ
            </h2>
            <p className="mt-6 max-w-sm text-ink/65">{faqSection.subhead}</p>
            <div className="mt-8">
              <LinkArrow href={faqSection.askCta.href} label={faqSection.askCta.label} />
            </div>
          </FadeIn>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
