<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleUnderline().run()"
    :is-active="() => editor.isActive('underline') || false"
    :disabled="!editor.can().toggleUnderline()"
    :tooltip="t('editor.underline.tooltip')"
    icon="underline"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
