<script setup lang="ts">
import type { ButtonViewReturn } from '@/type'
import type { Editor } from '@tiptap/vue-3'

import { useLocale } from '@/locales'
import { isFunction } from '@/utils/utils'
import { computed, unref } from 'vue'

interface Menu {
  button: ButtonViewReturn
  divider: boolean
  spacer: boolean
}

interface Props {
  editor: Editor
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const { t } = useLocale()

const items = computed(() => {
  const extensions = [...props.editor.extensionManager.extensions]
  const sortExtensions = extensions.sort((arr, acc) => {
    const a = arr.options.sort ?? -1
    const b = acc.options.sort ?? -1
    return a - b
  })

  let menus: Menu[] = []

  for (const extension of sortExtensions) {
    const { button, divider = false, spacer = false } = extension.options
    if (!button || !isFunction(button)) continue

    const _button: ButtonViewReturn = button({
      editor: props.editor,
      extension,
      t: unref(t)
    })

    if (Array.isArray(_button)) {
      const menu: Menu[] = _button.map((k, i) => ({
        button: k,
        divider: i === _button.length - 1 ? divider : false,
        spacer: i === 0 ? spacer : false
      }))
      menus = [...menus, ...menu]
      continue
    }

    menus.push({ button: _button, divider, spacer })
  }

  return menus
})
</script>

<template>
  <VToolbar v-bind="$attrs" density="compact" flat height="auto" class="py-1 ps-1">
    <template v-for="(item, key) in items" :key="key">
      <!-- Spacer -->
      <VSpacer v-if="item.spacer" />
      <!-- Buttons -->
      <component
        :is="item.button.component"
        v-bind="item.button.componentProps"
        :editor="editor"
        :disabled="disabled || item.button.componentProps?.disabled"
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
