/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#28245c',
          blue: '#2e27c3',
          deep: '#17166b',
          cyan: '#1fb6e8',
          orange: '#f26b21',
          purple: '#6a3c96',
          teal: '#0c5d68',
          ink: '#1f1f2e',
          mist: '#f3f3f6',
          gray: '#eeeff1',
          muted: '#7a7a7a',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      maxWidth: {
        site: '1740px',
      },
    },
  },
  plugins: [],
};
