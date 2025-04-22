/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackColor: "#000000",
        whiteColor: "#FFFFFF",
        primaryColor: "#4880FF",
      },
      screens: {
        "1024-1120": { min: "1024px", max: "1120px" },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
