const TIPTAP_TIP: string = '[vuetify-pro-tiptap]'

export default class Logger {
  static warn(msg: string) {
    console.warn(`${TIPTAP_TIP}: ${msg}`)
  }

  static error(msg: string) {
    console.error(`${TIPTAP_TIP}: ${msg}`)
  }
}
