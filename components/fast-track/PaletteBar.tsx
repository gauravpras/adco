import styles from "@/components/fast-track/fast-track-quote.module.css";
import type { PaletteSwatch } from "@/lib/fast-track-wizard-data";

export function PaletteBar({ swatch }: { swatch: PaletteSwatch }) {
  if (swatch.grad) {
    return (
      <div
        className={styles.barGrad}
        style={{ background: swatch.grad }}
        aria-hidden
      />
    );
  }
  const colors = swatch.colors ?? ["#333", "#666", "#999"];
  return (
    <div className={styles.bar} aria-hidden>
      {colors.map((c) => (
        <div key={c} style={{ background: c }} />
      ))}
    </div>
  );
}
