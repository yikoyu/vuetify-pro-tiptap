import { History } from '@tiptap/extension-history'
import ActionButton from './components/ActionButton.vue'
import type { HistoryOptions as TiptapHistoryOptions } from '@tiptap/extension-history'
import type { ButtonView, GeneralOptions } from '@/type'

export interface HistoryOptions extends TiptapHistoryOptions, GeneralOptions {
  button: ButtonView
}

export default History.extend<HistoryOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      depth: 10,
      button: ({ editor, t }) => {
        const historys: ['undo', 'redo'] = ['undo', 'redo']

        return historys.map(item => ({
          component: ActionButton,
          componentProps: {
            action: () => {
              if (item === 'undo') editor.commands.undo()
              if (item === 'redo') editor.commands.redo()
            },
            icon: item,
            tooltip: t(`editor.${item}.tooltip`)
          }
        }))
      }
    }
  }
})
