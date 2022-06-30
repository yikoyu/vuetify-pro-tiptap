// StarterKit
import { Extension, AnyExtension } from '@tiptap/core'
import Blockquote, { BlockquoteOptions } from '@tiptap/extension-blockquote'
import Bold, { BoldOptions } from '@tiptap/extension-bold'
import BulletList, { BulletListOptions } from '@tiptap/extension-bullet-list'
import Code, { CodeOptions } from '@tiptap/extension-code'
import CodeBlock, { CodeBlockOptions } from '@tiptap/extension-code-block'
import Document from '@tiptap/extension-document'
import Dropcursor, { DropcursorOptions } from '@tiptap/extension-dropcursor'
import Gapcursor from '@tiptap/extension-gapcursor'
import CharacterCount, { CharacterCountOptions } from '@tiptap/extension-character-count'
import HardBreak, { HardBreakOptions } from '@tiptap/extension-hard-break'
import Heading, { HeadingOptions } from '@tiptap/extension-heading'
import History, { HistoryOptions } from '@tiptap/extension-history'
import HorizontalRule, { HorizontalRuleOptions } from '@tiptap/extension-horizontal-rule'
import Italic, { ItalicOptions } from '@tiptap/extension-italic'
import ListItem, { ListItemOptions } from '@tiptap/extension-list-item'
import OrderedList, { OrderedListOptions } from '@tiptap/extension-ordered-list'
import Paragraph, { ParagraphOptions } from '@tiptap/extension-paragraph'
import Strike, { StrikeOptions } from '@tiptap/extension-strike'
import Text from '@tiptap/extension-text'

// Extensions
import Placeholder, { PlaceholderOptions } from '@tiptap/extension-placeholder'
import TextAlign, { TextAlignOptions } from '@tiptap/extension-text-align'
import Focus, { FocusOptions } from '@tiptap/extension-focus'
import Color, { ColorOptions } from '@tiptap/extension-color'
import Highlight, { HighlightOptions } from '@tiptap/extension-highlight'
// import Image, { ImageOptions } from "@tiptap/extension-image";
import Link, { LinkOptions } from '@tiptap/extension-link'
import TaskList, { TaskListOptions } from '@tiptap/extension-task-list'
import TaskItem, { TaskItemOptions } from '@tiptap/extension-task-item'
import TextStyle, { TextStyleOptions } from '@tiptap/extension-text-style'
import Underline, { UnderlineOptions } from '@tiptap/extension-underline'
import Table, { TableOptions } from '@tiptap/extension-table'
import TableRow, { TableRowOptions } from '@tiptap/extension-table-row'
import TableHeader, { TableHeaderOptions } from '@tiptap/extension-table-header'
import TableCell, { TableCellOptions } from '@tiptap/extension-table-cell'
import Video, { IframeOptions } from '@/extensions/video/video'
import Image, { ImageOptions } from '@/extensions/image/image'

export interface StarterKitOptions {
  blockquote: Partial<BlockquoteOptions> | false
  bold: Partial<BoldOptions> | false
  bulletList: Partial<BulletListOptions> | false
  code: Partial<CodeOptions> | false
  codeBlock: Partial<CodeBlockOptions> | false
  document: false
  dropcursor: Partial<DropcursorOptions> | false
  gapcursor: false
  characterCount: Partial<CharacterCountOptions> | false
  hardBreak: Partial<HardBreakOptions> | false
  heading: Partial<HeadingOptions> | false
  history: Partial<HistoryOptions> | false
  horizontalRule: Partial<HorizontalRuleOptions> | false
  italic: Partial<ItalicOptions> | false
  listItem: Partial<ListItemOptions> | false
  orderedList: Partial<OrderedListOptions> | false
  paragraph: Partial<ParagraphOptions> | false
  strike: Partial<StrikeOptions> | false
  text: any
  placeholder: Partial<PlaceholderOptions> | false
  textAlign: Partial<TextAlignOptions> | false
  focus: Partial<FocusOptions> | false
  color: Partial<ColorOptions> | false
  highlight: Partial<HighlightOptions> | false
  image: Partial<ImageOptions> | false
  link: Partial<LinkOptions> | false
  taskList: Partial<TaskListOptions> | false
  taskItem: Partial<TaskItemOptions> | false
  textStyle: Partial<TextStyleOptions> | false
  underline: Partial<UnderlineOptions> | false
  table: Partial<TableOptions> | false
  tableRow: Partial<TableRowOptions> | false
  tableHeader: Partial<TableHeaderOptions> | false
  tableCell: Partial<TableCellOptions> | false
  video: Partial<IframeOptions> | false
}

