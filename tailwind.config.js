/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eblue: "#27C1B8",
        "eblue-dark": "#256F6A",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"], // Replace 'sans' default with your custom font
      },
    },
  },
  plugins: [],
};
