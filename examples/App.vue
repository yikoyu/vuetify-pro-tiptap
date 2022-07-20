<script setup lang="ts">
import { ref } from 'vue'
import { mdiDeleteCircleOutline, mdiFileCodeOutline } from '@mdi/js'
import { type ToolbarType, locale } from 'vuetify-pro-tiptap'
import html from './html'

const content = ref(html)
const dialog = ref(false)
const outlined = ref(true)
const dense = ref(false)
const editHtml = ref(false)
const hideToolbar = ref(false)
const disableToolbar = ref(false)
const errorMessages = ref(null)
const maxWidth = ref<number>(900)

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
  'table',
  '|',
  'blockquote',
  'rule',
  'code',
  'codeBlock',
  '|',
  'clear',
  'fullscreen',
  'undo',
  'redo',
  '#clean-btn',
  '#preview',
  '#html'
])
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
        placeholder="Enter some text..."
        :error-messages="errorMessages"
        rounded
        :maxHeight="465"
        :maxWidth="maxWidth"
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
                <v-sheet class="mx-auto" :maxWidth="maxWidth">
                  <vuetify-viewer :value="content" />
                </v-sheet>
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
