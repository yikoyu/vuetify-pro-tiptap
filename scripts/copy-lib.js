import { resolve } from 'path'
import process from 'process'
import fs from 'fs-extra'

const src = resolve(__dirname, '../lib')
const dest = resolve(__dirname, '../../x/ui/vuetifyx/vuetifyxjs/src/lib/TiptapEditor/lib')

if (process.env.NODE_ENV === 'development') {
  fs.removeSync(dest)
  fs.copySync(src, dest)
  console.log(`Copied lib to ${dest}`)
} else {
  console.log('Skipping lib copy in non-development environment')
}
