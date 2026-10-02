"use client";

import { Button } from "@/components/Button";
import {
  bookingUrl,
  fastTrackAddons,
  fastTrackEstimateDisclaimer,
  fastTrackTiers,
  type FastTrackTierId,
} from "@/lib/content";
import { useState } from "react";

function formatBaht(value: number) {
  return `฿${value.toLocaleString("en-US")}`;
}

const chipClass =
  "rounded-full border px-4 py-3 text-left text-sm font-semibold leading-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-adco-blue";

export function FastTrackForm() {
  const [tierId, setTierId] = useState<FastTrackTierId | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const tier = fastTrackTiers.find((item) => item.id === tierId) ?? null;
  const addonTotal = fastTrackAddons.reduce((sum, addon) => {
    return selectedAddons.includes(addon.id) ? sum + addon.weight : sum;
  }, 0);
  const paidAdsSelected = selectedAddons.includes("paid-ads");

  function toggleAddon(id: string) {
    setSelectedAddons((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <fieldset>
        <legend className="font-display text-xl font-semibold text-ink">
          Website size
        </legend>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">
          Choose the build closest to what you need. The range updates as you
          add services.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3" role="radiogroup" aria-label="Website size">
          {fastTrackTiers.map((item) => {
            const selected = tierId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setTierId(item.id)}
                className={`${chipClass} ${
                  selected
                    ? "border-adco-blue bg-adco-blue/10 text-ink"
                    : "border-ink/15 bg-white text-ink hover:border-ink/30"
                }`}
              >
                <span className="block">{item.label}</span>
                <span className="mt-1 block text-sm font-normal leading-relaxed text-ink/65">
                  {item.description}
                </span>
                <span className="mt-2 block text-sm font-semibold leading-normal">
                  {formatBaht(item.min)} to {formatBaht(item.max)}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="font-display text-xl font-semibold text-ink">
          Also need help with
        </legend>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">
          Optional. Each service is added to both ends of the website range.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {fastTrackAddons.map((addon) => {
            const selected = selectedAddons.includes(addon.id);
            return (
              <button
                key={addon.id}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleAddon(addon.id)}
                className={`${chipClass} ${
                  selected
                    ? "border-adco-blue bg-adco-blue/10 text-ink"
                    : "border-ink/15 bg-white text-ink hover:border-ink/30"
                }`}
              >
                {addon.label}
                <span className="mt-1 block text-sm font-normal leading-relaxed text-ink/65">
                  +{formatBaht(addon.weight)}
                  {addon.note ? `. ${addon.note}` : ""}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {tier ? (
        <div className="mt-6 border-t border-ink/10 pt-6">
          <h3 className="font-display text-xl font-semibold text-ink">
            Your estimate
          </h3>
          <p className="mt-8 font-display text-3xl font-bold tracking-tight text-ink">
            {formatBaht(tier.min + addonTotal)} to{" "}
            {formatBaht(tier.max + addonTotal)}
          </p>
          {paidAdsSelected ? (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65">
              Paid Advertising in this range is the management fee. Ad spend is
              billed separately.
            </p>
          ) : null}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65">
            {fastTrackEstimateDisclaimer}
          </p>
          <div className="mt-6">
            <Button href={bookingUrl} variant="secondary">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
