/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0941f6",
        dark: "#1a1a1a",
        secondary: "#6b7280",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
