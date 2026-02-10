// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321', // Cambia a tu dominio real en producción
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});