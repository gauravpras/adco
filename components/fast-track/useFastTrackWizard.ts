"use client";

import { fastTrackAddons } from "@/lib/content";
import {
  computeFastTrackEstimate,
  type FastTrackEstimateResult,
} from "@/lib/fast-track-estimate";
import { getFastTrackBundlePrice } from "@/lib/fast-track-pricing";
import { getRecommendations } from "@/lib/fast-track-recommendations";
import {
  DEFAULT_SELECTED_PAGES,
  DESIGN_OPTIONS,
  FAST_TRACK_GOALS,
  THEME_CARDS,
  type PaletteSwatch,
} from "@/lib/fast-track-wizard-data";
import {
  CUSTOM_FEATURE_WEIGHT,
  PROGRESS_DOTS,
  type FastTrackWizardState,
} from "@/lib/fast-track-wizard-state";
import type { StyleOption } from "@/lib/fast-track-style-library";
import { useCallback, useMemo, useRef, useState } from "react";

const initialState: FastTrackWizardState = {
  bizName: "",
  redesign: null,
  currentUrl: "",
  goalId: null,
  pages: [...DEFAULT_SELECTED_PAGES],
  featureWeights: {},
  designId: null,
  tplLink: "",
  tplFileName: "",
  cms: null,
  colorChosen: false,
  paletteLabel: "",
  paletteMood: "",
  customPrimary: "#1E4FE0",
  customSecondary: "#E8402E",
  customAccent: "#0B0B0F",
  themeId: null,
  proceduralStyleId: null,
  proceduralStyleLabel: null,
  timelineMult: null,
  visionNotes: "",
};

export function designMultFor(id: string | null): number {
  const opt = DESIGN_OPTIONS.find((d) => d.id === id);
  return opt?.mult ?? 1;
}

export function designLabel(id: string | null): string {
  const opt = DESIGN_OPTIONS.find((d) => d.id === id);
  return opt?.label ?? "Not set";
}

export function timelineLabel(mult: number | null): string {
  if (mult === 1) return "Standard";
  if (mult === 1.25) return "Fast";
  if (mult === 1.35) return "Urgent";
  if (mult === 0.95) return "Flexible";
  return "Not set";
}

const addonLabelSet = new Set(fastTrackAddons.map((a) => a.label));

