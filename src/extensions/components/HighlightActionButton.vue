<script setup lang="ts">
import { watchEffect } from 'vue'
import ColorPicker from './ColorPicker.vue'
import ActionButton from './ActionButton.vue'
import type { Editor } from '@tiptap/vue-3'
import type { IconsOptions } from '@/constants/icons'
import { ButtonViewReturnComponentProps } from '@/type'

import { useContext } from '@/hooks/use-context'

interface Props {
  editor: Editor
  dark?: boolean
  icon?: keyof IconsOptions
  tooltip?: string
  disabled?: boolean
  action?: ButtonViewReturnComponentProps['action']
  isActive?: ButtonViewReturnComponentProps['isActive']
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  action: undefined,
  isActive: undefined
})

const { state } = useContext()

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
    <ColorPicker v-model="state.highlight" activator="parent" :dark="dark" :nudge-top="-4" :nudge-left="8" @change="onChange" />
  </ActionButton>
</template>
