import { processSteps } from "@/lib/content";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";

export function ProcessRail() {
  return (
    <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <StaggerItem key={step.number}>
          <article className="relative h-full rounded-2xl border border-ink/10 p-6 pt-8">
            <span className="font-display text-5xl font-bold text-ink/10">
              {step.number}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-ink/65">{step.description}</p>
          </article>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}

export function ProcessRailSection() {
  return (
    <FadeIn>
      <h2
        id="process-heading"
        className="font-display text-3xl font-bold tracking-tight md:text-4xl"
      >
        How we work
      </h2>
      <div className="mt-10">
        <ProcessRail />
      </div>
    </FadeIn>
  );
}
