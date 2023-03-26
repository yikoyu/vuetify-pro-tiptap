import { getCurrentInstance } from 'vue'

export default function useContext() {
  const vm = getCurrentInstance()

  return vm?.proxy
}
