import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
// Configuração básica para projetos estáticos
export default defineConfig({
  plugins: [
    react(),
    vercel({
      // Configuração mínima para SSG
      prerender: {
        routes: ['/', '/pt', '/en', '/portfolio'],
        crawl: true
      },
      // Configuração de cache para assets
      isr: {
        expiration: 60 * 60 * 24 // 24 horas
      }
    }), tailwindcss()
  ],
  build: {
    target: 'es2020',
    outDir: 'dist'
  }
});