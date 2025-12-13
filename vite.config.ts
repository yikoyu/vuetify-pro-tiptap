import type { PluginOption } from 'vite'
import fs from 'node:fs'

import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { PluginPure } from 'rollup-plugin-pure'
import * as sass from 'sass'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: undefined,
      dts: 'types/components.d.ts',
      resolvers: [Vuetify3Resolver()],
    }),
    PluginPure({
      functions: ['Mark.create', 'Extension.create', 'Node.create'],
    }) as PluginOption,
    dts({
      insertTypesEntry: true,
    }),
    // 使用sass原生API编译SCSS
    {
      name: 'custom-style-compiler',
      enforce: 'post',
      apply: 'build',
      generateBundle() {
        // 创建输出目录
        const stylesDir = resolve(__dirname, 'lib/styles')
        fs.mkdirSync(stylesDir, { recursive: true })

        // 获取并编译src/styles下的所有SCSS文件
        const srcStylesDir = resolve(__dirname, 'src/styles')
        const scssFiles = fs.readdirSync(srcStylesDir)
          .filter(file => file.endsWith('.scss'))

        for (const file of scssFiles) {
          const sourcePath = resolve(srcStylesDir, file)
          const targetFileName = file.replace('.scss', '.css')

          // 读取SCSS内容
          const scssContent = fs.readFileSync(sourcePath, 'utf-8')

          // 使用sass.compileString编译SCSS
          const result = sass.compileString(scssContent, {
            loadPaths: [srcStylesDir], // 配置加载路径以处理@import
            style: 'compressed', // 输出样式：expanded或compressed
            sourceMap: false,
          })

          // 写入编译后的CSS
          this.emitFile({
            type: 'asset',
            fileName: `styles/${targetFileName}`,
            source: result.css.toString(),
          })
        }
      },
    } as PluginOption,
  ],
  optimizeDeps: {
    include: ['vue', 'vuetify'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VuetifyProTiptap',
    },
    rollupOptions: {
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          'vuetify': 'Vuetify',
          'vuetify/components': 'VuetifyComp',
        },
      },
      external: ['vue', 'vuetify', 'vuetify/components'],
    },
  },
})
