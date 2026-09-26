// PLACEHOLDER LOGO — swap for client's real logo file (SVG/PNG)
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="AdCo Group home"
    >
      <span
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"
        aria-hidden
      >
        <span className="absolute left-[11px] text-lg font-bold text-ink">A</span>
        <span className="absolute left-[15px] text-lg font-bold text-adco-blue">
          D
        </span>
      </span>
      <span className="font-display text-sm font-semibold tracking-tight text-current sm:text-base">
        AdCo Group
      </span>
    </Link>
  );
}
