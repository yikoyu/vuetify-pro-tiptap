import { object, bool, func } from 'vue-types'
import type { Node as ProseMirrorNode } from '@tiptap/pm/model'
import type { Decoration } from '@tiptap/pm/view'

export const nodeViewProps = {
  editor: object<import('@tiptap/core').Editor>().isRequired,
  node: object<ProseMirrorNode>().isRequired,
  decorations: object<Decoration[]>().isRequired,
  selected: bool().isRequired,
  extension: object<import('@tiptap/core').Node>().isRequired,
  getPos: func<() => number>().isRequired,
  updateAttributes: func<(attributes: Record<string, any>) => void>().isRequired,
  deleteNode: func<() => void>().isRequired
}
