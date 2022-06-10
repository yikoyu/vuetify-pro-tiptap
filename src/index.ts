import type { PluginFunction } from 'vue'
import type { default as Vuetify } from 'vuetify/lib'
import { setVuetifyInstance } from './utils/vuetify-instance'

import VuetifyTiptap from './components/VuetifyTiptap.vue'
import VuetifyViewer from './components/VuetifyViewer.vue'
export type { ToolbarType } from './constants/toolbar-definitions'
export type { StarterKitOptions } from './core/tiptap-kit'
import locale, { zhHans, en } from './locales'

export interface InstallationOptions {
  vuetify: Vuetify
  lang?: string
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VuetifyTiptap', VuetifyTiptap)
  window.Vue.component('VuetifyViewer', VuetifyViewer)
}

const createVuetifyProTipTap = (opts: InstallationOptions): PluginFunction<InstallationOptions> => {
  const install: PluginFunction<InstallationOptions> = (Vue): void => {
    const { vuetify, lang } = opts || {}

    if (!vuetify) {
      console.warn('The module VuetifyProTipTap needs vuetify instance. Use Vue.use(VuetifyProTipTap, { vuetify })')
      return
    }

    setVuetifyInstance(vuetify)
    if (lang) locale.lang = lang
  }

  return install
}

export { createVuetifyProTipTap, VuetifyTiptap, VuetifyViewer, locale, zhHans, en }
