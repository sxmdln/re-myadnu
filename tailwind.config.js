/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: 'rgb(58,79,138)',
      lightblue: 'rgb(47,131,194)',
      darkgray: 'rgb(48,48,48)',
      lightgray: 'rgb(132,132,132)',
      white: 'rgb(255,255,255)',
      red: 'rgb(214,45,32)',
    },
    iconStyle: {
      thin: '100',
      light: '300',
      regular: '400',
      solid: '900'
      // Brands and Duotone are reserved and can't be overridden
  },
  iconSpacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem'
  }
  },
  plugins: [],
};
