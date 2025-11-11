import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        "gradient-accent": "linear-gradient(135deg, #6dd5ed 0%, #2193b0 100%)",
        "gradient-warm": "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        "gradient-cool": "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        "gradient-ocean": "linear-gradient(135deg, #667eea 0%, #667eea 100%)",
        "gradient-mint": "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        "gradient-sky": "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(189,100%,85%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(210,100%,85%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(240,100%,95%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(190,100%,90%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(200,100%,90%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(220,100%,85%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(250,100%,95%,1) 0px, transparent 50%)",
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          teal: "#5eead4",
          sky: "#7dd3fc",
          blue: "#60a5fa",
          cyan: "#22d3ee",
          indigo: "#818cf8",
          violet: "#a78bfa",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(14, 165, 233, 0.2)",
        "glow-lg": "0 0 40px rgba(14, 165, 233, 0.3)",
        card: "0 10px 40px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.12)",
        "inner-glow": "inset 0 0 20px rgba(14, 165, 233, 0.1)",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
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
