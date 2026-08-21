import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0E7490",
        "deep-blue": "#0B4F63",
        "light-grey": "#FBF6EF",
        "accent-coral": "#F4703B",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
    },
  },
};

export default config;
