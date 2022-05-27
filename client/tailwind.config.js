module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    container: {
      center: true
    },

    extend: {
      borderColor: {
        DEFAULT: 'transparent'
      }
    }
  },

  corePlugins: {
    aspectRatio: false
  },

  plugins: [require('@tailwindcss/aspect-ratio')]
}
