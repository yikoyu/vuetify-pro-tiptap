import type { GeneralOptions } from '@/type'

import { Extension } from '@tiptap/core'

import ActionButton from './components/ActionButton.vue'

export interface IndentOptions extends GeneralOptions<IndentOptions> {}

export const Indent = /* @__PURE__*/ Extension.create<IndentOptions>({
  name: 'indent',
  addOptions() {
    return {
      divider: false,
      spacer: false,
      button: ({ editor, t }) => {
        const items: ['outdent', 'indent'] = ['outdent', 'indent']
        const commands = {
          indent: 'sinkListItem',
          outdent: 'liftListItem'
        } as const

        return items.map(item => ({
          component: ActionButton,
          componentProps: {
            action: () => {
              if (item === 'indent') editor.chain().focus().sinkListItem('listItem').run()
              if (item === 'outdent') editor.chain().focus().liftListItem('listItem').run()
            },
            disabled: !editor.can()[commands[item]]('listItem'),
            icon: item,
            tooltip: t(`editor.${item}.tooltip`)
          }
        }))
      }
    }
  }
})
