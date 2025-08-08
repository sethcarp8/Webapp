/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
          mono: ['var(--font-geist-mono)', 'monospace'],
        },
        colors: {
          // Custom brand colors if needed
          brand: {
            50: '#eff6ff',
            500: '#2563eb',
            600: '#1d4ed8',
            700: '#1e40af',
          }
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  };
  