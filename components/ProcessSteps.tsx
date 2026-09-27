import { LinkArrow } from "@/components/LinkArrow";
import { processSection, processSteps } from "@/lib/content";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn className="flex flex-col gap-8 text-white lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="process-heading"
              className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-tight text-white"
            >
              {processSection.headline}
            </h2>
            <p className="mt-4 text-white/75">{processSection.subhead}</p>
          </div>
          <LinkArrow
            href={processSection.cta.href}
            label={processSection.cta.label}
            variant="light"
            accent="red"
          />
        </FadeIn>

        <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <StaggerItem key={step.number}>
              <article className="relative h-full rounded-2xl border border-ink/8 bg-white p-6 shadow-sm shadow-ink/5 md:p-7">
                <span className="font-display text-sm font-bold text-signal-red">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/** @deprecated Use ProcessSteps */
export const ProcessRailSection = ProcessSteps;
