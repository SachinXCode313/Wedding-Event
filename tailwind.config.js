/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FBF8F4',
        primary: '#765638',
        // you can name them whatever you want
      },
    },
  },
  plugins: [],
}