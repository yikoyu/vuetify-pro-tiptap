import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'

import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin

import { dependencies } from './package.json'

const deps = Object.keys(dependencies).reduce((result, k) => {
  const ignores: string[] = ['@tiptap/vue-3']
  if (ignores.includes(k)) return result

  const pattern = /[`~!@#$^\-&*()=|{}':;',\\[\].<>/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g
  result[k] = k.replace(pattern, '')

  return result
}, {})

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
          vuetify: 'Vuetify',
          'vuetify/components': 'VuetifyComp',
          ...deps
        }
      },
      external: ['vue', 'vuetify', 'vuetify/components', ...Object.keys(deps)]
    }
  }
})
