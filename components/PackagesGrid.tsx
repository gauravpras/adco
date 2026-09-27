"use client";

import { PackageCard } from "@/components/PackageCard";
import { PricingToggle, type BillingPeriod } from "@/components/PricingToggle";
import { FadeIn } from "@/components/motion/FadeIn";
import { packages } from "@/lib/content";
import { useState } from "react";

export function PackagesGrid() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const standardPackages = packages.filter((p) => !p.isCustom);
  const customPackage = packages.find((p) => p.isCustom);

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
      {customPackage ? (
        <div className="mt-8 border-t border-ink/15 pt-8">
          <PackageCard pkg={customPackage} billing={billing} />
        </div>
      ) : null}
    </>
  );
}
