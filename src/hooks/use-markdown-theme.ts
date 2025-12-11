import type { ComputedRef } from 'vue'
import { computed, unref, watch } from 'vue'

import { DEFAULT_MARKDOWN_THEME_VALUE } from '@/constants/define'

import { isBoolean, isString } from '@/utils/utils'
import { useContext } from './use-context'

export function useMarkdownTheme(value: ComputedRef<string | false | undefined>, hooks?: (value: string) => void) {
  const { state } = useContext()

  const markdownTheme = computed<string>(() => {
    if (isBoolean(unref(value)))
      return DEFAULT_MARKDOWN_THEME_VALUE
    if (isString(state.defaultMarkdownTheme) && state.defaultMarkdownTheme) {
      return state.defaultMarkdownTheme
    }

    return DEFAULT_MARKDOWN_THEME_VALUE
  })

  const markdownThemeStyle = computed(() => {
    return {
      [`markdown-theme-${unref(markdownTheme)}`]: !!isString(unref(markdownTheme)),
    }
  })

  function setMarkdownTheme(val: string) {
    if (!isBoolean(unref(value)) && unref(value) !== val) {
      hooks?.(val)
    }
  }

  watch(markdownTheme, val => setMarkdownTheme(val))

  watch(value, (val) => {
    if (val && isString(val) && state.defaultMarkdownTheme !== val) {
      state.defaultMarkdownTheme = val
    }
  })

  const onCreated = () => {
    state.defaultMarkdownTheme && setMarkdownTheme(state.defaultMarkdownTheme)
  }

  onCreated()

  return {
    markdownThemeStyle,
  }
}
