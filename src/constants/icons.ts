import {
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatUnderline,
  mdiFormatStrikethrough,
  mdiWater,
  mdiFormatColorHighlight,
  mdiFormatHeaderPound,
  mdiFormatHeader1,
  mdiFormatHeader2,
  mdiFormatHeader3,
  mdiFormatHeader4,
  mdiFormatHeader5,
  mdiFormatHeader6,
  mdiFormatParagraph,
  mdiFormatAlignLeft,
  mdiFormatAlignCenter,
  mdiFormatAlignRight,
  mdiFormatAlignJustify,
  mdiFormatListBulleted,
  mdiFormatListNumbered,
  mdiFormatListCheckbox,
  mdiFormatIndentDecrease,
  mdiFormatIndentIncrease,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiLinkVariantPlus,
  mdiImagePlus,
  mdiVideoPlus,
  mdiTable,
  mdiTablePlus,
  mdiTableRemove,
  mdiTableColumnPlusAfter,
  mdiTableColumnPlusBefore,
  mdiTableColumnRemove,
  mdiTableRowPlusAfter,
  mdiTableRowPlusBefore,
  mdiTableRowRemove,
  mdiTableMergeCells,
  mdiFormatQuoteOpen,
  mdiMinus,
  mdiCodeTags,
  mdiCodeBracesBox,
  mdiFormatClear,
  mdiUndo,
  mdiRedo,
  mdiCircle,
  mdiClose,
  mdiFormatFloatLeft,
  mdiFormatFloatNone,
  mdiFormatFloatRight,
  mdiSizeS,
  mdiSizeM,
  mdiSizeL,
  mdiAspectRatio,
  mdiDelete,
  mdiText
} from '@mdi/js'

export interface ToolbarIconsOptions {
  bold: string
  italic: string
  underline: string
  strike: string
  color: string
  highlight: string
  heading: string
  textAlign: string
  bulletList: string
  orderedList: string
  taskList: string
  indent: string
  outdent: string
  link: string
  image: string
  video: string
  table: string
  blockquote: string
  horizontalRule: string
  code: string
  codeBlock: string
  clear: string
  undo: string
  redo: string
  fullscreen: string
}

export interface IconsOptions extends ToolbarIconsOptions {
  circle: string
  close: string
  fullscreenExit: string
  linkVariant: string
  formatFloatLeft: string
  formatFloatNone: string
  formatFloatRight: string
  sizeS: string
  sizeM: string
  sizeL: string
  aspectRatio: string
  delete: string
  text: string

  // heading
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  p: string

  // textAlign
  left: string
  center: string
  right: string
  justify: string

  // table
  tablePlus: string
  tableRemove: string
  tableColumnPlusAfter: string
  tableColumnPlusBefore: string
  tableColumnRemove: string
  tableRowPlusAfter: string
  tableRowPlusBefore: string
  tableRowRemove: string
  tableMergeCells: string
}

const icons: IconsOptions = {
  bold: mdiFormatBold,
  italic: mdiFormatItalic,
  underline: mdiFormatUnderline,
  strike: mdiFormatStrikethrough,
  color: mdiWater,
  highlight: mdiFormatColorHighlight,
  heading: mdiFormatHeaderPound,
  textAlign: mdiFormatAlignCenter,
  bulletList: mdiFormatListBulleted,
  orderedList: mdiFormatListNumbered,
  taskList: mdiFormatListCheckbox,
  indent: mdiFormatIndentIncrease,
  outdent: mdiFormatIndentDecrease,
  link: mdiLinkVariantPlus,
  image: mdiImagePlus,
  video: mdiVideoPlus,
  table: mdiTable,
  blockquote: mdiFormatQuoteOpen,
  horizontalRule: mdiMinus,
  code: mdiCodeTags,
  codeBlock: mdiCodeBracesBox,
  clear: mdiFormatClear,
  undo: mdiUndo,
  redo: mdiRedo,
  fullscreen: mdiFullscreen,

  // heading
  h1: mdiFormatHeader1,
  h2: mdiFormatHeader2,
  h3: mdiFormatHeader3,
  h4: mdiFormatHeader4,
  h5: mdiFormatHeader5,
  h6: mdiFormatHeader6,
  p: mdiFormatParagraph,

  // textAlign
  left: mdiFormatAlignLeft,
  center: mdiFormatAlignCenter,
  right: mdiFormatAlignRight,
  justify: mdiFormatAlignJustify,

  // no tollbar icon
  circle: mdiCircle,
  close: mdiClose,
  fullscreenExit: mdiFullscreenExit,
  linkVariant: mdiLinkVariantPlus,
  formatFloatLeft: mdiFormatFloatLeft,
  formatFloatNone: mdiFormatFloatNone,
  formatFloatRight: mdiFormatFloatRight,
  sizeS: mdiSizeS,
  sizeM: mdiSizeM,
  sizeL: mdiSizeL,
  aspectRatio: mdiAspectRatio,
  delete: mdiDelete,
  text: mdiText,

  // table
  tablePlus: mdiTablePlus,
  tableRemove: mdiTableRemove,
  tableColumnPlusAfter: mdiTableColumnPlusAfter,
  tableColumnPlusBefore: mdiTableColumnPlusBefore,
  tableColumnRemove: mdiTableColumnRemove,
  tableRowPlusAfter: mdiTableRowPlusAfter,
  tableRowPlusBefore: mdiTableRowPlusBefore,
  tableRowRemove: mdiTableRowRemove,
  tableMergeCells: mdiTableMergeCells
}

export function getIcon(iconName?: keyof IconsOptions): string | undefined {
  if (!iconName) return undefined
  return `svg:${icons[iconName]}`
}
