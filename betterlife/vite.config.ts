import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.hackmd.io/v1', // 這裡填寫你的 API 服務器地址
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '') // 可選的路徑重寫
      }
    }
  }
})
