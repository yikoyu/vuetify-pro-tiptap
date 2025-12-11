<script lang="ts" setup>
import type { Extension } from '@tiptap/core'
import type { HeadingOptions } from '@tiptap/extension-heading'
import type { ActionMenuButtonItem } from '../src/types'
import type { BaseKitOptions } from '@/extensions/base-kit'

import { computed } from 'vue'
import ActionMenuButton from '../src/index.vue'
import { extActionButtonMenuProps } from '../src/props'

const props = defineProps(extActionButtonMenuProps<HeadingOptions>())

const items = computed<ActionMenuButtonItem[]>(() => {
  const { extensions = [] } = props.editor.extensionManager ?? []
  const levels = props.extension.options?.levels || []
  const baseKitExt = extensions.find(k => k.name === 'base-kit') as Extension<BaseKitOptions>

  const items: ActionMenuButtonItem[] = levels.map(level => ({
    action: () => props.editor.chain().focus().toggleHeading({ level }).run(),
    isActive: () => props.editor.isActive('heading', { level }) || false,
    disabled: !props.editor.can().toggleHeading({ level }),
    icon: `h${level}`,
    title: props.t(`editor.heading.h${level}.tooltip`),
  }))

  if (baseKitExt && baseKitExt.options.paragraph !== false) {
    items.unshift({
      action: () => props.editor.chain().focus().setParagraph().run(),
      isActive: () => props.editor.isActive('paragraph') || false,
      disabled: !props.editor.can().setParagraph(),
      icon: 'p',
      title: props.t('editor.paragraph.tooltip'),
      divider: true,
    })
  }

  return items
})
</script>

<template>
  <ActionMenuButton
    :editor="editor"
    :items="items"
    :max-height="280"
    :disabled="items.filter(k => k.disabled).length === items.length"
    :tooltip="t('editor.heading.tooltip')"
    icon="heading"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
