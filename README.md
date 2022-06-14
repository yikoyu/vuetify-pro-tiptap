# Vuetify Pro Tiptap

一个 Vue.js 的基于 [tiptap](https://github.com/scrumpy/tiptap) 和 [vuetify](https://github.com/vuetifyjs/vuetify) 的 「所见即所得」 富文本编辑器

<p align="center">
  <a href="https://npmcharts.com/compare/vuetify-pro-tiptap?minimal=true">
    <img src="http://img.shields.io/npm/dm/vuetify-pro-tiptap.svg">
  </a>
  <a href="https://www.npmjs.org/package/vuetify-pro-tiptap">
    <img src="https://img.shields.io/npm/v/vuetify-pro-tiptap.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.es.js?compression=gzip&label=gzip">
    <img src="http://img.badgesize.io/https://unpkg.com/vuetify-pro-tiptap/lib/vuetify-pro-tiptap.es.js?compression=gzip&label=gzip">
  </a>
  <a href="https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/gh-pages.yml?query=workflow:gh-pages.yml+branch:master">
    <img src="https://github.com/yikoyu/vuetify-pro-tiptap/actions/workflows/gh-pages.yml/badge.svg">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release: angular" src="https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release">
  </a>
</p>

## Demo
👉[https://yikoyu.github.io/vuetify-pro-tiptap/](https://yikoyu.github.io/vuetify-pro-tiptap/)

## 特色
- 使用 [vuetify](https://github.com/vuetifyjs/vuetify) 组件
- 支持 markdown 语法
- TypeScript 支持
- 支持 i18n
- Vuetify 2.x 和 Vue 2.x 支持

## 安装
### NPM安装
```shell
pnpm add vuetify-pro-tiptap
```
或者
```shell
yarn add vuetify-pro-tiptap
```
或者
```shell
npm i vuetify-pro-tiptap -S
```
### 安装插件
```TypeScript
import Vue from 'vue'
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
  render: () => h(App)
}).mount('#app')
```
## 全局设置
```TypeScript
import { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'

const VuetifyProTipTap = createVuetifyProTipTap({
  vuetify,
  lang: 'zhHans',
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  // 编辑器全局配置
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
```

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
<script lang="ts">
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
    const content = ref(`<h2 style="text-align: center">Welcome To Vuetify Tiptap Editor Demo</h2>`)

    const config: Ref<Partial<StarterKitOptions>> = ref<Partial<StarterKitOptions>>({
      image: {
        upload: uploadImage, // 图片上传方法
        imageTabs: [{ name: 'SELECT', component: SelectImage }] // 自定义 tab
        hiddenTabs: ['upload'] // 需要隐藏的 tab
      }
    })

    // 自定义工具栏
    const toolbar = ref<ToolbarType[]>([
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

    function uploadImage(file: File): Promise<string> {
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
</script>

<template>
  <div>
    <vuetify-tiptap
      v-model="content"
      label="Title"
      :config="config"
      :toolbar="toolbar"
      :dark="$vuetify.theme.dark"
      placeholder="Enter some text..."
      rounded
      :maxHeight="465"
    >
      <template #preview="{ attrs }">
        <v-dialog v-model="dialog" fullscreen hide-overlay>
          <template #activator="{ on, attrs: dialog }">
            <v-btn v-bind="{ ...attrs, ...dialog }" v-on="on">
              <v-icon>{{ mdiFileCodeOutline }}</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>$close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-container>
              <vuetify-viewer :value="content" />
            </v-container>
          </v-card>
        </v-dialog>
      </template>
    </vuetify-tiptap>
  </div>
</template>
```

## Props

### VuetifyTiptap

| 名称 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| value | string | '' | 输入的值 |
| dark | boolean | false | 是否为深色主题 |
| dense | boolean | false | 是否为紧凑模式 |
| outlined | boolean | true | 将轮廓样式应用于输入 |
| disabled | boolean | false | 禁用输入 |
| label | string | undefined | 设置输入标签 |
| placeholder | string | undefined | 设置输入的占位符文本 |
| toolbar | ToolbarType[] | 展示所有组件 | 工具栏组件配置 |
| hideToolbar | boolean | false | 隐藏工具栏 |
| disableToolbar | boolean | false | 禁用工具栏 |
| minHeight | string \| boolean | undefined | 输入框最小高度 |
| maxHeight | string \| boolean | undefined | 输入框最大高度 |
| extensions | AnyExtension[] | [] | tiptap插件 |
| config | Partial\<StarterKitOptions> | {} | 编辑器配置 |
| editorClass | string \| string[] \| Record\<string, any> | undefined | 编辑器class |

### VuetifyViewer

| 名称 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| value | value | '' | 预览的值 |
| dense | boolean | false | 是否为紧凑模式 |
| xss | boolean | true | 是否开启xss过滤 |
| xssOptions | xss.IWhiteList | 内置默认规则 | xss过滤规则配置 |