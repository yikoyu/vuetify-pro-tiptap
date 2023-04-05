<script setup lang="ts">
interface Props {
  icon?: string
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
</script>

<template>
  <VBtn class="rounded" density="comfortable" :disabled="disabled" :color="color" icon size="small">
    <VIcon :icon="icon"></VIcon>
    <VTooltip activator="parent" location="top">{{ title }}</VTooltip>
    <slot></slot>
  </VBtn>
</template>
