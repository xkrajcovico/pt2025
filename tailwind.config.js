module.exports = {
  purge: {
    enabled: false,
    content: [
      "./public/*.html",
      "./src/**/*.vue",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme=> ({
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
