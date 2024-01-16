import { reactive } from 'vue'
import type { AnyExtension } from '@tiptap/core'

interface Instance {
  defaultLang?: string
  defaultMarkdownTheme?: string
  extensions: AnyExtension[]
}

const state: Instance = reactive({
  extensions: []
}) as unknown as Instance

export function createContext(instance: Partial<Instance>) {
  state.defaultLang = instance.defaultLang
  state.defaultMarkdownTheme = instance.defaultMarkdownTheme
  state.extensions = instance.extensions ?? []
}

export function useContext() {
  return {
    state
  }
}
