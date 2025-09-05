import type { TableOptions as TiptapTableOptions } from '@tiptap/extension-table'
import type { TableCellOptions } from '@tiptap/extension-table-cell'
import type { TableHeaderOptions } from '@tiptap/extension-table-header'
import type { TableRowOptions } from '@tiptap/extension-table-row'
import type { GeneralOptions } from '@/type'
import { TableView, Table as TiptapTable } from '@tiptap/extension-table'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'

import { TableRow } from '@tiptap/extension-table-row'

import { TableActionButton } from './components/ActionButton'

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
      resizable: true,
      HTMLAttributes: {
        class: 'table-wrapper'
      },
      tableRow: {},
      tableHeader: {},
      tableCell: {},
      handleWidth: 5,
      cellMinWidth: 25,
      View: TableView,
      lastColumnResizable: true,
      allowTableNodeSelection: false,
      button: ({ editor, t }) => ({
        component: TableActionButton,
        componentProps: {
          editor,
          t
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
