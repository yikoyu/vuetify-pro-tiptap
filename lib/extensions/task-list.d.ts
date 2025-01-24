import { GeneralOptions } from '../type';
import { TaskItemOptions } from '@tiptap/extension-task-item';
import { TaskListOptions as TiptapTaskListOptions } from '@tiptap/extension-task-list';
/**
 * Represents the interface for task list options, extending TiptapTaskListOptions and GeneralOptions.
 */
export interface TaskListOptions extends TiptapTaskListOptions, GeneralOptions<TaskListOptions> {
    /** options for task items */
    taskItem: Partial<TaskItemOptions>;
}
export declare const TaskList: import('@tiptap/core').Node<TaskListOptions, any>;
