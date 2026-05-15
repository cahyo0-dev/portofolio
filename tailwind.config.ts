import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Syne'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#00D4AA",
          dark: "#00A880",
        },
        surface: {
          light: "#F7F6F3",
          dark: "#0D0D0D",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
