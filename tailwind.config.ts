import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDF6EC",
        brown: {
          50: "#fdf3e7",
          100: "#fae3c8",
          200: "#f5c99a",
          300: "#eeaa6a",
          400: "#e68a3a",
          500: "#c96f20",
          600: "#a85818",
          700: "#7a3f10",
          800: "#5c2e0a",
          900: "#3d1e06",
        },
        pink: {
          50: "#fff0f5",
          100: "#ffe0ec",
          200: "#ffc2d9",
          300: "#ff9dbf",
          400: "#ff6fa0",
          500: "#f04080",
          600: "#d42060",
          700: "#b01050",
          800: "#8c0840",
          900: "#680030",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "bounce-once": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "bounce-once": "bounce-once 0.4s ease",
        "fade-in-up": "fade-in-up 0.5s ease forwards",
        shimmer: "shimmer 1.5s infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
