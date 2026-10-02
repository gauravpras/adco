"use client";

import styles from "@/components/fast-track/fast-track-quote.module.css";
import { ServiceAlacarteVisual } from "@/components/ServiceAlacarteVisual";
import type { FastTrackAddon } from "@/lib/content";
import { services } from "@/lib/content";
import {
  getFastTrackBundlePrice,
  fastTrackBundleDiscountPercent,
} from "@/lib/fast-track-pricing";

type FastTrackAddonCardProps = {
  addon: FastTrackAddon;
  selected: boolean;
  recommended?: boolean;
  onToggle: () => void;
};

function formatBaht(value: number) {
  return `฿${value.toLocaleString("en-US")}`;
}

export function FastTrackAddonCard({
  addon,
  selected,
  recommended = false,
  onToggle,
}: FastTrackAddonCardProps) {
  const service = services.find((s) => s.id === addon.id);
  const description =
    service?.shortDescription ?? "Add-on service for your launch.";
  const bundlePrice = getFastTrackBundlePrice(addon.weight);
  const discountPct = Math.round(fastTrackBundleDiscountPercent * 100);

  return (
    <button
      type="button"
      className={`${styles.addonCard} ${selected ? styles.addonCardSelected : ""} ${recommended ? styles.cardRecommended : ""}`}
      onClick={onToggle}
      title={addon.note}
    >
      <div className={styles.addonVisual}>
        <ServiceAlacarteVisual slug={addon.id} className="h-full w-full" />
      </div>
      <div className={styles.addonBody}>
        <span className={styles.addonName}>
          {addon.label}
          {recommended ? <span className={styles.rec}>Recommended</span> : null}
        </span>
        <span className={styles.addonDesc}>{description}</span>
        <span className={styles.addonPricing}>
          <span className={styles.addonPriceStrike}>
            {formatBaht(addon.weight)}
          </span>
          <span className={styles.addonPriceBundle}>
            {formatBaht(bundlePrice)} add-on
          </span>
          <span className={styles.addonDiscount}>({discountPct}% bundle)</span>
        </span>
      </div>
    </button>
  );
}
