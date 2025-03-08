<script lang="ts" setup>
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

defineProps(extActionButtonProps)
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="() => editor.chain().focus().toggleBulletList().run()"
    :is-active="() => editor.isActive('bulletList') || false"
    :disabled="!editor.can().toggleBulletList()"
    :tooltip="t('editor.bulletlist.tooltip')"
    icon="bulletList"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
