/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        // "Early Cyber" — CRT/VHS + JRPG-menu palette: deep navy base, glowing cyan.
        // Light + dark tokens share names; dark overrides live in markup via dark:.
        paper:   '#F5EFEB', // beige (light base)
        ink:     '#2F4156', // navy (light text)
        espresso:'#0E1A2B', // deep CRT navy (dark base)
        shell:   '#DCEAF2', // pale sky (dark text)
        atomic: {
          // kept the token name 'atomic' so existing markup maps 1:1; values are now cyber-blue
          orange:  '#1BB5C9', // cyan — primary accent (light)
          teal:    '#567C8D', // steel teal — secondary
          gold:    '#C8D9E6', // sky blue — highlight
          'orange-bright': '#3FE0F0', // glowing cyan — dark-mode primary
          'teal-bright':   '#7FA8BC', // lifted steel teal — dark-mode secondary
          'gold-bright':   '#A9CBE0', // sky — dark-mode highlight
        },
        y2k: '#5BE1EB', // bright CRT cyan glow — used sparingly
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
