<script setup lang="ts">
import { watchEffect } from 'vue'

import ColorPicker from '@/extensions/components/ColorPicker.vue'
import { useTiptapStore } from '@/hooks'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps(extActionButtonProps)

const { state } = useTiptapStore()!

function action(color: string) {
  if (typeof color === 'string') {
    props.editor.chain().focus().setHighlight({ color }).run()
  }
}

watchEffect(() => {
  const { color: highlightValue } = props.editor.getAttributes('highlight')
  state.highlight = highlightValue
})
</script>

<template>
  <ActionButton
    :editor="editor"
    icon="highlight"
    :tooltip="t('editor.highlight.tooltip')"
    :disabled="!editor.can().setHighlight()"
    :color="state.highlight"
    :is-active="() => editor.isActive('highlight') || false"
  >
    <ColorPicker v-model="state.highlight" activator="parent" :nudge-top="-4" :nudge-left="8" @change="action" />
  </ActionButton>
</template>
