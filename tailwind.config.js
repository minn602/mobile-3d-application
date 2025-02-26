/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D12F28",
        secondary: "#ffd3eb",
        while: "#ffffff",
        lightgray: "#F3F3F3",
        gray: "#979797",
      },
      fontFamily: {
        playwrite: "Playwrite IT Moderna, serif",
        opensans: "Open Sans, serif",
      },
    },
  },
  plugins: [],
};
