module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,css,tsx,html}",
    "./public/index.html",
    "./components/**/*.{js,jsx}",
    "./ui/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "15px",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    fontFamily: {
      bebas: ["var(--font-bebas)"],
      federo: ["var(--font-federo)"],
      sansita: ["var(--font-sansita)"],
      futura: ["var(--font-futura)"],
      montserrat: ["var(--font-montserrat)"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
