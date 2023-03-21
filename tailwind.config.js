/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': "#121825",
        'primary-text': "#d4dd29",
        'color-hover': "#262c37",
        'primary-content': "#a6b2c9",
      },
      screens: {
        'mobile': '400px', // => @media (min-width: 640px) { ... }
      },
      fontFamily: {
        'primary': `'Quicksand', sans-serif;`,
      }
    },
  },
  plugins: [],
}
