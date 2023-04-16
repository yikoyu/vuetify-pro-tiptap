import { Table, TableOptions as TiptapTableOptions } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'
import TableActionButton from './components/TableActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface TableOptions extends TiptapTableOptions, GeneralOptions {
  button: ButtonView
}

export default Table.extend<TableOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: 'table-wrapper'
      },
      button: ({ editor, t }) => ({
        component: TableActionButton,
        componentProps: {
          isActive: () => editor.isActive('table') || false,
          icon: 'table',
          tooltip: t('editor.table.tooltip')
        }
      })
    }
  },

  addExtensions() {
    return [TableRow, TableHeader, TableCell]
  }
})
