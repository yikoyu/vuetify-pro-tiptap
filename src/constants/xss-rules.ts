import type { IWhiteList } from 'xss'

const rules: IWhiteList = {
  a: ['href', 'title', 'target'],
  span: ['style'],
  blockquote: ['class', 'style'],
  p: ['class', 'style'],
  hr: [],
  pre: [],
  code: [],
  strong: [],
  img: ['src', 'alt', 'title', 'width', 'height', 'style', 'data-display'],
  label: ['contenteditable'],
  input: ['type', 'value', 'checked'],
  div: ['class', 'style'],
  iframe: ['src', 'allowfullscreen', 'frameborder', 'width', 'height'],
  em: [],
  s: [],
  mark: [],
  h1: ['class', 'style'],
  h2: ['class', 'style'],
  h3: ['class', 'style'],
  h4: ['class', 'style'],
  h5: ['class', 'style'],
  h6: ['class', 'style'],
  ul: ['class', 'data-type'],
  li: ['data-checked', 'itemtypename'],
  ol: [],
  u: [],
  tr: ['class', 'style'],
  td: ['class', 'style'],
  th: ['class', 'style'],
  tbody: ['class', 'style'],
  table: ['class', 'style'],
  br: []
}

export default rules
