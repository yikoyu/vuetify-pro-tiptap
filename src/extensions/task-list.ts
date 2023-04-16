import { TaskList, TaskListOptions as TiptapTaskListOptions } from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import ActionButton from './components/ActionButton.vue'
import type { ButtonView, GeneralOptions } from '@/type'

export interface TaskListOptions extends TiptapTaskListOptions, GeneralOptions {
  button: ButtonView
}

export default TaskList.extend<TaskListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: 'task-list'
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
    return [
      TaskItem.configure({
        HTMLAttributes: {
          class: 'task-list-item'
        }
      })
    ]
  }
})
