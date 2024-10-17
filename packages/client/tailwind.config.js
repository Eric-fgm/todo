/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "480px",
      },
    },
    colors: {
      ok: "var(--color-ui-ok)",
      danger: "var(--color-ui-danger)",
    },
    backgroundColor: {
      primary: "var(--color-bg-primary)",
      secondary: "var(--color-bg-secondary)",
      tertiary: "var(--color-bg-tertiary)",
      ok: "var(--color-ui-ok)",
    },
    textColor: {
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      muted: "var(--color-text-muted)",
      ok: "var(--color-ui-ok)",
      danger: "var(--color-ui-danger)",
    },
    borderColor: {
      DEFAULT: "var(--color-border-primary)",
    },
  },
  plugins: [],
};
