import { BloomHeroObserver } from "@/components/home/HomeHeroObserver";
import { BloomSurface } from "@/components/BloomSurface";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { bookingUrl, siteMeta } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fast-Track Quote",
  description:
    "Get an estimated price range for your website project with AdCo's Fast-Track Quote. No upfront payment.",
  openGraph: {
    title: `Fast-Track Quote | ${siteMeta.name}`,
    description:
      "Get an estimated price range for your website project with AdCo's Fast-Track Quote. No upfront payment.",
    url: "/fast-track-quote",
  },
};

const howItWorks = [
  {
    number: "01",
    title: "Share your details.",
    description:
      "Complete a short form about your business and the website you need.",
  },
  {
    number: "02",
    title: "Receive your estimate.",
    description:
      "Our AI-assisted system provides an indicative price range based on your requirements.",
  },
  {
    number: "03",
    title: "Discuss with an AdCo Associate.",
    description:
      "We confirm the scope on a discovery call, then issue a formal proposal and invoice.",
  },
] as const;

const pricingCommitments = [
  {
    title: "No hidden fees.",
    description:
      "The only additions to your quoted price are VAT and other applicable taxes. Any third-party costs, such as domains or hosting, are disclosed in your proposal in advance.",
  },
  {
    title: "Nothing to pay upfront.",
    description:
      "No payment is required until you have completed a discovery call with an AdCo Associate and a formal invoice has been issued for the scope and services you have agreed to.",
  },
  {
    title: "Estimates, not commitments.",
    description:
      "Your Fast-Track estimate is indicative and does not constitute a binding offer. Final pricing is confirmed in a written proposal following discovery.",
  },
] as const;

export default function FastTrackQuotePage() {
  return (
    <>
      <BloomHeroObserver heroId="page-hero" />
      <section
        id="page-hero"
        className="relative overflow-hidden pt-28 text-white md:pt-32"
      >
        <BloomSurface />
        <div className="relative z-10 mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
          <FadeIn>
            <Link
              href="/solutions"
              className="text-sm font-semibold text-white/75 transition-colors hover:text-white"
            >
              ← Back to Solutions
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Website Design &amp; Development
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-tight">
              Fast-Track Quote
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Get an estimated price range for your website in minutes, before
              you commit to anything.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content space-y-16 rounded-3xl border border-ink/10 bg-white/85 px-5 py-12 backdrop-blur-sm md:space-y-20 md:px-8 md:py-16">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              What is a Fast-Track Quote?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
              Fast-Track Quote is a quick way to receive an indicative price
              range for your website project. You tell us about your business
              and what you need built, and our AI-assisted estimating system
              prepares a preliminary estimate based on your requirements. It
              gives you a clear budget range up front, so you can plan with
              confidence before speaking with our team.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              How it works
            </h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {howItWorks.map((step) => (
                <li
                  key={step.number}
                  className="rounded-2xl border border-ink/10 bg-white p-6 md:p-7"
                >
                  <span className="font-display text-sm font-bold text-signal-red">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Our pricing commitment
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {pricingCommitments.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-ink/10 bg-white p-6 md:p-7"
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Start your estimate
            </h2>
            <div
              id="fast-track-form"
              className="mt-8 rounded-2xl border border-ink/10 bg-white p-6 md:p-8"
            >
              {/* TODO: Fast-Track Quote form goes here. */}
              <Button type="button" disabled>
                Start Your Estimate
              </Button>
              <p className="mt-3 max-w-xl text-sm text-ink/55">
                Our online estimate form is launching soon. In the meantime,
                speak with an AdCo Associate.
              </p>
              <div className="mt-6">
                <Button href={bookingUrl} variant="secondary">
                  Book a Discovery Call
                </Button>
              </div>
            </div>
            <p className="mt-4 text-xs text-ink/50">
              Information you submit is used to prepare your estimate and is
              handled in accordance with our{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:text-adco-blue"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
