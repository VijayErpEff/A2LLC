type IconKey =
  | "ai"
  | "dotnet"
  | "cloud"
  | "mobile"
  | "web"
  | "data"
  | "power";

const common = {
  viewBox: "0 0 28 28",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function ServiceIcon({
  name,
  className = "",
}: {
  name: IconKey;
  className?: string;
}) {
  switch (name) {
    case "ai":
      return (
        <svg {...common} className={className}>
          {/* Orbital + core + satellite + spark — agentic */}
          <ellipse cx="14" cy="14" rx="11" ry="4" strokeDasharray="2 2.5" transform="rotate(-22 14 14)" />
          <circle cx="14" cy="14" r="2.6" fill="currentColor" stroke="none" />
          <circle cx="3.8" cy="10" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="24.2" cy="18" r="1.4" fill="currentColor" stroke="none" />
          <path d="M22 4 L22 8 M20 6 L24 6" strokeWidth="1.3" />
        </svg>
      );
    case "dotnet":
      return (
        <svg {...common} className={className}>
          <path d="M10 7 L4 14 L10 21" />
          <path d="M18 7 L24 14 L18 21" />
          <path d="M16 4 L12 24" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common} className={className}>
          <circle cx="14" cy="6" r="2.4" />
          <circle cx="6" cy="20" r="2.4" />
          <circle cx="22" cy="20" r="2.4" />
          <path d="M12.7 8 L7.3 17.7" />
          <path d="M15.3 8 L20.7 17.7" />
          <path d="M8.4 20 L19.6 20" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common} className={className}>
          <rect x="4" y="7" width="11" height="17" rx="2.2" />
          <rect x="13" y="4" width="11" height="17" rx="2.2" />
          <circle cx="18.5" cy="18" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "web":
      return (
        <svg {...common} className={className}>
          <rect x="3" y="5" width="22" height="18" rx="2.2" />
          <path d="M3 10 L25 10" />
          <circle cx="6" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="8.5" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="11" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
          <polyline points="7,19 11,15 15,17 21,12" />
        </svg>
      );
    case "data":
      return (
        <svg {...common} className={className}>
          <circle cx="6" cy="8" r="2.2" />
          <circle cx="22" cy="8" r="2.2" />
          <circle cx="14" cy="21" r="2.2" />
          <path d="M8.2 8 L19.8 8" />
          <path d="M7.5 10 L12.5 19" />
          <path d="M20.5 10 L15.5 19" />
          <circle cx="14" cy="8" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "power":
      return (
        <svg {...common} className={className}>
          <path d="M15 3 L5 15 L13 15 L11 25 L23 11 L15 11 Z" />
          <path d="M22 4 L24 4 M23 3 L23 5" strokeWidth="1.3" />
        </svg>
      );
  }
}
