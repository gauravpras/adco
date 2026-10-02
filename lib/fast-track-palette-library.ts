import { hexToMood, type PaletteSwatch } from "@/lib/fast-track-wizard-data";

const MOOD_NAMES: Record<string, string> = {
  bold: "Bold vibrant",
  minimal: "Minimal mono",
  premium: "Dark premium",
  playful: "Playful pastels",
  calm: "Ocean calm",
  earthy: "Earthy natural",
  corporate: "Corporate cool",
};

function hslToHex(h: number, s: number, l: number): string {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generatePalettes(count: number): PaletteSwatch[] {
  const rand = seededRandom(42);
  const items: PaletteSwatch[] = [];
  for (let i = 0; i < count; i++) {
    const h1 = Math.floor(rand() * 360);
    const h2 = (h1 + 30 + Math.floor(rand() * 90)) % 360;
    const h3 = (h1 + 180 + Math.floor(rand() * 40)) % 360;
    const s1 = 0.35 + rand() * 0.45;
    const s2 = 0.25 + rand() * 0.5;
    const s3 = 0.15 + rand() * 0.35;
    const l1 = 0.25 + rand() * 0.45;
    const l2 = 0.3 + rand() * 0.4;
    const l3 = 0.5 + rand() * 0.35;
    const c1 = hslToHex(h1, s1, l1);
    const c2 = hslToHex(h2, s2, l2);
    const c3 = hslToHex(h3, s3, l3);
    const mood = hexToMood(c1);
    const baseName = MOOD_NAMES[mood] ?? "Custom blend";
    const gradRoll = rand();
    if (gradRoll > 0.93) {
      items.push({
        id: `gen-grad-${i}`,
        name: `${baseName} gradient ${i + 1}`,
        mood,
        grad: `linear-gradient(90deg,${c1},${c2},${c3})`,
      });
    } else {
      items.push({
        id: `gen-${i}`,
        name: `${baseName} ${i + 1}`,
        mood,
        colors: [c1, c2, c3],
      });
    }
  }
  return items;
}

let cachedLibrary: PaletteSwatch[] | null = null;

export function getFullPaletteLibrary(): PaletteSwatch[] {
  if (!cachedLibrary) {
    cachedLibrary = generatePalettes(300);
  }
  return cachedLibrary;
}

export function filterPalettes(
  query: string,
  items: PaletteSwatch[],
): PaletteSwatch[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (p) =>
      p.name.toLowerCase().includes(q) || p.mood.toLowerCase().includes(q),
  );
}
