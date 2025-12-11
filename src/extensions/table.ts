import type { TableCellOptions, TableHeaderOptions, TableRowOptions, TableOptions as TiptapTableOptions } from '@tiptap/extension-table'
import type { GeneralOptions } from '@/type'
import { TableCell, TableHeader, TableRow, Table as TiptapTable } from '@tiptap/extension-table'

import { TableActionButton } from './components/ActionButton'

/**
 * Represents the interface for table options, extending TiptapTableOptions and GeneralOptions.
 */
export interface TableOptions extends TiptapTableOptions, GeneralOptions<TableOptions> {
  /** options for table rows */
  tableRow?: Partial<TableRowOptions>
  /** options for table headers */
  tableHeader?: Partial<TableHeaderOptions>
  /** options for table cells */
  tableCell?: Partial<TableCellOptions>
}

export const Table = /* @__PURE__ */ TiptapTable.extend<TableOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapTableOptions,
      resizable: true,
      HTMLAttributes: {
        class: 'table-wrapper',
      },
      button: ({ editor, t }) => ({
        component: TableActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },

  addExtensions() {
    return [
      TableRow.configure(this.options.tableRow),
      TableHeader.configure(this.options.tableHeader),
      TableCell.configure(this.options.tableCell),
    ]
  },
})
