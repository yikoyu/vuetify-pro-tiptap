import Vue from 'vue'
import { unref, computed, onUnmounted, ref } from '@vue/composition-api'

import zhHans from './zh-Hans'
import en from './en'

interface LocaleInterface {
  lang: string
  message: Record<string, Record<string, string>>
}

export const DEFAULT_LOCALE: LocaleInterface = {
  lang: 'en',
  message: {
    zhHans,
    en
  }
}

class Locale {
  private bus
  constructor() {
    this.bus = new Vue()
  }

  get lang(): string {
    return DEFAULT_LOCALE.lang
  }

  set lang(lang: string) {
    DEFAULT_LOCALE.lang = lang
    this.bus.$emit('lang', lang)
  }

  get message(): Record<string, Record<string, string>> {
    return DEFAULT_LOCALE.message
  }

  set message(message: Record<string, Record<string, string>>) {
    DEFAULT_LOCALE.message = message
  }

  loadLangMessage(lang: string): Record<string, string> {
    return this.message[lang]
  }

  public setLang(lang: string) {
    this.lang = lang
  }

  public registerWatchLang() {
    const subscribe = (hook: (lang: string) => void) => {
      this.bus.$on('lang', (lang: string) => hook(lang))
    }

    const unsubscribe = () => {
      this.bus.$off('lang')
    }

    return {
      subscribe,
      unsubscribe
    }
  }

  public setMessage(lang: string, message: Record<string, string>) {
    this.message[lang] = message
  }

  buildI18nHandler(lang?: string) {
    if (!lang) lang = this.lang

    const message = this.loadLangMessage(lang)

    return function t(path: string): string {
      return message[path] || path
    }
  }
}

const locale = new Locale()

const useLocale = () => {
  const lang = ref(DEFAULT_LOCALE.lang)

  const t = computed(() => {
    return locale.buildI18nHandler(unref(lang))
  })

  const watchLang = locale.registerWatchLang()
  watchLang.subscribe(val => {
    lang.value = val
  })

  onUnmounted(() => watchLang.unsubscribe())

  return {
    lang,
    t
  }
}

export default locale
export { zhHans, en, Locale, useLocale }
