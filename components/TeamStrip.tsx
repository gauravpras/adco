import { teamStrip } from "@/lib/content";
import { FadeIn } from "@/components/motion/FadeIn";

export function TeamStrip() {
  return (
    <section className="bg-white/70 py-16 md:py-20">
      <div className="mx-auto max-w-content px-5 text-center md:px-8">
        <FadeIn>
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight">
            {teamStrip.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/65">{teamStrip.line}</p>
        </FadeIn>
      </div>
    </section>
  );
}
