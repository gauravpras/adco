"use client";

import styles from "@/components/fast-track/fast-track-quote.module.css";
import { FAST_TRACK_GOALS } from "@/lib/fast-track-wizard-data";
import type { FastTrackWizardState } from "@/lib/fast-track-wizard-state";
import {
  buildPreviewModel,
  type PreviewFeatureWidget,
} from "@/lib/fast-track-preview-model";
import { useMemo } from "react";

type FastTrackLivePreviewProps = {
  state: FastTrackWizardState;
  step: number;
};

function navLabel(page: string): string {
  if (page === "Services / Products") return "Products";
  if (page === "Portfolio / Case studies") return "Work";
  if (page.length > 12) return page.slice(0, 11) + "…";
  return page;
}

function FeatureWidgets({ widgets }: { widgets: PreviewFeatureWidget[] }) {
  if (widgets.length === 0) return null;
  return (
    <div className={styles.previewWidgets}>
      {widgets.includes("blogPosts") ? (
        <div className={styles.previewBlogRow}>
          <span />
          <span />
          <span className={styles.previewWidgetLabel}>Latest posts</span>
        </div>
      ) : null}
      {widgets.includes("liveChat") ? (
        <div className={styles.previewChatBubble} aria-hidden>
          Hi there
        </div>
      ) : null}
    </div>
  );
}

export function FastTrackLivePreview({ state, step }: FastTrackLivePreviewProps) {
  const model = useMemo(() => buildPreviewModel(state), [state]);
  const goal = FAST_TRACK_GOALS.find((g) => g.id === state.goalId);
  const showFullPreview = step >= 1 && step <= 8;

  if (step === 0 || step === 9) {
    return (
      <aside className={styles.previewColumn} aria-hidden={step === 0}>
        <p className={styles.previewColumnLabel}>Live preview</p>
        <div className={styles.previewRocketOnly}>
          <span className={styles.previewRocketEmoji}>🚀</span>
          <p className={styles.previewRocketCopy}>
            {step === 0
              ? "Your site preview builds as you answer."
              : "Launch complete. Book a call to refine the plan."}
          </p>
        </div>
      </aside>
    );
  }

  if (!showFullPreview) return null;

  const overlayClass =
    model.designOverlay === "wireframe"
      ? styles.previewOverlayWireframe
      : model.designOverlay === "mixed"
        ? styles.previewOverlayMixed
        : model.designOverlay === "filled"
          ? styles.previewOverlayFilled
          : "";

  return (
    <aside className={styles.previewColumn}>
      <p className={styles.previewColumnLabel}>Live preview</p>
      <div
        className={`${styles.previewBrowser} ${styles.previewFrame}`}
        data-preview-style={model.styleKey}
        data-preview-urgent={model.isUrgent ? "true" : undefined}
        style={
          {
            "--preview-primary": state.customPrimary,
            "--preview-secondary": state.customSecondary,
            "--preview-accent": state.customAccent,
            "--preview-body-tint": model.bodyTint,
            background: model.heroGradient
              ? undefined
              : `color-mix(in srgb, ${state.customAccent} 8%, #0a1028)`,
          } as React.CSSProperties
        }
      >
        <div className={styles.previewChrome}>
          <span />
          <span />
          <span />
          <span className={styles.previewUrl}>
            {state.bizName
              ? `${state.bizName.toLowerCase().replace(/\s+/g, "")}.com`
              : "yourbusiness.com"}
          </span>
        </div>
        <header className={styles.previewHeader}>
          <span className={styles.previewLogo}>{model.headlineText}</span>
          {model.showCms ? (
            <span className={styles.previewCmsBadge}>CMS</span>
          ) : null}
          <nav className={styles.previewNav}>
            {model.navPages.map((page, i) => (
              <span
                key={page}
                className={`${styles.previewNavItem} ${i === 0 ? styles.previewNavActive : ""}`}
              >
                {navLabel(page)}
              </span>
            ))}
          </nav>
          <span className={styles.previewBadge}>{model.pageCount} pages</span>
        </header>

        <div
          className={`${styles.previewHero} ${overlayClass} ${model.showCms ? styles.previewHeroCms : ""}`}
          style={
            model.heroGradient
              ? { background: model.heroGradient }
              : undefined
          }
        >
          <p className={styles.previewGoalLine}>{goal?.label ?? "Your site"}</p>

          {goal?.id === "leads" || model.widgets.includes("contactForm") ? (
            <div className={styles.previewFormBlock}>
              <span />
              <span />
              <span className={styles.previewCta}>Get in touch</span>
            </div>
          ) : null}
          {goal?.id === "ecom" || model.widgets.includes("ecommerce") ? (
            <div className={styles.previewProductGrid}>
              <span />
              <span />
              <span />
            </div>
          ) : null}
          {goal?.id === "booking" || model.widgets.includes("booking") ? (
            <div className={styles.previewBooking}>
              <span>Pick a date</span>
              <span className={styles.previewCta}>Book now</span>
            </div>
          ) : null}
          {goal?.id === "webapp" ? (
            <div className={styles.previewDashboard}>
              <span />
              <span />
              <span />
              <span />
            </div>
          ) : null}
          {!goal || goal.id === "showcase" ? (
            <div className={styles.previewShowcase}>
              <span className={styles.previewHeadline} />
              <span className={styles.previewSubline} />
            </div>
          ) : null}

          <FeatureWidgets widgets={model.widgets} />
        </div>

        {model.footerPages.length > 0 ? (
          <footer className={styles.previewPageFooter}>
            {model.footerPages.map((p) => (
              <span key={p}>{navLabel(p)}</span>
            ))}
          </footer>
        ) : null}

        <div className={styles.previewMeta}>
          {model.metaPalette ? (
            <span className={styles.previewTag}>{model.metaPalette}</span>
          ) : null}
          {model.deliveryLabel ? (
            <span
              className={
                model.isUrgent
                  ? styles.previewTagUrgent
                  : styles.previewTagAccent
              }
            >
              {model.deliveryLabel}
            </span>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
