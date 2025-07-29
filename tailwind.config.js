/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lumiere': {
          'ivory': '#FAF8F3',
          'navy': '#22304A',
          'gold': '#C6A664',
          'burgundy': '#7C3048',
          'sage': '#A6B89A',
          'dove': '#E5E2DD',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      }
    },
  },
  plugins: [],
};