export default Extension.create<StarterKitOptions>({
  name: 'tiptap-kit',

  addExtensions() {
    const extensions: AnyExtension[] = []

    if (this.options.placeholder !== false) {
      extensions.push(Placeholder.configure(this.options.placeholder))
    }

    if (this.options.textAlign !== false) {
      extensions.push(TextAlign.configure(this.options.textAlign))
    }

    if (this.options.focus !== false) {
      extensions.push(Focus.configure(this.options.focus))
    }

    if (this.options.color !== false) {
      extensions.push(Color.configure(this.options.color))
    }

    if (this.options.highlight !== false) {
      extensions.push(Highlight.configure(this.options.highlight))
    }

    if (this.options.image !== false) {
      extensions.push(Image.configure(this.options.image))
    }

    if (this.options.link !== false) {
      extensions.push(Link.configure(this.options.link))
    }

    if (this.options.taskList !== false) {
      extensions.push(TaskList.configure(this.options.taskList))
    }

    if (this.options.taskItem !== false) {
      extensions.push(TaskItem.configure(this.options.taskItem))
    }

    if (this.options.textStyle !== false) {
      extensions.push(TextStyle.configure(this.options.textStyle))
    }

    if (this.options.underline !== false) {
      extensions.push(Underline.configure(this.options.underline))
    }

    if (this.options.video !== false) {
      extensions.push(Video.configure(this.options.video))
    }

    if (this.options.blockquote !== false) {
      extensions.push(Blockquote.configure(this.options.blockquote))
    }

    if (this.options.bold !== false) {
      extensions.push(Bold.configure(this.options.bold))
    }

    if (this.options.bulletList !== false) {
      extensions.push(BulletList.configure(this.options.bulletList))
    }

    if (this.options.code !== false) {
      extensions.push(Code.configure(this.options.code))
    }

    if (this.options.codeBlock !== false) {
      extensions.push(CodeBlock.configure(this.options.codeBlock))
    }

    if (this.options.document !== false) {
      extensions.push(Document.configure(this.options.document))
    }

    if (this.options.dropcursor !== false) {
      extensions.push(Dropcursor.configure(this.options.dropcursor))
    }

    if (this.options.gapcursor !== false) {
      extensions.push(Gapcursor.configure(this.options.gapcursor))
    }

    if (this.options.characterCount !== false) {
      extensions.push(CharacterCount.configure(this.options.characterCount))
    }

    if (this.options.hardBreak !== false) {
      extensions.push(HardBreak.configure(this.options.hardBreak))
    }

    if (this.options.heading !== false) {
      extensions.push(Heading.configure(this.options.heading))
    }

    if (this.options.history !== false) {
      extensions.push(History.configure(this.options.history))
    }

    if (this.options.horizontalRule !== false) {
      extensions.push(HorizontalRule.configure(this.options.horizontalRule))
    }

    if (this.options.italic !== false) {
      extensions.push(Italic.configure(this.options.italic))
    }

    if (this.options.listItem !== false) {
      extensions.push(ListItem.configure(this.options.listItem))
    }

    if (this.options.orderedList !== false) {
      extensions.push(OrderedList.configure(this.options.orderedList))
    }

    if (this.options.paragraph !== false) {
      extensions.push(Paragraph.configure(this.options.paragraph))
    }

    if (this.options.strike !== false) {
      extensions.push(Strike.configure(this.options.strike))
    }

    if (this.options.text !== false) {
      extensions.push(Text.configure(this.options.text))
    }

    if (this.options.table !== false) {
      extensions.push(Table.configure(this.options.table))
    }

    if (this.options.tableRow !== false) {
      extensions.push(TableRow.configure(this.options.tableRow))
    }

    if (this.options.tableHeader !== false) {
      extensions.push(TableHeader.configure(this.options.tableHeader))
    }

    if (this.options.tableCell !== false) {
      extensions.push(TableCell.configure(this.options.tableCell))
    }

    return extensions
  }
})
