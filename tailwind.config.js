/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pinterest-gray": "#333",
        "pinterest-logo-gray": "#5f5f5f",
        "pinterest-navbar-gray": "#e9e9e9",
      },
    },
  },
  plugins: [],
};
