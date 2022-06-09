require("@rushstack/eslint-patch/modern-module-resolution")
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript/recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef': 'off',
    'no-extra-boolean-cast': 'error', // 禁止隐式类型转换
    'no-inner-declarations': 'error', // 禁止在代码内部进行函数声明
    'use-isnan': 'error', // 判断NaN一定要用 isNaN 方法
    'eqeqeq': 'error', // 禁止出现 ==、=!会带来隐式的类型转换
    'no-caller': 'error', // 禁止使用 arguments.caller 或者 arguments.callee
    'no-extend-native': 'error', // 禁止扩展原生对象原型
    'no-sequences': 'error', // 禁止使用逗号运算符
    'no-with': 'error', // 禁止使用 with 语句
    'no-sparse-arrays': 'error', // 禁止稀疏数组
    'no-extra-bind': 'error', // 禁止使用 bind
    'no-useless-call': 'error', // 禁止使用 Function.prototype.call()
    'yoda': 'error', // 禁用 yada 表达式
    'no-delete-var': 'error', // 禁用 delete 操作符
    // 'no-undef': 'error', // 禁用未声明的变量
    'spaced-comment': 'error', // 强制在注释中石油一致的空格
    'no-var': 'error', // 禁止使用 var

    '@typescript-eslint/no-unused-vars': 'off', // 关闭 不允许未使用的变量
    '@typescript-eslint/no-explicit-any': 'off', // 关闭 禁止使用 any 类型
    '@typescript-eslint/no-inferrable-types': 'off', // 关闭 禁止对初始化为number、string 或 boolean 的 变量 或 形参 进行显式类型声明
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 导出 函数 和 类的公共类方法 上要求显式的 返回 和 参数类型
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/no-empty-function': 'off', // 不允许空函数
    '@typescript-eslint/no-non-null-assertion': 'off', // 禁用使用!后缀运算符

    'vue/multi-word-component-names': 'off'
  }
})
