import { clientWinsSection, testimonials } from "@/lib/content";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";

export function ClientWins() {
  const wins = testimonials.slice(0, 3);

  return (
    <section className="bg-canvas py-16 md:py-24" aria-labelledby="client-wins-heading">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            {clientWinsSection.eyebrow}
          </p>
          <h2 id="client-wins-heading" className="sr-only">
            Client wins
          </h2>
        </FadeIn>

        <StaggerChildren className="mt-10 grid gap-6 md:grid-cols-3">
          {wins.map((item) => (
            <StaggerItem key={item.id}>
              <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-8">
                <p className="flex-1 text-sm leading-relaxed text-ink/75">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-6 font-display font-semibold">{item.clientName}</p>
                <p className="mt-1 border-l-2 border-growth-green pl-2 text-xs font-semibold text-ink">
                  {item.statPlaceholder}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
