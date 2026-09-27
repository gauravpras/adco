import { ContactCTA } from "@/components/ContactCTA";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeHeroObserver } from "@/components/home/HomeHeroObserver";
import { ProcessSteps } from "@/components/ProcessSteps";
import { StatCounter } from "@/components/StatCounter";
import { LocalBusinessesSection } from "@/components/ClientLogoMarquee";
import { TeamStrip } from "@/components/TeamStrip";
import { siteMeta } from "@/lib/content";
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
      <HomeHeroObserver />
      <Hero />
      <StatCounter />
      <FeatureShowcase />
      <TeamStrip />
      <ProcessSteps />
      <LocalBusinessesSection />
      <ContactCTA />
      <Footer embedded />
    </>
  );
}
