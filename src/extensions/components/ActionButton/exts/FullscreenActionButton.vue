<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { computed, unref, watch } from 'vue'
import { useTiptapStore } from '@/hooks'

import { useLocale } from '@/locales'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps({
  ...extActionButtonProps,
  useWindow: {
    type: Boolean,
    default: false,
  },
})
const { t } = useLocale()
const { state, toggleFullscreen } = useTiptapStore()!
const { isFullscreen, enter, exit } = useFullscreen()

watch(isFullscreen, (val) => {
  // Press esc to exit full screen
  if (!val && state.isFullscreen && props.useWindow) {
    onAction()
  }
})

const tooltip = computed(() => {
  const tooltip = state.isFullscreen ? 'editor.fullscreen.tooltip.exit' : 'editor.fullscreen.tooltip.fullscreen'
  if (!tooltip)
    return undefined
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
  }
  else {
    document.documentElement.classList.remove('overflow-y-hidden')
    _useWindow && exit()
  }
}
</script>

<template>
  <ActionButton
    :editor="editor"
    :icon="icon"
    :tooltip="tooltip"
    :action="() => onAction(useWindow)"
  />
</template>
