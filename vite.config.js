import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'node:path'


import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    WindiCSS(),
  ],
  // 配置路径别名
  resolve:{
    alias:{
      '@': path.resolve(__dirname,"src")
    }
  }
})
