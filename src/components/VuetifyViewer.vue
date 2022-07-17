<template>
  <div class="vuetify-pro-tiptap-editor__content" :class="viewerClass" style="width: 100%">
    <slot name="before" />
    <div class="content" v-html="cleanValue"></div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, unref } from '@vue/composition-api'
import { string, object, bool, oneOfType } from 'vue-types'

import xss from 'xss'
import type { IWhiteList } from 'xss'
import xssRules from '@/constants/xss-rules'

import useContext from '@/hooks/use-context'

export default defineComponent({
  props: {
    value: string().def(''),
    dark: bool().def(false),
    dense: bool().def(false),
    hideMarkdownStyle: bool().def(false),
    xss: oneOfType<boolean | string[]>([Boolean, Array]).def(true),
    xssOptions: object<IWhiteList>().def(xssRules)
  },
  setup(props) {
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

    return {
      viewerClass,
      cleanValue
    }
  }
})
</script>
