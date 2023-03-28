<script setup lang="ts">
import { mdiDeleteCircleOutline, mdiFileCodeOutline, mdiClose } from '@mdi/js'
import { computed, ref, unref } from 'vue'
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

const customLang = ref({ ...locale.message['en'] })
const customLangKey = computed(() => Object.keys(unref(customLang)))

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

function setCustom() {
  locale.setMessage('custom', unref(customLang))
  locale.setLang('custom')
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
      <v-btn class="ms-2" color="primary" @click="setCustom">set Custom Lang</v-btn>

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
                <v-icon>{{ `svg:${mdiFileCodeOutline}` }}</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>{{ `svg:${mdiClose}` }}</v-icon>
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
            <v-icon>{{ `svg:${mdiDeleteCircleOutline}` }}</v-icon>
          </v-btn>
        </template>
      </vuetify-tiptap>

      <v-divider class="my-4"></v-divider>

      <v-textarea :value="content" readonly auto-grow></v-textarea>

      <v-divider class="my-4"></v-divider>

      <v-card class="mt-2">
        <v-card-title>Custom Lang</v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="key in customLangKey" :key="key" :cols="12" :sm="6" :md="4" :lg="3">
              <v-text-field v-model="customLang[key]" :label="key"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
    <!-- </v-main> -->
  </v-app>
</template>
