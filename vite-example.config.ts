import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({
      dirs: undefined,
      dts: false,
      resolvers: [Vuetify3Resolver()]
    }),
    eslintPlugin({
      fix: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
