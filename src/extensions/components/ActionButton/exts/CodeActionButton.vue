<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleCode().run()"
    :is-active="() => editor.isActive('code') || false"
    :disabled="!editor.can().toggleCode()"
    :tooltip="t('editor.code.tooltip')"
    icon="code"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
