import type { CmsChoice } from "@/lib/fast-track-estimate";

export type RedesignChoice = "new" | "redesign";

export type FastTrackWizardState = {
  bizName: string;
  redesign: RedesignChoice | null;
  currentUrl: string;
  goalId: string | null;
  pages: string[];
  featureWeights: Record<string, number>;
  designId: string | null;
  tplLink: string;
  tplFileName: string;
  cms: CmsChoice | null;
  colorChosen: boolean;
  paletteLabel: string;
  paletteMood: string;
  customPrimary: string;
  customSecondary: string;
  customAccent: string;
  themeId: string | null;
  proceduralStyleId: string | null;
  proceduralStyleLabel: string | null;
  timelineMult: number | null;
  visionNotes: string;
};

export const CUSTOM_FEATURE_WEIGHT = 6000;
export const PROGRESS_DOTS = 8;
