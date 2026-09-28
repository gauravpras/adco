import type { Package } from "@/lib/content";
import { bookingUrl, getPackagePrice, getPackagePriceSubline } from "@/lib/content";
import { LinkArrow } from "@/components/LinkArrow";
import type { BillingPeriod } from "@/components/PricingToggle";
import { Check } from "lucide-react";

type PackageCardProps = {
  pkg: Package;
  featured?: boolean;
  billing?: BillingPeriod;
};

export function PackageCard({ pkg, featured, billing = "monthly" }: PackageCardProps) {
  const isFeatured = featured ?? pkg.isMostPopular;
  const price = getPackagePrice(pkg, billing);
  const priceSubline = getPackagePriceSubline(pkg, billing);
  if (pkg.isCustom) {
    return (
      <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-adco-purple p-8 text-white shadow-lg shadow-adco-purple/20">
        <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
        <p className="mt-2 text-white/85">{pkg.tagline}</p>
        <div className="mt-auto pt-8">
          <LinkArrow href={bookingUrl} label="Get in Touch" variant="light" accent="red" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-full flex-col border p-8 ${
        isFeatured
          ? "border-ink bg-ink text-white shadow-2xl"
          : "rounded-2xl border-ink/10 bg-white"
      }`}
    >
      {isFeatured ? <span className="corner-bracket" aria-hidden /> : null}
      <p
        className={`text-xs font-semibold uppercase tracking-wider ${
          isFeatured ? "text-signal-red" : "text-adco-blue"
        }`}
      >
        {isFeatured ? "Most popular" : "Package"}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold">{pkg.name}</h3>
      <p className={`mt-2 text-sm ${isFeatured ? "text-white/75" : "text-ink/65"}`}>
        {pkg.tagline}
      </p>
      <p
        className={`mt-4 font-display text-xl font-semibold ${
          isFeatured ? "text-white" : "text-ink"
        }`}
      >
        {price}
      </p>
      {priceSubline ? (
        <p
          className={`mt-1 text-xs ${
            isFeatured ? "text-white/60" : "text-ink/50"
          }`}
        >
          {priceSubline}
        </p>
      ) : null}
      <ul className="mt-6 flex-1 space-y-2">
        {pkg.includes.map((item) => (
          <li
            key={item}
            className={`flex gap-2 text-sm ${
              isFeatured ? "text-white/80" : "text-ink/70"
            }`}
          >
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                isFeatured ? "text-growth-green" : "text-adco-blue"
              }`}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
      <p
        className={`mt-4 text-xs ${
          isFeatured ? "text-white/60" : "text-ink/50"
        }`}
      >
        Best for: {pkg.bestFor}
      </p>
      <div className="mt-6">
        <LinkArrow
          href={bookingUrl}
          label="Choose this plan"
          variant={isFeatured ? "light" : "dark"}
        />
      </div>
    </div>
  );
}
