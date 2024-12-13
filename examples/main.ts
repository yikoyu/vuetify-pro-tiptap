import { createApp } from 'vue'

import { createVuetify } from 'vuetify'
import App from './App.vue'

import { vuetifyProTipTap } from './tiptap'
import 'vuetify/styles'

const vuetify = createVuetify()

const app = createApp(App)
app.use(vuetify)
app.use(vuetifyProTipTap)

// fix warning injected property "decorationClasses" is a ref and will be auto-unwrapped
// https://github.com/ueberdosis/tiptap/issues/1719
app.config.unwrapInjectedRef = true

app.mount('#app')
