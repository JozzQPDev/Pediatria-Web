// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // CAMBIO CRÍTICO: Usa el dominio real o el de Vercel. 
  // Astro necesita esto para generar el sitemap y las URLs canónicas.
  site: 'http://localhost:4321',

  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [
    react(),
    sitemap({
      // Opcional: Filtra páginas que no quieras en Google
      filter: (page) => !page.includes('/admin'),
    })
  ],

  vite: {
    plugins: [tailwindcss()],
    // Optimización para Lucide e iconos pesados
    ssr: {
      noExternal: ['lucide-react']
    }
  },
});