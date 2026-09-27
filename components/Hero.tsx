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

const welcomeMarqueeClass =
  "hero-welcome-marquee-text shrink-0 whitespace-nowrap px-[0.2em] font-display text-[clamp(3.5rem,14vw,9rem)] font-bold leading-none tracking-tighter";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

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
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="hero-grain pointer-events-none absolute inset-0 z-[1] opacity-30" aria-hidden />

        <div className="pointer-events-none absolute inset-x-0 top-24 z-[2] md:top-28">
          {reduceMotion ? (
            <p className={`${welcomeMarqueeClass} text-center`}>
              {heroContent.welcomeLine}
            </p>
          ) : (
            <motion.div
              className="hero-welcome-marquee overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: welcomeEase }}
            >
              <div className="hero-welcome-marquee-track flex w-max items-center">
                {[0, 1].map((copy) => (
                  <span
                    key={copy}
                    className={welcomeMarqueeClass}
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                    {heroContent.welcomeLine}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          className="relative z-10 flex h-full flex-col px-6 pb-8 pt-24 md:px-10 md:pb-12 md:pt-28 lg:px-12"
          style={
            reduceMotion
              ? undefined
              : { y: contentY, opacity: contentOpacity }
          }
        >
          <div className="mt-auto grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-end">
            <motion.p
              className="text-sm leading-relaxed text-white mix-blend-difference md:text-[15px]"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: welcomeEase }}
            >
              {heroContent.subhead}
            </motion.p>

            <motion.h1
              className="font-display text-[clamp(2.5rem,11vw,8rem)] font-bold leading-[0.88] tracking-tighter lg:text-right"
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: welcomeEase }}
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
