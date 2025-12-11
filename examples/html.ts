export const htmlValue = `<h1 style="text-align: start">Vuetify Pro Tiptap</h1><p style="text-align: start">A WYSIWYG rich-text editor using <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/scrumpy/tiptap">tiptap</a> and <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vuetifyjs/vuetify">vuetify</a> for Vue.js</p><hr><h2 style="text-align: start">Demo</h2><p style="text-align: start">👉<a target="_blank" rel="noopener noreferrer nofollow" href="https://yikoyu.github.io/vuetify-pro-tiptap/">https://yikoyu.github.io/vuetify-pro-tiptap/</a></p><h2 style="text-align: start">Features</h2><ul><li><p>Use <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vuetifyjs/vuetify">vuetify</a> components</p></li><li><p>Markdown support</p></li><li><p>TypeScript support</p></li><li><p>I18n support(<code>en</code>, <code>zhHans</code>)</p></li><li><p>Vuetify 3.x and Vue 3.x support</p></li></ul><h2 style="text-align: start">Vuetify 2.x</h2><p style="text-align: start">For Vuetify 2.x please use the latest version of <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/yikoyu/vuetify-pro-tiptap/tree/1.x">vuetify-pro-tiptap@1.X.X</a></p><h2 style="text-align: start">Installation</h2><h3 style="text-align: start">NPM</h3><pre><code>pnpm add vuetify-pro-tiptap
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

export const jsonValue = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { textAlign: 'start', level: 1 },
      content: [{ type: 'text', text: 'Vuetify Pro Tiptap' }],
    },
    {
      type: 'paragraph',
      attrs: { textAlign: 'start' },
      content: [
        { type: 'text', text: 'A WYSIWYG rich-text editor using ' },
        {
          type: 'text',
          marks: [
            { type: 'link', attrs: { href: 'https://github.com/scrumpy/tiptap', target: '_blank', class: null } },
          ],
          text: 'tiptap',
        },
        { type: 'text', text: ' and ' },
        {
          type: 'text',
          marks: [
            { type: 'link', attrs: { href: 'https://github.com/vuetifyjs/vuetify', target: '_blank', class: null } },
          ],
          text: 'vuetify',
        },
        { type: 'text', text: ' for Vue.js' },
        {
          type: 'image',
          attrs: {
            textAlign: 'left',
            src: 'https://picsum.photos/1920/1080.webp?t=1',
            alt: 'Test 1',
            title: null,
            lockAspectRatio: true,
            width: 200,
            height: null,
            display: 'right',
          },
        },
      ],
    },
    { type: 'paragraph', attrs: { textAlign: 'start' } },
    { type: 'paragraph', attrs: { textAlign: 'start' } },
    { type: 'horizontalRule' },
    { type: 'heading', attrs: { textAlign: 'start', level: 2 }, content: [{ type: 'text', text: 'Demo' }] },
    {
      type: 'paragraph',
      attrs: { textAlign: 'start' },
      content: [
        { type: 'text', text: '👉' },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: { href: 'https://yikoyu.github.io/vuetify-pro-tiptap/', target: '_blank', class: null },
            },
          ],
          text: 'https://yikoyu.github.io/vuetify-pro-tiptap/',
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 2 }, content: [{ type: 'text', text: 'Features' }] },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: { textAlign: 'left' },
              content: [
                { type: 'text', text: 'Use ' },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'link',
                      attrs: { href: 'https://github.com/vuetifyjs/vuetify', target: '_blank', class: null },
                    },
                  ],
                  text: 'vuetify',
                },
                { type: 'text', text: ' components' },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Markdown support' }] },
          ],
        },
        {
          type: 'listItem',
          content: [
            { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'TypeScript support' }] },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: { textAlign: 'left' },
              content: [
                { type: 'text', text: 'I18n support(' },
                { type: 'text', marks: [{ type: 'code' }], text: 'en' },
                { type: 'text', text: ', ' },
                { type: 'text', marks: [{ type: 'code' }], text: 'zhHans' },
                { type: 'text', text: ')' },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: { textAlign: 'left' },
              content: [{ type: 'text', text: 'Vuetify 3.x and Vue 3.x support' }],
            },
          ],
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 2 }, content: [{ type: 'text', text: 'Vuetify 2.x' }] },
    {
      type: 'paragraph',
      attrs: { textAlign: 'start' },
      content: [
        { type: 'text', text: 'For Vuetify 2.x please use the latest version of ' },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: { href: 'https://github.com/yikoyu/vuetify-pro-tiptap/tree/1.x', target: '_blank', class: null },
            },
          ],
          text: 'vuetify-pro-tiptap@1.X.X',
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 2 }, content: [{ type: 'text', text: 'Installation' }] },
    { type: 'heading', attrs: { textAlign: 'start', level: 3 }, content: [{ type: 'text', text: 'NPM' }] },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'pnpm add vuetify-pro-tiptap\n# or\nyarn add vuetify-pro-tiptap\n# or\nnpm i vuetify-pro-tiptap -S',
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 3 }, content: [{ type: 'text', text: 'Install plugin' }] },
    { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'tiptap.tsmain.ts' }] },
    { type: 'heading', attrs: { textAlign: 'start', level: 2 }, content: [{ type: 'text', text: 'Global Settings' }] },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'import { markRaw } from \'vue\'\nimport { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap, defaultBubbleList } from \'vuetify-pro-tiptap\'\nimport { BaseKit, Image, Fullscreen } from \'vuetify-pro-tiptap\'\nimport \'vuetify-pro-tiptap/style.css\'\nimport SelectImage from \'./components/SelectImage.vue\'\n\nexport const vuetifyProTipTap = createVuetifyProTipTap({\n  // Set default lang\n  lang: \'zhHans\',\n  // Global registration app.component\n  components: {\n    VuetifyTiptap,\n    VuetifyViewer\n  },\n  // Global registration extensions\n  extensions: [\n    BaseKit.configure({\n      placeholder: {\n        placeholder: \'Enter some text...\'\n      },\n      bubble: {\n        // default config\n        list: {\n          image: [ \'float-left\', \'float-none\', \'float-right\', \'divider\', \'size-small\', \'size-medium\', \'size-large\', \'divider\', \'textAlign\', \'divider\', \'image\', \'image-aspect-ratio\', \'remove\'],\n          text: [\'bold\', \'italic\', \'underline\', \'strike\', \'divider\', \'color\', \'highlight\', \'textAlign\', \'divider\', \'link\'],\n          video: [\'video\', \'remove\']\n        },\n        defaultBubbleList: editor => {\n          // You can customize the bubble menu here\n          return defaultBubbleList(editor) // default customize bubble list\n        }\n      }\n    }),\n    Image.configure({\n      // Generate a VDivider after the button\n      divider: true,\n      // Custom image tabs\n      imageTabs: [{ name: \'SELECT\', component: markRaw(SelectImage) }],\n      // hidden default tab\n      hiddenTabs: [\'upload\'],\n      // custom upload function\n      upload(file) {\n        const url = URL.createObjectURL(file)\n        console.log(\'mock upload api :>> \', url)\n        return Promise.resolve(url)\n      }\n    }),\n    Fullscreen.configure({\n      // Generate a VSpacer after the button\n      spacer: true\n    })\n  ]\n})',
        },
      ],
    },
    {
      type: 'heading',
      attrs: { textAlign: 'start', level: 2 },
      content: [{ type: 'text', text: 'Custom extensions' }],
    },
    {
      type: 'paragraph',
      attrs: { textAlign: 'left' },
      content: [{ type: 'text', text: 'PreviewActionButton.vuepreview.ts' }],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 2 }, content: [{ type: 'text', text: 'I18n' }] },
    { type: 'heading', attrs: { textAlign: 'start', level: 3 }, content: [{ type: 'text', text: 'Setting language' }] },
    {
      type: 'paragraph',
      attrs: { textAlign: 'start' },
      content: [{ type: 'text', text: 'You can declare when you install the plugin.' }],
    },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'import { createVuetifyProTipTap } from \'vuetify-pro-tiptap\'\n\nconst VuetifyProTipTap = createVuetifyProTipTap({\n  lang: \'zhHans\'\n})',
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: { textAlign: 'start' },
      content: [
        { type: 'text', text: 'Or use ' },
        { type: 'text', marks: [{ type: 'code' }], text: 'setLang' },
        { type: 'text', text: ' dynamic change' },
      ],
    },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [{ type: 'text', text: 'import { locale } from \'vuetify-pro-tiptap\'\n\nlocale.setLang(\'en\')' }],
    },
    { type: 'paragraph', attrs: { textAlign: 'start' }, content: [{ type: 'text', text: 'Available languages:' }] },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'en (default)' }] },
          ],
        },
        {
          type: 'listItem',
          content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'zhHans' }] }],
        },
      ],
    },
    {
      type: 'heading',
      attrs: { textAlign: 'start', level: 3 },
      content: [{ type: 'text', text: 'Use unavailable language' }],
    },
    {
      type: 'paragraph',
      attrs: { textAlign: 'start' },
      content: [
        { type: 'text', text: 'Loading unavailable language, use ' },
        { type: 'text', marks: [{ type: 'code' }], text: 'setMessage' },
        { type: 'text', text: ' for Settings' },
      ],
    },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'import { locale } from \'vuetify-pro-tiptap\'\n\nlocale.setMessage(\'zhHant\', {\n  // i18n text\n})\nlocale.setLang(\'zhHant\')',
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 2 }, content: [{ type: 'text', text: 'Usage' }] },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: '<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { VuetifyTiptap, VuetifyViewer } from \'vuetify-pro-tiptap\'\nimport \'vuetify-pro-tiptap/style.css\'\nimport { BaseKit, Bold, Italic, Underline, Strike, Color, Highlight, Heading, Link, Image, Video, Table, Fullscreen, History } from \'vuetify-pro-tiptap\'\n\nconst extensions = [\n  BaseKit.configure({\n    placeholder: {\n      placeholder: \'Enter some text...\'\n    }\n  }),\n  Bold,\n  Italic,\n  Underline,\n  Strike,\n  Color,\n  Highlight,\n  Heading,\n  Link,\n  Image,\n  Video,\n  Table,\n  Fullscreen,\n  History\n]\n\nconst content = ref(\'\')\n</script>\n\n<template>\n  <v-app id="app">\n    <v-container>\n      <VuetifyTiptap v-model="content" label="Title" rounded :min-height="200" :max-height="465" :max-width="900" :extensions="extensions" />\n      <VuetifyViewer :value="content" />\n    </v-container>\n  </v-app>\n</template>',
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 2 }, content: [{ type: 'text', text: 'Props' }] },
    { type: 'heading', attrs: { textAlign: 'start', level: 3 }, content: [{ type: 'text', text: 'VuetifyTiptap' }] },
    { type: 'heading', attrs: { textAlign: 'start', level: 4 }, content: [{ type: 'text', text: 'Props' }] },
    {
      type: 'table',
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Name' }] }],
            },
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Type' }] }],
            },
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Default' }] },
              ],
            },
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Description' }] },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'modelValue' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'string' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: '\'\'' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'The input’s value' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'dark' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'false' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Applies the dark theme variant to the component.' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'dense' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'false' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Reduces the input height' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'outlined' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'true' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Applies the outlined style to the input' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'flat' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'true' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Removes the card’s elevation' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'disabled' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'false' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Disable the input' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'label' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'string' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'undefined' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Sets input label' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'hideToolbar' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'false' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Hidden the toolbar' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'disableToolbar' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'false' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Disable the toolbar' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'maxWidth' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'string | boolean' }],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'undefined' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Sets the maximum width for the component.' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'minHeight' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'string | boolean' }],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'undefined' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Sets the minimum height for the component.' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'maxHeight' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'string | boolean' }],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'undefined' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Sets the maximum height for the component.' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'extensions' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'AnyExtension[]' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: '[]' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Tiptap the extensions' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'editorClass' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'string | string[] | Record<string, any>' }],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'undefined' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Editor class' }] },
              ],
            },
          ],
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 4 }, content: [{ type: 'text', text: 'Slots' }] },
    {
      type: 'table',
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Name' }] }],
            },
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Description' }] },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'editor' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Slot to customize editor' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'bottom' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Slot to customize editor bottom' }],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 3 }, content: [{ type: 'text', text: 'VuetifyViewer' }] },
    { type: 'heading', attrs: { textAlign: 'start', level: 4 }, content: [{ type: 'text', text: 'Props' }] },
    {
      type: 'table',
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Name' }] }],
            },
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Type' }] }],
            },
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Default' }] },
              ],
            },
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Description' }] },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'value' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'value' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: '\'\'' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'The preview’s value' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'dark' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'false' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Applies the dark theme variant to the component.' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'dense' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'false' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Reduces the input height' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'hideMarkdownStyle' }],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'false' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Hide .markdown-body class' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'xss' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'boolean' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'true' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Enable xss filter' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'xssOptions' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'xss.IWhiteList' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Default rule' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Xss filter rule config' }],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: 'heading', attrs: { textAlign: 'start', level: 4 }, content: [{ type: 'text', text: 'Slots' }] },
    {
      type: 'table',
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Name' }] }],
            },
            {
              type: 'tableHeader',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Description' }] },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'before' }] },
              ],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Add content at the before' }],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'after' }] }],
            },
            {
              type: 'tableCell',
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: 'paragraph',
                  attrs: { textAlign: 'left' },
                  content: [{ type: 'text', text: 'Add content at the after' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
