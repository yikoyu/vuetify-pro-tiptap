<template>
  <div class="vuetify-pro-tiptap-editor__content" :class="{ dense, view: true }" v-html="cleanValue" style="width: 100%"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { string, object, bool, oneOfType } from 'vue-types'

import xss, { type IWhiteList } from 'xss'
import xssRules from '@/constants/xss-rules'

export default defineComponent({
  props: {
    value: string().def(''),
    dense: bool().def(false),
    xss: oneOfType<boolean | string[]>([Boolean, Array]).def(true),
    xssOptions: object<IWhiteList>().def(xssRules)
  },
  setup(props) {
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
      cleanValue
    }
  }
})
</script>
