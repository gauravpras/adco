import Link from "next/link";

type LogoProps = {
  className?: string;
  onDark?: boolean;
};

export function Logo({ className = "", onDark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="AdCo Group home"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-white font-display text-[1.125rem] font-bold leading-none tracking-[-0.06em] ${
          onDark ? "ring-1 ring-white/25" : "ring-1 ring-ink/10 shadow-sm"
        }`}
      >
        <span className="text-ink">A</span>
        <span className="text-adco-blue">D</span>
      </span>
    </Link>
  );
}
