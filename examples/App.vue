<script setup lang="ts">
import { mdiDeleteCircleOutline } from '@mdi/js'
import { ref, unref } from 'vue'
import { useTheme } from 'vuetify'
import { locale } from 'vuetify-pro-tiptap'
import html from './html'

import CustomLang from './components/CustomLang.vue'
import preview from './extensions/preview'

const extensions = [preview.configure({ spacer: true })]

const theme = useTheme()

const content = ref(html)
const outlined = ref(true)
const dense = ref(false)
const editHtml = ref(false)
const hideToolbar = ref(false)
const disableToolbar = ref(false)
const errorMessages = ref(null)
const maxWidth = ref<number>(900)

const customLang = ref({ ...locale.message['en'] })

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function toggleEditHtml() {
  editHtml.value = !editHtml.value
  disableToolbar.value = !disableToolbar.value
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
        :outlined="outlined"
        :dense="dense"
        placeholder="Enter some text..."
        :error-messages="errorMessages"
        rounded
        :max-height="465"
        :max-width="maxWidth"
        :extensions="extensions"
      >
        <template v-if="editHtml" #editor="{ props }">
          <v-textarea v-bind="props" v-model="content" height="auto" hide-details flat solo />
        </template>

        <template #html>
          <v-btn class="elevation-0" size="small" :color="editHtml ? 'primary' : undefined" text @click="toggleEditHtml"> HTML </v-btn>
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

      <CustomLang v-model="customLang" />
    </v-container>
    <!-- </v-main> -->
  </v-app>
</template>
