type ServiceAlacarteVisualProps = {
  slug: string;
  className?: string;
};

const gradients: Record<string, string> = {
  "digital-onboarding":
    "linear-gradient(120deg,#4a63d8,#232238 55%,#8a3a3f)",
  "website-design":
    "linear-gradient(150deg,#3a4fc0,#1c1e2e 60%,#4a2a33)",
  seo: "radial-gradient(circle at 82% 75%,#3b4aa8,#1d1e26 60%)",
  "social-media":
    "linear-gradient(200deg,#5a6ee0,#22233a 50%,#7d3540)",
  "paid-ads": "linear-gradient(20deg,#a84348,#2a2030 55%,#3448b0)",
  "content-marketing":
    "linear-gradient(100deg,#1e2030,#2b2d4a 60%,#4a63d8)",
  "email-crm":
    "linear-gradient(135deg,#2a2b3a,#3c3f8a 70%,#8a3a3f)",
  "google-business":
    "radial-gradient(circle at 75% 55%,#38408f,#1c1d24 65%)",
  analytics: "linear-gradient(180deg,#232438,#1b1c24)",
  "digital-audit":
    "linear-gradient(140deg,#1e2030,#343a8f 65%,#7d3540)",
};

const svgClassName = "absolute inset-0 h-full w-full";

