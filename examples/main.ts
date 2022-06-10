import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import { createVuetify } from './vuetify'
import App from './App.vue'

const vuetify = createVuetify(Vue)

Vue.use(VCA)

import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'
// import { createVuetifyProTipTap } from '../src'
// import '../src/styles/editor.scss'

const VuetifyProTipTap = createVuetifyProTipTap({ vuetify })
Vue.use(VuetifyProTipTap)

const app = createApp({
  vuetify,
  render: () => h(App)
})
app.mount('#app')
