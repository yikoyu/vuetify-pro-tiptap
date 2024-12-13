<script setup lang="ts">
import { getIcon } from '@/constants/icons'
import { useTiptapStore } from '@/hooks'

import { useLocale } from '@/locales'
import { ButtonViewReturnComponentProps } from '@/type'
import { useFullscreen } from '@vueuse/core'
import { computed, unref, watch } from 'vue'

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

const icon = computed(() => {
  const _icon = state.isFullscreen ? 'fullscreenExit' : 'fullscreen'
  return getIcon(_icon)
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
  <VBtn
    class="rounded me-1 ms-0"
    density="comfortable"
    size="small"
    :disabled="disabled"
    :color="color"
    icon
    :class="{
      'v-btn--active': isActive?.()
    }"
    @click="onAction(useWindow)"
  >
    <VIcon :icon="icon" />

    <VTooltip :eager="false" activator="parent" location="top" :text="text" />

    <slot></slot>
  </VBtn>
</template>
