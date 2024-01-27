import type { Editor } from '@tiptap/core'

export const getUnitWithPxAsDefault = (value?: string | number) => {
  if (!value) return value

  const _value = isNumber(value) ? String(value) : value

  const num = parseInt(_value, 10)
  const unit = _value.slice(num.toString().length)

  return num + (unit || 'px')
}

export function clamp(val: number, min: number, max: number) {
  if (val < min) return min
  if (val > max) return max
  return val
}

export const isNumber = (value: unknown): value is number => typeof value === 'number'

export const isString = (value: unknown): value is string => typeof value === 'string'

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

export const isFunction = (value: unknown): value is Function => typeof value === 'function'

/**
 * Checks if the editor has a specific extension method with the given name.
 *
 * @param {Editor} editor - An instance of the editor.
 * @param {string} name - The name of the extension method.
 * @returns {boolean} - Returns true if the specified extension method is present, otherwise returns false.
 */
export function hasExtension(editor: Editor, name: string): boolean {
  // Retrieve the extension manager of the editor, defaulting to an empty array if it doesn't exist
  const { extensions = [] } = editor.extensionManager ?? {}

  // Check if the extension method with the specified name is present in the extension manager
  const find = extensions.find(i => i.name === name)

  // Return false if the extension method with the specified name is not found, otherwise return true
  if (!find) return false
  return true
}

export { default as isequal } from 'lodash.isequal'
export { default as throttle } from 'lodash.throttle'
