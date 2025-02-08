/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Custom Blue
        secondary: "#007540", // Custom Yellow
        accent: "#0f172a", // Custom Orange
        dark: "#0F172A", // Custom Dark
      },
    },
  },
  plugins: [],
};
