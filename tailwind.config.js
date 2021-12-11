module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
  	colors: {
  		'primary-accent': 'var(--primary-accent)',
  		'primary-bg': 'var(--primary-bg)',
  		'secondary-bg': 'var(--secondary-bg)',
  		'secondary-accent': 'var(--secondary-accent)',

  	},
    keyframes: {
      popup: {
        '0%':{
          opacity: 0,
          transform: "translateY(30px)"
        },
        '60%':{opacity: 1, transform: "translateY(0px)"},
        '100%':{opacity: 0}
      }
    },
    animation: {
      popup: "popup 1s 500ms ease-in-out forwards"
    }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
