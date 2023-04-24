import { Table as TiptapTable } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'
import TableActionButton from './components/TableActionButton.vue'
import type { TableOptions as TiptapTableOptions } from '@tiptap/extension-table'
import type { TableRowOptions } from '@tiptap/extension-table-row'
import type { TableHeaderOptions } from '@tiptap/extension-table-header'
import type { TableCellOptions } from '@tiptap/extension-table-cell'
import type { ButtonView, GeneralOptions } from '@/type'

export interface TableOptions extends TiptapTableOptions, GeneralOptions {
  tableRow: Partial<TableRowOptions>
  tableHeader: Partial<TableHeaderOptions>
  tableCell: Partial<TableCellOptions>
  button: ButtonView
}

export const Table = TiptapTable.extend<TableOptions>({
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
    return [TableRow.configure(this.options.tableRow), TableHeader.configure(this.options.tableHeader), TableCell.configure(this.options.tableCell)]
  }
})
