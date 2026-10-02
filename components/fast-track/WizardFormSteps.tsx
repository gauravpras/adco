"use client";

import { FastTrackAddonCard } from "@/components/fast-track/FastTrackAddonCard";
import { PaletteBar } from "@/components/fast-track/PaletteBar";
import type { FastTrackWizardApi } from "@/components/fast-track/useFastTrackWizard";
import {
  isAddonRecommended,
  isCmsRecommended,
  isDesignRecommended,
  isFeatureRecommended,
  isGoalRecommended,
  isPageRecommended,
  isThemeRecommended,
  isTimelineRecommended,
} from "@/lib/fast-track-recommendations";
import { getFullPaletteLibrary } from "@/lib/fast-track-palette-library";
import { getFullStyleLibrary } from "@/lib/fast-track-style-library";
import { bookingUrl, fastTrackAddons } from "@/lib/content";
import { hexToMood } from "@/lib/fast-track-wizard-data";
import {
  CMS_OPTIONS,
  DEFAULT_PAGE_CHIPS,
  DESIGN_OPTIONS,
  FAST_TRACK_GOALS,
  MAIN_PALETTES,
  SITE_FEATURE_CHIPS,
  THEME_CARDS,
  TIMELINE_OPTIONS,
  themeMoodMatches,
} from "@/lib/fast-track-wizard-data";
import styles from "@/components/fast-track/fast-track-quote.module.css";
import { useMemo, useState } from "react";
import {
  FastTrackPaletteLibraryModal,
  FastTrackStyleLibraryModal,
} from "@/components/fast-track/FastTrackLibraryModal";

type StepsProps = {
  api: FastTrackWizardApi;
};

