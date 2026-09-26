import { proofStripStats } from "@/lib/content";

export function ProofStrip() {
  return (
    <div className="border-y border-ink/10 bg-white">
      <div className="mx-auto grid max-w-content grid-cols-1 divide-y divide-ink/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8">
        {proofStripStats.map((stat) => (
          <div key={stat.label} className="py-8 md:px-6 md:py-10">
            <p
              className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${
                stat.isPlaceholder ? "text-ink/40" : "text-ink"
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
