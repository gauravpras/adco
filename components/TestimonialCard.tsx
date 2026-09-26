import type { Testimonial } from "@/lib/content";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const isDark = testimonial.variant === "dark";

  return (
    <article
      className={`flex h-full flex-col rounded-2xl p-8 ${
        isDark ? "bg-ink text-white" : "border border-ink/10 bg-ink/[0.02]"
      }`}
    >
      <Quote
        className={`h-8 w-8 ${isDark ? "text-adco-blue" : "text-signal-red/80"}`}
        aria-hidden
      />
      <p className={`mt-4 flex-1 text-base ${isDark ? "text-white/85" : "text-ink/75"}`}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <p className="font-display font-semibold">{testimonial.clientName}</p>
          <p className={`text-xs ${isDark ? "text-white/50" : "text-ink/50"}`}>
            Client
          </p>
        </div>
        <p
          className="font-display text-2xl font-bold text-growth-green"
          title="Placeholder — client to confirm real metric"
        >
          {testimonial.statPlaceholder}
        </p>
      </div>
    </article>
  );
}
