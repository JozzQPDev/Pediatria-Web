/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // Escanea archivos en src/
  theme: {
    extend: {
      minHeight: {
        '350': '350px', // Define custom min-height for 350px
      },
      height: {
        '450': '450px', // Define custom height for 450px
      },
      translate: {
        '10': '10px', // Define custom translate for 10px (used as -translate-y-10)
      },
    },
  },
  plugins: [],
};