export function useFastTrackWizard() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<FastTrackWizardState>(initialState);
  const [warn, setWarn] = useState<
    "warn1" | "warn2" | "warn4" | "warn5" | "warn6" | null
  >(null);
  const [launching, setLaunching] = useState(false);
  const [shake, setShake] = useState(false);
  const [rocketBlast, setRocketBlast] = useState(false);
  const [igniteVisible, setIgniteVisible] = useState(false);
  const [estimateResult, setEstimateResult] =
    useState<FastTrackEstimateResult | null>(null);
  const [openInfoIds, setOpenInfoIds] = useState<Set<string>>(new Set());
  const launchTimersRef = useRef<number[]>([]);

  const goal = FAST_TRACK_GOALS.find((g) => g.id === state.goalId) ?? null;
  const theme = THEME_CARDS.find((t) => t.id === state.themeId) ?? null;
  const recommendations = useMemo(() => getRecommendations(state), [state]);

  const applyPalette = useCallback((swatch: PaletteSwatch) => {
    setState((s) => {
      const colors = swatch.colors;
      return {
        ...s,
        colorChosen: true,
        paletteLabel: swatch.name,
        paletteMood: swatch.mood,
        customPrimary: colors?.[0] ?? s.customPrimary,
        customSecondary: colors?.[1] ?? s.customSecondary,
        customAccent: colors?.[2] ?? s.customAccent,
      };
    });
  }, []);

  const applyMoodFromCustom = useCallback((mood: string) => {
    setState((s) => ({
      ...s,
      colorChosen: true,
      paletteLabel: "Custom colors",
      paletteMood: mood,
    }));
  }, []);

  const togglePage = (page: string) => {
    setState((s) => {
      const has = s.pages.includes(page);
      return {
        ...s,
        pages: has ? s.pages.filter((p) => p !== page) : [...s.pages, page],
      };
    });
  };

  const toggleFeature = (key: string, weight: number) => {
    setState((s) => {
      const next = { ...s.featureWeights };
      if (key in next) delete next[key];
      else next[key] = weight;
      return { ...s, featureWeights: next };
    });
  };

  const toggleAddon = (label: string, fullWeight: number) => {
    toggleFeature(label, getFastTrackBundlePrice(fullWeight));
  };

  const validateAndNext = () => {
    setWarn(null);
    if (step === 1 && (!state.redesign || !state.goalId)) {
      setWarn("warn1");
      return;
    }
    if (step === 2 && state.pages.length === 0) {
      setWarn("warn2");
      return;
    }
    if (step === 4 && (!state.designId || !state.cms)) {
      setWarn("warn4");
      return;
    }
    if (step === 5 && !state.colorChosen) {
      setWarn("warn5");
      return;
    }
    if (step === 6 && !state.themeId && !state.proceduralStyleId) {
      setWarn("warn6");
      return;
    }
    if (step === 6 && state.timelineMult == null) {
      setWarn("warn6");
      return;
    }
    setStep((c) => c + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const goBack = () => {
    setWarn(null);
    setStep((c) => Math.max(0, c - 1));
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const runEstimate = useCallback(() => {
    const result = computeFastTrackEstimate({
      goalLabel: goal?.label ?? "site",
      goalBase: goal?.base ?? 0,
      pageCount: state.pages.length,
      designMult: designMultFor(state.designId),
      isRedesign: state.redesign === "redesign",
      featureWeights: Object.values(state.featureWeights),
      cmsChoice: state.cms,
      timelineMult: state.timelineMult ?? 1,
    });
    setEstimateResult(result);
    setOpenInfoIds(new Set());
  }, [goal, state]);

  const onLaunch = () => {
    setLaunching(true);
    setIgniteVisible(true);
    const t1 = window.setTimeout(() => {
      setRocketBlast(true);
      setShake(true);
    }, 900);
    const t2 = window.setTimeout(() => {
      runEstimate();
      setStep(9);
      setShake(false);
    }, 2300);
    launchTimersRef.current.push(t1, t2);
  };

  const selectProceduralStyle = (style: StyleOption) => {
    setState((s) => ({
      ...s,
      proceduralStyleId: style.id,
      proceduralStyleLabel: style.label,
      themeId: style.baseThemeId,
    }));
  };

  const flightRows = useMemo(() => {
    const featLabels = Object.keys(state.featureWeights);
    const rows = [
      {
        label: "Mission objective",
        value: `${goal?.label ?? "Not set"}${state.redesign === "redesign" ? " (redesign)" : ""}`,
        editStep: 1,
      },
      {
        label: "Flight path (pages)",
        value: state.pages.join(", ") || "None selected",
        editStep: 2,
      },
      {
        label: "Boosters (features)",
        value: featLabels.join(", ") || "None selected",
        editStep: 3,
      },
      {
        label: "Build approach",
        value: designLabel(state.designId),
        editStep: 4,
      },
      {
        label: "Colors",
        value: state.paletteLabel || "Not set",
        editStep: 5,
      },
      {
        label: "Style & timeline",
        value: `${state.proceduralStyleLabel ?? theme?.label ?? "Not set"} · ${timelineLabel(state.timelineMult)}`,
        editStep: 6,
      },
    ];
    if (state.visionNotes.trim()) {
      rows.push({
        label: "Your notes",
        value:
          state.visionNotes.length > 80
            ? `${state.visionNotes.slice(0, 80)}…`
            : state.visionNotes,
        editStep: 7,
      });
    }
    return rows;
  }, [goal, state, theme]);

  const dotDoneThrough = Math.min(step, 7);

  return {
    step,
    setStep,
    state,
    setState,
    warn,
    goal,
    theme,
    recommendations,
    launching,
    shake,
    rocketBlast,
    igniteVisible,
    estimateResult,
    openInfoIds,
    setOpenInfoIds,
    launchTimersRef,
    applyPalette,
    applyMoodFromCustom,
    togglePage,
    toggleFeature,
    toggleAddon,
    validateAndNext,
    goBack,
    onLaunch,
    selectProceduralStyle,
    flightRows,
    dotDoneThrough,
    PROGRESS_DOTS,
    addonLabelSet,
    CUSTOM_FEATURE_WEIGHT,
  };
}

export type FastTrackWizardApi = ReturnType<typeof useFastTrackWizard>;
