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
          bg: "#f5f5f3",
          white: "#ffffff",
          dark: "#0d0d0d",
          text: "#111111",
          muted: "#666666",
          gray: "#999999",
          gold: "#d4af37",
          blue: "#7f98fa",
          green: "#63c58f",
        }
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
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
