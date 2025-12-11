import type { TaskItemOptions, TaskListOptions as TiptapTaskListOptions } from '@tiptap/extension-list'
import type { GeneralOptions } from '@/type'
import { TaskItem, TaskList as TiptapTaskList } from '@tiptap/extension-list'

import { TaskListActionButton } from './components/ActionButton'

/**
 * Represents the interface for task list options, extending TiptapTaskListOptions and GeneralOptions.
 */
export interface TaskListOptions extends TiptapTaskListOptions, GeneralOptions<TaskListOptions> {
  /** options for task items */
  taskItem: Partial<TaskItemOptions>
}

export const TaskList = /* @__PURE__ */ TiptapTaskList.extend<TaskListOptions>({
  addOptions() {
    return {
      ...this.parent?.() as TiptapTaskListOptions,
      HTMLAttributes: {
        class: 'task-list',
      },
      taskItem: {
        HTMLAttributes: {
          class: 'task-list-item',
        },
      },
      button: ({ editor, t }) => ({
        component: TaskListActionButton,
        componentProps: {
          editor,
          t,
        },
      }),
    }
  },

  addExtensions() {
    return [TaskItem.configure(this.options.taskItem)]
  },
})
