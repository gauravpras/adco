import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/FadeIn";
import { lifecycleSteps, lifecycleSupportingLine } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function LifecycleStepper() {
  return (
    <FadeIn>
      <p className="max-w-2xl text-lg text-ink/70">{lifecycleSupportingLine}</p>
      <StaggerChildren className="mt-10 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-7 md:overflow-visible">
        {lifecycleSteps.map((step, index) => (
          <StaggerItem key={step}>
            <div className="min-w-[7rem] rounded-2xl border border-ink/10 bg-ink/[0.02] p-4 md:min-w-0">
              <span className="text-xs font-semibold text-adco-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-display text-sm font-semibold md:text-base">
                {step}
              </p>
              {index < lifecycleSteps.length - 1 ? (
                <ArrowRight
                  className="mt-3 hidden h-4 w-4 text-ink/30 md:block"
                  aria-hidden
                />
              ) : null}
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </FadeIn>
  );
}
