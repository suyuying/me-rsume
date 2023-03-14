/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  // darkMode: ["class", '[data-theme="dark"]'],
  darkMode: ["class"],
  plugins: [require("daisyui")],
};
