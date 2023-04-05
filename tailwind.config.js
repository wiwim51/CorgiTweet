/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roux: "#FEA538",
        "roux-clair": "#FFB75E",
        beige: "#FFFFFF",
        red: "#FB4742",
        black: "#202124",
      },
    },
  },
  plugins: [],
};
