import { fastTrackAddons } from "@/lib/content";
import {
  CMS_OPTIONS,
  DEFAULT_PAGE_CHIPS,
  DESIGN_OPTIONS,
  FAST_TRACK_GOALS,
  THEME_CARDS,
  TIMELINE_OPTIONS,
} from "@/lib/fast-track-wizard-data";
import type { FastTrackWizardState } from "@/lib/fast-track-wizard-state";

export type FastTrackStepId =
  | "project"
  | "pages"
  | "features"
  | "design"
  | "palette"
  | "style"
  | "timeline"
  | "addons";

export type RecommendationSets = Record<FastTrackStepId, Set<string>>;

export function getRecommendations(
  state: FastTrackWizardState,
): RecommendationSets {
  const goal = state.goalId;
  const empty: RecommendationSets = {
    project: new Set(),
    pages: new Set(),
    features: new Set(),
    design: new Set(),
    palette: new Set(),
    style: new Set(),
    timeline: new Set(),
    addons: new Set(),
  };

  if (state.redesign === "redesign") {
    const audit = fastTrackAddons.find((a) => a.id === "digital-audit");
    if (audit) empty.addons.add(audit.label);
  }

  if (goal === "leads") {
    empty.features.add("Contact form");
    empty.features.add("Live chat");
    empty.pages.add("Contact");
    empty.pages.add("Services / Products");
    const seo = fastTrackAddons.find((a) => a.id === "seo");
    if (seo) empty.addons.add(seo.label);
  }

  if (goal === "showcase") {
    empty.pages.add("About");
    empty.pages.add("Portfolio / Case studies");
    const gb = fastTrackAddons.find((a) => a.id === "google-business");
    if (gb) empty.addons.add(gb.label);
  }

  if (goal === "booking") {
    empty.features.add("Online booking");
    empty.pages.add("Contact");
  }

  if (goal === "ecom") {
    empty.features.add("E-commerce checkout");
    empty.features.add("Thai payment gateway (PromptPay/Omise)");
    empty.pages.add("Services / Products");
    empty.pages.add("Pricing");
    const paid = fastTrackAddons.find((a) => a.id === "paid-ads");
    if (paid) empty.addons.add(paid.label);
    empty.timeline.add(
      TIMELINE_OPTIONS.find((t) => t.value === 1.25)?.label ?? "",
    );
  }

  if (goal === "webapp") {
    empty.design.add("custom");
    empty.features.add("Member login");
    empty.features.add("CRM / payment integration");
  }

  if (state.pages.includes("Blog")) {
    empty.features.add("Blog / news");
  }

  if (state.pages.includes("Pricing")) {
    empty.features.add("Contact form");
  }

  if (goal === "showcase" && state.pages.length >= 6) {
    empty.design.add("custom");
    const cmsYes = CMS_OPTIONS.find((c) => c.value === "1");
    if (cmsYes) empty.design.add("cms-yes");
  }

  if (goal === "showcase" && state.pages.length <= 4) {
    empty.design.add("template");
  }

  if (state.paletteMood) {
    for (const t of THEME_CARDS) {
      if (t.moods.some((m) => state.paletteMood.split(" ").includes(m))) {
        empty.style.add(t.id);
      }
    }
  }

  const featureCount = Object.keys(state.featureWeights).length;
  if (featureCount >= 4 || goal === "ecom") {
    const fast = TIMELINE_OPTIONS.find((t) => t.value === 1.25);
    if (fast) empty.timeline.add(fast.label);
  } else if (goal === "showcase" && state.pages.length <= 4) {
    const standard = TIMELINE_OPTIONS.find((t) => t.value === 1);
    if (standard) empty.timeline.add(standard.label);
  }

  if (goal === "leads" || goal === "showcase") {
    const social = fastTrackAddons.find((a) => a.id === "social-media");
    if (social) empty.addons.add(social.label);
  }

  for (const g of FAST_TRACK_GOALS) {
    if (g.id === goal) {
      empty.project.add(g.id);
    }
  }

  for (const d of DESIGN_OPTIONS) {
    if (empty.design.has(d.id)) {
      /* already set */
    }
  }

  if (state.pages.includes("FAQ")) {
    empty.pages.add("FAQ");
  }

  for (const page of DEFAULT_PAGE_CHIPS) {
    if (state.pages.includes(page) && goal === "showcase" && page === "Testimonials") {
      empty.pages.add(page);
    }
  }

  return empty;
}

export function isRecommended(
  rec: RecommendationSets,
  step: FastTrackStepId,
  id: string,
): boolean {
  return rec[step].has(id);
}

export function isFeatureRecommended(
  rec: RecommendationSets,
  featureLabel: string,
): boolean {
  return rec.features.has(featureLabel);
}

export function isPageRecommended(rec: RecommendationSets, page: string): boolean {
  return rec.pages.has(page);
}

export function isDesignRecommended(rec: RecommendationSets, designId: string): boolean {
  return rec.design.has(designId);
}

export function isCmsRecommended(state: FastTrackWizardState): boolean {
  return (
    state.goalId === "showcase" &&
    state.pages.length >= 6
  );
}

export function isThemeRecommended(rec: RecommendationSets, themeId: string): boolean {
  return rec.style.has(themeId);
}

export function isTimelineRecommended(
  rec: RecommendationSets,
  label: string,
): boolean {
  return rec.timeline.has(label);
}

export function isGoalRecommended(rec: RecommendationSets, goalId: string): boolean {
  return rec.project.has(goalId);
}

export function isAddonRecommended(rec: RecommendationSets, label: string): boolean {
  return rec.addons.has(label);
}
