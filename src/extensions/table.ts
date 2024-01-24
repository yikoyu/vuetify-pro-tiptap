import type { TableOptions as TiptapTableOptions } from '@tiptap/extension-table'
import { Table as TiptapTable } from '@tiptap/extension-table'
import type { TableCellOptions } from '@tiptap/extension-table-cell'
import { TableCell } from '@tiptap/extension-table-cell'
import type { TableHeaderOptions } from '@tiptap/extension-table-header'
import { TableHeader } from '@tiptap/extension-table-header'
import type { TableRowOptions } from '@tiptap/extension-table-row'
import { TableRow } from '@tiptap/extension-table-row'

import TableActionButton from './components/TableActionButton.vue'

import type { GeneralOptions } from '@/type'

/**
 * Represents the interface for table options, extending TiptapTableOptions and GeneralOptions.
 */
export interface TableOptions extends TiptapTableOptions, GeneralOptions<TableOptions> {
  /** options for table rows */
  tableRow: Partial<TableRowOptions>
  /** options for table headers */
  tableHeader: Partial<TableHeaderOptions>
  /** options for table cells */
  tableCell: Partial<TableCellOptions>
}

export const Table = /* @__PURE__*/ TiptapTable.extend<TableOptions>({
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
          disabled: !editor.can().insertTable(),
          icon: 'table',
          tooltip: t('editor.table.tooltip')
        }
      })
    }
  },

  addExtensions() {
    return [
      TableRow.configure(this.options.tableRow),
      TableHeader.configure(this.options.tableHeader),
      TableCell.configure(this.options.tableCell)
    ]
  }
})
