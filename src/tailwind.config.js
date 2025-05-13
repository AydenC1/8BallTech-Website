
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'dark-purple': '#000000',
        'darker-purple': '#AA14F0',
        'bright-purple': '#BC8CF2',
        'deep-purple': '#EEEEEE',
      },
    },
  },
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }