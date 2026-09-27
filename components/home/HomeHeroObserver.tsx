"use client";

import { setHomeHeroVisible } from "@/lib/homeScrollState";
import { useEffect } from "react";

type BloomHeroObserverProps = {
  heroId: string;
};

export function BloomHeroObserver({ heroId }: BloomHeroObserverProps) {
  useEffect(() => {
    setHomeHeroVisible(true);

    const hero = document.getElementById(heroId);
    if (!hero) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setHomeHeroVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setHomeHeroVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { root: null, threshold: [0, 0.35, 0.6, 1] },
    );

    observer.observe(hero);
    return () => {
      observer.disconnect();
      setHomeHeroVisible(true);
    };
  }, [heroId]);

  return null;
}

/** @deprecated use BloomHeroObserver with heroId="home-hero" */
export function HomeHeroObserver() {
  return <BloomHeroObserver heroId="home-hero" />;
}
