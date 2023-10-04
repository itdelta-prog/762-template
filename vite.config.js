import { defineConfig } from 'vite';
import { resolve } from 'path'


export default defineConfig({
  base: '/762',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'pages/contact.html')
      },
      output: {
        manualChunks: false,
      //  inlineDynamicImports: true,
        entryFileNames: '[name].js',   // currently does not work for the legacy bundle
        assetFileNames: '[name].[ext]', // currently does not work for images
      },
    }
  }
});