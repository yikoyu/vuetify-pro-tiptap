<script setup lang="ts">
import { watchEffect } from 'vue'
import type { Editor } from '@tiptap/vue-3'

import ActionButton from './ActionButton.vue'
import ColorPicker from './ColorPicker.vue'

import type { IconsOptions } from '@/constants/icons'
import { useTiptapStore } from '@/hooks'
import { ButtonViewReturnComponentProps } from '@/type'

interface Props {
  editor: Editor
  icon?: keyof IconsOptions
  tooltip?: string
  disabled?: boolean
  action?: ButtonViewReturnComponentProps['action']
  isActive?: ButtonViewReturnComponentProps['isActive']
}

const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  action: undefined,
  isActive: undefined
})

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
  <ActionButton :icon="icon" :tooltip="tooltip" :disabled="disabled" :color="state.highlight" :is-active="isActive">
    <ColorPicker v-model="state.highlight" activator="parent" :nudge-top="-4" :nudge-left="8" @change="onChange" />
  </ActionButton>
</template>
