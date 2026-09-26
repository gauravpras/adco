"use client";

import { Button } from "@/components/Button";
import { heroContent } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden hero-gradient text-white">
      <div
        className="pointer-events-none absolute inset-0 launch-trail opacity-60"
        aria-hidden
      />
      <div className="relative mx-auto max-w-content px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          {heroContent.eyebrow}
        </p>

        <h1 className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {heroContent.headline.split(" ").map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.25em] inline-block bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent"
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05 * i,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p className="mt-8 max-w-2xl text-base text-white/75 md:text-lg">
          {heroContent.subhead}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label}
          </Button>
          <Button href={heroContent.secondaryCta.href} variant="secondaryDark">
            {heroContent.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
