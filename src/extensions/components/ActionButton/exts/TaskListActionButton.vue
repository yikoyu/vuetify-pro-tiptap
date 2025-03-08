<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleTaskList().run()"
    :is-active="() => editor.isActive('taskList') || false"
    :disabled="!editor.can().toggleTaskList()"
    :tooltip="t('editor.tasklist.tooltip')"
    icon="taskList"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
