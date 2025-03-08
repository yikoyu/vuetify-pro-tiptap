<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleBlockquote().run()"
    :is-active="() => editor.isActive('blockquote') || false"
    :disabled="!editor.can().toggleBlockquote()"
    :tooltip="t('editor.blockquote.tooltip')"
    icon="blockquote"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
