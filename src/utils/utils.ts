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

export { default as isequal } from 'lodash.isequal'
export { default as throttle } from 'lodash.throttle'
