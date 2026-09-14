import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: "#182C4D",
          900: "#0F1E36", // Prestige Deep Blue
          950: "#080F1D", // Oxford Midnight
        },
        gold: {
          400: "#E5C258",
          500: "#D4AF37", // Imperial Academic Gold
          600: "#B89420",
        },
        crimson: {
          800: "#6B1D2F", // Heritage Wine / Emblem Badge
        },
        parchment: "#F8F9FB", // Surface Base
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Playfair Display", "serif"],
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(0, 0, 0, 0.04)",
        card: "0 14px 34px -10px rgba(15, 30, 54, 0.08)",
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 40px rgba(212, 175, 55, 0.35)",
        "navy-depth": "0 20px 40px -15px rgba(8, 15, 29, 0.3)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E5C258 0%, #D4AF37 50%, #B89420 100%)",
        "navy-gradient": "linear-gradient(180deg, #0F1E36 0%, #080F1D 100%)",
        "crimson-gradient": "linear-gradient(135deg, #6B1D2F 0%, #44111E 100%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
