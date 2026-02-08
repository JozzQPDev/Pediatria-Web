// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321', // luego se cambia por el dominio real

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
