/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        // Atomic-age mid-century palette with a single Y2K accent.
        // Light + dark tokens share names; dark overrides live in markup via dark:.
        paper:   '#F4ECD8', // warm cream (light base)
        ink:     '#2B2520', // warm near-black (light text)
        espresso:'#1E1B18', // warm black (dark base)
        shell:   '#EDE4D3', // cream (dark text)
        atomic: {
          orange:  '#D96E36', // burnt orange — primary
          teal:    '#1F7A6E', // muted teal — secondary
          gold:    '#E6B74A', // goldenrod/mustard — highlight
          'orange-bright': '#E8824A', // dark-mode primary
          'teal-bright':   '#3FA596', // dark-mode secondary
          'gold-bright':   '#F0C560', // dark-mode highlight
        },
        y2k: '#8A6FD1', // iridescent violet — used once, sparingly
      },
      fontFamily: {
        // Fraunces — soft characterful display serif (hero name, major headings)
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        // Space Grotesk — era-flavored geometric sans (subheads, eyebrows)
        grotesk: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        // Inter — clean body text
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Fira Code — small retro-tech mono labels
        mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
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
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin-slow 36s linear infinite',
      },
    },
  },
  plugins: [],
};
