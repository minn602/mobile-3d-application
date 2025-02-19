/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EC1D25",
        secondary: "#F3D5D5",
        while: "#ffffff",
      },
      fontFamily: {
        poppins: "Poppins, serif",
      },
    },
  },
  plugins: [],
};
