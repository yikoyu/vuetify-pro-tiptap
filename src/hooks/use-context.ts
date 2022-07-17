import { getCurrentInstance } from '@vue/composition-api'

export default function useContext() {
  const vm = getCurrentInstance()

  return vm?.proxy
}
