import process from 'node:process'
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'build/**/*.js',
    'node_modules/*',
    'node_modules/*/**',
    '**/node_modules/*',
    'src-capacitor/android/*',
    'src-capacitor/android/*/**',
    'dist_electron',
    '**/dist_electron/**',
    'dist',
    '**/dist/**',
    'lib',
    '**/lib/**',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
  ],
  formatters: {
    prettierOptions: {
      arrowParens: 'avoid',
      trailingComma: 'none',
      endOfLine: 'lf',
    },
    css: true,
    html: true,
  },
  pnpm: false,
  vue: true,
  regexp: false,
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eslint-comments/no-unlimited-disable': ['off'],
    'unused-imports/no-unused-vars': ['off'],
  },
})
