/*
 * @Date: 2023-06-15 20:52:07
 * @LastEditors: yikoyu 2282373181@qq.com
 * @LastEditTime: 2023-06-15 22:46:19
 * @FilePath: \vuetify-pro-tiptap\vite-example.config.ts
 */
import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({
      dirs: undefined,
      dts: false,
      resolvers: [Vuetify3Resolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
