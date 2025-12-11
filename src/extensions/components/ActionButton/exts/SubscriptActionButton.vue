<script lang="ts" setup>
import type { Extension } from '@tiptap/core'
import type { PropType } from 'vue'
import type { SubAndSuperScriptOptions } from '@/extensions/subscript'

import { computed } from 'vue'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps({
  ...extActionButtonProps,
  extension: {
    type: Object as PropType<Extension<SubAndSuperScriptOptions>>,
    required: true,
  },
})

const items = computed<('subscript' | 'superscript')[]>(() => {
  const values = [] as ('subscript' | 'superscript')[]
  const subscript = props.extension.options.subscript
  const superscript = props.extension.options.superscript

  if (subscript !== false)
    values.push('subscript')
  if (superscript !== false)
    values.push('superscript')

  return values
})

const commands = {
  subscript: 'toggleSubscript',
  superscript: 'toggleSuperscript',
} as const

function action(item: 'subscript' | 'superscript') {
  if (item === 'subscript')
    props.editor.chain().focus().toggleSubscript().run()
  if (item === 'superscript')
    props.editor.chain().focus().toggleSuperscript().run()
}
</script>

<template>
  <ActionButton
    v-for="item in items"
    :key="item"
    :editor="editor"
    :action="() => action(item)"
    :is-active="() => editor.isActive(item) || false"
    :disabled="!editor.can()[commands[item]]()"
    :tooltip="t(`editor.${item}.tooltip`)"
    :icon="item"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
