import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',  // Make sure this points to the `src` folder
    }
  },
  plugins: [vue()]
})
