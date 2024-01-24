import { Extension } from '@tiptap/core'

import ActionButton from './components/ActionButton.vue'

import type { GeneralOptions } from '@/type'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IndentOptions extends GeneralOptions<IndentOptions> {}

export const Indent = /* @__PURE__*/ Extension.create<IndentOptions>({
  name: 'indent',
  addOptions() {
    return {
      divider: false,
      spacer: false,
      button: ({ editor, t }) => {
        const items: ['indent', 'outdent'] = ['indent', 'outdent']
        const commands = {
          indent: 'sinkListItem',
          outdent: 'liftListItem'
        } as const

        return items.map(item => ({
          component: ActionButton,
          componentProps: {
            action: () => {
              if (item === 'indent') editor.commands.sinkListItem('listItem')
              if (item === 'outdent') editor.commands.liftListItem('listItem')
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
