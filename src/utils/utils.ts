import _merge from 'lodash.merge'
import _throttle from 'lodash.throttle'

export interface DebouncedFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined
  cancel(): void
  flush(): ReturnType<T> | undefined
}

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

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

export const isFunction = (value: unknown): value is Function => typeof value === 'function'

/**
 * Typescript error TS2742
 */
export const merge = (object: any, ...otherArgs: any[]) => _merge(object, ...otherArgs)

/**
 * Typescript error TS2742
 */
export const throttle = <T extends (...args: any) => any>(func: T, wait?: number): DebouncedFunc<T> => _throttle(func, wait)
