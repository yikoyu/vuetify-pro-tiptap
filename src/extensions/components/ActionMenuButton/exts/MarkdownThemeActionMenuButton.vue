<script lang="ts" setup>
import type { ActionMenuButtonItem } from '../src/types'
import type { MarkdownThemeProps } from '@/constants/define'

import type { MarkdownThemeOptions } from '@/extensions/markdown-theme'
import { computed } from 'vue'
import { DEFAULT_MARKDOWN_THEME_LIST } from '@/constants/define'
import { useContext } from '@/hooks'
import ActionMenuButton from '../src/index.vue'
import { extActionButtonMenuProps } from '../src/props'

const props = defineProps(extActionButtonMenuProps<MarkdownThemeOptions>())

const { state } = useContext()

const items = computed<ActionMenuButtonItem[]>(() => {
  const markdownThemes
    = [...DEFAULT_MARKDOWN_THEME_LIST, ...props.extension.options.markdownThemes] as MarkdownThemeProps[]

  return markdownThemes.map(k => ({
    title: props.t(k.title),
    isActive: () => {
      return state.defaultMarkdownTheme === k.value
    },
    action: () => {
      state.defaultMarkdownTheme = k.value
    },
    divider: k.divider ?? false,
    default: k.default ?? false,
  }))
})
</script>

<template>
  <ActionMenuButton
    :editor="editor"
    :items="items"
    :max-height="280"
    :disabled="false"
    :tooltip="t('editor.markdownTheme.tooltip')"
    icon="markdownTheme"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
