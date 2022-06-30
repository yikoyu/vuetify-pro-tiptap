const html = `<h2 style="text-align: center">Welcome To Vuetify Tiptap Editor Demo</h2><p>🔥 <strong>Vuetify Tiptap Editor </strong>🔥is a WYSIWYG rich-text editor using&nbsp; <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/scrumpy/tiptap">tiptap</a>&nbsp;and <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vuetifyjs/vuetify">vuetify</a>&nbsp;for Vue.js <img src="https://i.ibb.co/nbRN3S2/undraw-upload-87y9.png" alt="Test alt" lockaspectratio="true" width="200" data-display="right"> that's easy to use, friendly to developers, fully extensible and clean in design.</p><p></p><p style="text-align: right">👉Click on the image to get started image features 👉</p><p></p><p>You can toggle <strong>Fullscreen</strong> 📺 in this demo.</p><ol><li><p>First item</p><ol><li><p>Second item</p></li></ol></li><li><p>Third item</p></li></ol><p></p><ul><li><p>First item</p><ul><li><p>Second item</p></li></ul></li><li><p>Third item</p></li></ul><p></p><ul class="task-list" data-type="taskList"><li class="task-list-item" data-checked="true" data-type="taskItem"><label><input type="checkbox" checked="checked"><span></span></label><div><p>First item</p></div></li><li class="task-list-item" data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Second item</p></div></li><li class="task-list-item" data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Third item</p></div></li></ul><blockquote class="blockquote"><p>This demo is simple, switch tab for more features.</p><p>All demos source code: <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/yikoyu/vuetify-pro-tiptap">source code 🔗</a></p></blockquote><h2 style="text-align: start"><strong>Demo</strong></h2><p style="text-align: start">👉<a target="_blank" rel="noopener noreferrer nofollow" href="https://yikoyu.github.io/vuetify-pro-tiptap/">https://</a><a target="_blank" rel="noopener noreferrer nofollow" href="http://yikoyu.github.io/vuetify-pro-tiptap/">yikoyu.github.io/vuetify-pro-tiptap/</a></p><h2 style="text-align: start"><strong>Features</strong></h2><ul><li><p>Use <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vuetifyjs/vuetify">vuetify</a> components</p></li><li><p>Markdown support</p></li><li><p>TypeScript support</p></li><li><p>I18n support(<code>en</code>, <code>zhHans</code>)</p></li><li><p>Vuetify 2.x and Vue 2.x support</p></li></ul><h2 style="text-align: start"><strong>Installation</strong></h2><h3 style="text-align: start"><strong>NPM</strong></h3><pre><code class="language-shell">pnpm add vuetify-pro-tiptap
</code></pre><p style="text-align: start">Or</p><pre><code class="language-shell">yarn add vuetify-pro-tiptap
</code></pre><p style="text-align: start">Or</p><pre><code class="language-shell">npm i vuetify-pro-tiptap -S
</code></pre><h3 style="text-align: start"><strong>Install plugin</strong></h3><pre><code class="language-TypeScript">import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'

import Vuetify from 'vuetify/lib'

import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'

import App from './App.vue'

Vue.use(VCA)
Vue.use(Vuetify)

const vuetify = new Vuetify()

const VuetifyProTipTap = createVuetifyProTipTap({
  vuetify,
  lang: 'zhHans'
})
Vue.use(VuetifyProTipTap)

createApp({
  vuetify,
  render: () =&gt; h(App)
}).mount('#app')
</code></pre><h2 style="text-align: start"><strong>Global Settings</strong></h2><pre><code class="language-TypeScript">import { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'

const VuetifyProTipTap = createVuetifyProTipTap({
  vuetify,
  lang: 'zhHans',
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  // edsitor global Settings
  config: {
    image: {
      imageTabs: [{ name: 'SELECT', component: SelectImage }],
      hiddenTabs: ['upload'],
      upload(file: File) {
        return Promise.resolve(/** image url */)
      }
    }
  }
})

Vue.use(VuetifyProTipTap)
</code></pre><h2 style="text-align: start"><strong>I18n</strong></h2><h3 style="text-align: start"><strong>Setting language</strong></h3><p style="text-align: start">You can declare when you install the plugin.</p><pre><code class="language-TypeScript">import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'

const VuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans'
})
</code></pre><p style="text-align: start">Or use <code>setLang</code> dynamic change</p><pre><code class="language-TypeScript">import { locale } from 'vuetify-pro-tiptap'

locale.setLang('en')
</code></pre><p style="text-align: start">Available languages:</p><ul><li><p>en (default)</p></li><li><p>zhHans</p></li></ul><h3 style="text-align: start"><strong>Use unavailable language</strong></h3><p style="text-align: start">Loading unavailable language, use <code>setMessage</code> for Settings</p><pre><code class="language-TypeScript">import { locale } from 'vuetify-pro-tiptap'

locale.setMessage('zhHant', {
  // i18n text
})
locale.setLang('zhHant')
</code></pre><h2 style="text-align: start"><strong>Usage</strong></h2><pre><code class="language-vue">&lt;script lang="ts"&gt;
import { defineComponent, ref, type Ref } from '@vue/composition-api'
import { mdiDeleteCircleOutline, mdiSend, mdiFileCodeOutline } from '@mdi/js'
import { VuetifyTiptap, VuetifyViewer, type ToolbarType, type StarterKitOptions, locale } from 'vuetify-pro-tiptap'
import SelectImage from './components/SelectImage.vue'

export default defineComponent({
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  setup() {
    const content = ref('&lt;h2 style="text-align: center"&gt;Welcome To Vuetify Tiptap Editor Demo&lt;/h2&gt;')

    const config: Ref&lt;Partial&lt;StarterKitOptions&gt;&gt; = ref&lt;Partial&lt;StarterKitOptions&gt;&gt;({
      image: {
        upload: uploadImage, // image upload function
        imageTabs: [{ name: 'SELECT', component: SelectImage }] // custom tab
        hiddenTabs: ['upload'] // use hidden tab
      }
    })

    // custom toolbar
    const toolbar = ref&lt;ToolbarType[]&gt;([
      'bold',
      'italic',
      'underline',
      'strike',
      'color',
      'highlight',
      '|',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      '|',
      'left',
      'center',
      'right',
      'justify',
      '|',
      'bulletList',
      'orderedList',
      'taskList',
      'indent',
      'outdent',
      '|',
      'link',
      'image',
      'video',
      '|',
      'blockquote',
      'rule',
      'code',
      '|',
      'clear',
      'fullscreen',
      'undo',
      'redo',
      '#preview'
    ])

    function uploadImage(file: File): Promise&lt;string&gt; {
      return Promise.resolve('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wE9P?ver=e767')
    }

    return {
      mdiDeleteCircleOutline,
      mdiFileCodeOutline,
      mdiSend,
      content,
      config,
      toolbar,
      dialog: ref(false)
    }
  }
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;vuetify-tiptap
      v-model="content"
      label="Title"
      :config="config"
      :toolbar="toolbar"
      :dark="$vuetify.theme.dark"
      placeholder="Enter some text..."
      rounded
      :maxHeight="465"
    &gt;
      &lt;template #preview="{ attrs }"&gt;
        &lt;v-dialog v-model="dialog" fullscreen hide-overlay&gt;
          &lt;template #activator="{ on, attrs: dialog }"&gt;
            &lt;v-btn v-bind="{ ...attrs, ...dialog }" v-on="on"&gt;
              &lt;v-icon&gt;{{ mdiFileCodeOutline }}&lt;/v-icon&gt;
            &lt;/v-btn&gt;
          &lt;/template&gt;

          &lt;v-card&gt;
            &lt;v-toolbar dark color="primary"&gt;
              &lt;v-btn icon dark @click="dialog = false"&gt;
                &lt;v-icon&gt;$close&lt;/v-icon&gt;
              &lt;/v-btn&gt;
            &lt;/v-toolbar&gt;

            &lt;v-container&gt;
              &lt;vuetify-viewer :value="content" /&gt;
            &lt;/v-container&gt;
          &lt;/v-card&gt;
        &lt;/v-dialog&gt;
      &lt;/template&gt;
    &lt;/vuetify-tiptap&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><h2 style="text-align: start"><strong>Props</strong></h2><h3 style="text-align: start"><strong>VuetifyTiptap</strong></h3><h4 style="text-align: start"><strong>Props</strong></h4><table class="table-wrapper"><tbody><tr><th colspan="1" rowspan="1"><p><strong>Name</strong></p></th><th colspan="1" rowspan="1"><p><strong>Type</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p>value</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>''</p></td><td colspan="1" rowspan="1"><p>The input’s value</p></td></tr><tr><td colspan="1" rowspan="1"><p>dark</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Applies the dark theme variant to the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>dense</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Reduces the input height</p></td></tr><tr><td colspan="1" rowspan="1"><p>outlined</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>true</p></td><td colspan="1" rowspan="1"><p>Applies the outlined style to the input</p></td></tr><tr><td colspan="1" rowspan="1"><p>disabled</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Disable the input</p></td></tr><tr><td colspan="1" rowspan="1"><p>label</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets input label</p></td></tr><tr><td colspan="1" rowspan="1"><p>placeholder</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets the input’s placeholder text</p></td></tr><tr><td colspan="1" rowspan="1"><p>toolbar</p></td><td colspan="1" rowspan="1"><p>ToolbarType[]</p></td><td colspan="1" rowspan="1"><p>All component</p></td><td colspan="1" rowspan="1"><p>Toolbar button config</p></td></tr><tr><td colspan="1" rowspan="1"><p>hideToolbar</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Hidden the toolbar</p></td></tr><tr><td colspan="1" rowspan="1"><p>disableToolbar</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Disable the toolbar</p></td></tr><tr><td colspan="1" rowspan="1"><p>maxWidth</p></td><td colspan="1" rowspan="1"><p>string | boolean</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets the maximum width for the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>minHeight</p></td><td colspan="1" rowspan="1"><p>string | boolean</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets the minimum height for the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>maxHeight</p></td><td colspan="1" rowspan="1"><p>string | boolean</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets the maximum height for the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>extensions</p></td><td colspan="1" rowspan="1"><p>AnyExtension[]</p></td><td colspan="1" rowspan="1"><p>[]</p></td><td colspan="1" rowspan="1"><p>Tiptap the extensions</p></td></tr><tr><td colspan="1" rowspan="1"><p>config</p></td><td colspan="1" rowspan="1"><p>Partial&lt;StarterKitOptions&gt;</p></td><td colspan="1" rowspan="1"><p>{}</p></td><td colspan="1" rowspan="1"><p>Editor config</p></td></tr><tr><td colspan="1" rowspan="1"><p>editorClass</p></td><td colspan="1" rowspan="1"><p>string | string[] | Record&lt;string, any&gt;</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Editor class</p></td></tr></tbody></table><h4 style="text-align: start"><strong>Slots</strong></h4><table class="table-wrapper"><tbody><tr><th colspan="1" rowspan="1"><p><strong>Name</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p>editor</p></td><td colspan="1" rowspan="1"><p>Slot to customize editor</p></td></tr><tr><td colspan="1" rowspan="1"><p>bottom</p></td><td colspan="1" rowspan="1"><p>Slot to customize editor bottom</p></td></tr></tbody></table><h3 style="text-align: start"><strong>VuetifyViewer</strong></h3><h4 style="text-align: start"><strong>Props</strong></h4><table class="table-wrapper"><tbody><tr><th colspan="1" rowspan="1"><p><strong>Name</strong></p></th><th colspan="1" rowspan="1"><p><strong>Type</strong></p></th><th colspan="1" rowspan="1"><p><strong>Default</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p>value</p></td><td colspan="1" rowspan="1"><p>value</p></td><td colspan="1" rowspan="1"><p>''</p></td><td colspan="1" rowspan="1"><p>The preview’s value</p></td></tr><tr><td colspan="1" rowspan="1"><p>dark</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Applies the dark theme variant to the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>dense</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Reduces the input height</p></td></tr><tr><td colspan="1" rowspan="1"><p>hideMarkdownStyle</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Hide .markdown-body class</p></td></tr><tr><td colspan="1" rowspan="1"><p>xss</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>true</p></td><td colspan="1" rowspan="1"><p>Enable xss filter</p></td></tr><tr><td colspan="1" rowspan="1"><p>xssOptions</p></td><td colspan="1" rowspan="1"><p>xss.IWhiteList</p></td><td colspan="1" rowspan="1"><p>Default rule</p></td><td colspan="1" rowspan="1"><p>Xss filter rule config</p></td></tr></tbody></table><h4 style="text-align: start"><strong>Slots</strong></h4><table class="table-wrapper"><tbody><tr><th colspan="1" rowspan="1"><p><strong>Name</strong></p></th><th colspan="1" rowspan="1"><p><strong>Description</strong></p></th></tr><tr><td colspan="1" rowspan="1"><p>before</p></td><td colspan="1" rowspan="1"><p>Add content at the before</p></td></tr><tr><td colspan="1" rowspan="1"><p>after</p></td><td colspan="1" rowspan="1"><p>Add content at the after</p></td></tr></tbody></table>`

export default html
