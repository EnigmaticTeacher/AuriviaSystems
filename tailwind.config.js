/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E948B',
        accent: '#D9A94B',
        neutralText: '#263238',
        background: '#FAFBFB',
        surface: '#FFFFFF',
        mutedText: '#6B7280'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'Menlo', 'Monaco', 'Cascadia Code', 'monospace']
      }
    },
  },
  plugins: [],
};