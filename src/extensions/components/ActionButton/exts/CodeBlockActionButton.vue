<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleCodeBlock().run()"
    :is-active="() => editor.isActive('codeBlock') || false"
    :disabled="!editor.can().toggleCodeBlock()"
    :tooltip="t('editor.codeblock.tooltip')"
    icon="codeBlock"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
