import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import { createVuetify } from './vuetify'
import App from './App.vue'

const vuetify = createVuetify(Vue)

Vue.use(VCA)

import { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'
import SelectImage from './components/SelectImage.vue'
// import { createVuetifyProTipTap } from '../src'
// import '../src/styles/editor.scss'

const VuetifyProTipTap = createVuetifyProTipTap({
  vuetify,
  lang: 'zhHans',
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  config: {
    image: {
      imageTabs: [{ name: 'SELECT', component: SelectImage }],
      // hiddenTabs: ['upload'],
      upload(file: File) {
        console.log('e :>> ', file)
        return Promise.resolve('https://picsum.photos/1920/1080.webp')
      }
    }
  }
})
Vue.use(VuetifyProTipTap)

const app = createApp({
  vuetify,
  render: () => h(App)
})
app.mount('#app')
