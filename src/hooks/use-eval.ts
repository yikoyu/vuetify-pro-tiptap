import { computed, ComputedRef }  from 'vue'

export function useEval(type: string[], props: { hrefRules: string }) {
  let evalHrefRules: ComputedRef | [] = []

  // hrefRules is the attribute on the props object
  if (type.includes('hrefRules')) {
    evalHrefRules = computed(() => {
      if (!props.hrefRules) return []

      if (Array.isArray(props.hrefRules)) {
        return props.hrefRules
      }

      if (
        typeof props.hrefRules === 'string' &&
        props.hrefRules.startsWith('[') &&
        props.hrefRules.endsWith(']')
      ) {
        // eslint-disable-next-line no-new-func
        return new Function(`return ${props.hrefRules}`)()
      }

      return props.hrefRules
    })
  }

  return {
    evalHrefRules
  }
}
