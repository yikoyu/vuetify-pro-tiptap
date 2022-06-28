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

export {
  mdiCircle,
  mdiClose,
  mdiFullscreenExit,
  mdiLinkVariant,
  mdiFormatFloatLeft,
  mdiFormatFloatNone,
  mdiFormatFloatRight,
  mdiSizeS,
  mdiSizeM,
  mdiSizeL,
  mdiAspectRatio,
  mdiDelete,
  mdiText
}

export interface IconsOptions {
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
  blockquote: string
  rule: string
  code: string
  codeBlock: string
  clear: string
  undo: string
  redo: string
  fullscreen: string
}

export const icons: IconsOptions = {
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
  blockquote: mdiFormatQuoteOpen,
  rule: mdiMinus,
  code: mdiCodeTags,
  codeBlock: mdiCodeBracesBox,
  clear: mdiFormatClear,
  undo: mdiUndo,
  redo: mdiRedo,
  fullscreen: mdiFullscreen
}

export function get(iconName: keyof IconsOptions): string {
  return icons[iconName]
}
