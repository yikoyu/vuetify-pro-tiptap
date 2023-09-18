import { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import { PluginPure } from 'rollup-plugin-pure'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import { dependencies, scripts } from './package.json'

const deps = Object.keys(dependencies).reduce((result: any, k) => {
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
    {
      // 在打包时 rollup 无法给 tiptap 加上 PURE 标注，需要手动加上
      ...PluginPure({
        functions: ['Mark.create', 'Extension.create', 'Node.create']
      })
    },
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
          'vuetify/components': 'VuetifyComp'
        }
      },
      external: ['vue', 'vuetify', 'vuetify/components']
    }
  }
})
