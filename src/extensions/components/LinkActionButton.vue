<script setup lang="ts">
import { ref } from 'vue'
import LinkDialog from './link/LinkDialog.vue'
import ActionButton from './ActionButton.vue'
import type { Editor } from '@tiptap/vue-3'
import type { IconsOptions } from '@/constants/icons'
import { ButtonViewReturnComponentProps } from '@/type'

interface Props {
  editor: Editor
  dark?: boolean

  icon?: keyof IconsOptions
  tooltip?: string
  disabled?: boolean
  color?: string
  action?: ButtonViewReturnComponentProps['action']
  isActive?: ButtonViewReturnComponentProps['isActive']
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,

  icon: undefined,
  tooltip: undefined,
  disabled: false,
  color: undefined,
  action: undefined,
  isActive: undefined
})

const href = ref<string | undefined>(undefined)

function onAction() {
  const { href: _href } = props.editor.getAttributes('link')
  href.value = _href
}
</script>

<template>
  <ActionButton :icon="icon" :tooltip="tooltip" :disabled="disabled" :color="color" :is-active="isActive" :action="onAction">
    <LinkDialog :editor="editor" :dark="dark" :value="href" />
  </ActionButton>
</template>
