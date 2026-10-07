import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        cream:  "#FBF5DD",   // 60% — dominant background
        sand:   "#E7E1B1",   // 30% — secondary panels, cards
        forest: {
          DEFAULT: "#306D29",  // 10% — primary accent, CTAs
          dark:    "#0D530E",  // deep accent, footer
          light:   "#4a8a3d",  // hover state
        },
        ink:    "#1A1F0F",   // near-black text on cream
        muted:  "#7A7B5E",   // secondary text
        border: "#D5CF9F",
        white:  "#FFFFFF",   // subtle borders
         
      },
      animation: {
        "fade-in":      "fadeIn 0.5s ease forwards",
        "fade-up":      "fadeUp 0.6s ease forwards",
        "slide-left":   "slideLeft 0.5s ease forwards",
        "pulse-green":  "pulseGreen 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":        "float 6s ease-in-out infinite",
        "spin-slow":    "spin 12s linear infinite",
      },
      keyframes: {
        fadeIn:     { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeUp:     { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideLeft:  { "0%": { opacity: "0", transform: "translateX(20px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        pulseGreen: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.4" } },
        float:      { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
