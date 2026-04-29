// A small inline SVG icon library in a friendly "plumpy" duotone style.
// Pass `name` to choose, `size` for px, `tone` for accent color, `base` for body color.

const ICON_PATHS = {
  hand: (
    <g>
      <path d="M22 28c0-3 4-6 9-6s8 4 8 8v18c0 8-6 14-14 14s-14-6-14-14V20c0-3 2-5 5-5s5 2 5 5v8z" />
      <path d="M30 14c0-3 2-5 5-5s5 2 5 5v18" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M40 18c0-3 2-5 5-5s5 2 5 5v22" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 26c0-2.5 2-4 4-4s4 1.5 4 4v18" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>
  ),
  book: (
    <g>
      <path d="M10 16c10-4 22-4 32 0v36c-10-4-22-4-32 0V16z" />
      <path d="M54 16c-10-4-22-4-32 0v36c10-4 22-4 32 0V16z" fill="#fff" stroke="#0E0F0C" strokeWidth="2.5" />
      <path d="M22 24h22M22 32h22M22 40h16" stroke="#0E0F0C" strokeWidth="2" strokeLinecap="round" />
    </g>
  ),
  cupcake: (
    <g>
      <path d="M14 30c0-9 8-16 18-16s18 7 18 16H14z" />
      <path d="M16 30h32l-4 24c-1 4-5 6-9 6h-6c-4 0-8-2-9-6L16 30z" fill="#fff" stroke="#0E0F0C" strokeWidth="2.5" />
      <circle cx="32" cy="22" r="3" fill="#F5C7CC" stroke="#0E0F0C" strokeWidth="2" />
      <path d="M30 16c0-3 4-3 4 0" stroke="#0E0F0C" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  ),
  plane: (
    <g>
      <path d="M8 32l48-20-12 44-12-14L8 32z" />
      <path d="M32 42l12-14" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M20 30l16-2" stroke="#0E0F0C" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  ),
  robot: (
    <g>
      <rect x="14" y="20" width="36" height="32" rx="6" />
      <rect x="18" y="24" width="28" height="24" rx="4" fill="#fff" stroke="#0E0F0C" strokeWidth="2.5" />
      <circle cx="26" cy="36" r="3" fill="#0E0F0C" />
      <circle cx="38" cy="36" r="3" fill="#0E0F0C" />
      <path d="M26 44h12" stroke="#0E0F0C" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 20v-8M28 12h8" stroke="#0E0F0C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="10" r="2" fill="#C6F432" stroke="#0E0F0C" strokeWidth="2" />
      <path d="M14 30h-4v12h4M50 30h4v12h-4" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>
  ),
  paw: (
    <g>
      <ellipse cx="32" cy="44" rx="14" ry="11" />
      <circle cx="18" cy="26" r="6" />
      <circle cx="46" cy="26" r="6" />
      <circle cx="26" cy="16" r="5" />
      <circle cx="38" cy="16" r="5" />
    </g>
  ),
  leaf: (
    <g>
      <path d="M14 50c0-22 18-40 40-40-2 22-18 40-40 40z" />
      <path d="M20 44c10-14 22-22 30-26" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>
  ),
  trophy: (
    <g>
      <path d="M20 12h24v18c0 7-5 12-12 12s-12-5-12-12V12z" />
      <path d="M20 18h-6c-2 0-3 2-2 4 1 4 4 8 8 8M44 18h6c2 0 3 2 2 4-1 4-4 8-8 8" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="26" y="44" width="12" height="6" />
      <rect x="22" y="50" width="20" height="4" rx="1" />
    </g>
  ),
  mailbox: (
    <g>
      <path d="M10 28c0-6 5-10 12-10h20c6 0 12 4 12 10v18H10V28z" />
      <path d="M22 28c0-4 3-8 8-8" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M44 18v14" stroke="#0E0F0C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M44 22h6" stroke="#C6F432" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 46v8" stroke="#0E0F0C" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  ),
  spark: (
    <g>
      <path d="M32 8l4 16 16 4-16 4-4 16-4-16-16-4 16-4 4-16z" />
    </g>
  ),
  heart: (
    <g>
      <path d="M32 52S10 38 10 24c0-7 5-12 11-12 5 0 9 3 11 7 2-4 6-7 11-7 6 0 11 5 11 12 0 14-22 28-22 28z" />
    </g>
  ),
  cane: (
    <g>
      <path d="M24 8c8 0 12 6 12 12v32" />
      <path d="M24 8c8 0 12 6 12 12v32" stroke="#0E0F0C" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M36 52v4" stroke="#0E0F0C" strokeWidth="6" strokeLinecap="round" />
      <circle cx="36" cy="58" r="3" fill="#C6F432" stroke="#0E0F0C" strokeWidth="2" />
    </g>
  ),
  shield: (
    <g>
      <path d="M32 8l20 6v18c0 12-8 20-20 24-12-4-20-12-20-24V14l20-6z" />
      <path d="M24 30l6 6 12-12" stroke="#0E0F0C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  hands: (
    <g>
      <path d="M24 28c0-4 0-8 4-8s4 4 4 8M32 28c0-4 0-8 4-8s4 4 4 8" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M16 36c0-6 4-10 10-10h12c6 0 10 4 10 10v8c0 6-4 12-12 12h-8c-8 0-12-6-12-12v-8z" />
      <circle cx="32" cy="20" r="6" fill="#F5C7CC" stroke="#0E0F0C" strokeWidth="2.5" />
    </g>
  ),
  badge: (
    <g>
      <circle cx="32" cy="28" r="18" />
      <path d="M22 42l-4 14 14-6 14 6-4-14" stroke="#0E0F0C" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <path d="M26 28l4 4 8-10" stroke="#0E0F0C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  backpack: (
    <g>
      <path d="M14 24c0-6 4-10 10-10h16c6 0 10 4 10 10v28H14V24z" />
      <path d="M22 14c0-4 4-6 10-6s10 2 10 6" stroke="#0E0F0C" strokeWidth="2.5" fill="none" />
      <rect x="22" y="32" width="20" height="14" fill="#fff" stroke="#0E0F0C" strokeWidth="2.5" rx="2" />
      <circle cx="32" cy="39" r="2" fill="#0E0F0C" />
    </g>
  ),
  notebook: (
    <g>
      <rect x="14" y="10" width="36" height="44" rx="3" />
      <path d="M22 18h22M22 26h22M22 34h22M22 42h14" stroke="#0E0F0C" strokeWidth="2" strokeLinecap="round" />
      <rect x="11" y="14" width="6" height="6" fill="#F5C7CC" stroke="#0E0F0C" strokeWidth="2" />
      <rect x="11" y="28" width="6" height="6" fill="#F5C7CC" stroke="#0E0F0C" strokeWidth="2" />
      <rect x="11" y="42" width="6" height="6" fill="#F5C7CC" stroke="#0E0F0C" strokeWidth="2" />
    </g>
  ),
  cap: (
    <g>
      <path d="M4 24l28-12 28 12-28 12L4 24z" />
      <path d="M16 30v12c0 4 8 8 16 8s16-4 16-8V30" stroke="#0E0F0C" strokeWidth="2.5" fill="none" />
      <path d="M58 24v14" stroke="#0E0F0C" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="58" cy="40" r="3" fill="#C6F432" stroke="#0E0F0C" strokeWidth="2" />
    </g>
  ),
  hand_sign: (
    <g>
      <path d="M22 50V20c0-3 2-5 5-5s5 2 5 5v15" />
      <path d="M32 22v-6c0-3 2-5 5-5s5 2 5 5v18" stroke="#0E0F0C" strokeWidth="2.5" fill="none" />
      <path d="M42 24v-4c0-3 2-5 5-5s5 2 5 5v22" stroke="#0E0F0C" strokeWidth="2.5" fill="none" />
      <path d="M52 30c0-2 2-3 4-3s4 1 4 3v18c0 6-4 10-10 10H30c-6 0-10-4-10-10v-2" stroke="#0E0F0C" strokeWidth="2.5" fill="none" />
    </g>
  ),
  clock: (
    <g>
      <circle cx="32" cy="32" r="22" />
      <path d="M32 18v14l10 6" stroke="#0E0F0C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  ribbon: (
    <g>
      <path d="M16 8l16 24 16-24-8 32-8 8-8-8L16 8z" />
    </g>
  ),
  send: (
    <g>
      <path d="M6 32l52-22-22 52-6-22-24-8z" />
    </g>
  ),
  thumbs_up: (
    <g>
      <path d="M24 56V28l8-16c2-4 8-2 8 2v10h12c4 0 6 3 6 6l-4 20c-1 4-4 6-8 6H24z" />
      <rect x="10" y="28" width="10" height="28" rx="2" fill="#fff" stroke="#0E0F0C" strokeWidth="2.5" />
    </g>
  ),
  robot_car: (
    <g>
      <rect x="8" y="26" width="48" height="22" rx="6" />
      <rect x="14" y="14" width="36" height="16" rx="4" fill="#fff" stroke="#0E0F0C" strokeWidth="2.5" />
      <circle cx="24" cy="22" r="2.5" fill="#0E0F0C" />
      <circle cx="40" cy="22" r="2.5" fill="#0E0F0C" />
      <path d="M28 26h8" stroke="#0E0F0C" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 14V8" stroke="#0E0F0C" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="6" r="2.5" fill="#C6F432" stroke="#0E0F0C" strokeWidth="2" />
      <circle cx="18" cy="50" r="6" fill="#0E0F0C" />
      <circle cx="18" cy="50" r="2" fill="#fff" />
      <circle cx="46" cy="50" r="6" fill="#0E0F0C" />
      <circle cx="46" cy="50" r="2" fill="#fff" />
      <rect x="50" y="30" width="4" height="6" fill="#C6F432" stroke="#0E0F0C" strokeWidth="2" />
    </g>
  ),
};

const TONE_FILLS = {
  lime: "#C6F432",
  blush: "#F5C7CC",
  cream: "#F4EFE6",
  sage: "#B7CFA0",
  ink: "#0E0F0C",
};

export default function PlumpyIcon({
  name,
  size = 40,
  tone = "lime",
  className = "",
  strokeColor = "#0E0F0C",
  strokeWidth = 2.5,
  ...rest
}) {
  const path = ICON_PATHS[name];
  if (!path) return null;
  const fill = TONE_FILLS[tone] ?? tone;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <g
        fill={fill}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      >
        {path}
      </g>
    </svg>
  );
}
