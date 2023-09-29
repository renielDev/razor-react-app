/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "base": "#1287FD"
        },
        "colorbg": "#EFF3F7"
      }
    },
  },
  plugins: [],
}

