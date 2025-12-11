import type { Extensions } from '@tiptap/core'
import type { App, Plugin } from 'vue'

import { createContext } from './hooks'
import { locale } from './locales'

export interface InstallationOptions {
  lang?: string
  fallbackLang?: string
  markdownTheme?: string
  components?: Record<string, any>
  extensions?: Extensions
}

export function createVuetifyProTipTap(opts: InstallationOptions): Plugin {
  const install: Plugin = (app: App): void => {
    const { lang, fallbackLang, markdownTheme, components = {}, extensions } = opts || {}

    fallbackLang && locale.setFallbackLang(fallbackLang)
    lang && locale.setLang(lang)

    Object.keys(components).forEach(key => app.component(key, components[key]))

    createContext({
      defaultLang: lang,
      defaultFallbackLang: fallbackLang,
      defaultMarkdownTheme: markdownTheme,
      extensions,
    })
  }

  return install
}
