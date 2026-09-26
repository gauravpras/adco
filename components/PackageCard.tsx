import type { Package } from "@/lib/content";
import { contactInterestHref } from "@/lib/content";
import { Button } from "@/components/Button";
import { Check } from "lucide-react";

type PackageCardProps = {
  pkg: Package;
  featured?: boolean;
};

export function PackageCard({ pkg, featured }: PackageCardProps) {
  if (pkg.isCustom) {
    return (
      <div className="flex h-full flex-col rounded-2xl border border-dashed border-ink/20 bg-ink/[0.02] p-8">
        <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
        <p className="mt-2 text-ink/70">{pkg.tagline}</p>
        <div className="mt-auto pt-8">
          <Button href="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-8 ${
        featured
          ? "border-adco-blue bg-ink text-white shadow-xl shadow-adco-blue/20"
          : "border-ink/10 bg-white"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-adco-blue">
        {featured ? "Popular starting point" : "Package"}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold">{pkg.name}</h3>
      <p className={`mt-2 text-sm ${featured ? "text-white/75" : "text-ink/65"}`}>
        {pkg.tagline}
      </p>
      <p
        className={`mt-4 font-display text-xl font-semibold ${
          featured ? "text-white" : "text-ink"
        }`}
      >
        {pkg.priceLabel}
      </p>
      <ul className="mt-6 flex-1 space-y-2">
        {pkg.includes.map((item) => (
          <li
            key={item}
            className={`flex gap-2 text-sm ${
              featured ? "text-white/80" : "text-ink/70"
            }`}
          >
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                featured ? "text-growth-green" : "text-adco-blue"
              }`}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
      <p
        className={`mt-4 text-xs ${
          featured ? "text-white/60" : "text-ink/50"
        }`}
      >
        Best for: {pkg.bestFor}
      </p>
      <div className="mt-6">
        <Button
          href={contactInterestHref(pkg.slug)}
          variant={featured ? "primary" : "secondary"}
        >
          Enquire about this package
        </Button>
      </div>
    </div>
  );
}
