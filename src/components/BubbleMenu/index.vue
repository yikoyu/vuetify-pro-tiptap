<script setup lang="ts">
import { computed, reactive, unref } from 'vue'
import { BubbleMenu } from '@tiptap/vue-3'
import type { Editor } from '@tiptap/vue-3'
import { TextSelection } from '@tiptap/pm/state'
import type { NodeSelection } from '@tiptap/pm/state'

import TipTapToolbar from '../TipTapToolbar.vue'
import type { Definitions, ToolbarType } from '@/constants/toolbar-definitions'

import { useBubbleImage } from './hooks/use-bubble'
import type { BubbleExtToolbarType } from './hooks/use-bubble'

type BubbleToolbarType = ToolbarType | BubbleExtToolbarType

type NodeType = 'image' | 'text' | 'video'

interface Props {
  editor: Editor
  dark?: boolean
  disabled?: boolean
  items?: Definitions[]
}

const nodeTypeMenu: Record<NodeType, BubbleToolbarType[]> = {
  image: [
    'float-left',
    'float-none',
    'float-right',
    'divider',
    'image',
    'image-aspect-ratio',
    'remove',
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
  video: ['video', 'remove']
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  disabled: false,
  items: () => []
})

const { extMenu } = useBubbleImage(props.editor)

const tippyOptions = reactive({
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
</script>

<template>
  <BubbleMenu :editor="editor" :tippy-options="tippyOptions">
    <VCard v-show="menu.length > 0" class="vuetify-pro-tiptap-editor__menu-bubble">
      <VCardText class="d-flex pa-0">
        <TipTapToolbar :editor="editor" :items="menu" :dark="dark" :disabled="disabled" rounded />
      </VCardText>
    </VCard>
  </BubbleMenu>
</template>
