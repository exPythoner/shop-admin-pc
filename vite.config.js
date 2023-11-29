import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'node:path'


import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  // 配置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 处理跨域问题
  server: {
    proxy: {
      '/api': {
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  plugins: [vue(),
  WindiCSS(),
  ]
})
