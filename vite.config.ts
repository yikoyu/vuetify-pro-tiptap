import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'

import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: undefined,
      dts: false,
      resolvers: [Vuetify3Resolver()]
    }),
    eslintPlugin({
      fix: true
    }),
    dts({
      insertTypesEntry: true
    })
  ],
  optimizeDeps: {
    include: ['vue', 'vuetify']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VuetifyProTiptap'
    },
    rollupOptions: {
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vue-demi': 'vueDemi',
          vuetify: 'Vuetify',
          'vuetify/components': 'VuetifyComp'
        }
      },
      external: ['vue', 'vue-demi', 'vuetify', 'vuetify/components']
    }
  }
})
