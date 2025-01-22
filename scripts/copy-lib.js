import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs-extra'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = resolve(__dirname, '../lib')
const dest = resolve(__dirname, '../../x/ui/vuetifyx/vuetifyxjs/src/lib/TiptapEditor/lib')

  fs.removeSync(dest)
  fs.copySync(src, dest)
  console.log(`Copied lib to ${dest}`)
