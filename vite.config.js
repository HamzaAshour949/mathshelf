import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base: the site works from any sub-path (GitHub Pages project sites).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssMinify: true,
    chunkSizeWarningLimit: 120,
  },
});
