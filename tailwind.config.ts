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
          950: "#090A09",
          900: "#0B0C0B",
          850: "#0D0F0C",
          800: "#111310",
          750: "#131612",
          700: "#171915",
          600: "#222520",
        },
        bone: {
          DEFAULT: "#EDEAE3",
          muted: "#C7C5BC",
          stone: "#8C8E82",
          dim: "#5E6057",
        },
        brass: {
          DEFAULT: "#B59D60",
          light: "#C6B075",
          muted: "#9E874B",
          patina: "#7A7548",
          chartreuse: "#C4D152",
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
        widest: "0.18em",
        ultra: "0.24em",
      },
      borderColor: {
        hairline: "rgba(255, 255, 255, 0.08)",
        "brass-rule": "rgba(181, 157, 96, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
