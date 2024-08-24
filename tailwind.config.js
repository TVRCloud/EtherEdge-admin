/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#f4f7fe",
        "primary-bg": "#fff",
        text: "#1b254b",
        text2: "#abb4cb",
        "text-dark": "#000000",
        "primary-color": "#422afb",
        "primary-color-dark": "#11047a",
        danger: "#ff0000",
      },
    },
  },
  plugins: [],
};
