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
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        'primary': "#f9ab00",
        'primary-text': "#a6b2c9",
        'primary-bg': '#1a191f',
        'second-bg': '#222028',
      },
      screens: {
        'mobile': '400px', // => @media (min-width: 640px) { ... }
      },
      fontFamily: {
        'primary': `'Quicksand', sans-serif;`,
        'title': `'Saira Stencil One', cursive;`,
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
