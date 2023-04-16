import Bold, { type BoldOptions } from './bold'
import Italic, { type ItalicOptions } from './italic'
import Underline, { type UnderlineOptions } from './underline'
import Strike, { type StrikeOptions } from './strike'
import Color, { type ColorOptions } from './color'
import Highlight, { type HighlightOptions } from './highlight'
import Heading, { type HeadingOptions } from './heading'
import TextAlign, { type TextAlignOptions } from './text-align'
import Bulletlist, { type BulletListOptions } from './bullet-list'
import Orderedlist, { type OrderedListOptions } from './ordered-list'
import Tasklist, { type TaskListOptions } from './task-list'
import Indent, { type IndentOptions } from './indent'
import Link, { type LinkOptions } from './link'
import Image, { type ImageOptions } from './image'
import Video, { type VideoOptions } from './video'
import Table, { type TableOptions } from './table'
import Blockquote, { type BlockquoteOptions } from './blockquote'
import HorizontalRule, { type HorizontalRuleOptions } from './horizontal-rule'
import Code, { type CodeOptions } from './code'
import Codeblock, { type CodeBlockOptions } from './code-block'
import Clear, { type ClearOptions } from './clear'
import Fullscreen, { type FullscreenOptions } from './fullscreen'
import History, { type HistoryOptions } from './history'
import BaseKit, { type BaseKitOptions } from './base-kit'

export { default as ActionButton } from './components/ActionButton.vue'

export interface StarterKitOptions extends BaseKitOptions {
  blockquote: Partial<BlockquoteOptions> | false
  bold: Partial<BoldOptions> | false
  bulletList: Partial<BulletListOptions> | false
  code: Partial<CodeOptions> | false
  codeBlock: Partial<CodeBlockOptions> | false
  heading: Partial<HeadingOptions> | false
  history: Partial<HistoryOptions> | false
  horizontalRule: Partial<HorizontalRuleOptions> | false
  italic: Partial<ItalicOptions> | false
  // listItem: Partial<ListItemOptions> | false
  orderedList: Partial<OrderedListOptions> | false
  strike: Partial<StrikeOptions> | false
  textAlign: Partial<TextAlignOptions> | false
  color: Partial<ColorOptions> | false
  highlight: Partial<HighlightOptions> | false
  image: Partial<ImageOptions> | false
  link: Partial<LinkOptions> | false
  taskList: Partial<TaskListOptions> | false
  // taskItem: Partial<TaskItemOptions> | false
  // textStyle: Partial<TextStyleOptions> | false
  underline: Partial<UnderlineOptions> | false
  table: Partial<TableOptions> | false
  // tableRow: Partial<TableRowOptions> | false
  // tableHeader: Partial<TableHeaderOptions> | false
  // tableCell: Partial<TableCellOptions> | false
  video: Partial<VideoOptions> | false
}

export type {
  BoldOptions,
  ItalicOptions,
  UnderlineOptions,
  StrikeOptions,
  ColorOptions,
  HighlightOptions,
  HeadingOptions,
  TextAlignOptions,
  BulletListOptions,
  OrderedListOptions,
  TaskListOptions,
  IndentOptions,
  LinkOptions,
  ImageOptions,
  VideoOptions,
  TableOptions,
  BlockquoteOptions,
  HorizontalRuleOptions,
  CodeOptions,
  CodeBlockOptions,
  ClearOptions,
  FullscreenOptions,
  HistoryOptions
}

export {
  Bold,
  Italic,
  Underline,
  Strike,
  Color,
  Highlight,
  Heading,
  TextAlign,
  Bulletlist,
  Orderedlist,
  Tasklist,
  Indent,
  Link,
  Image,
  Video,
  Table,
  Blockquote,
  HorizontalRule,
  Code,
  Codeblock,
  Clear,
  Fullscreen,
  History,
  BaseKit
}
