const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    '@yikoyu/eslint-config-prettier/typescript',
    '@yikoyu/eslint-config-prettier/vue3',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
})
