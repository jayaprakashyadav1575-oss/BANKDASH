/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        primary: {
          DEFAULT: "#2D60FF",
          dark: "#1814F3",
          light: "#E7EDFF",
          50: "#F4F7FE",
          100: "#E7EDFF",
          600: "#2D60FF",
          700: "#1814F3",
        },
        secondary: {
          DEFAULT: "#FE5C73",
          yellow: "#FFBB38",
          teal: "#16DBCC",
          purple: "#7952F5",
          pink: "#FF82AC",
          cyan: "#41D4A8",
        },
        bank: {
          bg: "#F5F7FA",
          card: "#FFFFFF",
          navy: "#343C6A",
          title: "#232323",
          muted: "#718EBF",
          lightText: "#8BA3CB",
          border: "#DFEAF2",
          divider: "#F4F5F7",
          darkCard: "#2D60FF",
        }
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '25px',
        '4xl': '30px',
      },
      boxShadow: {
        'card': '0 4px 25px rgba(220, 230, 242, 0.45)',
        'card-hover': '0 10px 30px rgba(200, 215, 235, 0.6)',
        'blue-glow': '0 10px 25px -5px rgba(45, 96, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
