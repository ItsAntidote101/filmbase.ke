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
        brand: {
          // Dark contexts — hero sections and footer
          dark: "#033a55",
          navy: "#033a55",
          "border-dark": "#1e3a55",
          // Light theme — main site palette
          ink: "#054e72",        // primary teal: buttons, tags, icons, accent
          "ink-light": "#0a7aad", // primary hover state
          alt: "#e8f4fb",        // light tint: alternating section background
          muted: "#71717a",      // body / secondary text
          border: "#e5e5e5",     // borders on light backgrounds
          "border-strong": "#d4d4d4",
          card: "#ffffff",       // card background
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
