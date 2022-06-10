import type { VueConstructor } from 'vue'

import Vuetify from 'vuetify/lib'

export const createVuetify = (Vue: VueConstructor): Vuetify => {
  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  return vuetify
}
