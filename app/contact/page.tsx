import { BloomHeroObserver } from "@/components/home/HomeHeroObserver";
import { BloomSurface } from "@/components/BloomSurface";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  contactHero,
  contactInfo,
  siteMeta,
} from "@/lib/content";
import { Clock, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free digital audit with AdCo Group, Bangkok digital marketing and onboarding.",
  openGraph: {
    title: `Contact | ${siteMeta.name}`,
    description: contactHero.subhead,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BloomHeroObserver heroId="page-hero" />
      <section
        id="page-hero"
        className="relative overflow-hidden pt-28 text-white md:pt-32"
      >
        <BloomSurface variant="contact" />
        <div className="relative z-10 mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Contact
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-tight">
              {contactHero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">{contactHero.subhead}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-content gap-12 rounded-3xl border border-ink/10 bg-white/75 px-5 py-12 backdrop-blur-sm lg:grid-cols-[1fr_1.1fr] lg:gap-16 md:px-8">
          <aside className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold">Get in touch</h2>
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
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-adco-blue" aria-hidden />
                  <span>{contactInfo.location}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-adco-blue" aria-hidden />
                  <span>{contactInfo.officeHours}</span>
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
              </p>
            </div>
          </aside>

          <div>
            <h2 className="font-display text-2xl font-bold">Send a message</h2>
            <div className="mt-8">
              <Suspense fallback={<p className="text-ink/60">Loading form…</p>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
