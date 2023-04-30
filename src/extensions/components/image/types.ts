export type ImageTabKey = 'url' | 'upload'
export type Display = 'block' | 'inline' | 'left' | 'right'

export interface ImageTab {
  name: string
  type?: ImageTabKey
  component: any
}

export interface ImageAttrsOptions {
  src?: string
  alt?: string
  title?: string
  lockAspectRatio?: boolean
  width?: number | string | null
  height?: number | string | null
  display?: Display
}

export interface ImageForm extends ImageAttrsOptions {
  file?: File[]
}
