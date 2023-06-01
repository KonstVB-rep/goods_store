/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        top: "-2px -2px 10px 1px rgba(0, 0, 0, 0.5)",
      },
      gridTemplateColumns: {
        list: "repeat(auto-fit, minmax(270px, 1fr))",
      },
    },
  },
  plugins: [],
};
