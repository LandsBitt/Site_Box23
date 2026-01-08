/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ember: "#F95004",
        charcoal: "#0C0C0C",
        graphite: "#121212",
        slate: "#1A1A1A",
        mist: "#EAF2E3",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        display: ["Rubik Dirt", "cursive"],
      },
      boxShadow: {
        ember: "0 10px 30px rgba(249, 80, 4, 0.25)",
      },
    },
  },
  plugins: [],
}
