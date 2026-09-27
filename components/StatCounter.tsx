"use client";

import { LinkArrow } from "@/components/LinkArrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { statsSection, type StatItem } from "@/lib/content";
import {
  formatCountDisplay,
  useCountUp,
} from "@/lib/useCountUp";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatValue({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = useCountUp(
    stat.countTarget,
    inView && !reduceMotion,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display =
    stat.countTarget !== undefined && !stat.isPlaceholder
      ? formatCountDisplay(count, stat.suffix)
      : stat.value;

  return (
    <div ref={ref}>
      <p
        className={`font-display text-4xl font-bold tracking-tight md:text-5xl ${
          stat.isPlaceholder ? "text-ink/35" : "text-ink"
        }`}
      >
        {display}
      </p>
    </div>
  );
}

export function StatCounter() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content rounded-3xl border border-ink/5 bg-white/90 px-5 py-10 shadow-sm md:px-8 md:py-12">
        <FadeIn className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight">
            {statsSection.headline}
          </h2>
          <LinkArrow href={statsSection.cta.href} label={statsSection.cta.label} />
        </FadeIn>

        <FadeIn className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" delay={0.08}>
          {statsSection.stats.map((stat) => (
            <div key={stat.title} className="border-t border-ink/10 pt-6">
              <StatValue stat={stat} />
              <h3 className="mt-4 font-display text-lg font-semibold">{stat.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{stat.description}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
