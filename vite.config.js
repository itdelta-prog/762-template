import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({
  base: '/762-template',
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve('src', 'index.html'),
        contact: resolve('src', 'pages/contact.html'),
        news: resolve('src', 'pages/news.html')
      },
      output: {
        manualChunks: false,
        entryFileNames: '[name].js',   // currently does not work for the legacy bundle
        assetFileNames: '[name].[ext]', // currently does not work for images
      },
    }
  }
});