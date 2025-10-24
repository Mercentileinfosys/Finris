/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f8a515',
          rgb: '248, 165, 21',
        },
        dark: {
          DEFAULT: '#121212',
          rgb: '18, 18, 18',
        },
        gray: {
          DEFAULT: '#616368',
          light: '#f6f6f6',
          rgb: '97, 99, 104',
        },
        white: {
          DEFAULT: '#ffffff',
          rgb: '255, 255, 255',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Koulen', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}

