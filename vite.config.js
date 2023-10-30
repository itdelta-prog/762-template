import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { resolve } from 'path';


export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  base: '/762-template',
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve('src', 'pages/*.html')
      },
      output: {
        manualChunks: false,
        entryFileNames: '[name].js',   // currently does not work for the legacy bundle
        assetFileNames: '[name].[ext]', // currently does not work for images
      },
    }
  }
});