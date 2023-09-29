import { defineConfig } from 'vite';
import { resolve } from 'path'


export default defineConfig({
  base: '/762',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'pages/contact.html')
      }
    }
  }
});