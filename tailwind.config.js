/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        DEFAULT: "black", // Set default text color to black
      },
    },
  },
  plugins: [],
};
