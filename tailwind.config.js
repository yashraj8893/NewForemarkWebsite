/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#0a0805",
          white: "#140f0a",
          dark: "#f9f5f1",
          text: "#f9f5f1",
          muted: "#a3998e",
          gray: "#d4c9bf",
          gold: "#ea7008",
          orange: "#ea7008",
          surface: "#140f0a",
          blue: "#7f98fa",
          green: "#63c58f",
        }
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        display: ["'Syne'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '0.875rem' }],
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
