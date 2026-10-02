"use client";

import { FastTrackLivePreview } from "@/components/fast-track/FastTrackLivePreview";
import { useFastTrackWizard } from "@/components/fast-track/useFastTrackWizard";
import { WizardFormSteps } from "@/components/fast-track/WizardFormSteps";
import styles from "@/components/fast-track/fast-track-quote.module.css";
import Link from "next/link";
import { useEffect, useMemo } from "react";

const STAR_SEED = [
  [12, 8, 0.2],
  [45, 22, 1.1],
  [78, 55, 0.5],
  [33, 70, 1.8],
  [91, 15, 0.9],
  [5, 40, 1.4],
  [62, 88, 0.3],
  [28, 33, 2.0],
  [85, 42, 0.7],
  [18, 61, 1.6],
  [52, 5, 0.4],
  [71, 73, 1.2],
  [38, 91, 0.8],
  [95, 28, 1.9],
  [8, 82, 0.6],
  [58, 48, 1.0],
  [22, 18, 1.5],
  [88, 65, 0.1],
  [42, 38, 2.2],
  [67, 12, 0.85],
  [15, 95, 1.3],
  [75, 58, 0.55],
  [48, 25, 1.7],
  [92, 78, 0.95],
] as const;

export function FastTrackQuoteWizard() {
  const api = useFastTrackWizard();
  const { step, shake, state, dotDoneThrough, PROGRESS_DOTS, launchTimersRef } =
    api;

  const stars = useMemo(
    () =>
      STAR_SEED.map(([top, left, delay], i) => ({
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        delay: `${delay}s`,
      })),
    [],
  );

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timers = launchTimersRef.current;
    return () => {
      document.body.style.overflow = prev;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [launchTimersRef]);

  return (
    <div className={styles.root}>
      <Link
        href="/solutions"
        className={styles.close}
        aria-label="Close and return to Solutions"
      >
        ✕
      </Link>
      <div className={`${styles.stage} ${shake ? styles.stageShake : ""}`}>
        <div className={styles.stars} aria-hidden>
          {stars.map((s) => (
            <div
              key={s.id}
              className={styles.star}
              style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            />
          ))}
        </div>

        <div className={styles.stageInner}>
          <div className={styles.progress} aria-hidden>
            {Array.from({ length: PROGRESS_DOTS }, (_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${i <= dotDoneThrough ? styles.dotDone : ""}`}
              />
            ))}
          </div>

          <div className={styles.splitLayout}>
            <div className={styles.formColumn} data-step={step}>
              <div className={styles.panel}>
                <WizardFormSteps api={api} />
              </div>
            </div>
            <FastTrackLivePreview state={state} step={step} />
          </div>
        </div>
      </div>
    </div>
  );
}
