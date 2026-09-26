import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  contactHero,
  contactInfo,
  processSteps,
  siteMeta,
} from "@/lib/content";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free digital audit with AdCo Group — Bangkok digital marketing and onboarding.",
  openGraph: {
    title: `Contact | ${siteMeta.name}`,
    description: contactHero.headline,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-ink/10 bg-ink text-white" variant="dark">
        <FadeIn>
          <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            {contactHero.headline}
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Tell us about your business and what you&apos;re trying to build.
            We&apos;ll recommend a clear next step — not a one-size-fits-all
            pitch.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold">Send a message</h2>
            <div className="mt-8">
              <Suspense
                fallback={
                  <p className="text-ink/60">Loading form…</p>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <aside className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold">Contact</h2>
              <ul className="mt-6 space-y-4 text-ink/75">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-adco-blue" aria-hidden />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-adco-blue"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-adco-blue" aria-hidden />
                  <span>{contactInfo.phone}</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-adco-blue" aria-hidden />
                  <span>{contactInfo.location}</span>
                </li>
              </ul>
              <p className="mt-6 text-sm">
                <a
                  href={siteMeta.instagramUrl}
                  className="text-adco-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteMeta.instagram}
                </a>
                {" · "}
                <a
                  href={siteMeta.linktreeUrl}
                  className="text-adco-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linktr.ee/adcogroup
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">
                What happens next
              </h2>
              <ol className="mt-6 space-y-4">
                {processSteps.map((step) => (
                  <li
                    key={step.number}
                    className="flex gap-4 border-l-2 border-adco-blue/30 pl-4"
                  >
                    <span className="font-display text-sm font-bold text-adco-blue">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-display font-semibold">{step.title}</p>
                      <p className="text-sm text-ink/65">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
