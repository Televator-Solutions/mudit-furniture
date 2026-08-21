/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EBE2D3',
          300: '#DED1BC',
          400: '#C7B496',
          500: '#B09873',
          600: '#8E7350',
          700: '#6B5438',
          800: '#4A3926',
          900: '#2A1F14',
        },
        wood: {
          50: '#FDF8F3',
          100: '#F9EFE3',
          200: '#F0DBC5',
          300: '#E3C1A1',
          400: '#CF9E6F',
          500: '#B87D44',
          600: '#9E622E',
          700: '#7E4921',
          800: '#64391C',
          900: '#462714',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#666666',
          600: '#4D4D4D',
          700: '#383838',
          800: '#242424',
          900: '#171615',
          950: '#0F0E0D',
        },
        gold: {
          50: '#FAF7ED',
          100: '#F4ECD4',
          200: '#E7D8A4',
          300: '#D7BF70',
          400: '#C7A843',
          500: '#AC8C28',
          600: '#876C1E',
          700: '#644F18',
          800: '#453613',
          900: '#281F0C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(28, 25, 23, 0.05)',
        'card': '0 10px 30px -5px rgba(28, 25, 23, 0.07), 0 4px 6px -2px rgba(28, 25, 23, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(126, 73, 33, 0.12), 0 8px 16px -4px rgba(28, 25, 23, 0.04)',
        'dropdown': '0 12px 32px -4px rgba(28, 25, 23, 0.1)',
        'modal': '0 25px 50px -12px rgba(15, 14, 13, 0.25)',
      }
    },
  },
  plugins: [],
}
