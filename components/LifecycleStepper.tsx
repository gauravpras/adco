import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/FadeIn";
import { lifecycleSteps, lifecycleSupportingLine } from "@/lib/content";

export function LifecycleStepper() {
  return (
    <section className="border-y border-ink/10 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn>
          <p className="max-w-2xl text-lg text-ink/70">{lifecycleSupportingLine}</p>
        </FadeIn>
        <StaggerChildren className="mt-10 flex gap-3 overflow-x-auto pb-2 md:gap-4">
          {lifecycleSteps.map((step, index) => (
            <StaggerItem key={step}>
              <div className="min-w-[8.5rem] rounded-xl border border-ink/10 bg-canvas px-5 py-6 md:min-w-[9.5rem]">
                <span className="font-display text-2xl font-bold text-ink/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-base font-semibold tracking-tight md:text-lg">
                  {step}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
