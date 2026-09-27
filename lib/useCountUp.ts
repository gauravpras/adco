"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  target: number | undefined,
  active: boolean,
  durationMs = 1800,
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (target === undefined) {
      setValue(0);
      return;
    }
    if (!active) {
      setValue(0);
      return;
    }

    setValue(0);
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs]);

  return target === undefined ? 0 : value;
}

export function formatCountDisplay(
  count: number,
  suffix?: string,
  isPlaceholder?: boolean,
  placeholderText?: string,
): string {
  if (isPlaceholder && placeholderText) return placeholderText;
  const formatted = count.toLocaleString();
  return suffix ? `${formatted}${suffix}` : formatted;
}
