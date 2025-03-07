<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

import { useTiptapStore } from '@/hooks'
import { useLocale } from '@/locales'
import { ButtonViewReturnComponentProps } from '@/type'
import { useFullscreen } from '@vueuse/core'

import { computed, unref, watch } from 'vue'
import { ActionButton } from './ActionButton'

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  color: undefined,
  isActive: undefined,
  useWindow: false
})
const { t } = useLocale()
const { state, toggleFullscreen } = useTiptapStore()!
const { isFullscreen, enter, exit } = useFullscreen()

interface Props {
  editor: Editor
  disabled?: boolean
  color?: string
  isActive?: ButtonViewReturnComponentProps['isActive']
  useWindow?: boolean
}

watch(isFullscreen, val => {
  // Press esc to exit full screen
  if (!val && state.isFullscreen && props.useWindow) {
    onAction()
  }
})

const text = computed(() => {
  const tooltip = state.isFullscreen ? 'editor.fullscreen.tooltip.exit' : 'editor.fullscreen.tooltip.fullscreen'
  if (!tooltip) return undefined
  return unref(t)(tooltip)
})

const icon = computed<'fullscreenExit' | 'fullscreen'>(() => {
  return state.isFullscreen ? 'fullscreenExit' : 'fullscreen'
})

function onAction(_useWindow: boolean = false) {
  toggleFullscreen()

  if (state.isFullscreen) {
    document.documentElement.classList.add('overflow-y-hidden')
    _useWindow && enter()
  } else {
    document.documentElement.classList.remove('overflow-y-hidden')
    _useWindow && exit()
  }
}
</script>

<template>
  <ActionButton
    :editor="editor"
    :disabled="disabled"
    :color="color"
    :icon="icon"
    :tooltip="text"
    :is-active="isActive"
    :action="() => onAction(useWindow)"
  />
</template>
