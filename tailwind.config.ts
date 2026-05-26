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
          DEFAULT: "#f5f2ea",
          50: "#fbf9f3",
          100: "#f5f2ea",
          200: "#efeadd",
          300: "#e5dfce",
        },
        ink: {
          DEFAULT: "#14141a",
          900: "#14141a",
          800: "#1d1d24",
          700: "#2f2f37",
          600: "#52525a",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
        },
        accent: {
          ink: "#14141a",
          electric: "#2540b5",
          violet: "#6b4bf0",
          coral: "#f25e3f",
          amber: "#d97706",
          fuchsia: "#f25e3f",
          orange: "#e25f1b",
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
