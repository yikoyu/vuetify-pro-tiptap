<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleStrike().run()"
    :is-active="() => editor.isActive('strike') || false"
    :disabled="!editor.can().toggleStrike()"
    :tooltip="t('editor.strike.tooltip')"
    icon="strike"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
