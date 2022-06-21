/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Blue": "hsl(233, 26%, 24%)",
        "Lime-Green": "hsl(136, 65%, 51%)",
        "Bright-Cyan": "hsl(192, 70%, 51%)",
        "Grayish-Blue": "hsl(233, 8%, 62%)",
        "Light-Grayish-Blue": "hsl(220, 16%, 96%)",
        "Light-Gray": "hsl(0, 0%, 98%)",
        "Gradient-1": "#86e5a6",
        "Gradient-2": "#80d3e0"
      },
      fontFamily: {
        'Public-Sans': ["Public Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};