function ServiceSvgArt({ slug }: { slug: string }) {
  switch (slug) {
    case "digital-onboarding":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <defs>
            <radialGradient id={`${slug}-onb-g`}>
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M-10 142C120 132 200 92 250 62S350 26 420 14"
            fill="none"
            stroke="#fff"
            strokeOpacity=".55"
            strokeWidth="3"
            strokeDasharray="2 9"
            strokeLinecap="round"
          />
          <circle cx="110" cy="128" r="4" fill="#fff" fillOpacity=".7" />
          <circle cx="200" cy="96" r="4" fill="#fff" fillOpacity=".7" />
          <circle cx="290" cy="46" r="5" fill="#fff" fillOpacity=".8" />
          <circle
            cx="372"
            cy="22"
            r="34"
            fill={`url(#${slug}-onb-g)`}
            opacity=".5"
          />
          <circle cx="372" cy="22" r="8" fill="#fff" />
        </svg>
      );
    case "website-design":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <rect
            x="150"
            y="26"
            width="200"
            height="130"
            rx="10"
            fill="#fff"
            fillOpacity=".05"
            stroke="#fff"
            strokeOpacity=".3"
          />
          <rect
            x="182"
            y="52"
            width="200"
            height="130"
            rx="10"
            fill="#fff"
            fillOpacity=".08"
            stroke="#fff"
            strokeOpacity=".35"
          />
          <rect
            x="198"
            y="68"
            width="60"
            height="8"
            rx="4"
            fill="#fff"
            fillOpacity=".55"
          />
          <rect
            x="198"
            y="88"
            width="88"
            height="36"
            rx="5"
            fill="#7f96ff"
            fillOpacity=".55"
          />
          <rect
            x="296"
            y="88"
            width="72"
            height="36"
            rx="5"
            fill="#c25a5f"
            fillOpacity=".55"
          />
        </svg>
      );
    case "seo":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${slug}-seo-g`} x1="1" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#fff" stopOpacity=".8" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="#fff" strokeOpacity=".2">
            <circle cx="330" cy="112" r="30" />
            <circle cx="330" cy="112" r="62" />
            <circle cx="330" cy="112" r="98" />
            <circle cx="330" cy="112" r="138" />
          </g>
          <line
            x1="330"
            y1="112"
            x2="222"
            y2="8"
            stroke={`url(#${slug}-seo-g)`}
            strokeWidth="2"
          />
          <circle cx="330" cy="112" r="7" fill="#fff" />
          <circle cx="252" cy="36" r="4" fill="#e06a70" />
        </svg>
      );
    case "social-media":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <path
            d="M170 112L232 52L292 100L352 46L382 122L252 136L170 112M232 52L252 136M292 100L252 136M292 100L382 122"
            fill="none"
            stroke="#fff"
            strokeOpacity=".35"
          />
          <g fill="#fff">
            <circle cx="170" cy="112" r="5" fillOpacity=".7" />
            <circle cx="232" cy="52" r="8" />
            <circle cx="292" cy="100" r="5" fillOpacity=".7" />
            <circle cx="352" cy="46" r="6" fillOpacity=".85" />
            <circle cx="382" cy="122" r="4" fillOpacity=".6" />
            <circle cx="252" cy="136" r="6" fillOpacity=".75" />
          </g>
        </svg>
      );
    case "paid-ads":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <g stroke="#fff" strokeOpacity=".16">
            <line x1="380" y1="130" x2="0" y2="10" />
            <line x1="380" y1="130" x2="0" y2="50" />
            <line x1="380" y1="130" x2="0" y2="90" />
            <line x1="380" y1="130" x2="60" y2="0" />
            <line x1="380" y1="130" x2="0" y2="130" />
          </g>
          <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <path
              d="M330 130A50 50 0 0 1 380 80"
              strokeOpacity=".8"
            />
            <path
              d="M290 130A90 90 0 0 1 380 40"
              strokeOpacity=".5"
            />
            <path
              d="M250 130A130 130 0 0 1 380 0"
              strokeOpacity=".3"
            />
          </g>
          <circle cx="380" cy="130" r="10" fill="#fff" />
        </svg>
      );
    case "content-marketing":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <rect
            x="170"
            y="28"
            width="70"
            height="94"
            rx="6"
            fill="#fff"
            fillOpacity=".14"
          />
          <g fill="#fff" fillOpacity=".4">
            <rect x="256" y="30" width="120" height="7" rx="3.5" />
            <rect x="256" y="50" width="96" height="7" rx="3.5" />
            <rect x="256" y="90" width="112" height="7" rx="3.5" />
            <rect x="256" y="110" width="70" height="7" rx="3.5" />
            <rect x="170" y="132" width="150" height="7" rx="3.5" />
          </g>
          <rect
            x="256"
            y="70"
            width="126"
            height="9"
            rx="4.5"
            fill="#e06a70"
            fillOpacity=".85"
          />
        </svg>
      );
    case "email-crm":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <path
            d="M-10 128C60 130 100 90 170 84"
            fill="none"
            stroke="#fff"
            strokeOpacity=".5"
            strokeWidth="3"
            strokeDasharray="2 9"
            strokeLinecap="round"
          />
          <rect
            x="190"
            y="34"
            width="176"
            height="104"
            rx="12"
            fill="#fff"
            fillOpacity=".08"
            stroke="#fff"
            strokeOpacity=".4"
          />
          <path
            d="M192 40L278 100L364 40"
            fill="none"
            stroke="#fff"
            strokeOpacity=".7"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="350" cy="30" r="10" fill="#e06a70" />
          <g fill="#fff" fillOpacity=".55">
            <circle cx="230" cy="122" r="4" />
            <circle cx="278" cy="122" r="4" />
            <circle cx="326" cy="122" r="4" />
          </g>
        </svg>
      );
    case "google-business":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <defs>
            <radialGradient id={`${slug}-loc-g`}>
              <stop offset="0" stopColor="#e06a70" stopOpacity=".7" />
              <stop offset="1" stopColor="#e06a70" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g fill="none" stroke="#fff" strokeOpacity=".17">
            <ellipse cx="300" cy="78" rx="44" ry="26" />
            <ellipse cx="296" cy="80" rx="80" ry="46" />
            <ellipse cx="292" cy="82" rx="118" ry="66" />
            <ellipse cx="288" cy="84" rx="160" ry="92" />
          </g>
          <circle cx="300" cy="78" r="30" fill={`url(#${slug}-loc-g)`} />
          <circle cx="300" cy="78" r="7" fill="#fff" />
        </svg>
      );
    case "analytics":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${slug}-ana-g`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5a6ee0" stopOpacity=".6" />
              <stop offset="1" stopColor="#5a6ee0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="#fff" strokeOpacity=".08">
            <line x1="140" y1="50" x2="400" y2="50" />
            <line x1="140" y1="90" x2="400" y2="90" />
            <line x1="140" y1="130" x2="400" y2="130" />
          </g>
          <path
            d="M150 125L200 105L245 112L290 72L335 58L385 26V150H150Z"
            fill={`url(#${slug}-ana-g)`}
          />
          <path
            d="M150 125L200 105L245 112L290 72L335 58L385 26"
            fill="none"
            stroke="#fff"
            strokeOpacity=".85"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="385" cy="26" r="7" fill="#e06a70" />
        </svg>
      );
    case "digital-audit":
      return (
        <svg
          className={svgClassName}
          viewBox="0 0 400 150"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <g
            fill="none"
            stroke="#fff"
            strokeOpacity=".4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M176 42l5 5 9-10" />
            <path d="M176 72l5 5 9-10" />
            <path d="M176 102l5 5 9-10" />
          </g>
          <g fill="#fff" fillOpacity=".35">
            <rect x="204" y="38" width="90" height="7" rx="3.5" />
            <rect x="204" y="68" width="70" height="7" rx="3.5" />
            <rect x="204" y="98" width="100" height="7" rx="3.5" />
          </g>
          <circle
            cx="176"
            cy="132"
            r="4"
            fill="none"
            stroke="#e06a70"
            strokeWidth="2"
          />
          <rect
            x="204"
            y="128"
            width="60"
            height="7"
            rx="3.5"
            fill="#e06a70"
            fillOpacity=".8"
          />
          <circle
            cx="336"
            cy="74"
            r="32"
            fill="#fff"
            fillOpacity=".06"
            stroke="#fff"
            strokeOpacity=".8"
            strokeWidth="3"
          />
          <line
            x1="359"
            y1="97"
            x2="384"
            y2="122"
            stroke="#fff"
            strokeOpacity=".8"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function ServiceAlacarteVisual({
  slug,
  className = "",
}: ServiceAlacarteVisualProps) {
  const background = gradients[slug];
  if (!background) return null;

  return (
    <div
      className={`absolute inset-0 h-full w-full overflow-hidden ${className}`}
      style={{ background }}
    >
      <ServiceSvgArt slug={slug} />
    </div>
  );
}
