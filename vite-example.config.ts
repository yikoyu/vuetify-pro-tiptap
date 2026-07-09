/*
 * @Date: 2023-06-15 20:52:07
 * @LastEditors: yikoyu 2282373181@qq.com
 * @LastEditTime: 2023-06-15 22:46:19
 * @FilePath: \vuetify-pro-tiptap\vite-example.config.ts
 */
import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    Vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
