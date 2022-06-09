<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { hello } from 'vuetify-pro-tiptap'

export default defineComponent({
  setup() {
    return {
      hello
    }
  }
})
</script>

<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark dense>
      <v-avatar tile size="32">
        <v-img src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light.svg" alt="logo" />
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container>
        <div>{{ hello('Hello') }}</div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
