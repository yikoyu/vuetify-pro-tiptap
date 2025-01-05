<script setup lang="ts">
import type { BaseKitOptions } from '@/extensions/base-kit'
import type { BubbleMenuItem, BubbleTypeMenu, NodeTypeKey } from '@/extensions/components/bubble'
import type { BubbleMenuOptions } from '@tiptap/extension-bubble-menu'
import type { NodeSelection } from '@tiptap/pm/state'
import type { Editor, Extension } from '@tiptap/vue-3'

import { useLocale } from '@/locales'
import { getDefaultShouldShow, isExtEnableAndActive } from '@/utils/utils'
import { TextSelection } from '@tiptap/pm/state'
import { BubbleMenu } from '@tiptap/vue-3'
import { computed, reactive, ref, unref, watchEffect } from 'vue'

interface Props {
  editor: Editor
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const { t } = useLocale()
const nodeType = ref<NodeTypeKey | undefined>(undefined)

const tippyOptions = reactive<Record<string, unknown>>({
  maxWidth: 'auto',
  zIndex: 20,
  appendTo: 'parent',
  delay: 100,
  interactive: false,
  onMount: (instance: any) => {
    instance.popper.style.opacity = '0'
    instance.popper.style.pointerEvents = 'none'
  },
  onShow: (instance: any) => {
    setTimeout(() => {
      instance.popper.style.opacity = '1'
      instance.popper.style.transition = 'opacity 100ms'
      instance.popper.style.pointerEvents = 'auto'
      instance.setProps({ interactive: true })
    }, 100)
  }
})

const nodeMenus = computed(() => {
  const { extensions = [] } = props.editor.extensionManager
  const find = extensions.find(k => k.name === 'base-kit') as Extension<BaseKitOptions>
  if (!find) return {}

  const { button } = find.options?.bubble ?? {}

  if (!button) return {}

  const _button: BubbleTypeMenu = button({
    editor: props.editor,
    extension: find,
    t: unref(t)
  })

  return _button
})

const items = computed(() => {
  if (!nodeType.value) return []
  return unref(nodeMenus)?.[nodeType.value] ?? []
})

function getNodeType(editor: Editor): NodeTypeKey | undefined {
  const selection = editor.state.selection as NodeSelection
  const isLink = isExtEnableAndActive(editor, 'link')
  const isTable = isExtEnableAndActive(editor, 'table')

  const isImage = selection.node?.type.name === 'image'
  const isVideo = selection.node?.type.name === 'video'
  const isText = selection instanceof TextSelection

  if (isTable) return 'table'
  if (isLink) return 'link'
  if (isImage) return 'image'
  if (isVideo) return 'video'
  if (isText) return 'text'
  return undefined
}

const getShouldShow: NonNullable<BubbleMenuOptions['shouldShow']> = (props) => {
  const _show = getDefaultShouldShow(props)
  const _hasItems = items.value.length > 0

  const isTable = isExtEnableAndActive(props.editor, 'table')
  if (isTable) return true

  return _show && _hasItems
}

watchEffect(() => {
  nodeType.value = getNodeType(props.editor)
})

function setDisabled(item: BubbleMenuItem) {
  return props.disabled || item.componentProps?.disabled?.() || false
}
</script>

<template>
  <BubbleMenu :should-show="getShouldShow" :editor="editor" :tippy-options="tippyOptions">
    <VCard class="vuetify-pro-tiptap-editor__menu-bubble">
      <VCardText class="d-flex pa-0">
        <VToolbar density="compact" flat height="auto" class="py-1 ps-1">
          <template v-for="(item, key) in items" :key="key">
            <!-- Divider -->
            <VDivider v-if="item.type === 'divider'" vertical class="mx-1 me-2" />
            <!-- Buttons -->
            <component
              :is="item.component"
              v-else
              v-bind="item.componentProps"
              :editor="editor"
              :disabled="() => setDisabled(item)"
            >
              <template v-for="(element, slotName, i) in item.componentSlots" :key="i" #[`${slotName}`]="values">
                <component :is="element" v-bind="values?.props" />
              </template>
            </component>
          </template>
        </VToolbar>
      </VCardText>
    </VCard>
  </BubbleMenu>
</template>
