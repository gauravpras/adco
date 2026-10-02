export const FAST_TRACK_GOALS = [
  {
    id: "showcase",
    emoji: "🏢",
    label: "Showcase my business",
    base: 14900,
  },
  {
    id: "leads",
    emoji: "📩",
    label: "Generate leads",
    base: 29900,
  },
  {
    id: "booking",
    emoji: "📅",
    label: "Bookings / reservations",
    base: 34900,
  },
  {
    id: "ecom",
    emoji: "🛒",
    label: "Sell products online",
    base: 39500,
  },
  {
    id: "webapp",
    emoji: "⚙️",
    label: "Custom web application",
    base: 150000,
  },
] as const;

export const DEFAULT_PAGE_CHIPS = [
  "Home",
  "About",
  "Services / Products",
  "Pricing",
  "Blog",
  "Portfolio / Case studies",
  "Team",
  "FAQ",
  "Contact",
  "Testimonials",
] as const;

export const DEFAULT_SELECTED_PAGES = ["Home", "Contact"] as const;

export const SITE_FEATURE_CHIPS = [
  { label: "Contact form", weight: 0 },
  { label: "Online booking", weight: 12000 },
  { label: "E-commerce checkout", weight: 35000 },
  { label: "Blog / news", weight: 5000 },
  { label: "Member login", weight: 15000 },
  { label: "Multi-language (EN/TH)", weight: 10000 },
  { label: "Live chat", weight: 4000 },
  { label: "Custom animation", weight: 12000 },
  { label: "CRM / payment integration", weight: 15000 },
  { label: "LINE OA integration", weight: 6000 },
  { label: "Thai payment gateway (PromptPay/Omise)", weight: 10000 },
] as const;

export const DESIGN_OPTIONS = [
  { id: "custom", label: "Fully custom", mult: 1.4, needsUpload: false },
  {
    id: "template",
    label: "Use a template/reference",
    mult: 0.9,
    needsUpload: true,
  },
  { id: "mix", label: "A mix", mult: 1.15, needsUpload: true },
] as const;

export const CMS_OPTIONS = [
  { value: "1" as const, label: "Yes, I want a CMS" },
  { value: "0" as const, label: "No, fixed is fine" },
  { value: "0.5" as const, label: "Not sure" },
];

export const TIMELINE_OPTIONS = [
  { value: 1, label: "Standard" },
  { value: 1.25, label: "I need this fast" },
  { value: 1.35, label: "Urgent" },
  { value: 0.95, label: "Flexible" },
] as const;

export type PaletteSwatch = {
  id: string;
  name: string;
  mood: string;
  colors?: [string, string, string];
  grad?: string;
};

export const MAIN_PALETTES: PaletteSwatch[] = [
  {
    id: "bold-vibrant",
    name: "Bold & vibrant",
    mood: "bold",
    colors: ["#1E4FE0", "#E8402E", "#0b0b0f"],
  },
  {
    id: "minimal-mono",
    name: "Minimal mono",
    mood: "minimal",
    colors: ["#f5f5f5", "#111", "#999"],
  },
  {
    id: "dark-premium",
    name: "Dark & premium",
    mood: "premium",
    colors: ["#0b0b0f", "#B08D57", "#2b2b2b"],
  },
  {
    id: "playful-pastels",
    name: "Playful pastels",
    mood: "playful",
    colors: ["#FF6B9D", "#FFD166", "#4ECDC4"],
  },
  {
    id: "ocean-calm",
    name: "Ocean calm",
    mood: "calm",
    colors: ["#01497C", "#61A5C2", "#A9D6E5"],
  },
  {
    id: "earthy-natural",
    name: "Earthy natural",
    mood: "earthy",
    colors: ["#6B4226", "#A9925B", "#D9C7A3"],
  },
  {
    id: "luxury-gold",
    name: "Luxury gold",
    mood: "premium",
    colors: ["#000", "#D4AF37", "#fff"],
  },
];

export const MORE_PALETTES: PaletteSwatch[] = [
  {
    id: "sunset",
    name: "Sunset gradient",
    mood: "bold",
    grad: "linear-gradient(90deg,#FF512F,#F09819)",
  },
  {
    id: "ocean-grad",
    name: "Ocean gradient",
    mood: "calm",
    grad: "linear-gradient(90deg,#2193b0,#6dd5ed)",
  },
  {
    id: "aurora",
    name: "Aurora gradient",
    mood: "playful",
    grad: "linear-gradient(90deg,#8E2DE2,#4A00E0,#00c9ff)",
  },
  {
    id: "royal",
    name: "Royal purple gradient",
    mood: "premium",
    grad: "linear-gradient(90deg,#3a0ca3,#7209b7)",
  },
  {
    id: "forest",
    name: "Forest",
    mood: "earthy",
    colors: ["#1b4332", "#52796f", "#cad2c5"],
  },
  {
    id: "berry",
    name: "Berry",
    mood: "bold",
    colors: ["#6a0572", "#ab0458", "#f72585"],
  },
  {
    id: "charcoal",
    name: "Monochrome charcoal",
    mood: "minimal",
    colors: ["#1a1a1a", "#4d4d4d", "#e0e0e0"],
  },
  {
    id: "pastel-sky",
    name: "Pastel sky",
    mood: "playful",
    colors: ["#a8dadc", "#f1faee", "#ffd6a5"],
  },
];

export const THEME_CARDS = [
  { id: "minimal", label: "Modern minimal", moods: ["minimal"] },
  { id: "bold", label: "Bold & editorial", moods: ["bold"] },
  { id: "playful", label: "Playful & fun", moods: ["playful"] },
  { id: "corporate", label: "Corporate & trustworthy", moods: ["corporate"] },
  { id: "premium", label: "Luxury & premium", moods: ["premium"] },
  { id: "earthy", label: "Warm & organic", moods: ["earthy", "calm"] },
] as const;

export function hexToMood(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const s =
    max === min ? 0 : l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  if (l < 0.22) return "premium";
  if (s < 0.15) return "minimal";
  if (s > 0.55 && l > 0.45) return "bold";
  if (r > g && g > b && l < 0.55) return "earthy";
  if (b > r && l > 0.4) return "calm";
  if (l > 0.65 && s > 0.3) return "playful";
  return "corporate";
}

export function themeMoodMatches(
  themeMoods: readonly string[],
  paletteMood: string,
): boolean {
  return themeMoods.some((m) => paletteMood.split(" ").includes(m));
}
