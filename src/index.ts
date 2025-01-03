export { default as VuetifyTiptap } from './components/VuetifyTiptap.vue'
export { default as VuetifyViewer } from './components/VuetifyViewer.vue'

export * from './extensions'

export { useContext } from './hooks'

export * from './install'
export * from './locales'
export type * from './type'

declare module 'vue' {
  export interface GlobalComponents {
    VuetifyTiptap: typeof import('./components/VuetifyTiptap.vue').default
    VuetifyViewer: typeof import('./components/VuetifyViewer.vue').default
  }
}
