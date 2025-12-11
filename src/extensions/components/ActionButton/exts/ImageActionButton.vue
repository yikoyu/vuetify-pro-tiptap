<script setup lang="ts">
import type { NodeSelection } from '@tiptap/pm/state'
import type { PropType } from 'vue'
import type { ImageAttrsOptions, ImageTab, ImageTabKey } from '../../image/types'

import { ref } from 'vue'

import OriginalThemeProvider from '../../OriginalThemeProvider.vue'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps({
  ...extActionButtonProps,
  upload: {
    type: Function as PropType<(file: File) => Promise<string>>,
    default: undefined,
  },
  imageTabs: {
    type: Array as PropType<ImageTab[]>,
    default: () => [],
  },
  hiddenTabs: {
    type: Array as PropType<ImageTabKey[]>,
    default: () => [],
  },
})

const model = ref<ImageAttrsOptions>({})

function onAction() {
  const selection = props.editor?.view.state.selection as NodeSelection | null
  const attrs = (selection?.node?.attrs ?? {}) as ImageAttrsOptions

  if (attrs?.src)
    model.value.src = attrs.src
  if (attrs?.alt)
    model.value.alt = attrs.alt
  if (attrs?.title)
    model.value.title = attrs.title
  if (attrs?.width)
    model.value.width = attrs.width
  if (attrs?.height)
    model.value.height = attrs.height
  if (attrs?.display)
    model.value.display = attrs.display
  model.value.lockAspectRatio = attrs.lockAspectRatio ?? true
}
</script>

<template>
  <ActionButton
    :editor="editor"
    :action="onAction"
    :is-active="() => editor.isActive('image') || false"
    :disabled="!editor.can().setImage({})"
    :tooltip="t('editor.image.tooltip')"
    icon="image"
  >
    <OriginalThemeProvider>
      <slot name="dialog" :props="{ editor, value: model, imageTabs, hiddenTabs, upload }" />
    </OriginalThemeProvider>
  </ActionButton>
</template>
