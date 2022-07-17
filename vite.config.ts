import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import eslintPlugin from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'

import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin({
      jsx: true
    }),
    Components({
      dirs: undefined,
      dts: false,
      resolvers: [VuetifyResolver()]
    }),
    eslintPlugin({
      fix: true
    }),
    dts({
      tsConfigFilePath: 'tsconfig.lib.json',
      insertTypesEntry: true
    })
  ],
  optimizeDeps: {
    include: ['vue', 'vue-demi', 'vuetify', 'vuetify/lib']
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
        globals: {
          vue: 'Vue',
          vueDemi: 'vue-demi',
          vuetify: 'Vuetify',
          'vuetify/lib': 'VuetifyLib'
        }
      },
      external: ['vue', 'vue-demi', 'vuetify', 'vuetify/lib']
    }
  }
})
