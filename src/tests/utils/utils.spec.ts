import { describe, expect, it } from 'vitest'

import { clamp, getUnitWithPxAsDefault, isBoolean, isFunction, isNumber, isString } from '@/utils/utils'

describe('Rich text utils', () => {
  it('should test getUnitWithPxAsDefault', function () {
    expect(getUnitWithPxAsDefault('20')).toEqual('20px')
    expect(getUnitWithPxAsDefault(20)).toEqual('20px')
    expect(getUnitWithPxAsDefault(undefined)).toEqual(undefined)
  })

  it('should test clamp', function () {
    expect(clamp(2, 2, 4)).toEqual(2)
    expect(clamp(1, 2, 4)).toEqual(2)
    expect(clamp(5, 2, 4)).toEqual(4)
    expect(clamp(3, 2, 4)).toEqual(3)
  })

  it('should test other helpers', function () {
    expect(isString(1)).toBe(false)
    expect(isString('1')).toBe(true)
    expect(isString(true)).toBe(false)
    expect(isNumber('1')).toBe(false)
    expect(isNumber(1)).toBe(true)
    expect(isNumber(true)).toBe(false)
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean(true)).toBe(true)
    expect(isFunction('test')).toBe(false)
    expect(isFunction(true)).toBe(false)
    expect(isFunction(() => 'test')).toBe(true)
  })
})
