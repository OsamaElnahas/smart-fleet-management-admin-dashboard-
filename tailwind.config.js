/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blackColor: "#000000",
                whiteColor: "#FFFFFF",
                primaryColor: "#4880FF"

            },
            fontFamily: {
                Poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}