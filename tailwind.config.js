/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0F0C",
        cream: "#F4EFE6",
        lime: {
          DEFAULT: "#C6F432",
          deep: "#A5D11C",
        },
        blush: "#F5C7CC",
        sage: "#B7CFA0",
        paper: "#FBF7EE",
      },
      fontFamily: {
        display: ["'Archivo Black'", "'Anton'", "Impact", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        marker: ["Caveat", "'Patrick Hand'", "cursive"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        sticker: "4px 4px 0 0 rgba(14,15,12,0.85)",
        soft: "0 8px 30px rgba(14,15,12,0.08)",
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        twinkle: {
          "0%,100%": { opacity: 0.3, transform: "scale(0.8)" },
          "50%": { opacity: 1, transform: "scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out infinite",
        bob: "bob 4s ease-in-out infinite",
        twinkle: "twinkle 1.6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
