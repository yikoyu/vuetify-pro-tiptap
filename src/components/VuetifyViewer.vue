<script setup lang="ts">
import { computed, unref } from 'vue'
import { useTheme } from 'vuetify'

import xssRules from '@/constants/xss-rules'
import { isBoolean } from '@/utils/utils'
import type { IWhiteList } from 'xss'
import xss from 'xss'

interface Props {
  value?: string
  dark?: boolean
  dense?: boolean
  hideMarkdownStyle?: boolean
  xss?: boolean | string[]
  xssOptions?: IWhiteList
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  dark: undefined,
  dense: false,
  hideMarkdownStyle: false,
  xss: true,
  xssOptions: () => xssRules
})

const theme = useTheme()

const isDark = computed<boolean>(() => {
  if (isBoolean(props.dark)) return props.dark
  if (isBoolean(theme.current.value.dark)) return theme.current.value.dark
  return false
})

const viewerClass = computed(() => ({
  __dark: unref(isDark),
  dense: props.dense,
  view: true,
  'markdown-body': !props.hideMarkdownStyle
}))

const cleanValue = computed(() => {
  if (props.xss === false) {
    return props.value
  }

  const value = props.value
    .replace('https://youtu.be/', 'https://www.youtube.com/watch?v=')
    .replace('watch?v=', 'embed/')
    .replace('https://vimeo.com/', 'https://player.vimeo.com/video/')

  const whiteList = props.xssOptions

  return xss(value, { whiteList, css: false })
})
</script>

<template>
  <div class="vuetify-pro-tiptap-editor__content" :class="viewerClass" style="width: 100%">
    <slot name="before" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content" v-html="cleanValue"></div>
    <slot name="after" />
  </div>
</template>
