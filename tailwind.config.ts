import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        amam: {
          sage: "#DFE3C2",
          mint: "#D3ECE8",
          forest: "#2F5E2E",
          leaf: "#6E9E4F",
          deep: "#1C2B2C",
          ink: "#111111",
          cream: "#F4F0EB",
          stone: "#A2B8AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
