import {
  findTestimonialById,
  testimonialSpotlight,
} from "@/lib/content";
import { FadeIn } from "@/components/motion/FadeIn";

export function TestimonialQuote() {
  const spotlight = findTestimonialById(testimonialSpotlight.spotlightId);
  if (!spotlight) return null;

  return (
    <section className="border-y border-ink/10 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn>
          <blockquote className="max-w-4xl">
            <p className="font-display text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-snug tracking-tight text-ink">
              &ldquo;{spotlight.quote}&rdquo;
            </p>
            <footer className="mt-8 font-display text-lg font-semibold text-ink/80">
              — {spotlight.clientName}
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
