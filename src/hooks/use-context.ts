import { reactive, computed } from 'vue'
import type { AnyExtension } from '@tiptap/core'

interface Instance {
  defaultLang?: string
  extensions: AnyExtension[]
  isFullscreen: boolean
  color?: string
  highlight?: string
}

const state: Instance = reactive({
  extensions: [],
  isFullscreen: false,
  color: undefined,
  highlight: undefined
}) as unknown as Instance

export function createContext(instance: Partial<Instance>) {
  state.defaultLang = instance.defaultLang
  state.extensions = instance.extensions ?? []
}

export function useContext() {
  const isFullscreen = computed(() => state.isFullscreen)

  function toggleFullscreen() {
    state.isFullscreen = !state.isFullscreen
  }

  return {
    state,
    isFullscreen,
    toggleFullscreen
  }
}
