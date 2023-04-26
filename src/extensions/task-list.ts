import { TaskList as TiptapTaskList } from '@tiptap/extension-task-list'
import { TaskItem } from '@tiptap/extension-task-item'
import ActionButton from './components/ActionButton.vue'
import type { TaskListOptions as TiptapTaskListOptions } from '@tiptap/extension-task-list'
import type { TaskItemOptions } from '@tiptap/extension-task-item'
import type { ButtonView, GeneralOptions } from '@/type'

export interface TaskListOptions extends TiptapTaskListOptions, GeneralOptions {
  taskItem: Partial<TaskItemOptions>
  button: ButtonView
}

export const TaskList = /* @__PURE__*/ TiptapTaskList.extend<TaskListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: 'task-list'
      },
      taskItem: {
        HTMLAttributes: {
          class: 'task-list-item'
        }
      },
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleTaskList(),
          isActive: () => editor.isActive('taskList') || false,
          icon: 'taskList',
          tooltip: t('editor.tasklist.tooltip')
        }
      })
    }
  },

  addExtensions() {
    return [TaskItem.configure(this.options.taskItem)]
  }
})
