import type { AnyExtension } from '@tiptap/core'
import { createInjectionState } from '@vueuse/core'
import { computed, reactive, watchEffect } from 'vue'

import { DEFAULT_LANG_VALUE, DEFAULT_MARKDOWN_THEME_VALUE } from '@/constants/define'

import { useContext } from './use-context'

/**
 * Interface representing an tiptap editor instance.
 */
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
   * Default Markdown theme setting
   *
   * @default DEFAULT_MARKDOWN_THEME_VALUE
   */
  defaultMarkdownTheme?: string

  /**
   * Whether it is in fullscreen mode
   *
   * @default false
   */
  isFullscreen: boolean

  /** Text color */
  color?: string

  /** Highlight color */
  highlight?: string
}

export const [useProvideTiptapStore, useTiptapStore] = createInjectionState(() => {
  const { state: _state } = useContext()

  const state: Instance = reactive({
    extensions: _state.extensions ?? [],
    defaultLang: DEFAULT_LANG_VALUE,
    defaultMarkdownTheme: DEFAULT_MARKDOWN_THEME_VALUE,
    isFullscreen: false,
    color: undefined,
    highlight: undefined,
  })

  const isFullscreen = computed(() => state.isFullscreen)

  function toggleFullscreen() {
    state.isFullscreen = !state.isFullscreen
  }

  watchEffect(() => {
    state.extensions = _state.extensions
    state.defaultLang = _state.defaultLang
    state.defaultMarkdownTheme = _state.defaultMarkdownTheme
  })

  return {
    state,
    isFullscreen,
    toggleFullscreen,
  }
})
