module.exports = {
  purge: {
    enabled: true,
    content: [
      "./public/*.html",
      "./src/**/*.vue",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'shrek-light-green-1': 'rgba(97, 127, 76, 1)',
        'shrek-dark-green-1': 'rgba(28, 28, 7, 1)',
        'shrek-dark-brown-1': 'rgba(105, 80, 42, 1)',
      },
      backgroundImage: theme => ({
        'hero-image': "url('img/header_image.jpg')",
        'overlay': "url('img/overlay.png'), url('img/header_image.jpg')",
      }),
      height: {
        screen90: '90vh',
        screen80: '80vh',
        screen20: '20vh',
        screen10: '10vh',
      }
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
