/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      hagrid: ["Hagrid", "sans-serif"],
      fagun: ["Fagun", "sans-serif"],
      amifer: ["Amifer", "serif"],
    },

    screens: {
      sm: "576px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
  },
  plugins: [],
};
