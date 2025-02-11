/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        broun: "#5A3E36",
        ceial: "#56CCF2",
        lightYellow: "#F2C94C",
        darkRed: "#A64B2A",
        darkGray: "#6D6D6D",
        black: "#2C2C2C",
        white: "#FFFFFF",
        ovalGreen: "#78866B",
        lightGold: "#D4AF37",
        lightBage: "#F5EFE6",
      },
      fontFamily: {
        playfair: ['"Playfair Display", serif'],
      },
    },
  },
  plugins: [],
};
