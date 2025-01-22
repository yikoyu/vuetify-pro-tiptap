import { resolve } from "path"
import process from "process"
import vue from "@vitejs/plugin-vue"
import fs from "fs-extra"
import { PluginPure } from "rollup-plugin-pure"
import { Vuetify3Resolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import { defineConfig, PluginOption } from "vite"
import dts from "vite-plugin-dts"
import { dependencies } from "./package.json"

const deps = Object.keys(dependencies).reduce((result, k) => {
  const ignores: string[] = ["@tiptap/vue-3"]
  if (ignores.includes(k)) return result

  const pattern =
    /[`~!@#$^\-&*()=|{}':;',\\[\].<>/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g
  result[k] = k.replace(pattern, "")

  return result
}, {})

// 自定义插件：仅在本地开发时复制 lib 目录
const copyLibPlugin = (): PluginOption => ({
  name: "copy-lib-plugin",
  closeBundle: () => {
    if (process.env.npm_lifecycle_event === "watch-build") {
      const src = resolve(__dirname, "lib")
      const dest = resolve(
        __dirname,
        "../x/ui/vuetifyx/vuetifyxjs/src/lib/TiptapEditor/lib"
      )
      fs.removeSync(dest)
      fs.copySync(src, dest)
      console.log(`Copied lib to ${dest}`)
    }
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: undefined,
      dts: "types/components.d.ts",
      resolvers: [Vuetify3Resolver()]
    }),
    PluginPure({
      functions: ["Mark.create", "Extension.create", "Node.create"]
    }) as PluginOption,
    dts({
      insertTypesEntry: true
    }),
    copyLibPlugin()
  ],
  optimizeDeps: {
    include: ["vue", "vuetify"]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VuetifyProTiptap"
    },
    rollupOptions: {
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
          vuetifyx: "Vuetifyx",
          "vuetify/components": "VuetifyComp"
        }
      },
      external: ["vue", "vuetify", "vuetifyx", "vuetify/components"]
    }
  }
})
