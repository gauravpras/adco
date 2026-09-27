import { featureShowcase } from "@/lib/content";
import { FadeIn } from "@/components/motion/FadeIn";

function ReportMockup() {
  return (
    <svg
      viewBox="0 0 400 280"
      className="h-full w-full"
      role="img"
      aria-label={featureShowcase.mockupCaption}
    >
      <rect width="400" height="280" rx="16" fill="#272727" />
      <rect x="24" y="24" width="120" height="12" rx="4" fill="#004AAD" opacity="0.9" />
      <rect x="24" y="52" width="200" height="8" rx="3" fill="#F1F1F1" opacity="0.2" />
      <rect x="24" y="88" width="352" height="140" rx="8" fill="#F1F1F1" opacity="0.06" />
      <polyline
        points="40,200 100,160 160,175 220,120 280,130 360,90"
        fill="none"
        stroke="#05D975"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="100" cy="160" r="5" fill="#05D975" />
      <circle cx="220" cy="120" r="5" fill="#05D975" />
      <circle cx="360" cy="90" r="5" fill="#05D975" />
      <rect x="24" y="244" width="160" height="8" rx="3" fill="#F1F1F1" opacity="0.15" />
    </svg>
  );
}

export function FeatureShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn className="max-w-2xl rounded-3xl border border-ink/5 bg-white/90 p-6 md:p-8">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
            {featureShowcase.headline}
          </h2>
          <p className="mt-4 text-lg text-ink/65">{featureShowcase.subhead}</p>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.06}>
            <ul className="space-y-10 rounded-3xl border border-ink/5 bg-white/90 p-6 md:p-8">
              {featureShowcase.features.map((feature) => (
                <li key={feature.title}>
                  <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col">
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-lg">
              <ReportMockup />
            </div>
            <p className="mt-4 text-xs text-ink/50">{featureShowcase.mockupCaption}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
