/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        martires: ["BBTMartiresFree", "sans-serif"],
        rochester: ["Rochester", "sans-serif"],
      },
      borderWidth: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
