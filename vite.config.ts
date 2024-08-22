import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'node:path';
import postcssPresetEnv from 'postcss-preset-env';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
        postcssPresetEnv({
          stage: 2,
          browsers: '> 0.2% and not dead',
        }),
      ],
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  server: {
    port: 3002,
    host: true,
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      input: path.resolve(__dirname, './index.html'),
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: (id: string) => {
          if (id.includes('vue'))
            return 'vue';
          return undefined;
        },
      },
    },
  },
});
