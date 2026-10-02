import { getFullStyleLibrary } from "@/lib/fast-track-style-library";
import { FAST_TRACK_GOALS, THEME_CARDS } from "@/lib/fast-track-wizard-data";
import type { FastTrackWizardState } from "@/lib/fast-track-wizard-state";
import { fastTrackUrgentTimelineMult } from "@/lib/fast-track-pricing";

export type PreviewStyleKey =
  | "minimal"
  | "bold"
  | "playful"
  | "corporate"
  | "premium"
  | "earthy";

export type DesignOverlay = "none" | "wireframe" | "mixed" | "filled";

export type PreviewFeatureWidget =
  | "contactForm"
  | "liveChat"
  | "blogPosts"
  | "booking"
  | "ecommerce"
  | "payments";

export type PreviewModel = {
  styleKey: PreviewStyleKey;
  designOverlay: DesignOverlay;
  showCms: boolean;
  headlineText: string;
  navPages: string[];
  footerPages: string[];
  pageCount: number;
  widgets: PreviewFeatureWidget[];
  deliveryLabel: string | null;
  isUrgent: boolean;
  metaPalette: string | null;
  heroGradient: string | null;
  bodyTint: string;
};

const FEATURE_WIDGET_MAP: Record<string, PreviewFeatureWidget> = {
  "Contact form": "contactForm",
  "Live chat": "liveChat",
  "Blog / news": "blogPosts",
  "Online booking": "booking",
  "E-commerce checkout": "ecommerce",
  "Thai payment gateway (PromptPay/Omise)": "payments",
};

function resolveStyleKey(state: FastTrackWizardState): PreviewStyleKey {
  const themeId = state.themeId ?? "corporate";
  const card = THEME_CARDS.find((t) => t.id === themeId);
  const id = card?.id ?? "corporate";
  switch (id) {
    case "minimal":
    case "bold":
    case "playful":
    case "corporate":
    case "premium":
    case "earthy":
      return id;
    default:
      return "corporate";
  }
}

function resolveDesignOverlay(designId: string | null): DesignOverlay {
  if (designId === "template") return "wireframe";
  if (designId === "mix") return "mixed";
  if (designId === "custom") return "filled";
  return "none";
}

export function buildPreviewModel(state: FastTrackWizardState): PreviewModel {
  const goal = FAST_TRACK_GOALS.find((g) => g.id === state.goalId);
  const styleKey = resolveStyleKey(state);
  const navPages = state.pages.slice(0, 6);
  const footerPages = state.pages.slice(6);

  const widgets: PreviewFeatureWidget[] = [];
  for (const label of Object.keys(state.featureWeights)) {
    const w = FEATURE_WIDGET_MAP[label];
    if (w && !widgets.includes(w)) widgets.push(w);
  }

  let deliveryLabel: string | null = null;
  let isUrgent = false;
  if (state.timelineMult === 1.25) deliveryLabel = "Fast track";
  if (state.timelineMult === fastTrackUrgentTimelineMult) {
    deliveryLabel = "Urgent";
    isUrgent = true;
  }
  if (state.timelineMult === 0.95) deliveryLabel = "Flexible";

  let heroGradient: string | null = null;
  if (state.proceduralStyleId) {
    const style = getFullStyleLibrary().find(
      (s) => s.id === state.proceduralStyleId,
    );
    if (style) {
      heroGradient = `linear-gradient(${style.accentHue}deg, color-mix(in srgb, ${state.customPrimary} 40%, transparent), color-mix(in srgb, ${state.customSecondary} 25%, transparent))`;
    }
  }

  const headlineText =
    state.bizName ||
    goal?.label ||
    "Your website";

  return {
    styleKey,
    designOverlay: resolveDesignOverlay(state.designId),
    showCms: state.cms === "1",
    headlineText,
    navPages,
    footerPages,
    pageCount: state.pages.length,
    widgets,
    deliveryLabel,
    isUrgent,
    metaPalette: state.paletteLabel || null,
    heroGradient,
    bodyTint: state.customAccent,
  };
}
