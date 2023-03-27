import { reactive } from 'vue'
import type { StarterKitOptions } from '@/core/tiptap-kit'

interface Instance {
  defaultLang?: string
  config?: Partial<StarterKitOptions>
}

const state: Instance = reactive({})

export function createContext(instance: Instance) {
  state.defaultLang = instance.defaultLang
  state.config = instance.config
}

export default function useContext(): Instance {
  return state
}
