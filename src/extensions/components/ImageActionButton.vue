<script setup lang="ts">
import { ref } from 'vue'
import ImageDialog from './image/ImageDialog.vue'
import ActionButton from './ActionButton.vue'
import type { Editor } from '@tiptap/vue-3'
import type { NodeSelection } from '@tiptap/pm/state'
import type { IconsOptions } from '@/constants/icons'
import { ButtonViewReturnComponentProps } from '@/type'
import type { ImageAttrsOptions, ImageTab, ImageTabKey } from './image/types'

interface Props {
  editor: Editor
  dark?: boolean
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
  dark: false,
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
  const attrs = selection?.node?.attrs as ImageAttrsOptions

  model.value = {
    src: attrs?.src || undefined,
    alt: attrs?.alt || undefined,
    title: attrs?.title || undefined,
    lockAspectRatio: attrs?.lockAspectRatio ?? true,
    width: attrs?.width || undefined,
    height: attrs?.height || undefined,
    display: attrs?.display || undefined
  }
}
</script>

<template>
  <ActionButton :icon="icon" :tooltip="tooltip" :disabled="disabled" :color="color" :is-active="isActive" :action="onAction">
    <ImageDialog :editor="editor" :dark="dark" :value="model" :image-tabs="imageTabs" :hidden-tabs="hiddenTabs" />
  </ActionButton>
</template>
