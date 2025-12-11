import {
  mdiAspectRatio,
  mdiCheck,
  mdiCircle,
  mdiClose,
  mdiCodeBracesBox,
  mdiCodeTags,
  mdiDelete,
  mdiFileImagePlus,
  mdiFormatAlignCenter,
  mdiFormatAlignJustify,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiFormatBold,
  mdiFormatClear,
  mdiFormatColorHighlight,
  mdiFormatFloatLeft,
  mdiFormatFloatNone,
  mdiFormatFloatRight,
  mdiFormatFont,
  mdiFormatHeader1,
  mdiFormatHeader2,
  mdiFormatHeader3,
  mdiFormatHeader4,
  mdiFormatHeader5,
  mdiFormatHeader6,
  mdiFormatHeaderPound,
  mdiFormatIndentDecrease,
  mdiFormatIndentIncrease,
  mdiFormatItalic,
  mdiFormatListBulleted,
  mdiFormatListCheckbox,
  mdiFormatListNumbered,
  mdiFormatParagraph,
  mdiFormatQuoteOpen,
  mdiFormatSize,
  mdiFormatStrikethrough,
  mdiFormatSubscript,
  mdiFormatSuperscript,
  mdiFormatUnderline,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiImagePlus,
  mdiLinkVariantOff,
  mdiLinkVariantPlus,
  mdiMinus,
  mdiOpenInNew,
  mdiPalette,
  mdiRedo,
  mdiSizeL,
  mdiSizeM,
  mdiSizeS,
  mdiTable,
  mdiTableColumnPlusAfter,
  mdiTableColumnPlusBefore,
  mdiTableColumnRemove,
  mdiTableMergeCells,
  mdiTablePlus,
  mdiTableRemove,
  mdiTableRowPlusAfter,
  mdiTableRowPlusBefore,
  mdiTableRowRemove,
  mdiText,
  mdiUndo,
  mdiVideoPlus,
  mdiWater,
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
  fontFamily: string
  fontSize: string
  bulletList: string
  orderedList: string
  taskList: string
  indent: string
  outdent: string
  link: string
  fileImagePlus: string
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
  markdownTheme: string
  fullscreen: string
}

export interface IconsOptions extends ToolbarIconsOptions {
  circle: string
  close: string
  fullscreenExit: string
  linkVariant: string
  linkVariantOff: string
  openInNew: string
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

  // sub and superscript
  subscript: string
  superscript: string

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

  check: string
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
  fontFamily: mdiFormatFont,
  fontSize: mdiFormatSize,
  subscript: mdiFormatSubscript,
  superscript: mdiFormatSuperscript,
  bulletList: mdiFormatListBulleted,
  orderedList: mdiFormatListNumbered,
  taskList: mdiFormatListCheckbox,
  indent: mdiFormatIndentIncrease,
  outdent: mdiFormatIndentDecrease,
  link: mdiLinkVariantPlus,
  fileImagePlus: mdiFileImagePlus,
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
  markdownTheme: mdiPalette,
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
  linkVariantOff: mdiLinkVariantOff,
  openInNew: mdiOpenInNew,
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
  tableMergeCells: mdiTableMergeCells,

  check: mdiCheck,
}

export function getIcon(iconName?: keyof IconsOptions): string | undefined {
  if (!iconName)
    return undefined
  return `svg:${icons[iconName]}`
}
