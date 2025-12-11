<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { ButtonViewReturn } from '@/type'

import { unref } from 'vue'
import { useLocale } from '@/locales'
import { isFunction } from '@/utils/utils'

interface Menu {
  button: ButtonViewReturn
  divider: boolean
  spacer: boolean
}

interface Props {
  editor: Editor
}

const props = withDefaults(defineProps<Props>(), {})

const { t } = useLocale()

function getMenus(): Menu[] {
  const extensions = [...props.editor.extensionManager.extensions]
  const sortExtensions = extensions.sort((arr, acc) => {
    const a = arr.options.sort ?? -1
    const b = acc.options.sort ?? -1
    return a - b
  })

  return sortExtensions.reduce((acc, extension) => {
    const { button, divider = false, spacer = false } = extension.options
    if (!button || !isFunction(button))
      return acc as Menu[]

    const _button: ButtonViewReturn = button({
      editor: props.editor,
      extension,
      t: unref(t),
    })

    if (Array.isArray(_button)) {
      const menu: Menu[] = _button.map((k, i) => ({
        button: k,
        divider: i === _button.length - 1 ? divider : false,
        spacer: i === 0 ? spacer : false,
      }))
      return [...acc, ...menu]
    }

    return [...acc, { button: _button, divider, spacer } as Menu]
  }, [] as Menu[])
}
</script>

<template>
  <VToolbar v-bind="$attrs" density="compact" flat height="auto" class="py-1 ps-1">
    <template v-for="(item, key) in getMenus()" :key="key">
      <!-- Spacer -->
      <VSpacer v-if="item.spacer" />
      <!-- Buttons -->
      <component
        :is="item.button.component"
        v-bind="item.button.componentProps"
        :editor="editor"
      >
        <template v-for="(element, slotName, i) in item.button.componentSlots" :key="i" #[`${slotName}`]="values">
          <component :is="element" v-bind="values?.props" />
        </template>
      </component>

      <!-- Divider -->
      <VDivider v-if="item.divider" vertical class="mx-1 me-2" />
    </template>
  </VToolbar>
</template>
