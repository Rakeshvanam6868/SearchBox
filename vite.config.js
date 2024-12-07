// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components' // Adjust path as needed
    }
  }
});
