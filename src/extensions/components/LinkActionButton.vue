<script setup lang="ts">
import type { IconsOptions } from '@/constants/icons'
import type { Editor } from '@tiptap/vue-3'

import type { LinkAttrs } from './link/types'
import { ButtonViewReturnComponentProps } from '@/type'

import { ref } from 'vue'
import ActionButton from './ActionButton.vue'
import OriginalThemeProvider from './OriginalThemeProvider.vue'

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

const attrs = ref<LinkAttrs>({
  href: undefined,
  target: undefined,
  rel: undefined
})

function onAction() {
  const { href, target, rel } = props.editor.getAttributes('link')
  attrs.value = {
    href,
    target,
    rel
  }
}
</script>

<template>
  <ActionButton
    :icon="icon"
    :tooltip="tooltip"
    :disabled="disabled"
    :color="color"
    :is-active="isActive"
    :action="onAction"
  >
    <OriginalThemeProvider>
      <slot name="dialog" :props="{ editor, value: attrs.href, ...attrs }"></slot>
    </OriginalThemeProvider>
  </ActionButton>
</template>
