// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'http://localhost:4321',

  output: 'server',
  adapter: vercel(),

  integrations: [
    react(),
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
