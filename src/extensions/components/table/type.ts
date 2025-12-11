export interface GridSize {
  rows: number
  cols: number
}

export interface CreateTablePayload extends GridSize {
  withHeaderRow: boolean
}

export type TableACtionKey
  = | 'insert-table'
    | 'add-column-before'
    | 'add-column-after'
    | 'delete-column'
    | 'add-row-before'
    | 'add-row-after'
    | 'delete-row'
    | 'merge-or-split-cells'
    | 'delete-table'

export interface TableItem {
  type: 'item' | 'divider'
  key?: TableACtionKey
  title?: string
  disabled?: boolean
  icon?: string
}
