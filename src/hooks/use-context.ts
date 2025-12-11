import type { AnyExtension } from '@tiptap/core'
import { reactive } from 'vue'

interface Instance {
  /**
   * List of extensions
   *
   * @default []
   */
  extensions: AnyExtension[]

  /**
   * Default language setting
   *
   * @default DEFAULT_LANG_VALUE
   */
  defaultLang?: string

  /**
   * Default fallbackLang setting
   *
   * @default DEFAULT_LANG_VALUE
   */
  defaultFallbackLang?: string

  /**
   * Default Markdown theme setting
   *
   * @default DEFAULT_MARKDOWN_THEME_VALUE
   */
  defaultMarkdownTheme?: string
}

const state: Instance = reactive({
  extensions: [],
}) as unknown as Instance

export function createContext(instance: Partial<Instance>) {
  state.defaultLang = instance.defaultLang
  state.defaultFallbackLang = instance.defaultFallbackLang
  state.defaultMarkdownTheme = instance.defaultMarkdownTheme
  state.extensions = instance.extensions ?? []
}

export function useContext() {
  return {
    state,
  }
}
