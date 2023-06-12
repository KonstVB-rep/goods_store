/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      stretchable: 'clamp(1.5rem,3vw, 4rem)',
    },
    extend: {
      screens: {
        sm_460: '460px',
        sm_540: '540px',
      },
      boxShadow: {
        xl_top: ' 0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1)',
        y: '0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1),0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      gridTemplateColumns: {
        sm: 'repeat(auto-fit, minmax(240px, 1fr))',
        md: 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      gridTemplateRows: {
        basic: 'minmax(380px, 1fr)',
      },
    },
  },
  plugins: [],
};
