import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#090909',
        gold: '#d4b06a'
      },
      boxShadow: {
        glow: '0 0 30px rgba(212,176,106,0.4)'
      }
    }
  },
  plugins: []
} satisfies Config;
