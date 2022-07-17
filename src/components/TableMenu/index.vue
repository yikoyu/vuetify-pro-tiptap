<template>
  <v-menu v-model="menu" offset-y :dark="dark">
    <template #activator="{ on }">
      <slot name="button" v-bind="{ on }">
        <v-btn icon small v-on="on">
          <v-icon>{{ icons.get('table') }}</v-icon>
        </v-btn>
      </slot>
    </template>

    <v-list dense>
      <template v-for="(item, index) in items">
        <CreateTablePopover v-if="item.key === 'insert-table'" :key="index" @createTable="createTable">
          <template #activator="{ on }">
            <v-list-item v-on="on">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </CreateTablePopover>

        <v-list-item v-else-if="item.type === 'item'" :key="'item-' + index" :disabled="item.disabled" @click="setTable(item.key)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-divider v-else :key="'divider-' + index"></v-divider>
      </template>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref } from 'vue-demi'
import { object, bool } from 'vue-types'
import type { Editor } from '@tiptap/vue-2'
import * as icons from '@/constants/icons'
import { useLocale } from '@/locales'
import CreateTablePopover from './CreateTablePopover.vue'

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

interface Item {
  type: 'item' | 'divider'
  key?: TableACtionKey
  title?: string
  disabled?: boolean
}

export default defineComponent({
  components: { CreateTablePopover },
  props: {
    editor: object<Editor>().isRequired,
    dark: bool().def(false)
  },
  setup(props) {
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

    function createTable(options: { rows: number; cols: number; withHeaderRow: boolean }) {
      setTable('insert-table', options)
      menu.value = false
    }

    return {
      icons,
      menu,
      items,
      setTable,
      createTable
    }
  }
})
</script>
