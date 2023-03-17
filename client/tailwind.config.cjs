/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F1F7ED",
        accent: "#04151F",
        placeholder: "#46343F",
      },
      fontFamily: {
        "Belgant-Aesthetic": ["Belgant-Aesthetic"],
        Gilroy: ["Gilroy"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
