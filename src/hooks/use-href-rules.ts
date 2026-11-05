import { computed } from 'vue'
import Logger from '@/utils/logger'

/** A Vuetify validation rule: returns `true` when valid, otherwise an error message */
export type HrefRule = (value: string) => boolean | string

/**
 * A serializable rule, so it can be passed as JSON (e.g. from the Go side).
 * The value is valid when it matches `pattern` (or does not match it, when `negate` is set).
 */
export interface HrefRuleDescriptor {
  pattern: string
  flags?: string
  negate?: boolean
  message: string
}

/**
 * Rules for validating hrefs in the link/video dialog. Accepts:
 * - an array of rule functions and/or rule descriptors
 * - a JSON string of rule descriptors
 * - (deprecated) the legacy JS string form, e.g. `[value => !/^http:\/\//.test(value) || "message"]`;
 *   only `value => [!]/regex/.test(value) || "message"` rules are understood, it is never evaluated
 */
export type HrefRules = string | Array<HrefRule | HrefRuleDescriptor>

function isDescriptor(rule: unknown): rule is HrefRuleDescriptor {
  return (
    typeof rule === 'object' &&
    rule !== null &&
    typeof (rule as HrefRuleDescriptor).pattern === 'string' &&
    typeof (rule as HrefRuleDescriptor).message === 'string'
  )
}

function descriptorToRule({ pattern, flags = '', negate = false, message }: HrefRuleDescriptor): HrefRule {
  // drop stateful flags so `test` gives the same result on every call
  const re = new RegExp(pattern, flags.replace(/[gy]/g, ''))
  return (value: string) => re.test(value ?? '') !== negate || message
}

function parseJsonRules(source: string): HrefRuleDescriptor[] | undefined {
  try {
    const parsed = JSON.parse(source)
    if (Array.isArray(parsed) && parsed.every(isDescriptor)) return parsed
  } catch {}
  return undefined
}

// value => !/regex/flags.test(value) || "message"
const LEGACY_RULE =
  /(\w+)\s*=>\s*(!?)\s*\/((?:\\.|\[(?:\\.|[^\]\\])*\]|[^/\\[\n])+)\/([a-z]*)\.test\(\s*\1\s*\)\s*\|\|\s*(["'`])((?:\\.|(?!\5)[^\\])*)\5/g

function parseLegacyRules(source: string): HrefRuleDescriptor[] | undefined {
  const rules: HrefRuleDescriptor[] = []
  const rest = source.replace(LEGACY_RULE, (_, _arg, bang, pattern, flags, _quote, message) => {
    rules.push({ pattern, flags, negate: bang === '!', message: message.replace(/\\(.)/g, '$1') })
    return ''
  })

  // anything left besides the array brackets and separators is code we do not understand
  if (!/^\s*\[[\s,]*\]\s*$/.test(rest)) return undefined
  return rules
}

export function normalizeHrefRules(hrefRules: HrefRules | undefined): HrefRule[] {
  if (!hrefRules) return []

  if (Array.isArray(hrefRules)) {
    return hrefRules.map(rule => (isDescriptor(rule) ? descriptorToRule(rule) : rule))
  }

  const descriptors = parseJsonRules(hrefRules) ?? parseLegacyRules(hrefRules)
  if (!descriptors) {
    Logger.warn(`Unsupported hrefRules ignored: ${hrefRules}. Pass rule functions or a JSON array of { pattern, flags, negate, message }.`)
    return []
  }

  return descriptors.map(descriptorToRule)
}

export function useHrefRules(props: { hrefRules?: HrefRules }) {
  return computed(() => normalizeHrefRules(props.hrefRules))
}
