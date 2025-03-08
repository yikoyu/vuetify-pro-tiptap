<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleOrderedList().run()"
    :is-active="() => editor.isActive('orderedList') || false"
    :disabled="!editor.can().toggleOrderedList()"
    :tooltip="t('editor.orderedlist.tooltip')"
    icon="orderedList"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
