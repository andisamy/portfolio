/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend: { 
       textShadow: {
      'default': '2px 2px 5px rgba(0, 0, 0, 0.5)',
      'md': '4px 4px 6px rgba(0, 0, 0, 0.3)',
      'lg': '6px 6px 8px rgba(0, 0, 0, 0.2)',
    }},
  },
  plugins: [],
}

