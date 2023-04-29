# Vuetify Pro Tiptap

一个 Vue.js 的基于 [tiptap](https://github.com/scrumpy/tiptap) 和 [vuetify](https://github.com/vuetifyjs/vuetify) 的 「所见即所得」 富文本编辑器

[![download](https://img.shields.io/npm/dm/vuetify-pro-tiptap.svg)](https://npmcharts.com/compare/vuetify-pro-tiptap?minimal=true)
[![version](https://img.shields.io/npm/v/vuetify-pro-tiptap.svg)](https://www.npmjs.org/package/vuetify-pro-tiptap)
[![gzip](https://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.mjs?compression=gzip&label=gzip)](https://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.mjs?compression=gzip&label=gzip)
[![Test](https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/test.yml)
![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg)
[![semantic-release: vue](https://img.shields.io/badge/semantic--release-vue-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

[English](./README.md) | 中文

## Demo
👉[https://yikoyu.github.io/vuetify-pro-tiptap/](https://yikoyu.github.io/vuetify-pro-tiptap/)

## 特色
- 使用 [vuetify](https://github.com/vuetifyjs/vuetify) 组件
- 支持 markdown 语法
- TypeScript 支持
- 支持 i18n
- Vuetify 3.x 和 Vue 3.x 支持

## Vuetify 2.x
Vuetify 2.x 请使用最新版本的 [vuetify-pro-tiptap@1.X.X](https://github.com/yikoyu/vuetify-pro-tiptap/tree/1.x)

## 安装
### NPM安装
```shell
pnpm add vuetify-pro-tiptap
# 或者
yarn add vuetify-pro-tiptap
# 或者
npm i vuetify-pro-tiptap -S
```

### 安装插件

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

## 全局设置
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

## 自定义 extension

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

## 国际化

### 设置语言
你可以在安装插件的时候声明
```TypeScript
import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'

const VuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans'
})
```
或者调用方法动态修改
```TypeScript
import { locale } from 'vuetify-pro-tiptap'

locale.setLang('en')
```
可用的语言:
- en (默认)
- zhHans

### 加载新语言
当前语言暂未提供时，可以使用 `setMessage` 进行设置
```TypeScript
import { locale } from 'vuetify-pro-tiptap'

locale.setMessage('zhHant', {
  // 国际化文本
})
locale.setLang('zhHant')
```

## 用法
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
| 名称 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| modelValue | string | '' | 输入的值 |
| dark | boolean | false | 是否为深色主题 |
| dense | boolean | false | 是否为紧凑模式 |
| outlined | boolean | true | 将轮廓样式应用于输入 |
| flat | boolean | true | 移除卡片的 elevation |
| disabled | boolean | false | 禁用输入 |
| label | string | undefined | 设置输入标签 |
| hideToolbar | boolean | false | 隐藏工具栏 |
| disableToolbar | boolean | false | 禁用工具栏 |
| maxWidth | string \| number | undefined | 输入框最大宽度 |
| minHeight | string \| number | undefined | 输入框最小高度 |
| maxHeight | string \| number | undefined | 输入框最大高度 |
| extensions | AnyExtension[] | [] | tiptap插件 |
| editorClass | string \| string[] \| Record\<string, any> | undefined | 编辑器class |

#### Slots
| Name | Description |
| ---- | ---- |
| editor | 自定义编辑器的插槽 |
| bottom | 自定义编辑器底部的插槽 |

### VuetifyViewer

#### Props
| 名称 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| value | value | '' | 预览的值 |
| dark | boolean | false | 是否为深色主题 |
| dense | boolean | false | 是否为紧凑模式 |
| hideMarkdownStyle | boolean | false | 隐藏.markdown-body类 |
| xss | boolean | true | 是否开启xss过滤 |
| xssOptions | xss.IWhiteList | 内置默认规则 | xss过滤规则配置 |
| maxWidth | string \| number | undefined | 预览最大宽度 |

#### Slots
| Name | Description |
| ---- | ---- |
| before | 在顶部添加内容 |
| after | 在底部添加内容 |