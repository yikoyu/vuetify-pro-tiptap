import { GeneralOptions } from '../type';
import { TableOptions as TiptapTableOptions } from '@tiptap/extension-table';
import { TableCellOptions } from '@tiptap/extension-table-cell';
import { TableHeaderOptions } from '@tiptap/extension-table-header';
import { TableRowOptions } from '@tiptap/extension-table-row';
/**
 * Represents the interface for table options, extending TiptapTableOptions and GeneralOptions.
 */
export interface TableOptions extends TiptapTableOptions, GeneralOptions<TableOptions> {
    /** options for table rows */
    tableRow: Partial<TableRowOptions>;
    /** options for table headers */
    tableHeader: Partial<TableHeaderOptions>;
    /** options for table cells */
    tableCell: Partial<TableCellOptions>;
}
export declare const Table: import('@tiptap/core').Node<TableOptions, any>;
