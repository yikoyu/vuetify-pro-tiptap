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
  const { color: colorValue } = props.editor.getAttributes('textStyle')
  state.color = colorValue
})
</script>

<template>
  <ActionButton :editor="editor" :icon="icon" :tooltip="tooltip" :disabled="disabled" :color="state.color" :is-active="isActive">
    <ColorPicker v-model="state.color" activator="parent" :nudge-top="-4" :nudge-left="8" @change="onChange" />
  </ActionButton>
</template>
