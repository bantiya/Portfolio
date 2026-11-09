import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages uses /Portfolio/; local development and Sites use /.
  base: process.env.PAGES_BASE_PATH || '/',
});
