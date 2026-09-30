import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#090a0c",
          900: "#0f1013",
          850: "#121316",
          800: "#16171b",
          700: "#1f2127",
          600: "#2a2c34",
        },
        surface: {
          dark: "#141519",
          card: "rgba(22, 23, 28, 0.75)",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.12)",
        },
        accent: {
          DEFAULT: "#ffffff",
          muted: "#9e9e9e",
          subtle: "#71717a",
          emerald: "#10b981",
          gold: "#d4af37",
        }
      },
      fontFamily: {
        display: ["Montserrat", "Space Grotesk", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
        ultra: "0.3em",
      },
      boxShadow: {
        glow: "0 0 50px -10px rgba(255, 255, 255, 0.08)",
        "glow-card": "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "glow-avatar": "0 0 25px rgba(255, 255, 255, 0.15)",
      },
      backgroundImage: {
        "radial-spotlight": "radial-gradient(circle at 50% 35%, rgba(45, 48, 58, 0.35) 0%, rgba(15, 16, 19, 0.85) 60%, rgba(9, 10, 12, 1) 100%)",
        "radial-card": "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05) 0%, rgba(20, 21, 25, 0.4) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