export function WizardFormSteps({ api }: StepsProps) {
  const {
    step,
    setStep,
    state,
    setState,
    warn,
    recommendations,
    launching,
    rocketBlast,
    igniteVisible,
    estimateResult,
    openInfoIds,
    setOpenInfoIds,
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
    CUSTOM_FEATURE_WEIGHT,
  } = api;

  const [paletteModalOpen, setPaletteModalOpen] = useState(false);
  const [styleModalOpen, setStyleModalOpen] = useState(false);
  const [customPageInput, setCustomPageInput] = useState("");
  const [customFeatureInput, setCustomFeatureInput] = useState("");

  const fullPalettes = useMemo(() => getFullPaletteLibrary(), []);
  const fullStyles = useMemo(() => getFullStyleLibrary(), []);

  const showDesignUpload = DESIGN_OPTIONS.some(
    (d) => d.id === state.designId && d.needsUpload,
  );

  const stepClass = (n: number) =>
    `${styles.step} ${step === n ? styles.stepActive : ""}`;

  const StepActions = ({ showBack = true }: { showBack?: boolean }) => (
    <div className={styles.stepActions}>
      <button type="button" className={styles.btn} onClick={validateAndNext}>
        Next stage
      </button>
      {showBack ? (
        <button
          type="button"
          className={`${styles.btn} ${styles.btnGhost}`}
          onClick={goBack}
        >
          Back
        </button>
      ) : null}
    </div>
  );

  return (
    <>
      <div className={stepClass(0)}>
        <div className={styles.rocketWrap}>
          <div className={styles.rocket}>
            🚀
            <div className={styles.flame} />
          </div>
        </div>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>Ready to build something great?</h1>
          <p className={styles.sub}>
            Answer a few questions about your project and get an instant
            ballpark in Thai baht, before we hop on a call.
          </p>
        </div>
        <div className={styles.stepActions}>
          <button type="button" className={styles.btn} onClick={() => setStep(1)}>
            Begin countdown 🚀
          </button>
        </div>
      </div>

      <div className={stepClass(1)}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>Tell us about the project</h1>
        </div>
        <div className={styles.stepBody}>
        <div className={styles.stepStack}>
          <div className={styles.questionBlock}>
            <div className={styles.label}>Business name (optional)</div>
            <input
              className={styles.field}
              placeholder="e.g. Petal Story"
              value={state.bizName}
              onChange={(e) =>
                setState((s) => ({ ...s, bizName: e.target.value }))
              }
            />
          </div>
          <div className={styles.questionBlock}>
            <div className={styles.label}>New website, or a redesign?</div>
            <div className={`${styles.grid} ${styles.optionsBlock}`}>
              {(
                [
                  ["new", "New website"],
                  ["redesign", "Redesign existing site"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={`${styles.card} ${state.redesign === value ? styles.cardSelected : ""}`}
                  onClick={() =>
                    setState((s) => ({ ...s, redesign: value }))
                  }
                >
                  <b className={styles.cardTitle}>{label}</b>
                </button>
              ))}
            </div>
            <div
              className={`${styles.upload} ${state.redesign === "redesign" ? styles.uploadShow : ""}`}
            >
              <p>What&apos;s the current website address?</p>
              <input
                className={styles.field}
                placeholder="https://..."
                value={state.currentUrl}
                onChange={(e) =>
                  setState((s) => ({ ...s, currentUrl: e.target.value }))
                }
              />
            </div>
          </div>
          <div className={styles.questionBlock}>
            <div className={styles.label}>
              What&apos;s the main goal of this site?
            </div>
            <div className={`${styles.grid} ${styles.optionsBlock}`}>
              {FAST_TRACK_GOALS.slice(0, 4).map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`${styles.card} ${state.goalId === g.id ? styles.cardSelected : ""} ${isGoalRecommended(recommendations, g.id) ? styles.cardRecommended : ""}`}
                  onClick={() => setState((s) => ({ ...s, goalId: g.id }))}
                >
                  <span className={styles.cardEmoji}>{g.emoji}</span>
                  <b className={styles.cardTitle}>
                    {g.label}
                    {isGoalRecommended(recommendations, g.id) ? (
                      <span className={styles.rec}>Recommended</span>
                    ) : null}
                  </b>
                </button>
              ))}
            </div>
            <div className={`${styles.grid} ${styles.gridFull} ${styles.optionsBlock}`}>
              {FAST_TRACK_GOALS.slice(4).map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`${styles.card} ${state.goalId === g.id ? styles.cardSelected : ""} ${isGoalRecommended(recommendations, g.id) ? styles.cardRecommended : ""}`}
                  onClick={() => setState((s) => ({ ...s, goalId: g.id }))}
                >
                  <span className={styles.cardEmoji}>{g.emoji}</span>
                  <b className={styles.cardTitle}>{g.label}</b>
                </button>
              ))}
            </div>
          </div>
        </div>
        </div>
        <div className={styles.stepFooter}>
        <p className={`${styles.warn} ${warn === "warn1" ? styles.warnShow : ""}`}>
          Please choose new/redesign and a main goal to continue.
        </p>
        <StepActions />
        </div>
      </div>

      <div className={stepClass(2)}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>Which pages do you need?</h1>
          <p className={styles.sub}>
            Select every page, we&apos;ll add more if you tell us to.
          </p>
        </div>
        <div className={styles.stepBody}>
        <div className={`${styles.chips} ${styles.chipGrid} ${styles.optionsBlock}`}>
          {DEFAULT_PAGE_CHIPS.map((page) => {
            const selected = state.pages.includes(page);
            const rec = isPageRecommended(recommendations, page);
            return (
              <button
                key={page}
                type="button"
                className={`${styles.chip} ${selected ? styles.chipSelected : ""} ${rec && !selected ? styles.chipRecommended : ""}`}
                onClick={() => togglePage(page)}
              >
                {page}
                {rec ? " ★" : ""}
              </button>
            );
          })}
          {state.pages
            .filter(
              (p) =>
                !DEFAULT_PAGE_CHIPS.includes(
                  p as (typeof DEFAULT_PAGE_CHIPS)[number],
                ),
            )
            .map((page) => (
              <button
                key={page}
                type="button"
                className={`${styles.chip} ${styles.chipSelected}`}
                onClick={() => togglePage(page)}
              >
                {page}
              </button>
            ))}
        </div>
        <div className={styles.addrow}>
          <input
            className={styles.field}
            placeholder="Need another page? Type it"
            value={customPageInput}
            onChange={(e) => setCustomPageInput(e.target.value)}
          />
          <button
            type="button"
            className={`${styles.btn} ${styles.btnGhost} ${styles.btnInline}`}
            onClick={() => {
              const v = customPageInput.trim();
              if (!v) return;
              setState((s) =>
                s.pages.includes(v) ? s : { ...s, pages: [...s.pages, v] },
              );
              setCustomPageInput("");
            }}
          >
            Add
          </button>
        </div>
        </div>
        <div className={styles.stepFooter}>
        <p className={`${styles.warn} ${warn === "warn2" ? styles.warnShow : ""}`}>
          Select at least one page to continue.
        </p>
        <StepActions />
        </div>
      </div>

      <div className={stepClass(3)}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>What should your site do?</h1>
          <p className={styles.sub}>Pick everything that applies.</p>
        </div>
        <div className={styles.stepBody}>
        <div className={`${styles.chips} ${styles.chipGrid} ${styles.optionsBlock}`}>
          {SITE_FEATURE_CHIPS.map((f) => {
            const key = f.label;
            const selected = key in state.featureWeights;
            const rec = isFeatureRecommended(recommendations, key);
            return (
              <button
                key={key}
                type="button"
                className={`${styles.chip} ${selected ? styles.chipSelected : ""} ${rec && !selected ? styles.chipRecommended : ""}`}
                onClick={() => toggleFeature(key, f.weight)}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <div className={styles.addrow}>
          <input
            className={styles.field}
            placeholder="Something else? Type it and add"
            value={customFeatureInput}
            onChange={(e) => setCustomFeatureInput(e.target.value)}
          />
          <button
            type="button"
            className={`${styles.btn} ${styles.btnGhost} ${styles.btnInline}`}
            onClick={() => {
              const val = customFeatureInput.trim();
              if (!val) return;
              toggleFeature(val, CUSTOM_FEATURE_WEIGHT);
              setCustomFeatureInput("");
            }}
          >
            Add
          </button>
        </div>
        <div className={`${styles.questionBlock} ${styles.sectionSpaced}`}>
          <div className={styles.label}>Also need help with</div>
          <div className={styles.addonGrid}>
            {fastTrackAddons.map((addon) => (
              <FastTrackAddonCard
                key={addon.id}
                addon={addon}
                selected={addon.label in state.featureWeights}
                recommended={isAddonRecommended(recommendations, addon.label)}
                onToggle={() => toggleAddon(addon.label, addon.weight)}
              />
            ))}
          </div>
        </div>
        </div>
        <div className={styles.stepFooter}>
        <StepActions />
        </div>
      </div>

      <div className={stepClass(4)}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>Design approach</h1>
        </div>
        <div className={styles.stepBody}>
        <div className={`${styles.grid} ${styles.gridG3} ${styles.optionsBlock}`}>
          {DESIGN_OPTIONS.map((d) => (
            <button
              key={d.id}
              type="button"
              className={`${styles.card} ${state.designId === d.id ? styles.cardSelected : ""} ${isDesignRecommended(recommendations, d.id) ? styles.cardRecommended : ""}`}
              onClick={() => setState((s) => ({ ...s, designId: d.id }))}
            >
              <b className={styles.cardTitle}>
                {d.label}
                {isDesignRecommended(recommendations, d.id) ? (
                  <span className={styles.rec}>Recommended</span>
                ) : null}
              </b>
            </button>
          ))}
        </div>
        <div
          className={`${styles.upload} ${showDesignUpload ? styles.uploadShow : ""}`}
        >
          <p>
            Paste a link (Figma, Dribbble, live site) or upload a reference
            file.
          </p>
          <input
            className={styles.field}
            placeholder="https://figma.com/..."
            value={state.tplLink}
            onChange={(e) =>
              setState((s) => ({ ...s, tplLink: e.target.value }))
            }
          />
          <input
            type="file"
            accept=".fig,.sketch,.xd,.psd,.pdf,.png,.jpg,.jpeg,.zip"
            onChange={(e) => {
              const f = e.target.files?.[0];
              setState((s) => ({
                ...s,
                tplFileName: f ? `Selected: ${f.name}` : "",
              }));
            }}
          />
          {state.tplFileName ? (
            <div className={styles.filename}>{state.tplFileName}</div>
          ) : null}
        </div>
        <div className={`${styles.questionBlock} ${styles.sectionSpaced}`}>
          <div className={styles.label}>
            Will you edit the site yourself after launch?
          </div>
          <div className={styles.chips}>
            {CMS_OPTIONS.map((c) => (
              <button
                key={c.value}
                type="button"
                className={`${styles.chip} ${state.cms === c.value ? styles.chipSelected : ""} ${isCmsRecommended(state) && c.value === "1" ? styles.chipRecommended : ""}`}
                onClick={() => setState((s) => ({ ...s, cms: c.value }))}
              >
                {c.label}
                {isCmsRecommended(state) && c.value === "1" ? (
                  <span className={styles.rec}> Recommended</span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
        </div>
        <div className={styles.stepFooter}>
        <p className={`${styles.warn} ${warn === "warn4" ? styles.warnShow : ""}`}>
          Please choose a design approach and answer the CMS question.
        </p>
        <StepActions />
        </div>
      </div>

      <div className={stepClass(5)}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>Pick a brand palette</h1>
          <p className={styles.sub}>
            Choose from the library, or set your own colors.
          </p>
        </div>
        <div className={styles.stepBody}>
        <div className={`${styles.swatches} ${styles.optionsBlock}`}>
          {MAIN_PALETTES.map((swatch) => (
            <button
              key={swatch.id}
              type="button"
              className={`${styles.swatch} ${state.paletteLabel === swatch.name ? styles.swatchSelected : ""}`}
              onClick={() => applyPalette(swatch)}
            >
              <PaletteBar swatch={swatch} />
              <p className={styles.swatchLabel}>{swatch.name}</p>
            </button>
          ))}
          <button
            type="button"
            className={`${styles.swatch} ${styles.folder}`}
            onClick={() => setPaletteModalOpen(true)}
          >
            <span className={styles.folderEmoji}>📁</span>
            <p className={styles.swatchLabel}>More palettes</p>
          </button>
        </div>
        <div className={styles.customColor}>
          <p>Or set your own brand colors</p>
          <div className={styles.pickers}>
            {(
              [
                ["c1", "Primary", "customPrimary"],
                ["c2", "Secondary", "customSecondary"],
                ["c3", "Accent", "customAccent"],
              ] as const
            ).map(([id, label, key]) => (
              <div key={id}>
                <input
                  type="color"
                  id={id}
                  value={state[key]}
                  onChange={(e) => {
                    const hex = e.target.value;
                    setState((s) => ({ ...s, [key]: hex }));
                    applyMoodFromCustom(hexToMood(hex));
                  }}
                />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className={styles.stepFooter}>
        <p className={`${styles.warn} ${warn === "warn5" ? styles.warnShow : ""}`}>
          Pick a palette or set a custom color to continue.
        </p>
        <StepActions />
        </div>
      </div>

      <div className={stepClass(6)}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>Pick a style that feels like you</h1>
          <p className={styles.sub}>
            Highlighted styles match the palette you picked.
          </p>
        </div>
        <div className={styles.stepBody}>
        <div className={`${styles.grid} ${styles.optionsBlock}`}>
          {THEME_CARDS.map((t) => {
            const recommended =
              isThemeRecommended(recommendations, t.id) ||
              (state.paletteMood &&
                themeMoodMatches(t.moods, state.paletteMood));
            const thumbClass =
              t.id === "minimal"
                ? styles.thumbMinimal
                : t.id === "bold"
                  ? styles.thumbBold
                  : t.id === "playful"
                    ? styles.thumbPlayful
                    : t.id === "corporate"
                      ? styles.thumbCorporate
                      : t.id === "premium"
                        ? styles.thumbPremium
                        : styles.thumbEarthy;
            return (
              <button
                key={t.id}
                type="button"
                className={`${styles.card} ${state.themeId === t.id && !state.proceduralStyleId ? styles.cardSelected : ""} ${recommended ? styles.cardRecommended : ""}`}
                onClick={() =>
                  setState((s) => ({
                    ...s,
                    themeId: t.id,
                    proceduralStyleId: null,
                    proceduralStyleLabel: null,
                  }))
                }
              >
                <div className={`${styles.thumb} ${thumbClass}`}>
                  <span />
                  <span />
                </div>
                <b className={styles.cardTitle}>
                  {t.label}
                  {recommended ? (
                    <span className={styles.rec}>Recommended</span>
                  ) : null}
                </b>
              </button>
            );
          })}
          <button
            type="button"
            className={`${styles.swatch} ${styles.folder}`}
            onClick={() => setStyleModalOpen(true)}
          >
            <span className={styles.folderEmoji}>📁</span>
            <p className={styles.swatchLabel}>More styles</p>
          </button>
        </div>
        <div className={`${styles.questionBlock} ${styles.sectionSpaced}`}>
          <div className={styles.label}>Timeline</div>
          <div className={styles.chips}>
            {TIMELINE_OPTIONS.map((t) => (
              <button
                key={t.value}
                type="button"
                className={`${styles.chip} ${state.timelineMult === t.value ? styles.chipSelected : ""} ${isTimelineRecommended(recommendations, t.label) ? styles.chipRecommended : ""}`}
                onClick={() =>
                  setState((s) => ({ ...s, timelineMult: t.value }))
                }
              >
                {t.label}
                {isTimelineRecommended(recommendations, t.label) ? " ★" : ""}
              </button>
            ))}
          </div>
        </div>
        </div>
        <div className={styles.stepFooter}>
        <p className={`${styles.warn} ${warn === "warn6" ? styles.warnShow : ""}`}>
          Pick a style and a timeline to continue.
        </p>
        <StepActions />
        </div>
      </div>

      <div className={stepClass(7)}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>Anything else we should know?</h1>
          <p className={styles.sub}>
            Share references, constraints, or anything that helps us understand
            your vision. Optional.
          </p>
        </div>
        <div className={styles.stepBody}>
        <textarea
          className={styles.textarea}
          placeholder="e.g. We want a calm feel like our physical store, need EN/TH, launching before Songkran…"
          value={state.visionNotes}
          onChange={(e) =>
            setState((s) => ({ ...s, visionNotes: e.target.value }))
          }
        />
        </div>
        <div className={styles.stepFooter}>
        <StepActions />
        </div>
      </div>

      <div className={stepClass(8)}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>Your flight plan</h1>
        </div>
        <div className={styles.stepBody}>
        <div className={styles.flightplan}>
          {flightRows.map((row) => (
            <div key={row.label} className={styles.fpRow}>
              <div>
                <div className={styles.fpLabel}>{row.label}</div>
                <div className={styles.fpVal}>{row.value}</div>
              </div>
              <button
                type="button"
                className={styles.fpEdit}
                onClick={() => setStep(row.editStep)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
        <div className={styles.rocketWrap}>
          <div
            className={`${styles.rocket} ${rocketBlast ? styles.rocketBlastoff : ""}`}
          >
            🚀
            <div className={styles.flame} />
          </div>
        </div>
        <p
          className={`${styles.ignite} ${igniteVisible ? "" : styles.igniteHidden}`}
        >
          Igniting engines…
        </p>
        </div>
        <div className={styles.stepFooter}>
        <div className={styles.stepActions}>
          <button
            type="button"
            className={styles.btn}
            disabled={launching}
            onClick={onLaunch}
          >
            Launch my estimate 🚀
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnGhost}`}
            onClick={goBack}
          >
            Back
          </button>
        </div>
        </div>
      </div>

      <div className={`${stepClass(9)} ${styles.result}`}>
        <div className={styles.stepHeader}>
          <h1 className={styles.title}>🎉 Touchdown</h1>
          <p className={styles.sub}>Here&apos;s your fast-track estimate</p>
        </div>
        {estimateResult ? (
          <>
            <div className={styles.estimate}>{estimateResult.rangeLabel}</div>
            <div className={styles.breakdown}>
              {estimateResult.rows.map((row) => (
                <div key={row.id} className={styles.bdRow}>
                  <div className={styles.bdTop}>
                    <span className={styles.bdLabelWrap}>
                      {row.label}
                      <button
                        type="button"
                        className={styles.infoBtn}
                        aria-expanded={openInfoIds.has(row.id)}
                        onClick={() =>
                          setOpenInfoIds((prev) => {
                            const next = new Set(prev);
                            if (next.has(row.id)) next.delete(row.id);
                            else next.add(row.id);
                            return next;
                          })
                        }
                      >
                        i
                      </button>
                    </span>
                    <span>{row.value}</span>
                  </div>
                  <div
                    className={`${styles.bdDesc} ${openInfoIds.has(row.id) ? styles.bdDescShow : ""}`}
                  >
                    {row.description}
                  </div>
                </div>
              ))}
              <div className={`${styles.bdRow} ${styles.tot}`}>
                <div className={styles.bdTop}>
                  <span>Estimated range</span>
                  <span>
                    ฿{estimateResult.low.toLocaleString("en-US")}–
                    {estimateResult.high.toLocaleString("en-US")}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <p className={styles.disclaimer}>
          Your Fast-Track estimate is indicative and does not constitute a
          binding offer. Final pricing is confirmed in a written proposal
          following discovery.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookingLink}
        >
          Book my free discovery call
        </a>
      </div>

      <FastTrackPaletteLibraryModal
        open={paletteModalOpen}
        title="More palettes"
        palettes={fullPalettes}
        onClose={() => setPaletteModalOpen(false)}
        onSelectPalette={(swatch) => {
          applyPalette(swatch);
          setPaletteModalOpen(false);
        }}
      />
      <FastTrackStyleLibraryModal
        open={styleModalOpen}
        title="More styles"
        stylesList={fullStyles}
        recommendedIds={recommendations.style}
        onClose={() => setStyleModalOpen(false)}
        onSelectStyle={(style) => {
          selectProceduralStyle(style);
          setStyleModalOpen(false);
        }}
      />
    </>
  );
}
