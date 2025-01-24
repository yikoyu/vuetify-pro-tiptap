import { NodeTypeMenu } from '../extensions/components/bubble';
export declare const DEFAULT_LANG_VALUE: "en";
/** Throttle time for editor input (milliseconds) */
export declare const EDITOR_UPDATE_THROTTLE_WAIT_TIME: 200;
/**
 * watch throttling time must be less than the update time
 * otherwise the cursor position will reach the end
 */
export declare const EDITOR_UPDATE_WATCH_THROTTLE_WAIT_TIME: number;
/** Minimum size for image adjustments */
export declare const IMAGE_MIN_SIZE: 20;
/** Maximum size for image adjustments */
export declare const IMAGE_MAX_SIZE: 100000;
/** Throttle time during adjustments for images (milliseconds) */
export declare const IMAGE_THROTTLE_WAIT_TIME: 16;
/** Default number of rows and columns for grids when creating a table */
export declare const TABLE_INIT_GRID_SIZE: 6;
/** Maximum number of rows and columns for grids when creating a table */
export declare const TABLE_MAX_GRID_SIZE: 10;
/** Minimum number of rows and columns for grids when creating a table */
export declare const TABLE_DEFAULT_SELECTED_GRID_SIZE: 2;
/** Default color list for text color and text highlight */
export declare const COLORS_LIST: readonly ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#000000", "#333333", "#666666", "#999999", "#CCCCCC", "#D5D5D4", "#E8E8E8", "#EEEEEE"];
export interface FontFamilyProps {
    title: string;
    value: string;
    divider?: boolean;
    default?: boolean;
}
/** Default font family value used */
export declare const DEFAULT_FONT_FAMILY_VALUE: "Roboto";
/** Default font family list */
export declare const DEFAULT_FONT_FAMILY_LIST: FontFamilyProps[];
export type MarkdownThemeProps = FontFamilyProps;
/** Default Markdown theme value */
export declare const DEFAULT_MARKDOWN_THEME_VALUE: "default";
/** Default list of Markdown themes */
export declare const DEFAULT_MARKDOWN_THEME_LIST: FontFamilyProps[];
/** Default font size list */
export declare const DEFAULT_FONT_SIZE_LIST: readonly [8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72];
/** Default font size value */
export declare const DEFAULT_FONT_SIZE_VALUUE: "default";
/** Options for setting image size in the bubble menu */
export declare enum IMAGE_SIZE {
    'size-small' = 200,
    'size-medium' = 500,
    'size-large' = "100%"
}
/** Options for setting video size in the bubble menu */
export declare enum VIDEO_SIZE {
    'size-small' = 480,
    'size-medium' = 640,
    'size-large' = "100%"
}
/** Actions displayed in the bubble menu */
export declare const NODE_TYPE_MENU: NodeTypeMenu;
