import { unref, computed, watchEffect, ref } from 'vue'
import Logger from '@/utils/logger'
import mitt, { EventType } from '@/utils/mitt'

import zhHans from './zh-Hans'
import en from './en'

type Message = Record<string, any>

interface LocaleInterface {
  lang: string
  message: Record<string, Message>
}

interface MittEvents extends Record<EventType, unknown> {
  lang: string
}

export const DEFAULT_LOCALE: LocaleInterface = {
  lang: 'en',
  message: {
    zhHans,
    en
  }
}

class Locale {
  private emitter
  constructor() {
    this.emitter = mitt<MittEvents>()
  }

  get lang(): string {
    return DEFAULT_LOCALE.lang
  }

  set lang(lang: string) {
    if (!this.isLangSupported(lang)) {
      Logger.warn(`Can't find the current language "${lang}", Using language "${DEFAULT_LOCALE.lang}" by default`)
      return
    }

    DEFAULT_LOCALE.lang = lang
    this.emitter.emit('lang', lang)
  }

  get message(): Record<string, Message> {
    return DEFAULT_LOCALE.message
  }

  set message(message: Record<string, Message>) {
    DEFAULT_LOCALE.message = message
  }

  loadLangMessage(lang: string): Message {
    return this.message[lang]
  }

  private isLangSupported(lang: string): boolean {
    const supportedLangs = Object.keys(this.message)
    return supportedLangs.includes(lang)
  }

  public setLang(lang: string) {
    this.lang = lang
  }

  public registerWatchLang(hook: (lang: string) => void) {
    this.emitter.on('lang', hook)

    const unsubscribe = () => {
      this.emitter.off('lang', hook)
    }

    return {
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
  const message = computed(() => {
    const msg = locale.loadLangMessage(unref(lang))
    if (!msg) {
      return DEFAULT_LOCALE.message[DEFAULT_LOCALE.lang]
    }

    return msg
  })

  const t = computed(() => {
    return locale.buildI18nHandler(unref(lang))
  })

  watchEffect(effect => {
    const watchLang = locale.registerWatchLang(val => {
      lang.value = val
    })

    effect(() => {
      watchLang.unsubscribe()
    })
  })

  return {
    lang,
    message,
    t
  }
}

export default locale
export { zhHans, en, Locale, useLocale }
