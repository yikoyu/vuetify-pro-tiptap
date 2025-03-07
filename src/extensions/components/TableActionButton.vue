<script setup lang="ts">
import { ActionButton, actionButtonProps } from './ActionButton'
import TableMenu from './table/TableMenu.vue'

defineProps(actionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
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
