# Vuetify Pro Tiptap

一个 Vue.js 的基于 [tiptap](https://github.com/scrumpy/tiptap) 和 [vuetify](https://github.com/vuetifyjs/vuetify) 的 「所见即所得」 富文本编辑器

[![download](https://img.shields.io/npm/dm/vuetify-pro-tiptap.svg)](https://npmcharts.com/compare/vuetify-pro-tiptap?minimal=true)
[![version](https://img.shields.io/npm/v/vuetify-pro-tiptap.svg)](https://www.npmjs.org/package/vuetify-pro-tiptap)
[![gzip](https://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.js?compression=gzip&label=gzip)](https://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.js?compression=gzip&label=gzip)
[![Test](https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/test.yml)
![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg)
[![semantic-release: vue](https://img.shields.io/badge/semantic--release-vue-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![pkg.pr.new](https://pkg.pr.new/badge/yikoyu/vuetify-pro-tiptap)](https://pkg.pr.new/~/yikoyu/vuetify-pro-tiptap)

[English](./README.md) | 中文

## Demo
👉[https://yikoyu.github.io/vuetify-pro-tiptap/master/](https://yikoyu.github.io/vuetify-pro-tiptap/master/)

👉[https://yikoyu.github.io/vuetify-pro-tiptap/develop/](https://yikoyu.github.io/vuetify-pro-tiptap/develop/)

👾[Stackblitz](https://stackblitz.com/~/github.com/yikoyu/vuetify-pro-tiptap-demo/tree/main)

👾[Nuxt3 Stackblitz](https://stackblitz.com/~/github.com/yikoyu/vuetify-pro-tiptap-demo/tree/nuxt)

## 特色
- 使用 [vuetify](https://github.com/vuetifyjs/vuetify) 组件
- 许多开箱即用的 [extension](#extensions) (欢迎提交 issue 为新的 feature 留下建议)
- 支持 markdown 语法
- TypeScript 支持
- 支持 i18n (`en`, `zhHans`, `nl`, `tr`, `de`, `fr`, `it`, `pt`, `hu`)
- Vuetify 4.x 和 Vue 3.x 支持

## Vuetify 2.x
Vuetify 2.x 请使用最新版本的 [vuetify-pro-tiptap@1.X.X](https://github.com/yikoyu/vuetify-pro-tiptap/tree/1.x)

## Vuetify 3.x
Vuetify 3.x 请使用最新版本的 [vuetify-pro-tiptap@2.X.X](https://github.com/yikoyu/vuetify-pro-tiptap/tree/2.x)

当前版本 (`>=3.0.0`) 需要 Vuetify 4.x 和 Vue 3.x。

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

你可以只使用需要的 extension，对应的菜单按钮将会按照你声明的顺序被添加。

所有可用的 extensions：

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

## 自定义主题

创建 github.scss

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

在 ts 中导入 github.scss

```typescript
// import 'vuetify-pro-tiptap/style.css' // 导入全部（editor 和 markdown）样式
import 'vuetify-pro-tiptap/styles/editor.css' // 只使用 editor 样式，不使用 markdown 样式
import './styles/markdown/github.scss'
```

在组件中使用

```vue
<template>
  <VuetifyTiptap v-model="content" markdown-theme="github" />
  <VuetifyViewer :value="content" markdown-theme="github" />
</template>
```

## 自定义 extension

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

## 国际化

### 设置语言
你可以在安装插件的时候声明
```TypeScript
import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'

const VuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans',
  fallbackLang: 'en'
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
- nl
- tr
- de
- fr
- it
- pt
- hu

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
| 名称                 | 类型                                       | 默认值    | 说明                         |
| -------------------- | ------------------------------------------ | --------- | ---------------------------- |
| modelValue           | string                                     | ''        | 输入的值                     |
| markdownTheme        | string \| false                            | 'default' | markdown主题                 |
| output               | 'html' \| 'json' \| 'text'                 | 'html'    | 输出格式                     |
| dark                 | boolean                                    | false     | 是否为深色主题               |
| density              | 'default' \| 'comfortable' \| 'compact'    | 'default' | 组件使用的垂直高度           |
| variant              | 'flat' \| 'text' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | 'outlined' | 组件的样式变体 |
| flat                 | boolean                                    | true      | 移除卡片的 elevation         |
| disabled             | boolean                                    | false     | 禁用输入                     |
| label                | string                                     | undefined | 设置输入标签                 |
| hideToolbar          | boolean                                    | false     | 隐藏工具栏                   |
| disableToolbar       | boolean                                    | false     | 禁用工具栏                   |
| hideBubble           | boolean                                    | false     | 隐藏气泡菜单                 |
| removeDefaultWrapper | boolean                                    | false     | 删除编辑器为空时默认的包装器 |
| maxWidth             | string \| number                           | undefined | 输入框最大宽度               |
| minHeight            | string \| number                           | undefined | 输入框最小高度               |
| maxHeight            | string \| number                           | undefined | 输入框最大高度               |
| extensions           | AnyExtension[]                             | []        | tiptap插件                   |
| editorClass          | string \| string[] \| Record\<string, any> | undefined | 编辑器class                  |

#### Slots
| 名称   | 说明                   |
| ------ | ---------------------- |
| editor | 自定义编辑器的插槽     |
| bottom | 自定义编辑器底部的插槽 |

#### Event
| 名称                 | 类型                                              | 说明                     |
| -------------------- | ------------------------------------------------- | ------------------------ |
| update:modelValue    | string \| JSONContent                             | 编辑器 onUpdate 时处触发 |
| update:markdownTheme | string                                            | 切换主题时触发           |
| change               | { editor: Editor, output: string \| JSONContent } | 编辑器 onUpdate 时处触发 |
| enter                |                                                   | 键盘输入回车时触发       |

### VuetifyViewer

#### Props
| 名称          | 类型                  | 默认值       | 说明            |
| ------------- | --------------------- | ------------ | --------------- |
| value         | string \| JSONContent | ''           | 预览的值        |
| dark          | boolean               | false        | 是否为深色主题  |
| dense         | boolean               | false        | 是否为紧凑模式  |
| markdownTheme | string \| false       | 'default'    | markdown主题    |
| xss           | boolean               | true         | 是否开启xss过滤 |
| xssOptions    | xss.IWhiteList        | 内置默认规则 | xss过滤规则配置 |
| maxWidth      | string \| number      | undefined    | 预览最大宽度    |
| extensions    | AnyExtension[]        | []           | tiptap插件      |

#### Slots
| 名称   | 说明           |
| ------ | -------------- |
| before | 在顶部添加内容 |
| after  | 在底部添加内容 |

## 🏗 贡献代码

1. 🍴Fork it
2. 🔀Create your branch: `git checkout -b your-branch`
3. 🎨Make your changes
4. 📝Commit your changes with [Semantic Commit Messages (recommended)](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
5. 🚀Push to the branch: `git push origin your-branch`
6. 🎉Submit a PR to `develop` branch

## 📄 许可证

[MIT](./LICENSE)

## 🌹 鸣谢

- [vuetify](https://github.com/vuetifyjs/vuetify)
- [tiptap](https://github.com/scrumpy/tiptap)
- [element-tiptap](https://github.com/Leecason/element-tiptap)
