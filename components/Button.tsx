import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondaryDark" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-signal-red text-white hover:bg-signal-red/90 border border-transparent",
  secondary:
    "border border-ink/15 bg-white text-ink hover:border-ink/30",
  secondaryDark:
    "border border-white/30 bg-transparent text-white hover:bg-white/10",
  ghost: "text-ink hover:bg-ink/5 border border-transparent",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-adco-blue disabled:opacity-50";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
