<script setup lang="ts">
import { ref } from 'vue'
import { ActionButton, actionButtonProps } from './ActionButton'
import OriginalThemeProvider from './OriginalThemeProvider.vue'

const props = defineProps(actionButtonProps)

const src = ref<string | undefined>(undefined)

function onAction() {
  const { src: _src } = props.editor.getAttributes('video')
  src.value = _src
}
</script>

<template>
  <ActionButton
    :editor="editor"
    :icon="icon"
    :tooltip="tooltip"
    :disabled="disabled"
    :color="color"
    :is-active="isActive"
    :action="onAction"
  >
    <OriginalThemeProvider>
      <slot name="dialog" :props="{ editor, value: src }"></slot>
    </OriginalThemeProvider>
  </ActionButton>
</template>
