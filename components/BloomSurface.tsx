type BloomSurfaceProps = {
  className?: string;
};

export function BloomSurface({ className = "" }: BloomSurfaceProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#272727]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(0,74,173,0.45),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_85%_65%,rgba(104,101,225,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(238,42,69,0.25),transparent_50%)]" />
      <div className="hero-grain absolute inset-0 opacity-30" />
    </div>
  );
}
