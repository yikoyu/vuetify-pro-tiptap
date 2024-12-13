import { NODE_TYPE_MENU } from '@/constants/define'
import { markRaw } from 'vue'
import {
  BaseKit,
  Blockquote,
  Bold,
  BulletList,
  Clear,
  Code,
  CodeBlock,
  Color,
  createVuetifyProTipTap,
  defaultBubbleList,
  FontFamily,
  FontSize,
  Fullscreen,
  Heading,
  Highlight,
  History,
  HorizontalRule,
  Image,
  Indent,
  Italic,
  Link,
  MarkdownTheme,
  OrderedList,
  Strike,
  SubAndSuperScript,
  Table,
  TaskList,
  TextAlign,
  Underline,
  Video,
  VuetifyTiptap,
  VuetifyViewer
} from 'vuetify-pro-tiptap'
import LinkDialog from './components/LinkDialog.vue'

import SelectImage from './components/SelectImage.vue'
/*
 * @Date: 2023-05-11 22:14:19
 * @LastEditors: yikoyu 2282373181@qq.com
 * @LastEditTime: 2023-06-13 20:39:47
 * @FilePath: \vuetify-pro-tiptap\examples\tiptap.ts
 */
import 'vuetify-pro-tiptap/styles/editor.css'

import 'vuetify-pro-tiptap/styles/markdown.css'
import './styles/markdown/github.scss'

import './styles/markdown/maidragon.scss'

export const vuetifyProTipTap = createVuetifyProTipTap({
  lang: 'zhHans',
  markdownTheme: 'github',
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  extensions: [
    BaseKit.configure({
      placeholder: {
        placeholder: 'Enter some text...'
      },
      bubble: {
        // default config
        list: {
          ...NODE_TYPE_MENU
        },
        defaultBubbleList: editor => {
          // You can customize the bubble menu here
          return defaultBubbleList(editor) // default customize bubble list
        }
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
    Link.configure({
      dialogComponent: () => LinkDialog
    }),
    Image.configure({
      imageTabs: [{ name: 'SELECT', component: markRaw(SelectImage) }],
      width: 500,
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
    MarkdownTheme.configure({
      markdownThemes: [
        {
          title: 'Github',
          value: 'github'
        },
        {
          title: 'Maidragon',
          value: 'maidragon'
        }
      ]
    }),
    Fullscreen.configure({
      useWindow: true
    })
  ]
})
