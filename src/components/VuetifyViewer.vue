<script setup lang="ts">
import { computed, unref } from 'vue-demi'

import xss from 'xss'
import type { IWhiteList } from 'xss'
import xssRules from '@/constants/xss-rules'

import useContext from '@/hooks/use-context'

interface VuetifyViewerProps {
  value?: string
  dark?: boolean
  dense?: boolean
  hideMarkdownStyle?: boolean
  xss?: boolean | string[]
  xssOptions?: IWhiteList
}

const props = withDefaults(defineProps<VuetifyViewerProps>(), {
  value: '',
  dark: false,
  dense: false,
  hideMarkdownStyle: false,
  xss: true,
  xssOptions: () => xssRules
})

const root = useContext()

const isDark = computed(() => props.dark || root?.$vuetify.theme.dark || false)

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
    <div class="content" v-html="cleanValue"></div>
    <slot name="after" />
  </div>
</template>
