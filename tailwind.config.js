/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ember: {
          DEFAULT: "#F95004",
          50: "#FFF1E8",
          100: "#FFD9B8",
          400: "#FF7A2E",
          500: "#F95004",
          600: "#D43E00",
          700: "#A02E00",
        },
        ink: {
          950: "#050505",
          900: "#0A0A0B",
          800: "#101012",
          700: "#16171A",
          600: "#1E2024",
        },
        steel: {
          400: "#8A8F98",
          300: "#A8AEB8",
          200: "#C8CDD4",
        },
        bone: "#F5F1EA",
        mist: "#EAF2E3",
        ash: "#C8D1C5",
        charcoal: "#0C0C0C",
        graphite: "#121212",
        slate: "#1A1A1A",
        cloud: "#F5F5F2",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.25em",
        ultra: "0.4em",
      },
      boxShadow: {
        ember: "0 10px 40px -10px rgba(249, 80, 4, 0.45)",
        "ember-lg": "0 20px 80px -20px rgba(249, 80, 4, 0.55)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px -30px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
