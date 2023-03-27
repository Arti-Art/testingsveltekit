/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte}'],
  darkMode: 'class', // override default, so the dark: class looks at your html class instead of system settings
  theme: {
    extend: {},
  },
  plugins: [],
}
