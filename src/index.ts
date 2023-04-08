import type { Plugin, App } from 'vue'
import { setVuetifyInstance, Vuetify } from './utils/vuetify-instance'
import Logger from './utils/logger'

import VuetifyTiptap from './components/VuetifyTiptap.vue'
import VuetifyViewer from './components/VuetifyViewer.vue'
import type { ToolbarType } from './constants/toolbar-definitions'
import type { StarterKitOptions } from './core/tiptap-kit'
import locale, { zhHans, en } from './locales'

import { createContext } from './hooks/use-context'

interface InstallationOptions {
  vuetify: Vuetify
  lang?: string
  components?: Record<string, any>
  config?: Partial<StarterKitOptions>
}

const createVuetifyProTipTap = (opts: InstallationOptions): Plugin => {
  const install: Plugin = (app: App): void => {
    const { vuetify, lang, components = {}, config } = opts || {}

    if (!vuetify) {
      Logger.warn(`The module VuetifyProTipTap needs vuetify instance. Use createVuetifyProTipTap({ vuetify })`)
      return
    }

    setVuetifyInstance(vuetify)
    if (lang) locale.setLang(lang)

    Object.keys(components).forEach(key => app.component(key, components[key]))

    createContext({ defaultLang: lang, config })
  }

  return install
}

export { createVuetifyProTipTap, VuetifyTiptap, VuetifyViewer }
export { locale, zhHans, en }
export type { ToolbarType, StarterKitOptions, InstallationOptions }

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VuetifyTiptap: typeof VuetifyTiptap
    VuetifyViewer: typeof VuetifyViewer
  }
}
