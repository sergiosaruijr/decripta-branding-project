/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hagrid: ["var(--font-hagrid)", "sans-serif"],
        fagun: ["var(--font-fagun)", "sans-serif"],
        amifer: ["Amifer", "serif"],
      },
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
