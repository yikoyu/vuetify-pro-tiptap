import Vuetify from 'vuetify/lib'
import type { VuetifyPreset } from 'vuetify/types'
import Logger from './logger'

let vuetifyInstance: Vuetify

/**
 * @description 修复在 rtl 下调用函数式 dialog, rtl 会还原
 * @param {Vuetify} instance
 * @return {*}  {Vuetify}
 */
function fixRTL(instance: Vuetify): Vuetify {
  if (typeof instance.framework.rtl === 'boolean') {
    instance.preset.rtl = instance.framework.rtl
  }

  return instance
}

export function getVuetifyInstance(instance?: Vuetify, preset?: VuetifyPreset) {
  if (vuetifyInstance) return fixRTL(vuetifyInstance)

  if (instance) {
    return (vuetifyInstance = instance)
  }

  return (vuetifyInstance = new Vuetify(preset || {}))
}

export function setVuetifyInstance(instance: Vuetify) {
  if (!instance) {
    Logger.warn('invalid vuetify instance')
    return false
  }
  vuetifyInstance = instance
  return true
}
