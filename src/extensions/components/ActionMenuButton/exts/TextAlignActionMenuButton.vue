<script lang="ts" setup>
import type { ActionMenuButtonItem } from '../src/types'

import type { Alignments, TextAlignOptions } from '@/extensions/text-align'
import { computed } from 'vue'
import ActionMenuButton from '../src/index.vue'
import { extActionButtonMenuProps } from '../src/props'

const props = defineProps(extActionButtonMenuProps<TextAlignOptions>())

const items = computed<ActionMenuButtonItem[]>(() => {
  const alignments = (props.extension.options?.alignments as Alignments[]) || []

  return alignments.map(k => ({
    title: props.t(`editor.textalign.${k}.tooltip`),
    icon: k,
    isActive: () => props.editor.isActive({ textAlign: k }) || false,
    action: () => props.editor.chain().focus().setTextAlign(k).run(),
    disabled: !props.editor.can().setTextAlign(k),
  }))
})
</script>

<template>
  <ActionMenuButton
    :editor="editor"
    :items="items"
    :max-height="280"
    :disabled="items.filter(k => k.disabled).length === items.length"
    :tooltip="t('editor.textalign.tooltip')"
    icon="center"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
