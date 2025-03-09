import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },

  plugins: [
    vue(),
    Pages({
      dirs: 'src/views',  // 需要生成路由的文件目录
      exclude: ['**/components/*.vue']  // 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
    }),
  ],
})
