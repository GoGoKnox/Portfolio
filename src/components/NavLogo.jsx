/** Plumpy laptop-with-a-face nav logo. */
export default function NavLogo({ className = "" }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="9"
        y="11"
        width="30"
        height="20"
        rx="3"
        fill="#0E0F0C"
        stroke="#0E0F0C"
        strokeWidth="2"
      />
      <rect
        x="11"
        y="13"
        width="26"
        height="16"
        rx="2"
        fill="#C6F432"
      />

      <circle cx="19" cy="20" r="1.7" fill="#0E0F0C" />
      <circle cx="29" cy="20" r="1.7" fill="#0E0F0C" />
      <circle cx="19.5" cy="19.4" r="0.55" fill="#FFFFFF" />
      <circle cx="29.5" cy="19.4" r="0.55" fill="#FFFFFF" />

      <path
        d="M21 24 Q 24 26.5 27 24"
        stroke="#0E0F0C"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />

      <circle cx="16" cy="23.5" r="1.4" fill="#F5C7CC" opacity="0.9" />
      <circle cx="32" cy="23.5" r="1.4" fill="#F5C7CC" opacity="0.9" />

      <path
        d="M5 33 Q 5 31 7 31 H 41 Q 43 31 43 33 L 41 37 Q 40.5 38 39 38 H 9 Q 7.5 38 7 37 Z"
        fill="#F4EFE6"
        stroke="#0E0F0C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="20" y="32" width="8" height="2" rx="1" fill="#F5C7CC" stroke="#0E0F0C" strokeWidth="1.4" />

      <g transform="translate(40 10)">
        <path
          d="M0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z"
          fill="#C6F432"
          stroke="#0E0F0C"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
