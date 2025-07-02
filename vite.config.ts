import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure public folder is copied completely
    copyPublicDir: true,
    emptyOutDir: true,
  },
  publicDir: 'public',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});