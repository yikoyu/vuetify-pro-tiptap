# Vuetify Pro Tiptap

A WYSIWYG rich-text editor using [tiptap](https://github.com/scrumpy/tiptap) and [vuetify](https://github.com/vuetifyjs/vuetify) for Vue.js

[![download](https://img.shields.io/npm/dm/vuetify-pro-tiptap.svg)](https://npmcharts.com/compare/vuetify-pro-tiptap?minimal=true)
[![version](https://img.shields.io/npm/v/vuetify-pro-tiptap.svg)](https://www.npmjs.org/package/vuetify-pro-tiptap)
[![gzip](https://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.mjs?compression=gzip&label=gzip)](https://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.mjs?compression=gzip&label=gzip)
[![Test](https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/test.yml)
![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg)
[![semantic-release: vue](https://img.shields.io/badge/semantic--release-vue-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

English | [中文](./README.zh-CN.md)

## Demo
👉[https://yikoyu.github.io/vuetify-pro-tiptap/](https://yikoyu.github.io/vuetify-pro-tiptap/)

## Features
- Use [vuetify](https://github.com/vuetifyjs/vuetify) components
- Markdown support
- TypeScript support
- I18n support(`en`, `zhHans`)
- Vuetify 3.x and Vue 3.x support

## Vuetify 2.x
For Vuetify 2.x please use the latest version of [vuetify-pro-tiptap@1.X.X](https://github.com/yikoyu/vuetify-pro-tiptap/tree/1.x)

## Installation
### NPM
```shell
pnpm add vuetify-pro-tiptap
# or
yarn add vuetify-pro-tiptap
# or
npm i vuetify-pro-tiptap -S
```

### Install plugin

<details>
<summary>tiptap.ts</summary>

```TypeScript
import { markRaw } from 'vue'
import { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import { BaseKit, Bold, Italic, Underline, Strike, Color, Highlight, Heading, TextAlign, Bulletlist, Orderedlist, Tasklist, Indent, Link, Image, Video, Table, Blockquote, HorizontalRule, Code, Codeblock, Clear, Fullscreen, History } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'
import SelectImage from './components/SelectImage.vue'

export const vuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans',
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  extensions: [
    BaseKit.configure({
      placeholder: {
        placeholder: 'Enter some text...'
      }
    }),
    Bold,
    Italic,
    Underline,
    Strike,
    Code.configure({ divider: true }),
    Heading,
    TextAlign,
    Color,
    Highlight,
    Clear.configure({ divider: true }),
    Bulletlist,
    Orderedlist,
    Tasklist,
    Indent.configure({ divider: true }),
    Link,
    Image.configure({
      imageTabs: [{ name: 'SELECT', component: markRaw(SelectImage) }],
      hiddenTabs: ['upload'],
      upload(file) {
        return Promise.resolve(/** Post upload URL */)
      }
    }),
    Video,
    Table.configure({ divider: true }),
    Blockquote,
    HorizontalRule,
    Codeblock.configure({ divider: true }),
    History.configure({ divider: true }),
    Fullscreen
  ]
})
```

</details>

<details>
<summary>main.ts</summary>

```typescript
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import App from './App.vue'

import { vuetifyProTipTap } from './tiptap'

const vuetify = createVuetify()

const app = createApp(App)
app.use(vuetify)
app.use(vuetifyProTipTap)

// fix warning injected property "decorationClasses" is a ref and will be auto-unwrapped
// https://github.com/ueberdosis/tiptap/issues/1719
app.config.unwrapInjectedRef = true

app.mount('#app')
```

</details>

## Global Settings
```TypeScript
import { markRaw } from 'vue'
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
        defaultBubbleList: editor => {
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
        console.log('mock upload api :>> ', url)
        return Promise.resolve(url)
      }
    }),
    Fullscreen.configure({
      // Generate a VSpacer after the button
      spacer: true
    })
  ]
})
```

## Custom extensions

<details>
<summary>PreviewActionButton.vue</summary>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { mdiFileCodeOutline, mdiClose } from '@mdi/js'
import type { Editor } from '@tiptap/vue-3'
import { ActionButton } from 'vuetify-pro-tiptap'

interface Props {
  editor: Editor
  tooltip?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tooltip: undefined,
  disabled: false
})

const dialog = ref(false)
const maxWidth = ref<number>(900)
</script>

<template>
  <ActionButton tooltip="全屏" :disabled="disabled">
    <VIcon>{{ `svg:${mdiFileCodeOutline}` }}</VIcon>
    <VDialog v-model="dialog" fullscreen hide-overlay activator="parent">
      <VCard>
        <VToolbar dark color="primary">
          <VBtn icon dark @click="dialog = false">
            <v-icon>{{ `svg:${mdiClose}` }}</v-icon>
          </VBtn>
        </VToolbar>

        <VContainer>
          <VSheet class="mx-auto" :max-width="maxWidth">
            <VuetifyViewer :value="editor.getHTML()" />
          </VSheet>
        </VContainer>
      </VCard>
    </VDialog>
  </ActionButton>
</template>
```

</details>

<details>
<summary>preview.ts</summary>

```typescript
import { Extension } from '@tiptap/core'

import PreviewActionButton from '../components/PreviewActionButton.vue'
import type { ButtonView, GeneralOptions } from 'vuetify-pro-tiptap'

export interface PreviewOptions extends GeneralOptions {
  button: ButtonView
}

export default Extension.create<PreviewOptions>({
  name: 'preview',
  addOptions() {
    return {
      divider: false,
      spacer: false,
      button: () => ({
        component: PreviewActionButton,
        componentProps: {}
      })
    }
  }
})
```

</details>

## I18n

### Setting language
You can declare when you install the plugin.
```TypeScript
import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'

const VuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans'
})
```
Or use `setLang` dynamic change
```TypeScript
import { locale } from 'vuetify-pro-tiptap'

locale.setLang('en')
```
Available languages:
- en (default)
- zhHans

### Use unavailable language
Loading unavailable language, use `setMessage` for Settings
```TypeScript
import { locale } from 'vuetify-pro-tiptap'

locale.setMessage('zhHant', {
  // i18n text
})
locale.setLang('zhHant')
```

## Usage
```vue
<script setup lang="ts">
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
</script>

<template>
  <v-app id="app">
    <v-container>
      <VuetifyTiptap v-model="content" label="Title" rounded :min-height="200" :max-height="465" :max-width="900" :extensions="extensions" />
      <VuetifyViewer :value="content" />
    </v-container>
  </v-app>
</template>
```

## Props

### VuetifyTiptap

#### Props
| Name | Type | Default | Description |
| ---- | ---- | ---- | ---- |
| modelValue | string | '' | The input’s value |
| dark | boolean | false | Applies the dark theme variant to the component. |
| dense | boolean | false | Reduces the input height |
| outlined | boolean | true | Applies the outlined style to the input |
| flat | boolean | true | Removes the card’s elevation |
| disabled | boolean | false | Disable the input |
| label | string | undefined | Sets input label |
| hideToolbar | boolean | false | Hidden the toolbar |
| disableToolbar | boolean | false | Disable the toolbar |
| maxWidth | string \| boolean | undefined | Sets the maximum width for the component. |
| minHeight | string \| boolean | undefined | Sets the minimum height for the component. |
| maxHeight | string \| boolean | undefined | Sets the maximum height for the component. |
| extensions | AnyExtension[] | [] | Tiptap the extensions |
| editorClass | string \| string[] \| Record\<string, any> | undefined | Editor class |

#### Slots
| Name | Description |
| ---- | ---- |
| editor | Slot to customize editor |
| bottom | Slot to customize editor bottom |

### VuetifyViewer

#### Props
| Name | Type | Default | Description |
| ---- | ---- | ---- | ---- |
| value | value | '' | The preview’s value |
| dark | boolean | false | Applies the dark theme variant to the component. |
| dense | boolean | false | Reduces the input height |
| hideMarkdownStyle | boolean | false | Hide .markdown-body class |
| xss | boolean | true | Enable xss filter |
| xssOptions | xss.IWhiteList | Default rule | Xss filter rule config |

#### Slots
| Name | Description |
| ---- | ---- |
| before | Add content at the before |
| after | Add content at the after |