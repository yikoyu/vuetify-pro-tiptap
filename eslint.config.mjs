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
    'yarn.lock'
  ],
  formatters: {
    prettierOptions: {
      arrowParens: 'avoid',
      trailingComma: 'none',
      endOfLine: 'lf'
    },
    css: true,
    html: true
  },
  vue: true,
  regexp: false,
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-arrow-callback': ['off'],
    'object-shorthand': ['off'],

    'unused-imports/no-unused-imports': ['off'],
    'unused-imports/no-unused-vars': ['off'],

    'style/comma-dangle': ['error', 'never'],
    'style/spaced-comment': ['off'],
    'style/quotes': ['off'],
    'style/no-multi-spaces': ['off'],
    'style/operator-linebreak': ['off'],
    'style/indent': ['off'],
    'style/brace-style': ['error', '1tbs'],
    'style/arrow-parens': ['off'],
    'style/quote-props': ['error', 'as-needed'],

    'ts/consistent-type-imports': ['off'],
    'ts/method-signature-style': ['off'],
    'ts/consistent-type-definitions': ['off'],
    'ts/ban-types': ['off'],
    'ts/no-unused-expressions': ['off'],
    'ts/no-unsafe-function-type': ['off'],

    'antfu/if-newline': ['off'],
    'antfu/top-level-function': ['off'],
    'antfu/consistent-list-newline': ['off'],

    'jsdoc/require-returns-description': ['off'],

    'unicorn/prefer-node-protocol': ['off'],

    'vue/comma-dangle': ['error', 'never'],
    'vue/quote-props': ['error', 'as-needed'],
    'vue/prefer-template': ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case']
  }
})
