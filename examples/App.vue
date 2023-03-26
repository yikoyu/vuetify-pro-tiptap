<script setup lang="ts">
import { mdiDeleteCircleOutline, mdiFileCodeOutline } from '@mdi/js'
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { locale, type ToolbarType } from 'vuetify-pro-tiptap'
import html from './html'

const theme = useTheme()

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

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app id="app">
    <!-- <v-main> -->
    <v-container>
      <v-btn color="primary" @click="toggleTheme">
        {{ $vuetify.theme.current.dark ? 'dark' : 'light' }}
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
        :max-height="465"
        :max-width="maxWidth"
      >
        <template v-if="editHtml" #editor="{ props }">
          <v-textarea v-bind="props" v-model="content" height="auto" hide-details flat solo />
        </template>

        <template #preview="{ props }">
          <v-dialog v-model="dialog" fullscreen hide-overlay>
            <template #activator="{ props: dialogProps }">
              <v-btn v-bind="{ ...props, ...dialogProps }">
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
                <v-sheet class="mx-auto" :max-width="maxWidth">
                  <vuetify-viewer :value="content" />
                </v-sheet>
              </v-container>
            </v-card>
          </v-dialog>
        </template>

        <template #html>
          <v-btn
            class="elevation-0"
            size="small"
            :color="editHtml ? 'primary' : undefined"
            text
            @click="editHtml = !editHtml && (disableToolbar = !disableToolbar)"
          >
            HTML
          </v-btn>
        </template>

        <template #clean-btn="{ editor, props }">
          <v-btn v-bind="props" icon size="small" @click="editor && editor.commands.setContent('') && (content = '')">
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
