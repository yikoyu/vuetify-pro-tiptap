<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { mdiDeleteCircleOutline, mdiSend, mdiFileCodeOutline } from '@mdi/js'
import { type ToolbarType, locale } from 'vuetify-pro-tiptap'
// import { VuetifyTiptap, VuetifyViewer, type ToolbarType, type StarterKitOptions, locale } from '../src'

const testHtml = `<h2 style="text-align: center">Welcome To Vuetify Tiptap Editor Demo</h2><p>🔥 <strong>Vuetify Tiptap Editor </strong>🔥is a WYSIWYG rich-text editor using&nbsp; <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/scrumpy/tiptap">tiptap</a>&nbsp;and <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vuetifyjs/vuetify">vuetify</a>&nbsp;for Vue.js <img src="https://i.ibb.co/nbRN3S2/undraw-upload-87y9.png" alt="Test alt" width="200" data-display="right"> that's easy to use, friendly to developers, fully extensible and clean in design.</p><p></p><p style="text-align: right">👉Click on the image to get started image features 👉</p><p></p><p>You can toggle <strong>Fullscreen</strong> 📺 in this demo.</p><p></p><blockquote class="blockquote"><p>This demo is simple, switch tab for more features.</p><p>All demos source code: <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/yikoyu/vuetify-pro-tiptap">source code 🔗</a></p></blockquote>`

export default defineComponent({
  setup() {
    const content = ref(testHtml)
    const dialog = ref(false)
    const outlined = ref(true)
    const dense = ref(false)
    const editHtml = ref(false)
    const hideToolbar = ref(false)
    const disableToolbar = ref(false)
    const errorMessages = ref(null)

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

    return {
      mdiDeleteCircleOutline,
      mdiFileCodeOutline,
      mdiSend,
      locale,
      content,
      dialog,
      outlined,
      dense,
      editHtml,
      hideToolbar,
      disableToolbar,
      errorMessages,
      toolbar
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

      <v-btn class="ms-2" color="primary" @click="locale.setLang('zhHans')">set Chinese</v-btn>
      <v-btn class="ms-2" color="primary" @click="locale.setLang('en')">set English</v-btn>

      <vuetify-tiptap
        v-model="content"
        label="Title"
        :hide-toolbar="hideToolbar"
        :disable-toolbar="disableToolbar"
        :toolbar="toolbar"
        :outlined="outlined"
        :dense="dense"
        :dark="$vuetify.theme.dark"
        placeholder="Enter some text..."
        :error-messages="errorMessages"
        rounded
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
