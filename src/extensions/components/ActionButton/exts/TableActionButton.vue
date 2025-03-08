<script setup lang="ts">
import TableMenu from '../../table/TableMenu.vue'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :is-active="() => editor.isActive('table') || false"
    :disabled="!editor.can().insertTable()"
    :tooltip="t('editor.table.tooltip')"
    icon="table"
  >
    <TableMenu :editor="editor" activator="parent" />
  </ActionButton>
</template>
