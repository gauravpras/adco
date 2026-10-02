"use client";

import { setDocumentScrollProgress } from "@/lib/scrollProgress";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type ScrollToOptions = {
  immediate?: boolean;
};

type SmoothScrollContextValue = {
  scrollTo: (target: HTMLElement | string, options?: ScrollToOptions) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

export function useSmoothScroll(): SmoothScrollContextValue {
  const ctx = useContext(SmoothScrollContext);
  if (!ctx) {
    throw new Error("useSmoothScroll must be used within SmoothScrollProvider");
  }
  return ctx;
}

function scrollMarginTop(el: HTMLElement): number {
  const value = getComputedStyle(el).scrollMarginTop;
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const pathname = usePathname();
  const isFastTrack = pathname === "/fast-track-quote";
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotionRef = useRef(false);

  const scrollTo = useCallback(
    (target: HTMLElement | string, options?: ScrollToOptions) => {
      const el =
        typeof target === "string" ? document.getElementById(target) : target;
      if (!el) return;

      const top =
        window.scrollY + el.getBoundingClientRect().top - scrollMarginTop(el);
      const immediate = reducedMotionRef.current || options?.immediate;

      const lenis = lenisRef.current;
      if (lenis && !immediate) {
        lenis.scrollTo(top);
        return;
      }

      window.scrollTo({ top, behavior: "auto" });
    },
    [],
  );

  useEffect(() => {
    if (isFastTrack) {
      setDocumentScrollProgress(0);
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = media.matches;

    if (media.matches) {
      const syncNative = () => {
        const limit =
          document.documentElement.scrollHeight - window.innerHeight;
        setDocumentScrollProgress(limit > 0 ? window.scrollY / limit : 0);
      };
      syncNative();
      window.addEventListener("scroll", syncNative, { passive: true });
      return () => window.removeEventListener("scroll", syncNative);
    }

    const lenis = new Lenis({
      duration: 1,
      lerp: 0.12,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
    });
    lenisRef.current = lenis;

    const onScroll = () => {
      setDocumentScrollProgress(lenis.progress);
    };

    const unsubscribe = lenis.on("scroll", onScroll);
    onScroll();

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      unsubscribe();
      lenis.destroy();
      lenisRef.current = null;
      setDocumentScrollProgress(0);
    };
  }, [isFastTrack]);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
