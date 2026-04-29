// Hand-drawn SVG accents: arrows, underlines, loops, doodle stars, washi tape.
// Each one accepts color + className and works as a decorative absolute-positioned element.

export function ScribbleArrow({ color = "#C6F432", className = "", flip = false }) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M5 40 C 40 5, 80 5, 120 30 C 140 42, 150 55, 170 55"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M165 45 L 175 55 L 162 65"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScribbleUnderline({ color = "#C6F432", className = "" }) {
  return (
    <svg viewBox="0 0 200 14" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M2 9 C 40 2, 80 12, 120 6 C 150 2, 180 8, 198 5"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScribbleCircle({ color = "#C6F432", className = "" }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <path
        d="M60 8 C 100 8, 115 30, 110 50 C 100 75, 60 76, 30 70 C 8 65, 6 30, 30 18 C 45 10, 70 8, 60 8 Z"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScribbleStar({ color = "#C6F432", className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <g fill={color} stroke="#0E0F0C" strokeWidth="2" strokeLinejoin="round">
        <path d="M30 4 l5 18 18 4 -14 12 4 18 -13 -10 -13 10 4 -18 -14 -12 18 -4z" />
      </g>
    </svg>
  );
}

export function WashiTape({ color = "#F5C7CC", className = "", angle = -8 }) {
  return (
    <div
      className={className}
      style={{
        transform: `rotate(${angle}deg)`,
        background: `repeating-linear-gradient(45deg, ${color} 0 8px, ${shade(color, -10)} 8px 16px)`,
        border: "1px solid rgba(14,15,12,0.2)",
        boxShadow: "0 2px 6px rgba(14,15,12,0.12)",
      }}
      aria-hidden="true"
    />
  );
}

export function DoodleSparkle({ color = "#C6F432", className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 22 L10.5 12.5 L3 11 L10.5 9.5 Z"
        fill={color}
        stroke="#0E0F0C"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PixelCursor({ color = "#0E0F0C", className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" shapeRendering="crispEdges">
      <g fill={color}>
        <rect x="6" y="4" width="2" height="2" />
        <rect x="6" y="6" width="2" height="2" />
        <rect x="8" y="6" width="2" height="2" />
        <rect x="6" y="8" width="2" height="2" />
        <rect x="8" y="8" width="2" height="2" />
        <rect x="10" y="8" width="2" height="2" />
        <rect x="6" y="10" width="2" height="2" />
        <rect x="8" y="10" width="2" height="2" />
        <rect x="10" y="10" width="2" height="2" />
        <rect x="12" y="10" width="2" height="2" />
        <rect x="6" y="12" width="2" height="2" />
        <rect x="8" y="12" width="2" height="2" />
        <rect x="10" y="12" width="2" height="2" />
        <rect x="12" y="12" width="2" height="2" />
        <rect x="14" y="12" width="2" height="2" />
        <rect x="6" y="14" width="2" height="2" />
        <rect x="8" y="14" width="2" height="2" />
        <rect x="10" y="14" width="2" height="2" />
        <rect x="6" y="16" width="2" height="2" />
        <rect x="8" y="16" width="2" height="2" />
        <rect x="12" y="16" width="2" height="2" />
        <rect x="14" y="16" width="2" height="2" />
      </g>
    </svg>
  );
}

function shade(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + percent));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + percent));
  const b = Math.max(0, Math.min(255, (num & 0x0000ff) + percent));
  return `rgb(${r}, ${g}, ${b})`;
}
