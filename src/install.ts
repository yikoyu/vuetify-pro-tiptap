import type { Extensions } from '@tiptap/core'
import type { App, Plugin } from 'vue'

import { createContext } from './hooks'
import { locale } from './locales'

export interface InstallationOptions {
  lang?: string
  markdownTheme?: string
  components?: Record<string, any>
  extensions?: Extensions
}

export const createVuetifyProTipTap = (opts: InstallationOptions): Plugin => {
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
