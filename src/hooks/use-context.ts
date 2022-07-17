import { getCurrentInstance } from 'vue-demi'

export default function useContext() {
  const vm = getCurrentInstance()

  return vm?.proxy
}
