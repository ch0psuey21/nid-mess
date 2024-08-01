/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.{html,js}"],
  theme: {
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    extend: {
      colors: {
        numberRed: "#C11F1F",
        background: "#FFEED4",
      },
    },
  },
  plugins: [],
};
