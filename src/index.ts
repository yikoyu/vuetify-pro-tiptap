import type { Plugin, App } from 'vue'
import type { Extensions } from '@tiptap/core'

import VuetifyTiptap from './components/VuetifyTiptap.vue'
import VuetifyViewer from './components/VuetifyViewer.vue'
import locale, { zhHans, en } from './locales'

import { createContext } from './hooks/use-context'

interface InstallationOptions {
  lang?: string
  components?: Record<string, any>
  extensions?: Extensions
}

const createVuetifyProTipTap = (opts: InstallationOptions): Plugin => {
  const install: Plugin = (app: App): void => {
    const { lang, components = {}, extensions } = opts || {}

    if (lang) locale.setLang(lang)

    Object.keys(components).forEach(key => app.component(key, components[key]))

    createContext({ defaultLang: lang, extensions })
  }

  return install
}

export * from './extensions'
export type { ButtonView, ButtonViewReturnComponentProps, GeneralOptions } from './type'
export { createVuetifyProTipTap, VuetifyTiptap, VuetifyViewer }
export { locale, zhHans, en }
export type { InstallationOptions }

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VuetifyTiptap: typeof VuetifyTiptap
    VuetifyViewer: typeof VuetifyViewer
  }
}
