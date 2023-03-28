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
}
</script>

<script setup lang="ts">
import * as icons from '@/constants/icons'
import { useLocale } from '@/locales'
import type { Editor } from '@tiptap/vue-3'
import { computed, ref, unref } from 'vue'
import type { CreateTablePayload } from './CreateTablePopover.vue'
import CreateTablePopover from './CreateTablePopover.vue'

interface Props {
  editor: Editor
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dark: false
})

const { t } = useLocale()

const menu = ref<boolean>(false)
const items = computed<Item[]>(() => {
  const disabled = !props.editor.isActive('table')

  return [
    {
      type: 'item',
      key: 'insert-table',
      title: unref(t)('editor.table.menu.insert_table')
    },
    {
      type: 'divider'
    },
    {
      type: 'item',
      key: 'add-column-before',
      title: unref(t)('editor.table.menu.add_column_before'),
      disabled
    },
    {
      type: 'item',
      key: 'add-column-after',
      title: unref(t)('editor.table.menu.add_column_after'),
      disabled
    },
    {
      type: 'item',
      key: 'delete-column',
      title: unref(t)('editor.table.menu.delete_column'),
      disabled
    },
    {
      type: 'divider'
    },
    {
      type: 'item',
      key: 'add-row-before',
      title: unref(t)('editor.table.menu.add_row_before'),
      disabled
    },
    {
      type: 'item',
      key: 'add-row-after',
      title: unref(t)('editor.table.menu.add_row_after'),
      disabled
    },
    {
      type: 'item',
      key: 'delete-row',
      title: unref(t)('editor.table.menu.delete_row'),
      disabled
    },
    {
      type: 'divider'
    },
    {
      type: 'item',
      key: 'merge-or-split-cells',
      title: unref(t)('editor.table.menu.merge_or_split_cells'),
      disabled
    },
    {
      type: 'divider'
    },
    {
      type: 'item',
      key: 'delete-table',
      title: unref(t)('editor.table.menu.delete_table'),
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

<template>
  <VMenu v-model="menu" :dark="dark">
    <template #activator="{ props: _props }">
      <slot name="button" v-bind="{ props: _props }">
        <VBtn icon size="small" v-bind="_props">
          <VIcon :icon="icons.get('table')"></VIcon>
        </VBtn>
      </slot>
    </template>

    <VList density="compact">
      <template v-for="(item, index) in items">
        <CreateTablePopover v-if="item.key === 'insert-table'" :key="index" @create-table="createTable">
          <template #activator="{ props: _props }">
            <VListItem v-bind="_props">
              <VListItemTitle>{{ item.title }}</VListItemTitle>
            </VListItem>
          </template>
        </CreateTablePopover>

        <VListItem v-else-if="item.type === 'item'" :key="'item-' + index" :disabled="item.disabled" @click="setTable(item.key)">
          <VListItem-title>{{ item.title }}</VListItem-title>
        </VListItem>

        <VDivider v-else :key="'divider-' + index"></VDivider>
      </template>
    </VList>
  </VMenu>
</template>
