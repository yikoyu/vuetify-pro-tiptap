<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().setHorizontalRule().run()"
    :is-active="() => editor.isActive('horizontalRule') || false"
    :disabled="!editor.can().setHorizontalRule()"
    :tooltip="t('editor.horizontalrule.tooltip')"
    icon="horizontalRule"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
