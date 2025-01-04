import { DEFAULT_LANG_VALUE } from '@/constants/define'

import Logger from '@/utils/logger'
import mitt, { EventType } from '@/utils/mitt'
import { computed, ref, unref, watchEffect } from 'vue'
import de from './de'

import en from './en'
import it from './it'
import nl from './nl'
import zhHans from './zh-Hans'

interface LocaleInterface {
  lang: string
  message: Record<string, Record<string, string>>
}

interface MittEvents extends Record<EventType, unknown> {
  lang: string
}

export const DEFAULT_LOCALE_MESSAGE = {
  nl,
  zhHans,
  en,
  de,
  it
}

export const DEFAULT_LOCALE: LocaleInterface = {
  lang: DEFAULT_LANG_VALUE,
  message: DEFAULT_LOCALE_MESSAGE
}

export class Locale {
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

  get message(): Record<string, Record<string, string>> {
    return DEFAULT_LOCALE.message
  }

  set message(message: Record<string, Record<string, string>>) {
    DEFAULT_LOCALE.message = message
  }

  loadLangMessage(lang: string): Record<string, string> {
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

export const locale = new Locale()

export const useLocale = () => {
  const lang = ref(DEFAULT_LOCALE.lang)

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
    t
  }
}

export {
  /**
   * @deprecated This export will be removed in v2.6.0+. Use DEFAULT_LOCALE_MESSAGE.de instead.
   */
  de,

  /**
   * @deprecated This export will be removed in v2.6.0+. Use DEFAULT_LOCALE_MESSAGE.en instead.
   */
  en,

  /**
   * @deprecated This export will be removed in v2.6.0+. Use DEFAULT_LOCALE_MESSAGE.it instead.
   */
  it,

  /**
   * @deprecated This export will be removed in v2.6.0+. Use DEFAULT_LOCALE_MESSAGE.nl instead.
   */
  nl,

  /**
   * @deprecated This export will be removed in v2.6.0+. Use DEFAULT_LOCALE_MESSAGE.zhHans instead.
   */
  zhHans
}
