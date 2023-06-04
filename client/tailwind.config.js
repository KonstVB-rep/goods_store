/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm_460: "460px",
      },
      boxShadow: {
        top: "-2px -2px 10px 1px rgba(0, 0, 0, 0.5)",
      },
      gridTemplateColumns: {
        sm: "repeat(auto-fit, minmax(240px, 1fr))",
        md: "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};
