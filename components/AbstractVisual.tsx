import Image from "next/image";

type AbstractVisualProps = {
  alt: string;
  className?: string;
  variant?: "mesh" | "motif";
};

export function AbstractVisual({
  alt,
  className = "",
  variant = "mesh",
}: AbstractVisualProps) {
  const src =
    variant === "motif"
      ? "/images/gradient-motif.svg"
      : "/images/hero-mesh.svg";

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-adco-blue/40 via-ink to-signal-red/30 ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover opacity-80 mix-blend-overlay" sizes="(max-width: 1024px) 100vw, 50vw" />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-40" aria-hidden />
    </div>
  );
}
