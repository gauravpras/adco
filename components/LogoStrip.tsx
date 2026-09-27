import { testimonialSpotlight } from "@/lib/content";
import { FadeIn } from "@/components/motion/FadeIn";

export function LogoStrip() {
  return (
    <section
      className="flex flex-col justify-center bg-ink/80 py-10 text-white backdrop-blur-sm md:py-12"
      aria-label="Trusted by"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm text-white/75">{testimonialSpotlight.trustLine}</p>
          <ul className="flex flex-wrap gap-3">
            {testimonialSpotlight.badgeNames.map((name) => (
              <li
                key={name}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/85"
              >
                {name}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
