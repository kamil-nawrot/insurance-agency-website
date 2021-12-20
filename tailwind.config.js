module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Cinzel", "serif"],
      sans: ["Cairo", "sans-serif"]
    },
    extend: {
      width: {
        'fit-content': 'fit-content'
      },
      backgroundColor: ["even"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
