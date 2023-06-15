<script setup lang="ts">
import { computed } from 'vue'

import type { IconsOptions } from '@/constants/icons'
import { getIcon } from '@/constants/icons'
import { ButtonViewReturnComponentProps } from '@/type'

interface Props {
  icon?: keyof IconsOptions
  tooltip?: string
  disabled?: boolean
  color?: string
  action?: ButtonViewReturnComponentProps['action']
  isActive?: ButtonViewReturnComponentProps['isActive']
}

const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  color: undefined,
  action: undefined,
  isActive: undefined
})

const btnIcon = computed(() => getIcon(props.icon))
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
    @click="action"
  >
    <VIcon v-if="btnIcon" :icon="btnIcon" />

    <VTooltip :eager="false" activator="parent" location="top" :text="props.tooltip" />

    <slot></slot>
  </VBtn>
</template>
