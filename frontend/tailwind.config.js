/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        brand: {
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#99f6e0",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          700: "#1e293b",
          800: "#0f172a",
          900: "#020617",
        },
        gold: "#D4AF37",
        silkDark: "#1a1d23",
        silkGray: "#f0f2f5",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #020617 0%, #0f172a 50%, #134e4a 100%)",
        "card-gradient":
          "linear-gradient(180deg, transparent 50%, rgba(2, 6, 23, 0.95) 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(20, 184, 166, 0.25)",
        "card-hover": "0 25px 50px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
