/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    colors: {
      white: '#FFF',
      black: '#273029',
      soft_green: {
        DEFAULT: '#589B7E',
        secondary: '#F5F9F5',
      },
      grey: {
        DEFAULT: '#888',
        secondary: '#F8F8F8',
      },
      orange: '#F4703F',
      outline: '#F1F1F1',
      pink: '#F3D1D7',
      body: '#E5E5E5',
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    backgroundImage: {
      hero: 'url(/hero/bg-2.png)',
    },
  },
  plugins: [require("tailwindcss-animate")],
}