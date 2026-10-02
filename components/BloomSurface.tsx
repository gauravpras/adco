type BloomVariant = "default" | "solutions" | "contact" | "fast-track";

type BloomSurfaceProps = {
  className?: string;
  variant?: BloomVariant;
};

const embers = [
  { drift: "-28px", delay: "0s", size: 7 },
  { drift: "6px", delay: "0.6s", size: 5 },
  { drift: "32px", delay: "1.25s", size: 6 },
  { drift: "-8px", delay: "1.8s", size: 4 },
] as const;

const streaks = [
  { top: "14%", right: "10%", delay: "0s" },
  { top: "26%", right: "18%", delay: "0.75s" },
  { top: "8%", right: "24%", delay: "1.5s" },
  { top: "32%", right: "6%", delay: "2.25s" },
] as const;

function BloomLayers({ variant }: { variant: BloomVariant }) {
  switch (variant) {
    case "default":
      return (
        <>
          <div className="absolute inset-0 bg-[#272727]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(0,74,173,0.45),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_85%_65%,rgba(104,101,225,0.28),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(238,42,69,0.25),transparent_50%)]" />
          <div className="hero-grain absolute inset-0 opacity-30" />
        </>
      );
    case "solutions":
      return (
        <>
          <div className="hero-glow-base hero-glow-base-angled" />
          <div className="hero-glow-blob hero-glow-solutions-main" />
          <div className="hero-glow-blob hero-glow-solutions-secondary" />
        </>
      );
    case "contact":
      return (
        <>
          <div className="hero-glow-base hero-glow-base-angled" />
          <div className="hero-glow-blob hero-glow-contact-main" />
          <div className="hero-glow-blob hero-glow-contact-accent" />
        </>
      );
    case "fast-track":
      return (
        <>
          <div className="hero-glow-base hero-glow-base-straight" />
          <div className="hero-thrust" />
          <div className="hero-glow-blob hero-glow-fast-secondary" />
          {embers.map((ember) => (
            <span
              key={ember.delay}
              className="hero-ember"
              style={{
                width: ember.size,
                height: ember.size,
                animationDelay: ember.delay,
                ["--ember-drift" as string]: ember.drift,
              }}
            />
          ))}
          {streaks.map((streak) => (
            <span
              key={streak.delay}
              className="hero-streak"
              style={{
                top: streak.top,
                right: streak.right,
                animationDelay: streak.delay,
              }}
            />
          ))}
          <svg className="hero-rocket" viewBox="0 0 64 96" aria-hidden>
            <g className="hero-rocket-flame">
              <path fill="#EE2A45" d="M26 68 L32 94 L38 68 Z" />
              <path fill="#FFB088" d="M29 70 L32 86 L35 70 Z" />
            </g>
            <path
              fill="#F1F1F1"
              d="M32 4 C46 20 50 38 50 54 V70 H14 V54 C14 38 18 20 32 4 Z"
            />
            <path fill="#F1F1F1" d="M14 50 L2 72 L16 64 Z" />
            <path fill="#F1F1F1" d="M50 50 L62 72 L48 64 Z" />
            <circle cx="32" cy="36" r="7" fill="#004AAD" />
          </svg>
        </>
      );
    default: {
      const exhaustive: never = variant;
      return exhaustive;
    }
  }
}

export function BloomSurface({
  className = "",
  variant = "default",
}: BloomSurfaceProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <BloomLayers variant={variant} />
    </div>
  );
}
