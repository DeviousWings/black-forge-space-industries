/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        black: '#0a0a0a',
        dark: '#111111',
        darker: '#1a1a1a',
        panel: '#222222',
        border: '#333333',
        silver: '#c0c0c0',
        'silver-dark': '#888888',
        orange: '#ff6600',
        'orange-dark': '#cc4400',
        text: '#e0e0e0',
        'text-dim': '#888888',
        success: '#44aa44',
        error: '#cc3333',
      },
      boxShadow: {
        'orange-glow': '0 0 15px rgba(255, 102, 0, 0.15)',
      },
    },
  },
  plugins: [],
}