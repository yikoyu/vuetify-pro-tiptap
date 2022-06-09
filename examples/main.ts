import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import App from './App.vue'

import { createVuetify } from './core/vuetify'

const vuetify = createVuetify(Vue)

Vue.use(VCA)

const app = createApp({
  vuetify,
  render: () => h(App)
})
app.mount('#app')
