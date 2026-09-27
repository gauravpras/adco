import { CTABand } from "@/components/CTABand";
import { homeCtaBand } from "@/lib/content";

export function ContactCTA() {
  return (
    <CTABand
      headline={homeCtaBand.headline}
      buttonLabel={homeCtaBand.button.label}
      buttonHref={homeCtaBand.button.href}
    />
  );
}
