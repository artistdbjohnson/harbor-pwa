import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        fog: 'var(--fog)',
        moss: 'var(--moss)',
        clay: 'var(--clay)',
        alert: 'var(--alert)',
        mute: 'var(--mute)',
        brown: 'var(--brown)',
        'brown-deep': 'var(--brown-deep)',
        teal: 'var(--teal)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Poppins', 'sans-serif'],
        sans: ['var(--font-body)', 'Roboto', 'sans-serif'],
        cond: ['var(--font-cond)', 'Roboto Condensed', 'sans-serif'],
      },
      maxWidth: {
        measure: '38rem',
      },
    },
  },
  plugins: [],
};

export default config;
