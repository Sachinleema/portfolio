/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        migra: ["Migra"],
        sans: ["Arial", "sans-serif"],
        tusker: ["Tusker", "serif"],
        montserat: ["Montserrat", "serif"],
        logo: ["Great Vibes", "serif"],


      }, colors: {
        backgroundColor: "#1e2125",
        textColor: "#e9dfce",
      },

    },
  },
  plugins: [],
};