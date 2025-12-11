<script lang="ts" setup>
import type { ActionMenuButtonItem } from '../src/types'
import type { FontFamilyProps } from '@/constants/define'
import type { FontFamilyOptions } from '@/extensions/font-family'

import { computed } from 'vue'
import { DEFAULT_FONT_FAMILY_VALUE } from '@/constants/define'
import ActionMenuButton from '../src/index.vue'
import { extActionButtonMenuProps } from '../src/props'

const props = defineProps(extActionButtonMenuProps<FontFamilyOptions>())

const items = computed<ActionMenuButtonItem[]>(() => {
  const fontFamilies = (props.extension.options?.fontFamilies as FontFamilyProps[]) || []

  return fontFamilies.map(k => ({
    title: props.t(k.title),
    isActive: () => {
      const { fontFamily } = props.editor.getAttributes('textStyle')
      const isDefault = k.value === DEFAULT_FONT_FAMILY_VALUE
      const notFontFamily = fontFamily === undefined
      if (isDefault && notFontFamily) {
        return true
      }

      return props.editor.isActive({ fontFamily: k.value }) || false
    },
    action: () => {
      if (k.value === DEFAULT_FONT_FAMILY_VALUE) {
        props.editor.chain().focus().unsetFontFamily().run()
        return
      }

      props.editor.chain().focus().setFontFamily(k.value).run()
    },
    style: { fontFamily: k.value },
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
    :disabled="!props.editor.can().setFontFamily('')"
    :tooltip="t('editor.fontFamily.tooltip')"
    icon="fontFamily"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
