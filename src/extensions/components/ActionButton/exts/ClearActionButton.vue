<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().clearNodes().unsetAllMarks().run()"
    :disabled="!editor.can().chain().focus().clearNodes().unsetAllMarks().run()"
    :tooltip="t('editor.clear.tooltip')"
    icon="clear"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
