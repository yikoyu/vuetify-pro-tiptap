<template>
  <BubbleMenu :editor="editor" :tippyOptions="tippyOptions">
    <v-card v-show="menu.length > 0" class="vuetify-pro-tiptap-editor__menu-bubble">
      <v-card-text class="d-flex pa-0">
        <TipTapToolbar :editor="editor" :items="menu" :dark="dark" :disabled="disabled" rounded />
      </v-card-text>
    </v-card>
  </BubbleMenu>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, unref } from 'vue-demi'
import { BubbleMenu } from '@tiptap/vue-2'
import type { Editor, BubbleMenuInterface } from '@tiptap/vue-2'
import { bool, object, array } from 'vue-types'
import TipTapToolbar from '../TipTapToolbar.vue'
import type { Definitions, ToolbarType } from '@/constants/toolbar-definitions'
import { TextSelection } from '@tiptap/pm/state'
import type { NodeSelection } from '@tiptap/pm/state'

import { useBubbleImage } from './hooks/use-bubble'
import type { BubbleExtToolbarType } from './hooks/use-bubble'

type BubbleToolbarType = ToolbarType | BubbleExtToolbarType

type NodeType = 'image' | 'text' | 'video'

const nodeTypeMenu: Record<NodeType, BubbleToolbarType[]> = {
  image: [
    'float-left',
    'float-none',
    'float-right',
    'divider',
    'image',
    'image-aspect-ratio',
    'image-remove',
    'divider',
    'size-small',
    'size-medium',
    'size-large',
    'divider',
    'left',
    'center',
    'right'
  ],
  text: [
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'highlight',
    'divider',
    'h1',
    'h2',
    'h3',
    'p',
    'divider',
    'left',
    'center',
    'right',
    'divider',
    'link'
  ],
  video: ['video', 'video-remove']
}

export default defineComponent({
  components: {
    TipTapToolbar,
    BubbleMenu
  },
  props: {
    editor: object<Editor>().isRequired,
    dark: bool().def(false),
    disabled: bool().def(false),
    items: array<Definitions>().def(() => [])
  },
  setup(props) {
    const { extMenu } = useBubbleImage(props.editor)

    const tippyOptions = reactive<Partial<NonNullable<BubbleMenuInterface['tippyOptions']>>>({
      maxWidth: 'auto',
      zIndex: 20,
      appendTo: 'parent'
    })

    const nodeType = computed<NodeType | undefined>(() => {
      const selection = props.editor.state.selection as NodeSelection

      const isImage = selection.node?.type.name === 'image'
      const isIframe = selection.node?.type.name === 'iframe'
      const isText = selection instanceof TextSelection

      if (isImage) return 'image'
      if (isIframe) return 'video'
      if (isText) return 'text'
      return undefined
    })

    const nodeMenu = computed<BubbleToolbarType[]>(() => {
      if (!nodeType.value) return []
      return nodeTypeMenu[nodeType.value] || []
    })

    const menu = computed(() => {
      return unref(nodeMenu)
        .map(item => {
          return [...props.items, ...unref(extMenu)].find(k => k.type === item)
        })
        .filter(item => item) as Definitions[]
    })

    return {
      tippyOptions,
      nodeType,
      menu
    }
  }
})
</script>
