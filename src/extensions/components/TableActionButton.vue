<script setup lang="ts">
import type { IconsOptions } from '@/constants/icons'

import type { Editor } from '@tiptap/vue-3'
import { ButtonViewReturnComponentProps } from '@/type'

import ActionButton from './ActionButton.vue'
import TableMenu from './table/TableMenu.vue'

interface Props {
  editor: Editor
  icon?: keyof IconsOptions
  tooltip?: string
  disabled?: boolean
  color?: string
  action?: ButtonViewReturnComponentProps['action']
  isActive?: ButtonViewReturnComponentProps['isActive']
}

const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  color: undefined,
  action: undefined,
  isActive: undefined
})
</script>

<template>
  <ActionButton
    :icon="icon"
    :tooltip="tooltip"
    :disabled="disabled"
    :color="color"
    :action="action"
    :is-active="isActive"
  >
    <TableMenu :editor="editor" activator="parent" />
  </ActionButton>
</template>
