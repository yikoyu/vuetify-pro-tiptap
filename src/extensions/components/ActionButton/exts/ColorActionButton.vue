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
    props.editor.chain().focus().setColor(color).run()
  }
}

function isActive() {
  const { color } = props.editor.getAttributes('textStyle')

  if (!color)
    return false
  return props.editor.isActive({ color }) || false
}

watchEffect(() => {
  const { color: colorValue } = props.editor.getAttributes('textStyle')
  state.color = colorValue
})
</script>

<template>
  <ActionButton
    :editor="editor"
    icon="color"
    :tooltip="t('editor.color.tooltip')"
    :disabled="!editor.can().setColor('')"
    :color="state.color"
    :is-active="isActive"
  >
    <ColorPicker v-model="state.color" activator="parent" :nudge-top="-4" :nudge-left="8" @change="action" />
  </ActionButton>
</template>
