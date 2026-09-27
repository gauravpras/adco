import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type LinkArrowProps = {
  href: string;
  label: string;
  variant?: "light" | "dark";
  accent?: "red" | "blue";
  className?: string;
};

export function LinkArrow({
  href,
  label,
  variant = "dark",
  accent = "red",
  className = "",
}: LinkArrowProps) {
  const text =
    variant === "light" ? "text-white hover:text-white/90" : "text-ink hover:text-adco-blue";
  const circle =
    accent === "blue"
      ? "bg-adco-blue text-white"
      : variant === "light"
        ? "bg-signal-red text-white"
        : "bg-ink text-white group-hover:bg-signal-red";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-sm font-semibold transition-colors ${text} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:scale-105 ${circle}`}
        aria-hidden
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
