"use client";

import { heroContent } from "@/lib/content";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const welcomeEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const welcomeY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.92], [1, 0]);

  const sectionHeight = reduceMotion ? "min-h-svh h-svh" : "h-[200vh]";

  return (
    <section
      id="home-hero"
      ref={containerRef}
      className={`relative w-full ${sectionHeight}`}
      aria-label="Hero"
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div className="hero-grain pointer-events-none absolute inset-0 z-[1] opacity-30" aria-hidden />

        <motion.div
          className="pointer-events-none relative z-[2] w-full shrink-0 overflow-hidden px-6 pt-24 md:px-10 md:pt-28 lg:px-12"
          aria-hidden
          style={reduceMotion ? undefined : { y: welcomeY }}
        >
          <div className="max-h-[min(34vh,17rem)] md:max-h-[min(36vh,19rem)]">
            {heroContent.welcomeLineRows.map((row, index) => (
              <motion.p
                key={row}
                className="font-display text-[clamp(2.25rem,9vw,6.5rem)] font-bold leading-[0.92] tracking-tighter text-white/90 mix-blend-difference"
                style={{ marginLeft: `${index * -5}%` }}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 28, filter: "blur(8px)" }
                }
                animate={{
                  opacity: 0.38 - index * 0.08,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.2 + index * 0.14,
                  duration: 0.85,
                  ease: welcomeEase,
                }}
              >
                {row}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <div className="min-h-[clamp(3rem,8vh,6rem)] shrink-0" aria-hidden />

        <motion.div
          className="relative z-10 mt-auto flex shrink-0 flex-col px-6 pb-8 md:px-10 md:pb-12 lg:px-12"
          style={
            reduceMotion
              ? undefined
              : { y: contentY, opacity: contentOpacity }
          }
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-end">
            <motion.p
              className="text-sm leading-relaxed text-white mix-blend-difference md:text-[15px]"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: welcomeEase }}
            >
              {heroContent.subhead}
            </motion.p>

            <motion.h1
              className="font-display text-[clamp(2.5rem,11vw,8rem)] font-bold leading-[0.88] tracking-tighter lg:text-right"
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: welcomeEase }}
            >
              <span className="block text-white mix-blend-difference">
                {heroContent.headlineLine1}
              </span>
              <span className="block bg-gradient-to-r from-adco-blue via-adco-purple to-signal-red bg-clip-text text-transparent">
                {heroContent.headlineLine2}
              </span>
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
