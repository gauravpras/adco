"use client";

import { AbstractVisual } from "@/components/AbstractVisual";
import { splitStatement } from "@/lib/content";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SplitStatement() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const lineX = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink py-20 text-white md:py-32"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.h2
              className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tighter mix-blend-difference"
              style={reduceMotion ? undefined : { x: lineX }}
            >
              {splitStatement.headline}
            </motion.h2>
            <p className="mt-8 max-w-md text-base text-white/70">
              {splitStatement.supporting}
            </p>
          </div>

          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[3/4]"
            style={reduceMotion ? undefined : { y: imageY }}
          >
            <AbstractVisual alt={splitStatement.imageAlt} className="absolute inset-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
