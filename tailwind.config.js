/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          body: ['Roboto', 'sans-serif'],
          title: ['Anton'],
          text: ['Indie flower'],
        },
        colors: {
          //fond_claire: '#F5F5DC',
          fond_dark: '#BF4900',
          'fond-cards': '#EFD242',
          'fond-dark-cards': '#FF7F00',
          input_color: '#FBF2B7',
          fond_header: '#7f00ff',
          color_title: '#75C9E3',
          fond_color_button: '#F5F5DC',
          action: '#6C0277',
          'action-hover': '#6C0277',
          'action-bg-hover': '#CCCCCC',
          warning: '#FFB300',
          error: '#DF0000',
          'text-dark': '#FFFFFF',
        },
        fontSize: {
          // input
          'input-size-text': '1rem',
        },
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
        },
      },
    },
    plugins: [require('daisyui')],
  }
  