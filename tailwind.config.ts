import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { burgundy: "#790D16", dusty: "#AEC4D4", sand: "#E5D3AF", cream: "#F5EFE1", ink: "#3A0A0F" },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
