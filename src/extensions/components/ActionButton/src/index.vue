<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, ref } from 'vue'
import { getIcon } from '@/constants/icons'
import { actionButtonProps } from './props'

const props = defineProps(actionButtonProps)

const disableToolbar = inject<Readonly<Ref<boolean>>>('disableToolbar', ref(false))
</script>

<template>
  <VBtn
    class="rounded me-1 ms-0"
    density="comfortable"
    size="small"
    :disabled="disableToolbar || disabled"
    :color="color"
    icon
    :class="{
      'v-btn--active': isActive?.(),
    }"
    @click="action"
  >
    <VIcon :icon="getIcon(props.icon)" />

    <VTooltip :eager="false" activator="parent" location="top" :text="props.tooltip" />

    <slot />
  </VBtn>
</template>
