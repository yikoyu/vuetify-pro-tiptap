import {
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatUnderline,
  mdiFormatStrikethroughVariant,
  mdiWater,
  mdiFormatColorHighlight,
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
  mdiLinkVariant,
  mdiImage,
  mdiVideo,
  mdiTable,
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
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  p: string
  left: string
  center: string
  right: string
  justify: string
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
  rule: string
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
}

const icons: IconsOptions = {
  bold: mdiFormatBold,
  italic: mdiFormatItalic,
  underline: mdiFormatUnderline,
  strike: mdiFormatStrikethroughVariant,
  color: mdiWater,
  highlight: mdiFormatColorHighlight,
  h1: mdiFormatHeader1,
  h2: mdiFormatHeader2,
  h3: mdiFormatHeader3,
  h4: mdiFormatHeader4,
  h5: mdiFormatHeader5,
  h6: mdiFormatHeader6,
  p: mdiFormatParagraph,
  left: mdiFormatAlignLeft,
  center: mdiFormatAlignCenter,
  right: mdiFormatAlignRight,
  justify: mdiFormatAlignJustify,
  bulletList: mdiFormatListBulleted,
  orderedList: mdiFormatListNumbered,
  taskList: mdiFormatListCheckbox,
  indent: mdiFormatIndentIncrease,
  outdent: mdiFormatIndentDecrease,
  link: mdiLinkVariant,
  image: mdiImage,
  video: mdiVideo,
  table: mdiTable,
  blockquote: mdiFormatQuoteOpen,
  rule: mdiMinus,
  code: mdiCodeTags,
  codeBlock: mdiCodeBracesBox,
  clear: mdiFormatClear,
  undo: mdiUndo,
  redo: mdiRedo,
  fullscreen: mdiFullscreen,

  // no tollbar icon
  circle: mdiCircle,
  close: mdiClose,
  fullscreenExit: mdiFullscreenExit,
  linkVariant: mdiLinkVariant,
  formatFloatLeft: mdiFormatFloatLeft,
  formatFloatNone: mdiFormatFloatNone,
  formatFloatRight: mdiFormatFloatRight,
  sizeS: mdiSizeS,
  sizeM: mdiSizeM,
  sizeL: mdiSizeL,
  aspectRatio: mdiAspectRatio,
  delete: mdiDelete,
  text: mdiText
}

export function getIcon(iconName?: keyof IconsOptions): string | undefined {
  if (!iconName) return undefined
  return `svg:${icons[iconName]}`
}
