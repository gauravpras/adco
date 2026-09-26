import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
  id?: string;
  ariaLabelledby?: string;
};

export function Section({
  children,
  variant = "light",
  className = "",
  id,
  ariaLabelledby,
}: SectionProps) {
  const bg = variant === "dark" ? "bg-ink text-white" : "bg-white text-ink";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${bg} ${className}`}
    >
      <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24 lg:py-28">
        {children}
      </div>
    </section>
  );
}
