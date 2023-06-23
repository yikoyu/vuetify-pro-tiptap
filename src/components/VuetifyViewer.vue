<script setup lang="ts">
import { computed, unref } from 'vue'
import { useTheme } from 'vuetify'
import type { IWhiteList } from 'xss'
import Xss from 'xss'

import xssRules from '@/constants/xss-rules'
import { useMarkdownTheme } from '@/hooks/use-markdown-theme'
import { isBoolean } from '@/utils/utils'

interface Props {
  value?: string
  dark?: boolean
  dense?: boolean
  markdownTheme?: string | false
  xss?: boolean | string[]
  xssOptions?: IWhiteList
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  dark: undefined,
  dense: false,
  markdownTheme: undefined,
  xss: true,
  xssOptions: () => xssRules
})

const theme = useTheme()
const { markdownThemeStyle } = useMarkdownTheme(computed(() => props.markdownTheme))

const isDark = computed<boolean>(() => {
  if (isBoolean(props.dark)) return props.dark
  if (isBoolean(theme.current.value.dark)) return theme.current.value.dark
  return false
})

const viewerClass = computed(() => ({
  __dark: unref(isDark),
  dense: props.dense,
  view: true,
  ...unref(markdownThemeStyle)
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

  return Xss(value, { whiteList, css: false })
})
</script>

<template>
  <div class="vuetify-pro-tiptap-editor__content" :class="viewerClass" :style="{ width: '100%' }">
    <slot name="before"></slot>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content" v-html="cleanValue"></div>

    <slot name="after"></slot>
  </div>
</template>
