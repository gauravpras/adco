/** TODO: client to confirm bundle upsell discount */
export const fastTrackBundleDiscountPercent = 0.3;

/** TODO: client to confirm urgent rush multiplier */
export const fastTrackUrgentTimelineMult = 1.35;

export function getFastTrackBundlePrice(fullWeight: number): number {
  return Math.round(fullWeight * (1 - fastTrackBundleDiscountPercent));
}

export function isFastTrackAddonLabel(
  label: string,
  addonLabels: readonly string[],
): boolean {
  return addonLabels.includes(label);
}
