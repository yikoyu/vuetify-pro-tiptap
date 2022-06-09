export interface ImageForm {
  src?: string
  alt?: string
  file?: File
}

export type ImageTabKey = 'url' | 'upload'

export interface ImageTab {
  name: string
  type?: ImageTabKey
  component: any
}
