/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nexa: ['Nexa', 'sans-serif'],
        nexabold: ['Nexa-Bold', 'sans-serif']
      },
    },
  },
  plugins: [],
};
