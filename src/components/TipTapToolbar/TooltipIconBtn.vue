<script setup lang="ts">
import { ref, unref, computed } from 'vue'
import { getIcon } from '@/constants/icons'
import type { IconsOptions } from '@/constants/icons'

import { useLocale } from '@/locales'

const { t } = useLocale()

interface Props {
  icon?: keyof IconsOptions
  title?: string
  density?: string
  disabled?: boolean
  color?: string
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  title: undefined,
  density: 'comfortable',
  disabled: false,
  color: undefined,
  size: 'small'
})

const tip = computed(() => {
  if (!props.title) return undefined
  return unref(t)(props.title)
})

const btnIcon = computed(() => getIcon(props.icon))
</script>

<template>
  <VBtn class="rounded" density="comfortable" :disabled="disabled" :color="color" icon size="small">
    <VIcon :icon="btnIcon"></VIcon>
    <VTooltip :eager="false" activator="parent" location="top">{{ tip }}</VTooltip>
    <slot></slot>
  </VBtn>
</template>
