<script setup lang="ts">
import { useTiptapStore } from '@/hooks'

import { watchEffect } from 'vue'
import { ActionButton, actionButtonProps } from './ActionButton'
import ColorPicker from './ColorPicker.vue'

const props = defineProps(actionButtonProps)

const { state } = useTiptapStore()!

function onChange(color: string) {
  props.action?.(color)
}

watchEffect(() => {
  const { color: highlightValue } = props.editor.getAttributes('highlight')
  state.highlight = highlightValue
})
</script>

<template>
  <ActionButton :editor="editor" :icon="icon" :tooltip="tooltip" :disabled="disabled" :color="state.highlight" :is-active="isActive">
    <ColorPicker v-model="state.highlight" activator="parent" :nudge-top="-4" :nudge-left="8" @change="onChange" />
  </ActionButton>
</template>
