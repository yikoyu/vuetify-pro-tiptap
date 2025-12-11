<script lang="ts" setup>
import type { ActionMenuButtonItem } from '../src/types'
import type { FontSizeOptions } from '@/extensions/font-size'

import { computed } from 'vue'
import { DEFAULT_FONT_SIZE_VALUUE } from '@/constants/define'
import ActionMenuButton from '../src/index.vue'
import { extActionButtonMenuProps } from '../src/props'

const props = defineProps(extActionButtonMenuProps<FontSizeOptions>())

const items = computed<ActionMenuButtonItem[]>(() => {
  const fontSizes = (props.extension.options?.fontSizes as FontSizeOptions['fontSizes']) || []

  return [DEFAULT_FONT_SIZE_VALUUE, ...fontSizes].map(k => ({
    title: k === DEFAULT_FONT_SIZE_VALUUE ? props.t('editor.default') : String(k),
    isActive: () => {
      const { fontSize } = props.editor.getAttributes('textStyle')

      const isDefault = k === DEFAULT_FONT_SIZE_VALUUE
      const notFontSize = fontSize === undefined
      if (isDefault && notFontSize) {
        return true
      }

      return props.editor.isActive({ fontSize: String(k) }) || false
    },
    action: () => {
      if (k === DEFAULT_FONT_SIZE_VALUUE) {
        props.editor.chain().focus().unsetFontSize().run()
        return
      }

      props.editor.chain().focus().setFontSize(String(k)).run()
    },
    divider: k === DEFAULT_FONT_SIZE_VALUUE,
    default: k === DEFAULT_FONT_SIZE_VALUUE,
  }))
})
</script>

<template>
  <ActionMenuButton
    :editor="editor"
    :items="items"
    :max-height="280"
    :disabled="!props.editor.can().setFontSize('')"
    :tooltip="t('editor.fontSize.tooltip')"
    icon="fontSize"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
