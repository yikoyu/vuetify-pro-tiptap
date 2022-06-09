import type { IWhiteList } from 'xss'

const rules: IWhiteList = {
  a: ['href', 'title', 'target'],
  span: ['style'],
  blockquote: ['style'],
  p: ['style'],
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
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
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
