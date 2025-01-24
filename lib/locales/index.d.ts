import { default as de } from './de';
import { default as en } from './en';
import { default as it } from './it';
import { default as nl } from './nl';
import { default as zhHans } from './zh-Hans';
interface LocaleInterface {
    lang: string;
    message: Record<string, Record<string, string>>;
}
export declare const DEFAULT_LOCALE_MESSAGE: {
    nl: Record<string, string>;
    zhHans: Record<string, string>;
    en: Record<string, string>;
    de: Record<string, string>;
    it: Record<string, string>;
};
export declare const DEFAULT_LOCALE: LocaleInterface;
export declare class Locale {
    private emitter;
    constructor();
    get lang(): string;
    set lang(lang: string);
    get message(): Record<string, Record<string, string>>;
    set message(message: Record<string, Record<string, string>>);
    loadLangMessage(lang: string): Record<string, string>;
    private isLangSupported;
    setLang(lang: string): void;
    registerWatchLang(hook: (lang: string) => void): {
        unsubscribe: () => void;
    };
    setMessage(lang: string, message: Record<string, string>): void;
    buildI18nHandler(lang?: string): (path: string) => string;
}
export declare const locale: Locale;
export declare const useLocale: () => {
    lang: import('vue').Ref<string, string>;
    t: import('vue').ComputedRef<(path: string) => string>;
};
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
zhHans };
