import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { PluginPure } from 'rollup-plugin-pure'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, PluginOption } from 'vite'
import dts from 'vite-plugin-dts'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import { dependencies, scripts } from './package.json'

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
      dts: 'types/components.d.ts',
      resolvers: [Vuetify3Resolver()]
    }),
    PluginPure({
      functions: ['Mark.create', 'Extension.create', 'Node.create']
    }) as PluginOption,
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
          vuetifyx: 'Vuetifyx',
          'vuetify/components': 'VuetifyComp'
        }
      },
      external: ['vue', 'vuetify', 'vuetifyx', 'vuetify/components']
    }
  }
})
