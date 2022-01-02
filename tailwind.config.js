module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#a82514',
        accent: 'rgb(205,171,130)',
      },
    },
  },
  plugins: [],
  important: true,
}
