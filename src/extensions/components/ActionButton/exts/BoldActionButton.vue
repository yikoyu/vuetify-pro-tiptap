<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleBold().run()"
    :is-active="() => editor.isActive('bold') || false"
    :disabled="!editor.can().toggleBold()"
    :tooltip="t('editor.bold.tooltip')"
    icon="bold"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
