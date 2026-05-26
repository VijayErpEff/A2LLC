import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: {
          DEFAULT: "#f4f2ec",
          50: "#fbfaf6",
          100: "#f4f2ec",
          200: "#ecebe5",
          300: "#e0ddd5",
        },
        ink: {
          DEFAULT: "#0c0c0e",
          900: "#0c0c0e",
          800: "#1a1a1e",
          700: "#33333a",
          600: "#52525a",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
        },
        accent: {
          ink: "#111114",
          electric: "#3b21ff",
          violet: "#7b3aff",
          fuchsia: "#ff2bd6",
          orange: "#ff5a1f",
          cyan: "#06b6d4",
          lime: "#bef264",
        },
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      animation: {
        "marquee": "marquee 38s linear infinite",
        "marquee-reverse": "marquee-reverse 44s linear infinite",
        "shimmer": "shimmer 3.5s ease-in-out infinite",
        "float": "float 7s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "200% 0" },
          "50%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
