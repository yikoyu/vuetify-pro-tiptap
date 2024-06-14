<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import type { Editor } from '@tiptap/vue-3'

import type { CreateTablePayload } from './CreateTablePopover.vue'
import CreateTablePopover from './CreateTablePopover.vue'

import { getIcon } from '@/constants/icons'
import { useLocale } from '@/locales'

const props = withDefaults(defineProps<Props>(), {
  activator: undefined
})

const { t } = useLocale()

const menu = ref<boolean>(false)
const items = computed<Item[]>(() => {
  const disabled = !props.editor.isActive('table')

  return [
    {
      type: 'item',
      key: 'insert-table',
      title: unref(t)('editor.table.menu.insert_table'),
      icon: getIcon('tablePlus')
    },
    {
      type: 'divider'
    },
    {
      type: 'item',
      key: 'add-column-before',
      title: unref(t)('editor.table.menu.add_column_before'),
      icon: getIcon('tableColumnPlusBefore'),
      disabled
    },
    {
      type: 'item',
      key: 'add-column-after',
      title: unref(t)('editor.table.menu.add_column_after'),
      icon: getIcon('tableColumnPlusAfter'),
      disabled
    },
    {
      type: 'item',
      key: 'delete-column',
      title: unref(t)('editor.table.menu.delete_column'),
      icon: getIcon('tableColumnRemove'),
      disabled
    },
    {
      type: 'divider'
    },
    {
      type: 'item',
      key: 'add-row-before',
      title: unref(t)('editor.table.menu.add_row_before'),
      icon: getIcon('tableRowPlusBefore'),
      disabled
    },
    {
      type: 'item',
      key: 'add-row-after',
      title: unref(t)('editor.table.menu.add_row_after'),
      icon: getIcon('tableRowPlusAfter'),
      disabled
    },
    {
      type: 'item',
      key: 'delete-row',
      title: unref(t)('editor.table.menu.delete_row'),
      icon: getIcon('tableRowRemove'),
      disabled
    },
    {
      type: 'divider'
    },
    {
      type: 'item',
      key: 'merge-or-split-cells',
      title: unref(t)('editor.table.menu.merge_or_split_cells'),
      icon: getIcon('tableMergeCells'),
      disabled
    },
    {
      type: 'divider'
    },
    {
      type: 'item',
      key: 'delete-table',
      title: unref(t)('editor.table.menu.delete_table'),
      icon: getIcon('tableRemove'),
      disabled
    }
  ]
})

function setTable<T extends object>(key?: TableACtionKey, options?: T) {
  if (!key) return

  const { editor } = props

  const actions: Record<TableACtionKey, () => void> = {
    'insert-table': () =>
      editor
        .chain()
        .focus()
        .insertTable({ ...options })
        .run(),
    'add-column-before': () => editor.chain().focus().addColumnBefore().run(),
    'add-column-after': () => editor.chain().focus().addColumnAfter().run(),
    'delete-column': () => editor.chain().focus().deleteColumn().run(),
    'add-row-before': () => editor.chain().focus().addRowBefore().run(),
    'add-row-after': () => editor.chain().focus().addRowAfter().run(),
    'delete-row': () => editor.chain().focus().deleteRow().run(),
    'merge-or-split-cells': () => editor.chain().focus().mergeOrSplit().run(),
    'delete-table': () => editor.chain().focus().deleteTable().run()
  }

  actions[key]?.()
}

function createTable(options: CreateTablePayload) {
  setTable('insert-table', options)
  menu.value = false
}
</script>

<script lang="ts">
type TableACtionKey =
  | 'insert-table'
  | 'add-column-before'
  | 'add-column-after'
  | 'delete-column'
  | 'add-row-before'
  | 'add-row-after'
  | 'delete-row'
  | 'merge-or-split-cells'
  | 'delete-table'

export interface Item {
  type: 'item' | 'divider'
  key?: TableACtionKey
  title?: string
  disabled?: boolean
  icon?: string
}

interface Props {
  editor: Editor
  activator?: string
}
</script>

<template>
  <VMenu v-model="menu" activator="parent">
    <VList density="compact">
      <template v-for="(item, index) in items">
        <VListItem v-if="item.key === 'insert-table'" :key="index" :disabled="item.disabled">
          <template #prepend>
            <VIcon :icon="item.icon" />
          </template>

          <VListItemTitle>{{ item.title }}</VListItemTitle>

          <CreateTablePopover v-if="item.key === 'insert-table'" :key="index" @create-table="createTable" />
        </VListItem>

        <VListItem
          v-else-if="item.type === 'item'"
          :key="'item-' + index"
          :disabled="item.disabled"
          @click="setTable(item.key)"
        >
          <template #prepend>
            <VIcon :icon="item.icon" />
          </template>

          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>

        <VDivider v-else :key="'divider-' + index" />
      </template>
    </VList>
  </VMenu>
</template>
