import { Ref, unref, computed, watch, toRefs, reactive } from '@vue/composition-api'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

interface LocaleInterface {
  lang: string
  message: Record<string, Record<string, string>>
}

export const DEFAULT_LOCALE: LocaleInterface = {
  lang: 'zh-CN',
  message: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
}

class Locale {
  get lang(): string {
    return DEFAULT_LOCALE.lang
  }

  set lang(lang: string) {
    DEFAULT_LOCALE.lang = lang
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
  const { lang } = toRefs(reactive(DEFAULT_LOCALE))

  const t = computed(() => {
    return locale.buildI18nHandler(unref(lang))
  })

  return {
    lang,
    t
  }
}

export default locale
export { zhCN, enUS, Locale, useLocale }
