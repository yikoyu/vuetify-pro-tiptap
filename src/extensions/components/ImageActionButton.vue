<script setup lang="ts">
import { ref } from 'vue'
import type { NodeSelection } from '@tiptap/pm/state'
import type { Editor } from '@tiptap/vue-3'

import type { ImageAttrsOptions, ImageTab, ImageTabKey } from './image/types'
import ActionButton from './ActionButton.vue'

import type { IconsOptions } from '@/constants/icons'
import { ButtonViewReturnComponentProps } from '@/type'

interface Props {
  editor: Editor
  upload?: (file: File) => Promise<string>
  imageTabs?: ImageTab[]
  hiddenTabs?: ImageTabKey[]

  icon?: keyof IconsOptions
  tooltip?: string
  disabled?: boolean
  color?: string
  action?: ButtonViewReturnComponentProps['action']
  isActive?: ButtonViewReturnComponentProps['isActive']
}

const props = withDefaults(defineProps<Props>(), {
  upload: undefined,
  imageTabs: () => [],
  hiddenTabs: () => [],

  icon: undefined,
  tooltip: undefined,
  disabled: false,
  color: undefined,
  action: undefined,
  isActive: undefined
})

const model = ref<ImageAttrsOptions>({})

function onAction() {
  const selection = props.editor?.view.state.selection as NodeSelection | null
  const attrs = (selection?.node?.attrs ?? {}) as ImageAttrsOptions

  if (attrs?.src) model.value.src = attrs.src
  if (attrs?.alt) model.value.alt = attrs.alt
  if (attrs?.title) model.value.title = attrs.title
  if (attrs?.width) model.value.width = attrs.width
  if (attrs?.height) model.value.height = attrs.height
  if (attrs?.display) model.value.display = attrs.display
  model.value.lockAspectRatio = attrs.lockAspectRatio ?? true
}
</script>

<template>
  <ActionButton
    :icon="icon"
    :tooltip="tooltip"
    :disabled="disabled"
    :color="color"
    :is-active="isActive"
    :action="onAction"
  >
    <slot name="dialog" :props="{ editor, value: model, imageTabs, hiddenTabs, upload }"></slot>
  </ActionButton>
</template>
