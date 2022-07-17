import type { Plugin } from 'vue-demi'
import type { default as Vuetify } from 'vuetify/lib'
import { setVuetifyInstance } from './utils/vuetify-instance'
import Logger from './utils/logger'

import VuetifyTiptap from './components/VuetifyTiptap.vue'
import VuetifyViewer from './components/VuetifyViewer.vue'
import type { ToolbarType } from './constants/toolbar-definitions'
import type { StarterKitOptions } from './core/tiptap-kit'
import locale, { zhHans, en } from './locales'

interface InstallationOptions {
  vuetify: Vuetify
  lang?: string
  components?: Record<string, any>
  config?: Partial<StarterKitOptions>
}

declare module 'vue/types/vue' {
  interface Vue {
    $vuetifyProTiptap: {
      defaultLang?: string
      config?: Partial<StarterKitOptions>
    }
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VuetifyTiptap', VuetifyTiptap)
  window.Vue.component('VuetifyViewer', VuetifyViewer)
}

const createVuetifyProTipTap = (opts: InstallationOptions): Plugin => {
  const install: Plugin = (_Vue): void => {
    const { vuetify, lang, components = {}, config } = opts || {}

    if (!vuetify) {
      Logger.warn(`The module VuetifyProTipTap needs vuetify instance. Use Vue.use(VuetifyProTipTap, { vuetify })`)
      return
    }

    setVuetifyInstance(vuetify)
    if (lang) locale.setLang(lang)

    Object.keys(components).forEach(key => _Vue.component(key, components[key]))

    _Vue.prototype.$vuetifyProTiptap = {
      defaultLang: lang,
      config
    }
  }

  return install
}

export { createVuetifyProTipTap, VuetifyTiptap, VuetifyViewer }
export { locale, zhHans, en }
export type { ToolbarType, StarterKitOptions, InstallationOptions }
