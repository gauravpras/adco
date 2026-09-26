import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { legalStubs, siteMeta } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: legalStubs.privacy.title,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section>
      <h1 className="font-display text-4xl font-bold">
        {legalStubs.privacy.title}
      </h1>
      <p className="mt-6 max-w-2xl text-ink/70">{legalStubs.privacy.body}</p>
      <Button href="/contact" variant="secondary" className="mt-8">
        Contact {siteMeta.shortName}
      </Button>
    </Section>
  );
}
