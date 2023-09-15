import type { App, Plugin } from 'vue'
import type { Extensions } from '@tiptap/core'

import VuetifyTiptap from './components/VuetifyTiptap.vue'
import VuetifyViewer from './components/VuetifyViewer.vue'
import { createContext, useContext } from './hooks'
import locale, { en, zhHans } from './locales'

interface InstallationOptions {
  lang?: string
  markdownTheme?: string
  components?: Record<string, any>
  extensions?: Extensions
}

const createVuetifyProTipTap = (opts: InstallationOptions): Plugin => {
  const install: Plugin = (app: App): void => {
    const { lang, markdownTheme, components = {}, extensions } = opts || {}

    if (lang) locale.setLang(lang)

    Object.keys(components).forEach(key => app.component(key, components[key]))

    createContext({
      defaultLang: lang,
      defaultMarkdownTheme: markdownTheme,
      extensions
    })
  }

  return install
}

export * from './extensions'
export type {
  ButtonView,
  ButtonViewReturnComponentProps,
  Editor,
  GeneralOptions,
  JSONContent,
  VuetifyTiptapOnChange
} from './type'
export { createVuetifyProTipTap, VuetifyTiptap, VuetifyViewer }
export { useContext }
export { en, locale, zhHans }
export type { InstallationOptions }

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VuetifyTiptap: typeof VuetifyTiptap
    VuetifyViewer: typeof VuetifyViewer
  }
}
