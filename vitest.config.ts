import { fileURLToPath, URL } from 'url'

import vuetify from 'vite-plugin-vuetify'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue({
      customElement: /e-/
    }),
    vuetify(),
    AutoImport({
      include: [/\.vue$/, /\.vue\?vue/, /\.stories\.ts$/, /\.[tj]s$/],
      imports: ['vue', 'vue-router'],
      dirs: ['~/src/components'],
      vueTemplate: true
    }),
    Components({
      dirs: ['~/src/components'],
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.stories\.ts$/, /\.[tj]s$/]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    css: true,
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['text', 'json', 'html']
    },
    server: {
      deps: {
        inline: ['vuetify']
      }
    }
  }
})
