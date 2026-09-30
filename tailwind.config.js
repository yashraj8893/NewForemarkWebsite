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
          bg: "#ffffff",
          white: "#ffffff",
          dark: "#121110",
          text: "#1a1816",
          muted: "#6b635b",
          gray: "#4b453f",
          gold: "#ea7008",
          orange: "#ea7008",
          surface: "#ffffff",
          surfaceHover: "#f7f5f2",
          blue: "#4f6ff6",
          green: "#16a34a",
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
