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
      spacing: {
        '128': '32rem',
        '160': '40rem'
      },
      backgroundColor: ["even"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
