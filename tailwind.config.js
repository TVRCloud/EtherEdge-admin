/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "primary-bg": "var(--primary-bg)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-dark": "var(--text-dark)",
        "primary-color": "var(--primary-color)",
        "primary-color-dark": "var(--primary-color-dark)",
        danger: "var(--danger)",
      },
    },
  },
  plugins: [],
};
