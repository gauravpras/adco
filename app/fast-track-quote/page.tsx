import { FastTrackQuoteWizard } from "@/components/fast-track/FastTrackQuoteWizard";
import { siteMeta } from "@/lib/content";
import type { Metadata } from "next";

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

export default function FastTrackQuotePage() {
  return <FastTrackQuoteWizard />;
}
