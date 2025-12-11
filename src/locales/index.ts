import type { EventType } from '@/utils/mitt'

import { computed, ref, unref, watchEffect } from 'vue'
import { DEFAULT_LANG_VALUE } from '@/constants/define'
import Logger from '@/utils/logger'
import mitt from '@/utils/mitt'

// Import language files
import de from './de'
import en from './en'
import fr from './fr'
import hu from './hu'
import it from './it'
import nl from './nl'
import pt from './pt'
import tr from './tr'
import zhHans from './zh-Hans'

/**
 * Type definition for language messages.
 * It represents a record where the key is the language code,
 * and the value is another record of message keys and their corresponding translations.
 */
type LangMessages = Record<string, Record<string, string>>

/**
 * Interface for the locale object.
 * It includes the current language code, the fallback language code, and the message records for all supported languages.
 */
interface LocaleInterface {
  lang: string
  fallbackLang: string
  message: LangMessages
}

/**
 * Interface for Mitt events.
 * It defines the 'lang' event which passes a string representing the new language.
 */
interface MittEvents extends Record<EventType, unknown> {
  lang: string
}

/**
 * Default language message records.
 * It contains all the imported language message files.
 */
export const DEFAULT_LOCALE_MESSAGE: LangMessages = {
  nl,
  tr,
  zhHans,
  en,
  de,
  fr,
  it,
  pt,
  hu,
}

/**
 * Default locale object.
 * It uses the default language value, a default fallback language value, and the default language message records.
 */
const DEFAULT_LOCALE: LocaleInterface = {
  lang: DEFAULT_LANG_VALUE,
  fallbackLang: DEFAULT_LANG_VALUE,
  message: DEFAULT_LOCALE_MESSAGE,
}

/**
 * Locale class for managing language and message translations.
 */
class Locale {
  /**
   * Mitt event emitter for handling language change events.
   */
  private emitter = mitt<MittEvents>()

  /**
   * Private property to store the current locale settings.
   */
  private _locale: LocaleInterface = DEFAULT_LOCALE

  /**
   * Get the current language code.
   * @returns The current language code.
   */
  get lang(): string {
    return this._locale.lang
  }

  /**
   * Set the current language code.
   * If the provided language is not supported, it sets the language to the fallback language.
   * @param lang - The new language code to set.
   */
  set lang(lang: string) {
    if (!this.isLangSupported(lang)) {
      Logger.warn(`Can't find the current language "${lang}", Using fallback language "${this._locale.fallbackLang}" instead.`)
      this._locale.lang = this._locale.fallbackLang
    }
    else {
      this._locale.lang = lang
    }
    this.emitter.emit('lang', this._locale.lang)
  }

  /**
   * Get the fallback language code.
   * @returns The fallback language code.
   */
  get fallbackLang(): string {
    return this._locale.fallbackLang
  }

  /**
   * Set the fallback language code.
   * If the provided language is not supported, it logs a warning and keeps the current fallback language.
   * @param lang - The new fallback language code to set.
   */
  set fallbackLang(lang: string) {
    if (!this.isLangSupported(lang)) {
      Logger.warn(`Can't find the fallback language "${lang}", Using language "${this._locale.fallbackLang}" by default`)
      return
    }
    this._locale.fallbackLang = lang
  }

  /**
   * Get the language message records.
   * @returns The language message records.
   */
  get message(): LangMessages {
    return this._locale.message
  }

  /**
   * Set the language message records.
   * @param message - The new language message records to set.
   */
  set message(message: LangMessages) {
    this._locale.message = message
  }

  /**
   * Load the message records for a specific language.
   * @param lang - The language code to load messages for.
   * @returns The message records for the specified language.
   */
  loadLangMessage(lang: string): Record<string, string> {
    return this.message[lang] || {}
  }

  /**
   * Check if a given language is supported.
   * @param lang - The language code to check.
   * @returns True if the language is supported, false otherwise.
   */
  private isLangSupported(lang: string): boolean {
    return Object.keys(this.message).includes(lang)
  }

  /**
   * Public method to set the current language.
   * @param lang - The new language code to set.
   */
  public setLang(lang: string) {
    this.lang = lang
  }

  /**
   * Public method to set the fallback language.
   * @param lang - The new fallback language code to set.
   */
  public setFallbackLang(lang: string) {
    this.fallbackLang = lang
  }

  /**
   * Public method to register a callback for language change events.
   * @param hook - The callback function to be called when the language changes.
   * @returns An object with an unsubscribe method to stop listening to the event.
   */
  public registerWatchLang(hook: (lang: string) => void) {
    this.emitter.on('lang', hook)
    return {
      unsubscribe: () => this.emitter.off('lang', hook),
    }
  }

  /**
   * Public method to set the message records for a specific language.
   * @param lang - The language code to set messages for.
   * @param message - The message records to set for the specified language.
   */
  public setMessage(lang: string, message: Record<string, string>) {
    this.message[lang] = message
  }

  /**
   * Build an internationalization handler function.
   * @param lang - Optional language code. If not provided, the current language will be used.
   * @returns A function that takes a message path and returns the translated message.
   */
  buildI18nHandler(lang?: string): (path: string) => string {
    const targetLang = lang || this.lang
    const targetMessages = this.loadLangMessage(targetLang)
    const fallbackMessages = this.loadLangMessage(this.fallbackLang)

    return (path: string): string => {
      return targetMessages[path] || fallbackMessages[path] || path
    }
  }
}

/**
 * An instance of the Locale class for global use.
 */
export const locale = new Locale()

/**
 * A Vue composable function for using the locale functionality in a reactive way.
 * @returns An object containing the reactive language code and the computed translation function.
 */
export function useLocale() {
  const lang = ref(locale.lang)

  const t = computed(() => locale.buildI18nHandler(unref(lang)))

  watchEffect((onCleanup) => {
    const watchLang = locale.registerWatchLang((val) => {
      lang.value = val
    })
    onCleanup(() => watchLang.unsubscribe())
  })

  return {
    lang,
    t,
  }
}
