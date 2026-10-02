"use client";

import styles from "@/components/fast-track/fast-track-quote.module.css";
import { PaletteBar } from "@/components/fast-track/PaletteBar";
import type { PaletteSwatch } from "@/lib/fast-track-wizard-data";
import type { StyleOption } from "@/lib/fast-track-style-library";
import { useMemo, useState } from "react";

type PaletteModalProps = {
  open: boolean;
  title: string;
  palettes: PaletteSwatch[];
  onClose: () => void;
  onSelectPalette: (swatch: PaletteSwatch) => void;
};

export function FastTrackPaletteLibraryModal({
  open,
  title,
  palettes,
  onClose,
  onSelectPalette,
}: PaletteModalProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return palettes;
    return palettes.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.mood.toLowerCase().includes(q),
    );
  }, [palettes, query]);

  if (!open) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${styles.modalOverlayShow}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="library-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalPanelWide}>
        <div className={styles.modalHead}>
          <span id="library-modal-title">{title}</span>
          <button type="button" onClick={onClose}>
            ✕
          </button>
        </div>
        <input
          className={styles.modalSearch}
          placeholder="Search by name or mood…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className={styles.modalCount}>
          {filtered.length} palette{filtered.length === 1 ? "" : "s"}
        </p>
        <div className={styles.modalScrollGrid}>
          {filtered.map((swatch) => (
            <button
              key={swatch.id}
              type="button"
              className={styles.swatch}
              onClick={() => onSelectPalette(swatch)}
            >
              <PaletteBar swatch={swatch} />
              <p className={styles.swatchLabel}>{swatch.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function styleThumbClass(baseThemeId: string, styles: Record<string, string>) {
  switch (baseThemeId) {
    case "minimal":
      return styles.thumbMinimal;
    case "bold":
      return styles.thumbBold;
    case "playful":
      return styles.thumbPlayful;
    case "corporate":
      return styles.thumbCorporate;
    case "premium":
      return styles.thumbPremium;
    default:
      return styles.thumbEarthy;
  }
}

type StyleModalProps = {
  open: boolean;
  title: string;
  stylesList: StyleOption[];
  recommendedIds: Set<string>;
  onClose: () => void;
  onSelectStyle: (style: StyleOption) => void;
};

export function FastTrackStyleLibraryModal({
  open,
  title,
  stylesList,
  recommendedIds,
  onClose,
  onSelectStyle,
}: StyleModalProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stylesList;
    return stylesList.filter(
      (s) =>
        s.label.toLowerCase().includes(q) ||
        s.moods.some((m) => m.toLowerCase().includes(q)),
    );
  }, [stylesList, query]);

  if (!open) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${styles.modalOverlayShow}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="style-library-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalPanelWide}>
        <div className={styles.modalHead}>
          <span id="style-library-title">{title}</span>
          <button type="button" onClick={onClose}>
            ✕
          </button>
        </div>
        <input
          className={styles.modalSearch}
          placeholder="Search styles…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className={styles.modalCount}>
          {filtered.length} style{filtered.length === 1 ? "" : "s"}
        </p>
        <div className={styles.modalScrollGrid}>
          {filtered.map((style) => {
            const thumb = styleThumbClass(style.baseThemeId, styles);
            const recommended = recommendedIds.has(style.baseThemeId);
            return (
              <button
                key={style.id}
                type="button"
                className={`${styles.swatch} ${styles.styleSwatch}`}
                onClick={() => onSelectStyle(style)}
              >
                <div
                  className={`${styles.thumb} ${thumb}`}
                  style={{
                    background: `linear-gradient(135deg, hsl(${style.accentHue} 55% 45%), hsl(${(style.accentHue + 40) % 360} 40% 30%))`,
                  }}
                >
                  <span />
                  <span />
                </div>
                <p className={styles.swatchLabel}>
                  {style.label}
                  {recommended ? (
                    <span className={styles.recInline}>Rec</span>
                  ) : null}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
