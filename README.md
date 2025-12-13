# Vuetify Pro Tiptap

A WYSIWYG rich-text editor using [tiptap](https://github.com/scrumpy/tiptap) and [vuetify](https://github.com/vuetifyjs/vuetify) for Vue.js

[![download](https://img.shields.io/npm/dm/vuetify-pro-tiptap.svg)](https://npmcharts.com/compare/vuetify-pro-tiptap?minimal=true)
[![version](https://img.shields.io/npm/v/vuetify-pro-tiptap.svg)](https://www.npmjs.org/package/vuetify-pro-tiptap)
[![gzip](https://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.js?compression=gzip&label=gzip)](https://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.js?compression=gzip&label=gzip)
[![Test](https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/test.yml)
![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg)
[![semantic-release: vue](https://img.shields.io/badge/semantic--release-vue-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![pkg.pr.new](https://pkg.pr.new/badge/yikoyu/vuetify-pro-tiptap)](https://pkg.pr.new/~/yikoyu/vuetify-pro-tiptap)

English | [中文](./README.zh-CN.md)

## Demo
👉[https://yikoyu.github.io/vuetify-pro-tiptap/master/](https://yikoyu.github.io/vuetify-pro-tiptap/master/)

👉[https://yikoyu.github.io/vuetify-pro-tiptap/develop/](https://yikoyu.github.io/vuetify-pro-tiptap/develop/)

👾[Stackblitz](https://stackblitz.com/~/github.com/yikoyu/vuetify-pro-tiptap-demo/tree/main)

👾[Nuxt3 Stackblitz](https://stackblitz.com/~/github.com/yikoyu/vuetify-pro-tiptap-demo/tree/nuxt)

## Features
- Use [vuetify](https://github.com/vuetifyjs/vuetify) components
- Many out of box [extension](#extensions) (welcome to submit an issue for feature request)
- Markdown support
- TypeScript support
- I18n support(`en`, `zhHans`, `nl`, `tr`, `de`, `fr`, `it`, `pt`, `hu`)
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
import { BaseKit, Bold, Italic, Underline, Strike, Color, Highlight, Heading, TextAlign, FontFamily, FontSize, SubAndSuperScript, BulletList, OrderedList, TaskList, Indent, Link, Image, Video, Table, Blockquote, HorizontalRule, Code, CodeBlock, Clear, Fullscreen, History } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'
import SelectImage from './components/SelectImage.vue'

export const vuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans',
  fallbackLang: 'en',
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
    FontFamily,
    FontSize,
    Color,
    Highlight.configure({ divider: true }),
    SubAndSuperScript.configure({ divider: true }),
    Clear.configure({ divider: true }),
    BulletList,
    OrderedList,
    TaskList,
    Indent.configure({ divider: true }),
    Link,
    Image.configure({
      imageTabs: [{ name: 'SELECT', component: markRaw(SelectImage) }],
      // hiddenTabs: ['upload'],
      upload(file: File) {
        const url = URL.createObjectURL(file)
        console.log('mock upload api :>> ', url)
        return Promise.resolve(url)
      }
    }),
    Video,
    Table.configure({ divider: true }),
    Blockquote,
    HorizontalRule,
    CodeBlock.configure({ divider: true }),
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
  // Set default fallback lang
  fallbackLang: 'en',
  // Set markdown theme
  markdownTheme: 'github',
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

## <span id="extensions">Extensions</span>

You can use the necessary extensions. The corresponding command-buttons will be added by declaring the order of the extension.

All available extensions：

- [`BaseKit`](./src/extensions/base-kit.ts)
- [`Bold`](./src/extensions/bold.ts)
- [`Italic`](./src/extensions/italic.ts)
- [`Underline`](./src/extensions/underline.ts)
- [`Strike`](./src/extensions/strike.ts)
- [`Color`](./src/extensions/color.ts)
- [`Highlight`](./src/extensions/highlight.ts)
- [`Heading`](./src/extensions/heading.ts)
- [`TextAlign`](./src/extensions/text-align.ts)
- [`FontFamily`](./src/extensions/font-family.ts)
- [`FontSize`](./src/extensions/font-size.ts)
- [`SubAndSuperScript`](./src/extensions/subscript.ts)
- [`BulletList`](./src/extensions/bullet-list.ts)
- [`OrderedList`](./src/extensions/ordered-list.ts)
- [`TaskList`](./src/extensions/task-list.ts)
- [`Indent`](./src/extensions/indent.ts)
- [`Link`](./src/extensions/link.ts)
- [`MarkdownTheme`](./src/extensions/markdown-theme.ts)
- [`Image`](./src/extensions/image.ts)
- [`Video`](./src/extensions/video.ts)
- [`Table`](./src/extensions/table.ts)
- [`Blockquote`](./src/extensions/blockquote.ts)
- [`HorizontalRule`](./src/extensions/horizontal-rule.ts)
- [`Code`](./src/extensions/code.ts)
- [`CodeBlock`](./src/extensions/code-block.ts)
- [`Clear`](./src/extensions/clear.ts)
- [`Fullscreen`](./src/extensions/fullscreen.ts)
- [`History`](./src/extensions/history.ts)

## Custom theme

Create github.scss

```scss
$value: 'github';

.vuetify-pro-tiptap-editor__content.markdown-theme-#{$value} {
  &.__dark {
    // your dark mode custom styles
  }

  .tiptap.ProseMirror,
  .content {
    // your custom styles
  }
}
```

Import github.scss in ts

```typescript
// import 'vuetify-pro-tiptap/style.css' // import all(editor and markdown) styles
import 'vuetify-pro-tiptap/styles/editor.css' // only use editor style, not using markdown style
import './styles/markdown/github.scss'
```

In the component using

```vue
<template>
  <VuetifyTiptap v-model="content" markdown-theme="github" />
  <VuetifyViewer :value="content" markdown-theme="github" />
</template>
```

## Custom extensions

<details>
<summary>PreviewActionButton.vue</summary>

```vue
<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import { mdiClose, mdiFileCodeOutline } from '@mdi/js'
import { ref } from 'vue'
import { ActionButton } from 'vuetify-pro-tiptap'

const props = withDefaults(defineProps<{
  editor: Editor
  tooltip?: string
  disabled?: boolean
}>(), {
  tooltip: undefined,
  disabled: false
})

const dialog = ref(false)
const maxWidth = ref<number>(900)
</script>

<template>
  <ActionButton :editor="editor" tooltip="全屏" :disabled="disabled">
    <VIcon>{{ `svg:${mdiFileCodeOutline}` }}</VIcon>
    <VDialog v-model="dialog" fullscreen hide-overlay activator="parent">
      <VCard>
        <VToolbar dark color="primary">
          <VBtn icon dark @click="dialog = false">
            <VIcon>{{ `svg:${mdiClose}` }}</VIcon>
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
import type { GeneralOptions } from 'vuetify-pro-tiptap'
import { Extension } from '@tiptap/core'

import PreviewActionButton from '../components/PreviewActionButton.vue'

export type PreviewOptions = GeneralOptions<PreviewOptions>

export default Extension.create<PreviewOptions>({
  name: 'preview',
  addOptions() {
    return {
      divider: false,
      spacer: false,
      button: ({ editor }) => ({
        component: PreviewActionButton,
        componentProps: {
          editor,
        },
      }),
    }
  },
})
```

</details>

## I18n

### Setting language
You can declare when you install the plugin.
```TypeScript
import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'

const VuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans',
  fallbackLang: 'en'
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
- nl
- tr
- de
- fr
- it
- pt
- hu

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
import { BaseKit, Bold, Color, Fullscreen, Heading, Highlight, History, Image, Italic, Link, Strike, Table, Underline, Video, VuetifyTiptap, VuetifyViewer } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'

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
  <VApp id="app">
    <VContainer>
      <VuetifyTiptap v-model="content" label="Title" rounded :min-height="200" :max-height="465" :max-width="900" :extensions="extensions" />
      <VuetifyViewer :value="content" />
    </VContainer>
  </VApp>
</template>
```

## Props

### VuetifyTiptap

#### Props
| Name | Type | Default | Description |
| ---- | ---- | ---- | ---- |
| modelValue | string \| JSONContent | '' | The input’s value |
| markdownTheme | string \| false | 'default' | Markdown theme |
| output | 'html' \| 'json' \| 'text' | 'html' | Output format |
| dark | boolean | false | Applies the dark theme variant to the component. |
| dense | boolean | false | Reduces the input height |
| outlined | boolean | true | Applies the outlined style to the input |
| flat | boolean | true | Removes the card’s elevation |
| disabled | boolean | false | Disable the input |
| label | string | undefined | Sets input label |
| hideToolbar | boolean | false | Hidden the toolbar |
| disableToolbar | boolean | false | Disable the toolbar |
| hideBubble | boolean | false | Hidden the bubble menu |
| removeDefaultWrapper | boolean | false | Default wrapper when the delete editor is empty |
| maxWidth | string \| number | undefined | Sets the maximum width for the component. |
| minHeight | string \| number | undefined | Sets the minimum height for the component. |
| maxHeight | string \| number | undefined | Sets the maximum height for the component. |
| extensions | AnyExtension[] | [] | Tiptap the extensions |
| editorClass | string \| string[] \| Record\<string, any> | undefined | Editor class |

#### Slots
| Name | Description |
| ---- | ---- |
| editor | Slot to customize editor |
| bottom | Slot to customize editor bottom |

#### Event
| Name | Type | Description |
| ---- | ---- | ---- |
| update:modelValue | string \| JSONContent | Emitted when editor onUpdate |
| update:markdownTheme | string | Emitted when change theme |
| change | { editor: Editor, output: string \| JSONContent } | Emitted when editor onUpdate |
| enter | | Keyboard enter return |

### VuetifyViewer

#### Props
| Name | Type | Default | Description |
| ---- | ---- | ---- | ---- |
| value | string \| JSONContent | '' | The preview’s value |
| dark | boolean | false | Applies the dark theme variant to the component. |
| dense | boolean | false | Reduces the input height |
| markdownTheme | string \| false | 'default' | Markdown theme |
| xss | boolean | true | Enable xss filter |
| xssOptions | xss.IWhiteList | Default rule | Xss filter rule config |
| maxWidth | string \| number | undefined | Sets the maximum width for the component. |
| extensions | AnyExtension[] | [] | Tiptap the extensions |

#### Slots
| Name | Description |
| ---- | ---- |
| before | Add content at the before |
| after | Add content at the after |

## 🏗 Contributing

1. 🍴Fork it
2. 🔀Create your branch: `git checkout -b your-branch`
3. 🎨Make your changes
4. 📝Commit your changes with [Semantic Commit Messages (recommended)](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
5. 🚀Push to the branch: `git push origin your-branch`
6. 🎉Submit a PR to `develop` branch

## 📄 License

[MIT](./LICENSE)

## Thanks

- [vuetify](https://github.com/vuetifyjs/vuetify)
- [tiptap](https://github.com/scrumpy/tiptap)
- [element-tiptap](https://github.com/Leecason/element-tiptap)
