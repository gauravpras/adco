import { THEME_CARDS } from "@/lib/fast-track-wizard-data";

export type StyleOption = {
  id: string;
  label: string;
  moods: readonly string[];
  /** Base theme thumb id for preview styling */
  baseThemeId: string;
  accentHue: number;
};

const BASE_LABELS = [
  "Modern minimal",
  "Bold editorial",
  "Playful fun",
  "Corporate trust",
  "Luxury premium",
  "Warm organic",
] as const;

const BASE_IDS = ["minimal", "bold", "playful", "corporate", "premium", "earthy"] as const;

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 48271) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateStyles(count: number): StyleOption[] {
  const rand = seededRandom(99);
  const items: StyleOption[] = [];
  for (let i = 0; i < count; i++) {
    const baseIdx = i % BASE_IDS.length;
    const baseThemeId = BASE_IDS[baseIdx];
    const baseCard = THEME_CARDS.find((t) => t.id === baseThemeId);
    const moods = baseCard?.moods ?? ["corporate"];
    const variant = Math.floor(i / BASE_IDS.length) + 1;
    const label = `${BASE_LABELS[baseIdx]} ${variant}`;
    items.push({
      id: `style-gen-${i}`,
      label,
      moods: [...moods],
      baseThemeId,
      accentHue: Math.floor(rand() * 360),
    });
  }
  return items;
}

let cachedStyles: StyleOption[] | null = null;

export function getFullStyleLibrary(): StyleOption[] {
  if (!cachedStyles) {
    cachedStyles = generateStyles(250);
  }
  return cachedStyles;
}

export function filterStyles(query: string, items: StyleOption[]): StyleOption[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (s) =>
      s.label.toLowerCase().includes(q) ||
      s.moods.some((m) => m.toLowerCase().includes(q)),
  );
}
