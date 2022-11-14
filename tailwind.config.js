/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'san-serif'],
        ma: ['Montserrat Alternates','san-serif']
      }
    },
  },
  plugins: [],
}
