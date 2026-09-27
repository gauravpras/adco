import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        canvas: "rgb(from var(--canvas) r g b / <alpha-value>)",
        ink: "rgb(from var(--ink) r g b / <alpha-value>)",
        white: "rgb(from var(--white) r g b / <alpha-value>)",
        "adco-blue": "rgb(from var(--adco-blue) r g b / <alpha-value>)",
        "adco-purple": "rgb(from var(--adco-purple) r g b / <alpha-value>)",
        "signal-red": "rgb(from var(--signal-red) r g b / <alpha-value>)",
        "growth-green": "rgb(from var(--growth-green) r g b / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "90rem",
      },
    },
  },
  plugins: [],
};
export default config;
