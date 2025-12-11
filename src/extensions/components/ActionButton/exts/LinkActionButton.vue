<script setup lang="ts">
import type { LinkAttrs } from '../../link/types'

import { ref } from 'vue'
import OriginalThemeProvider from '../../OriginalThemeProvider.vue'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps(extActionButtonProps)

const attrs = ref<LinkAttrs>({
  href: undefined,
  target: undefined,
})

function onAction() {
  const { href, target } = props.editor.getAttributes('link')
  attrs.value = {
    href,
    target,
  }
}
</script>

<template>
  <ActionButton
    :editor="editor"
    icon="link"
    :tooltip="t('editor.link.tooltip')"
    :disabled="!editor.can().setLink({ href: '' })"
    :is-active="() => editor.isActive('link') || false"
    :action="onAction"
  >
    <OriginalThemeProvider>
      <slot name="dialog" :props="{ editor, value: attrs.href, ...attrs }" />
    </OriginalThemeProvider>
  </ActionButton>
</template>
