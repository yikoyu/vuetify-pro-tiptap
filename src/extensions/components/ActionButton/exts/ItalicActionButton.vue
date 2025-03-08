<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleItalic().run()"
    :is-active="() => editor.isActive('italic') || false"
    :disabled="!editor.can().toggleItalic()"
    :tooltip="t('editor.italic.tooltip')"
    icon="italic"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
