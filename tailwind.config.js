/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#f9ab00",
        'primary-text': "#a6b2c9",
        'primary-bg': '#1a191f',
        'second-bg': '#222028',
        'error': '#ff3333',
      },
    },
  },
  plugins: [],
}
