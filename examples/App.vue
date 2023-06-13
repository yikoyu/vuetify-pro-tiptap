<!--
 * @Date: 2023-05-27 17:21:21
 * @LastEditors: yikoyu 2282373181@qq.com
 * @LastEditTime: 2023-06-13 20:58:58
 * @FilePath: \vuetify-pro-tiptap\examples\App.vue
-->
<script setup lang="ts">
import { ref, unref } from 'vue'
import { useTheme } from 'vuetify'
import { locale } from 'vuetify-pro-tiptap'
import html from './html'

import CustomLang from './components/CustomLang.vue'
import preview from './extensions/preview'

const extensions = [preview.configure({ spacer: true })]

const theme = useTheme()

const content = ref(html)
const markdownTheme = ref('maidragon')
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

function setCustom() {
  locale.setMessage('custom', unref(customLang))
  locale.setLang('custom')
}
</script>

<template>
  <v-app id="app">
    <v-container>
      <v-alert class="mb-4" type="info" title="Support repository" variant="tonal">
        <template #text>
          <div class="d-flex align-center">
            If you like the repository, you can give us
            <iframe
              class="ms-2"
              src="https://ghbtns.com/github-btn.html?user=yikoyu&repo=vuetify-pro-tiptap&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="120"
              height="20"
              title="GitHub"
            ></iframe>
          </div>
        </template>
      </v-alert>

      <v-btn class="mb-4" color="primary" @click="toggleTheme">
        {{ $vuetify.theme.current.dark ? 'dark' : 'light' }}
      </v-btn>

      <v-btn class="mb-4 ms-4" color="primary" @click="locale.setLang('zhHans')">set Chinese</v-btn>
      <v-btn class="mb-4 ms-4" color="primary" @click="locale.setLang('en')">set English</v-btn>
      <v-btn class="mb-4 ms-4" color="primary" @click="setCustom">set Custom Lang</v-btn>

      <div class="my-4">
        <v-btn-toggle v-model="markdownTheme" color="deep-purple-accent-3" rounded="0" group>
          <v-btn value="">Global</v-btn>
          <v-btn value="default">Default</v-btn>
          <v-btn value="github">Github</v-btn>
          <v-btn value="maidragon">Maidragon</v-btn>
        </v-btn-toggle>
      </div>

      <vuetify-tiptap
        v-model="content"
        label="Title"
        :hide-toolbar="hideToolbar"
        :disable-toolbar="disableToolbar"
        :outlined="outlined"
        :dense="dense"
        :error-messages="errorMessages"
        rounded
        :max-height="465"
        :max-width="maxWidth"
        :extensions="extensions"
        :markdown-theme="markdownTheme"
      />
      <v-divider class="my-4"></v-divider>

      <v-textarea :value="content" readonly auto-grow></v-textarea>

      <v-divider class="my-4"></v-divider>

      <custom-lang v-model="customLang" />
    </v-container>
  </v-app>
</template>
