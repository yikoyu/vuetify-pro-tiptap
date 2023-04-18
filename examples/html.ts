const html = `<h1 style="text-align: start">Vuetify Pro Tiptap</h1><p style="text-align: start">A WYSIWYG rich-text editor using <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/scrumpy/tiptap">tiptap</a> and <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vuetifyjs/vuetify">vuetify</a> for Vue.js</p><hr><h2 style="text-align: start">Demo</h2><p style="text-align: start">👉<a target="_blank" rel="noopener noreferrer nofollow" href="https://yikoyu.github.io/vuetify-pro-tiptap/">https://yikoyu.github.io/vuetify-pro-tiptap/</a></p><h2 style="text-align: start">Features</h2><ul><li><p>Use <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vuetifyjs/vuetify">vuetify</a> components</p></li><li><p>Markdown support</p></li><li><p>TypeScript support</p></li><li><p>I18n support(<code>en</code>, <code>zhHans</code>)</p></li><li><p>Vuetify 3.x and Vue 3.x support</p></li></ul><h2 style="text-align: start">Vuetify 2.x</h2><p style="text-align: start">For Vuetify 2.x please use the latest version of <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/yikoyu/vuetify-pro-tiptap/tree/1.x">vuetify-pro-tiptap@1.X.X</a></p><h2 style="text-align: start">Installation</h2><h3 style="text-align: start">NPM</h3><pre><code>pnpm add vuetify-pro-tiptap
# or
yarn add vuetify-pro-tiptap
# or
npm i vuetify-pro-tiptap -S</code></pre><h3 style="text-align: start">Install plugin</h3><p>tiptap.tsmain.ts</p><h2 style="text-align: start">Global Settings</h2><pre><code>import { markRaw } from 'vue'
import { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap, defaultBubbleList } from 'vuetify-pro-tiptap'
import { BaseKit, Image, Fullscreen } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'
import SelectImage from './components/SelectImage.vue'

export const vuetifyProTipTap = createVuetifyProTipTap({
  // Set default lang
  lang: 'zhHans',
  // Global registration app.component
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  // Global registration extensions
  extensions: [
    BaseKit.configure({
      placeholder: {
        placeholder: 'Enter some text...'
      },
      bubble: {
        // default config
        list: {
          image: [ 'float-left', 'float-none', 'float-right', 'divider', 'size-small', 'size-medium', 'size-large', 'divider', 'textAlign', 'divider', 'image', 'image-aspect-ratio', 'remove'],
          text: ['bold', 'italic', 'underline', 'strike', 'divider', 'color', 'highlight', 'textAlign', 'divider', 'link'],
          video: ['video', 'remove']
        },
        defaultBubbleList: editor =&gt; {
          // You can customize the bubble menu here
          return defaultBubbleList(editor) // default customize bubble list
        }
      }
    }),
    Image.configure({
      // Generate a VDivider after the button
      divider: true,
      // Custom image tabs
      imageTabs: [{ name: 'SELECT', component: markRaw(SelectImage) }],
      // hidden default tab
      hiddenTabs: ['upload'],
      // custom upload function
      upload(file) {
        const url = URL.createObjectURL(file)
        console.log('mock upload api :&gt;&gt; ', url)
        return Promise.resolve(url)
      }
    }),
    Fullscreen.configure({
      // Generate a VSpacer after the button
      spacer: true
    })
  ]
})</code></pre><h2 style="text-align: start">Custom extensions</h2><p>PreviewActionButton.vuepreview.ts</p><h2 style="text-align: start">I18n</h2><h3 style="text-align: start">Setting language</h3><p style="text-align: start">You can declare when you install the plugin.</p><pre><code>import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'

const VuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans'
})</code></pre><p style="text-align: start">Or use <code>setLang</code> dynamic change</p><pre><code>import { locale } from 'vuetify-pro-tiptap'

locale.setLang('en')</code></pre><p style="text-align: start">Available languages:</p><ul><li><p>en (default)</p></li><li><p>zhHans</p></li></ul><h3 style="text-align: start">Use unavailable language</h3><p style="text-align: start">Loading unavailable language, use <code>setMessage</code> for Settings</p><pre><code>import { locale } from 'vuetify-pro-tiptap'

locale.setMessage('zhHant', {
  // i18n text
})
locale.setLang('zhHant')</code></pre><h2 style="text-align: start">Usage</h2><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { VuetifyTiptap, VuetifyViewer } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'
import { BaseKit, Bold, Italic, Underline, Strike, Color, Highlight, Heading, Link, Image, Video, Table, Fullscreen, History } from 'vuetify-pro-tiptap'

const extensions = [
  BaseKit.configure({
    placeholder: {
      placeholder: 'Enter some text...'
    }
  }),
  Bold,
  Italic,
  Underline,
  Strike,
  Color,
  Highlight,
  Heading,
  Link,
  Image,
  Video,
  Table,
  Fullscreen,
  History
]

const content = ref('')
&lt;/script&gt;

&lt;template&gt;
  &lt;v-app id="app"&gt;
    &lt;v-container&gt;
      &lt;VuetifyTiptap v-model="content" label="Title" rounded :min-height="200" :max-height="465" :max-width="900" :extensions="extensions" /&gt;
      &lt;VuetifyViewer :value="content" /&gt;
    &lt;/v-container&gt;
  &lt;/v-app&gt;
&lt;/template&gt;</code></pre><h2 style="text-align: start">Props</h2><h3 style="text-align: start">VuetifyTiptap</h3><h4 style="text-align: start">Props</h4><table class="table-wrapper"><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Type</p></th><th colspan="1" rowspan="1"><p>Default</p></th><th colspan="1" rowspan="1"><p>Description</p></th></tr><tr><td colspan="1" rowspan="1"><p>modelValue</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>''</p></td><td colspan="1" rowspan="1"><p>The input’s value</p></td></tr><tr><td colspan="1" rowspan="1"><p>dark</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Applies the dark theme variant to the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>dense</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Reduces the input height</p></td></tr><tr><td colspan="1" rowspan="1"><p>outlined</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>true</p></td><td colspan="1" rowspan="1"><p>Applies the outlined style to the input</p></td></tr><tr><td colspan="1" rowspan="1"><p>flat</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>true</p></td><td colspan="1" rowspan="1"><p>Removes the card’s elevation</p></td></tr><tr><td colspan="1" rowspan="1"><p>disabled</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Disable the input</p></td></tr><tr><td colspan="1" rowspan="1"><p>label</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets input label</p></td></tr><tr><td colspan="1" rowspan="1"><p>hideToolbar</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Hidden the toolbar</p></td></tr><tr><td colspan="1" rowspan="1"><p>disableToolbar</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Disable the toolbar</p></td></tr><tr><td colspan="1" rowspan="1"><p>maxWidth</p></td><td colspan="1" rowspan="1"><p>string | boolean</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets the maximum width for the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>minHeight</p></td><td colspan="1" rowspan="1"><p>string | boolean</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets the minimum height for the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>maxHeight</p></td><td colspan="1" rowspan="1"><p>string | boolean</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Sets the maximum height for the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>extensions</p></td><td colspan="1" rowspan="1"><p>AnyExtension[]</p></td><td colspan="1" rowspan="1"><p>[]</p></td><td colspan="1" rowspan="1"><p>Tiptap the extensions</p></td></tr><tr><td colspan="1" rowspan="1"><p>editorClass</p></td><td colspan="1" rowspan="1"><p>string | string[] | Record&lt;string, any&gt;</p></td><td colspan="1" rowspan="1"><p>undefined</p></td><td colspan="1" rowspan="1"><p>Editor class</p></td></tr></tbody></table><h4 style="text-align: start">Slots</h4><table class="table-wrapper"><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Description</p></th></tr><tr><td colspan="1" rowspan="1"><p>editor</p></td><td colspan="1" rowspan="1"><p>Slot to customize editor</p></td></tr><tr><td colspan="1" rowspan="1"><p>bottom</p></td><td colspan="1" rowspan="1"><p>Slot to customize editor bottom</p></td></tr></tbody></table><h3 style="text-align: start">VuetifyViewer</h3><h4 style="text-align: start">Props</h4><table class="table-wrapper"><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Type</p></th><th colspan="1" rowspan="1"><p>Default</p></th><th colspan="1" rowspan="1"><p>Description</p></th></tr><tr><td colspan="1" rowspan="1"><p>value</p></td><td colspan="1" rowspan="1"><p>value</p></td><td colspan="1" rowspan="1"><p>''</p></td><td colspan="1" rowspan="1"><p>The preview’s value</p></td></tr><tr><td colspan="1" rowspan="1"><p>dark</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Applies the dark theme variant to the component.</p></td></tr><tr><td colspan="1" rowspan="1"><p>dense</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Reduces the input height</p></td></tr><tr><td colspan="1" rowspan="1"><p>hideMarkdownStyle</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>false</p></td><td colspan="1" rowspan="1"><p>Hide .markdown-body class</p></td></tr><tr><td colspan="1" rowspan="1"><p>xss</p></td><td colspan="1" rowspan="1"><p>boolean</p></td><td colspan="1" rowspan="1"><p>true</p></td><td colspan="1" rowspan="1"><p>Enable xss filter</p></td></tr><tr><td colspan="1" rowspan="1"><p>xssOptions</p></td><td colspan="1" rowspan="1"><p>xss.IWhiteList</p></td><td colspan="1" rowspan="1"><p>Default rule</p></td><td colspan="1" rowspan="1"><p>Xss filter rule config</p></td></tr></tbody></table><h4 style="text-align: start">Slots</h4><table class="table-wrapper"><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Description</p></th></tr><tr><td colspan="1" rowspan="1"><p>before</p></td><td colspan="1" rowspan="1"><p>Add content at the before</p></td></tr><tr><td colspan="1" rowspan="1"><p>after</p></td><td colspan="1" rowspan="1"><p>Add content at the after</p></td></tr></tbody></table>`

export default html
