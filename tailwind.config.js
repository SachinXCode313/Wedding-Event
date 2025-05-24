/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF6EC',
        navbar: '#765638',
        // you can name them whatever you want
      },
    },
  },
  plugins: [],
}