import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: true,
  },
  build: {
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: path.resolve(__dirname, './index.html'),
    },
  },
  css: {
    devSourcemap: true
  }
});
