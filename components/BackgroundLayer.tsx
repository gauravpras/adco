"use client";

import { subscribeDocumentScrollProgress } from "@/lib/scrollProgress";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type StaticBloomBackgroundProps = {
  baseColor: string;
  gradients: string[];
};

function ProgressStaticBloomBackground({
  baseColor,
  gradients,
}: StaticBloomBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);

  useEffect(() => {
    return subscribeDocumentScrollProgress((value) => {
      progress.set(value);
    });
  }, [progress]);

  const washOpacity = useTransform(progress, [0, 0.35, 0.7, 1], [1, 0.92, 0.88, 0.85]);
  const driftY = useTransform(progress, [0, 1], ["0%", "-4%"]);

  if (reduceMotion) {
    return (
      <StaticBloomBackground baseColor={baseColor} gradients={gradients} />
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0" style={{ backgroundColor: baseColor }} />
      <motion.div className="absolute inset-0" style={{ opacity: washOpacity }}>
        <motion.div
          className="absolute inset-0 min-h-[110%] w-full"
          style={{ y: driftY }}
        >
          {gradients.map((gradient) => (
            <div
              key={gradient}
              className="absolute inset-0"
              style={{ background: gradient }}
            />
          ))}
          <div className="hero-grain absolute inset-0" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function StaticBloomBackground({
  baseColor,
  gradients,
}: StaticBloomBackgroundProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0" style={{ backgroundColor: baseColor }} />
      {gradients.map((gradient) => (
        <div
          key={gradient}
          className="absolute inset-0"
          style={{ background: gradient }}
        />
      ))}
      <div className="hero-grain absolute inset-0" />
    </div>
  );
}

function SolutionsBackground() {
  return (
    <ProgressStaticBloomBackground
      baseColor="#F1F1F1"
      gradients={[
        "radial-gradient(ellipse 75% 58% at 8% 0%, rgba(0,74,173,0.38), transparent 62%)",
        "radial-gradient(ellipse 50% 42% at 92% 18%, rgba(0,74,173,0.22), transparent 55%)",
        "radial-gradient(ellipse 40% 35% at 50% 55%, rgba(104,101,225,0.1), transparent 58%)",
        "radial-gradient(ellipse 45% 38% at 100% 100%, rgba(238,42,69,0.12), transparent 55%)",
      ]}
    />
  );
}

function ContactBackground() {
  return (
    <ProgressStaticBloomBackground
      baseColor="#F1F1F1"
      gradients={[
        "radial-gradient(ellipse 65% 50% at 88% 8%, rgba(104,101,225,0.34), transparent 58%)",
        "radial-gradient(ellipse 55% 48% at 15% 35%, rgba(238,42,69,0.22), transparent 55%)",
        "radial-gradient(ellipse 50% 45% at 45% 85%, rgba(238,42,69,0.14), transparent 52%)",
        "radial-gradient(ellipse 40% 35% at 5% 100%, rgba(0,74,173,0.14), transparent 55%)",
      ]}
    />
  );
}

function ScrollBackground() {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);

  useEffect(() => {
    return subscribeDocumentScrollProgress((value) => {
      progress.set(value);
    });
  }, [progress]);

  const heroDarkOpacity = useTransform(progress, [0, 0.12, 0.28], [1, 0.85, 0]);
  const lightWashOpacity = useTransform(
    progress,
    [0.08, 0.22, 0.52, 0.68],
    [0, 1, 1, 0.35],
  );
  const lowerDarkOpacity = useTransform(
    progress,
    [0.42, 0.58, 0.88, 1],
    [0, 0.75, 1, 0.9],
  );

  if (reduceMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-ink via-[#F1F1F1] to-ink"
        aria-hidden
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0 bg-[#272727]"
        style={{ opacity: heroDarkOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(0,74,173,0.45),transparent_55%)]"
        style={{ opacity: heroDarkOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_85%_65%,rgba(104,101,225,0.28),transparent_55%)]"
        style={{ opacity: heroDarkOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(238,42,69,0.25),transparent_50%)]"
        style={{ opacity: heroDarkOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-[#F1F1F1]"
        style={{ opacity: lightWashOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink to-[#272727]"
        style={{ opacity: lowerDarkOpacity }}
      />
    </div>
  );
}

export function BackgroundLayer() {
  const pathname = usePathname();
  if (pathname === "/solutions") {
    return <SolutionsBackground />;
  }
  if (pathname === "/contact") {
    return <ContactBackground />;
  }
  return <ScrollBackground />;
}
