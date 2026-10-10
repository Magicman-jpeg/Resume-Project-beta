/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          indigo: '#6366f1',
          sky: '#06b6d4',
          violet: '#8b5cf6',
          teal: '#14b8a6',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        // Option A — editorial elegant serif (hero name, major headings)
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        // Option B — bold modern grotesque (punchy section headers, eyebrows)
        grotesk: ['"Darker Grotesque"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
