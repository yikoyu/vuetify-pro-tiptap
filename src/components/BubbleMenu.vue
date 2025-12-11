<script setup lang="ts">
import type { NodeSelection } from '@tiptap/pm/state'
import type { Editor, Extension } from '@tiptap/vue-3'
import type { BaseKitOptions } from '@/extensions/base-kit'
import type { BubbleMenuItem, BubbleTypeMenu, NodeTypeKey } from '@/extensions/components/bubble'

import { TextSelection } from '@tiptap/pm/state'
import { BubbleMenu } from '@tiptap/vue-3/menus'
import { computed, unref } from 'vue'
import { useLocale } from '@/locales'
import { isExtEnableAndActive } from '@/utils/utils'

interface Props {
  editor: Editor
}

const props = withDefaults(defineProps<Props>(), {})

const { t } = useLocale()

const nodeType = computed<NodeTypeKey | undefined>(() => {
  const selection = props.editor.state.selection as NodeSelection
  if (selection.to === selection.from || selection.empty)
    return undefined

  const isLink = isExtEnableAndActive(props.editor, 'link')
  const isTable = isExtEnableAndActive(props.editor, 'table')

  const isImage = selection.node?.type.name === 'image'
  const isVideo = selection.node?.type.name === 'video'
  const isText = selection instanceof TextSelection

  if (isTable)
    return 'table'
  if (isLink)
    return 'link'
  if (isImage)
    return 'image'
  if (isVideo)
    return 'video'
  if (isText)
    return 'text'
  return undefined
})

function getMenus(nodeKey?: NodeTypeKey): BubbleMenuItem[] {
  if (!nodeKey) {
    return []
  }

  const { extensions = [] } = props.editor.extensionManager
  const find = extensions.find(k => k.name === 'base-kit') as Extension<BaseKitOptions>
  if (!find) {
    return []
  }

  const { button } = find.options?.bubble ?? {}

  if (!button) {
    return []
  }

  const _buttons: BubbleTypeMenu = button({
    editor: props.editor,
    extension: find,
    t: unref(t),
  })

  if (!nodeKey) {
    return []
  }

  return unref(_buttons)?.[nodeKey] ?? []
}
</script>

<template>
  <BubbleMenu :editor="editor">
    <VCard class="vuetify-pro-tiptap-editor__menu-bubble">
      <VCardText class="d-flex pa-0">
        <VToolbar density="compact" flat height="auto" class="py-1 ps-1">
          <template v-for="(item, key) in getMenus(nodeType)" :key="key">
            <!-- Divider -->
            <VDivider v-if="item.type === 'divider'" vertical class="mx-1 me-2" />
            <!-- Buttons -->
            <component
              :is="item.component"
              v-else
              v-bind="item.componentProps"
              :editor="editor"
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
