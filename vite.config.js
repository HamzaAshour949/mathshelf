import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// One id for every build. The games are loaded as `games/x.html?v=<id>`, so a new deploy is a new address and a browser can never show an old copy of a game
// (GitHub Pages lets browsers keep files for 10 minutes). version.json says which build is the newest one, and the app checks it when it opens.
const BUILD = Date.now().toString(36);
const versionFile = {
  name: 'version-file',
  generateBundle() { this.emitFile({ type: 'asset', fileName: 'version.json', source: JSON.stringify({ build: BUILD }) }); },
};

// Relative base: the site works from any sub-path (GitHub Pages project sites).
export default defineConfig({
  base: './',
  define: { __BUILD__: JSON.stringify(BUILD) },
  plugins: [react(), versionFile],
  build: {
    target: 'es2020',
    cssMinify: true,
    chunkSizeWarningLimit: 120,
  },
});
