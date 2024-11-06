/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        // popins: ['Poppins', 'sans-serif'], 
        // itim : ["Itim", 'cursive'],
        // bebas : ["Bebas Neue", 'cursive']

        popins : ["Poppins", 'sans-serif'],
        bebas : ["Montserrat", 'serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}