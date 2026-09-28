"use client";

import { PackageCard } from "@/components/PackageCard";
import { PricingToggle, type BillingPeriod } from "@/components/PricingToggle";
import { FadeIn } from "@/components/motion/FadeIn";
import { packages } from "@/lib/content";
import { useState } from "react";

export function PackagesGrid() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const standardPackages = packages.filter((p) => !p.isCustom);

  return (
    <>
      <FadeIn className="mt-8 flex justify-start md:justify-end">
        <PricingToggle value={billing} onChange={setBilling} />
      </FadeIn>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {standardPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            billing={billing}
            featured={pkg.isMostPopular}
          />
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-ink/65">
        Prices in Thai baht, excluding VAT. Packages are starting points and are
        customized to your business.
      </p>
    </>
  );
}
