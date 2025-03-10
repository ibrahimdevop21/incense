/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C444F',
        secondary: '#9F5255',
        accent: '#E16A54',
        highlight: '#F39E60',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.5s ease-in',
        'slide-in-right': 'slideInRight 0.5s ease-in',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
