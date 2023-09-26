/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#BA4949",
        "custom-white": "#C15C5C",
        "custom-gray": "#EFEFEF",
      }
    },
  },
  plugins: [],
}

