<script setup lang="ts">
import { getIcon } from '@/constants/icons'
import { inject, ref, type Ref } from 'vue'
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
      'v-btn--active': isActive?.()
    }"
    @click="action"
  >
    <VIcon :icon="getIcon(props.icon)" />

    <VTooltip :eager="false" activator="parent" location="top" :text="props.tooltip" />

    <slot></slot>
  </VBtn>
</template>
