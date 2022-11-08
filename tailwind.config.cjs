/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "5b-yellow": "#ffb400",
        "secondary":"#fef5e6",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
