import { Button } from "@/components/Button";

type CTABandProps = {
  headline: string;
  buttonLabel: string;
  buttonHref?: string;
};

export function CTABand({
  headline,
  buttonLabel,
  buttonHref = "/contact",
}: CTABandProps) {
  return (
    <section className="border-t border-white/20 bg-ink/90 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <Button href={buttonHref}>{buttonLabel}</Button>
      </div>
    </section>
  );
}
