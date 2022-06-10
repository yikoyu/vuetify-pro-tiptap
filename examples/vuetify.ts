import type { VueConstructor } from 'vue'

import Vuetify from 'vuetify/lib'
import zhHans from 'vuetify/es5/locale/zh-Hans'

export const createVuetify = (Vue: VueConstructor): Vuetify => {
  Vue.use(Vuetify)

  const vuetify = new Vuetify({
    lang: {
      locales: { zhHans },
      current: 'zhHans'
    }
  })

  return vuetify
}
