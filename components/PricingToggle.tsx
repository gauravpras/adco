"use client";

import { pricingToggle } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export type BillingPeriod = "monthly" | "annual";

type PricingToggleProps = {
  value: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
};

export function PricingToggle({ value, onChange }: PricingToggleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-canvas p-1"
      role="radiogroup"
      aria-label="Billing period"
    >
      {(["monthly", "annual"] as const).map((period) => {
        const selected = value === period;
        const label =
          period === "monthly" ? pricingToggle.monthly : pricingToggle.annual;
        return (
          <button
            key={period}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(period)}
            className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
              selected ? "text-white" : "text-ink/60 hover:text-ink"
            }`}
          >
            {selected ? (
              <motion.span
                layoutId={reduceMotion ? undefined : "pricing-toggle-pill"}
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            ) : null}
            <span className="relative z-10 flex items-center gap-2">
              {label}
              {period === "annual" ? (
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                    selected ? "bg-signal-red text-white" : "bg-ink/10 text-ink/70"
                  }`}
                >
                  {pricingToggle.annualBadge}
                </span>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}
