import { computed, defineComponent, reactive, watchEffect } from 'vue'
import type { AnyExtension } from '@tiptap/core'
import { createInjectionState } from '@vueuse/core'

import { useContext } from './use-context'

import { DEFAULT_MARKDOWN_THEME_VALUE } from '@/constants/define'

interface Instance {
  extensions: AnyExtension[]
  defaultLang?: string
  defaultMarkdownTheme?: string
  isFullscreen: boolean
  color?: string
  highlight?: string
}

export const [useProvideTiptapStore, useTiptapStore] = createInjectionState(() => {
  const { state: _state } = useContext()

  const state: Instance = reactive({
    extensions: _state.extensions ?? [],
    defaultLang: 'en',
    defaultMarkdownTheme: DEFAULT_MARKDOWN_THEME_VALUE,
    isFullscreen: false,
    color: undefined,
    highlight: undefined
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
    toggleFullscreen
  }
})

export const VuetifyTiptapProvider = defineComponent({
  setup(props, { slots }) {
    useProvideTiptapStore()

    return () => slots?.default?.()
  }
})
