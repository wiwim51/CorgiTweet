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
        beige: "#F4E9D6",
        red: "#FB4742",
        black: "#2B1716",
      },
    },
  },
  plugins: [],
};
