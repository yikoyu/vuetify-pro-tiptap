<script lang="ts" setup>
import { useTheme } from 'vuetify'

// 获取原始主题
const { global: { name: originalTheme } } = useTheme()
</script>

<template>
  <VThemeProvider :theme="originalTheme">
    <slot />
  </VThemeProvider>
</template>
