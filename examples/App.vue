<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { defineComponent, nextTick, Ref, ref } from '@vue/composition-api'
import { mdiDeleteCircleOutline, mdiSend, mdiFileCodeOutline } from '@mdi/js'
import { VuetifyTiptap, VuetifyViewer, type ToolbarType, type StarterKitOptions, locale } from 'vuetify-pro-tiptap'
// import { VuetifyTiptap, VuetifyViewer, type ToolbarType, type StarterKitOptions, locale } from '../src'
import SelectImage from './components/SelectImage.vue'

const testHtml = `<h2 style="text-align: center">Welcome To Vuetify Tiptap Editor Demo</h2><p>🔥 <strong>Vuetify Tiptap Editor </strong>🔥is a WYSIWYG rich-text editor using&nbsp; <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/scrumpy/tiptap">tiptap</a>&nbsp;and <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vuetifyjs/vuetify">vuetify</a>&nbsp;for Vue.js <img src="https://i.ibb.co/nbRN3S2/undraw-upload-87y9.png" alt="Test alt" width="200" data-display="right"> that's easy to use, friendly to developers, fully extensible and clean in design.</p><p></p><p style="text-align: right">👉Click on the image to get started image features 👉</p><p></p><p>You can toggle <strong>Fullscreen</strong> 📺 in this demo.</p><p></p><blockquote class="blockquote"><p>This demo is simple, switch tab for more features.</p><p>All demos source code: <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/yikoyu/vuetify-pro-tiptap">source code 🔗</a></p></blockquote>`

export default defineComponent({
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  setup(props, { root }) {
    const content = ref(testHtml)
    const view = ref(false)
    const outlined = ref(true)
    const dense = ref(false)
    const editHtml = ref(false)
    const hideToolbar = ref(false)
    const disableToolbar = ref(false)
    const errorMessages = ref(null)

    const config: Ref<Partial<StarterKitOptions>> = ref<Partial<StarterKitOptions>>({
      image: {
        upload: uploadImage,
        imageTabs: [{ name: 'SELECT', component: SelectImage }]
        // hiddenTabs: ['upload']
      }
    })

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
      '#clean-btn',
      '#preview',
      '#html'
    ])

    const slotPrepend = ref(false)
    const slotAppend = ref(false)
    const slotBottom = ref(true)

    function uploadImage(file: File) {
      console.log('e :>> ', file)
      return Promise.resolve('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wE9P?ver=e767')
    }

    return {
      mdiDeleteCircleOutline,
      mdiFileCodeOutline,
      mdiSend,
      content,
      view,
      outlined,
      dense,
      editHtml,
      hideToolbar,
      disableToolbar,
      errorMessages,
      config,
      toolbar,
      slotPrepend,
      slotAppend,
      slotBottom,
      setLang: (lang: string) => {
        locale.setLang(lang)
        nextTick(() => {
          root.$forceUpdate()
        })
      },
      uploadImage,
      dialog: ref(false)
    }
  }
})
</script>

<template>
  <v-app id="app">
    <!-- <v-main> -->
    <v-container>
      <v-btn color="primary" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        {{ $vuetify.theme.dark ? 'dark' : 'light' }}
      </v-btn>

      <v-btn class="ms-2" color="primary" @click="$vuetify.rtl = !$vuetify.rtl">
        {{ $vuetify.rtl ? 'RTL' : 'LTR' }}
      </v-btn>

      <v-btn class="ms-2" color="primary" @click="setLang('zh-CN')">set Chinese</v-btn>
      <v-btn class="ms-2" color="primary" @click="setLang('en-US')">set English</v-btn>

      <vuetify-tiptap
        v-model="content"
        label="Title"
        :hide-toolbar="hideToolbar"
        :disable-toolbar="disableToolbar"
        :config="config"
        :toolbar="toolbar"
        :outlined="outlined"
        :dense="dense"
        :dark="$vuetify.theme.dark"
        placeholder="Enter some text..."
        :error-messages="errorMessages"
        rounded
        :uploadImage="uploadImage"
        :maxHeight="465"
      >
        <template v-if="editHtml" #editor="{ attrs }">
          <v-textarea v-bind="attrs" height="auto" hide-details v-model="content" flat solo />
        </template>

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

        <template #html>
          <v-btn
            @click="
              editHtml = !editHtml
              disableToolbar = !disableToolbar
            "
            class="elevation-0"
            small
            :color="editHtml ? 'primary' : undefined"
            text
          >
            HTML
          </v-btn>
        </template>

        <template #clean-btn="{ editor, attrs }">
          <v-btn
            v-bind="attrs"
            icon
            small
            @click="
              editor && editor.commands.setContent('')
              content = ''
            "
          >
            <v-icon>{{ mdiDeleteCircleOutline }}</v-icon>
          </v-btn>
        </template>

        <!-- <template v-if="slotBottom" #bottom="{ editor }">
          <v-toolbar dense flat height="48px" color="grey lighten-4" class="px-2" style="border-top: 1px solid #ddd">
            <v-spacer />
            <v-btn
              @click="
                editor && editor.commands.setContent('')
                content = ''
              "
              icon
              small
            >
              <v-icon>{{ mdiSend }}</v-icon>
            </v-btn>
          </v-toolbar>
        </template> -->

        <!-- <template #image="{ editor, imageSrc }">
            <v-text-field
              :value="imageSrc"
              name="src"
              @input="editor.chain().focus().setImage({ src: $event }).run()"
              label="Link URL"
              :placeholder="'image'"
              hide-details
            />
          </template> -->
      </vuetify-tiptap>

      <v-divider class="my-4"></v-divider>

      <v-textarea :value="content" readonly auto-grow></v-textarea>
    </v-container>
    <!-- </v-main> -->
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  /* overflow: auto; */
  /* padding-top: 60px; */
}
</style>
