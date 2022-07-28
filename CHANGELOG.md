## [1.4.3](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.4.2...v1.4.3) (2022-07-28)


### Bug Fixes

* **types:** 编译后vue-types类型错误 ([ec5acca](https://github.com/yikoyu/vuetify-pro-tiptap/commit/ec5acca443823c154f9a8cb5ccf0251972c9cc18))

## [1.4.2](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.4.1...v1.4.2) (2022-07-20)


### Bug Fixes

* **setup:** 放弃使用setup写法，使用setup写法编译错误，vue2.6.x无法使用 ([b83ee68](https://github.com/yikoyu/vuetify-pro-tiptap/commit/b83ee68f6cce15060933a9308a16e86e4f0813f3))

## [1.4.1](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.4.0...v1.4.1) (2022-07-20)


### Refactor

* 升级到vue2.7.x，并改用setup写法 ([#30](https://github.com/yikoyu/vuetify-pro-tiptap/issues/30)) ([3ee90d4](https://github.com/yikoyu/vuetify-pro-tiptap/commit/3ee90d42c8e3eafe240e28a6ef8e46d0ad131cae))

# [1.4.0](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.3.0...v1.4.0) (2022-07-17)


### Bug Fixes

* **extansions:** dialog弹框关闭未清除dom ([e9725f1](https://github.com/yikoyu/vuetify-pro-tiptap/commit/e9725f1d3162ee8799fab927244aac9b1099e170))


### Features

* **vue-demi:** 兼容vue2.7.x ([759d033](https://github.com/yikoyu/vuetify-pro-tiptap/commit/759d033fd7e4a6f66f16f134d370ff15b2cc7351))

# [1.3.0](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.2.0...v1.3.0) (2022-06-30)


### Features

* **style:** 重构markdown样式，新增dark模式样式。VuetifyViewer新增hideMarkdownStyle参数 ([22b25f2](https://github.com/yikoyu/vuetify-pro-tiptap/commit/22b25f278196dabf639da2cc51e43bac5b94650c))
* **table:** 添加 table 插件 ([21a1c57](https://github.com/yikoyu/vuetify-pro-tiptap/commit/21a1c57653b5bb768c3a7bd61c3d05539a774d29))

# [1.2.0](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.1.1...v1.2.0) (2022-06-28)


### Bug Fixes

* **image:** update上传时无效 ([d347f68](https://github.com/yikoyu/vuetify-pro-tiptap/commit/d347f685b3cff521902eaac872cdff963be0bd8e))
* **image:** 表单输入时lockAspectRatio默认值伪true ([6acf546](https://github.com/yikoyu/vuetify-pro-tiptap/commit/6acf54622242b5d8db415ed209dfb28838fd92fe))
* **locales:** 修改国际化文本 editor.image.size.large ([57d90e5](https://github.com/yikoyu/vuetify-pro-tiptap/commit/57d90e588a564a63c0bfa312d63c46e53097ca6c))
* **VuetifyViewer:** blockquote的class被xss过滤 ([c5a4577](https://github.com/yikoyu/vuetify-pro-tiptap/commit/c5a45771ceb46ae3f349394d90f0e13681b1978f))
* 编辑器换空行，getHTML输出html为<p></p>，和编辑时行为不一致 ([7ae230e](https://github.com/yikoyu/vuetify-pro-tiptap/commit/7ae230eb79c303abfc618cd1e48d7331af7805d9))


### Features

* **BubbleMenu:** 添加image-aspect-ratio选项 ([7fde452](https://github.com/yikoyu/vuetify-pro-tiptap/commit/7fde452f82c0b613c881b64e2115b62bc89a79fe))
* **image:** 添加长宽锁定功能，width为100%时，编辑器无效果 ([9188ae4](https://github.com/yikoyu/vuetify-pro-tiptap/commit/9188ae4f0634fec72d62078416cf351fa600f50f))
* **VuetifyTiptap:** 添加maxWidth参数 ([b8cccd0](https://github.com/yikoyu/vuetify-pro-tiptap/commit/b8cccd0a189f7dfec2833c91f71aea2ffee9915e))
* **VuetifyViewer:** 添加before插槽和after插槽 ([a5fa49a](https://github.com/yikoyu/vuetify-pro-tiptap/commit/a5fa49a0b55e3f694ea381f6081a81265a88c46a))

## [1.1.1](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.1.0...v1.1.1) (2022-06-15)


### Bug Fixes

* **type:** typescript的Modifiers on Import Names改为旧语法 ([e24e614](https://github.com/yikoyu/vuetify-pro-tiptap/commit/e24e61468ed6e632a9d5a76459eabbab3b4c3838))

# [1.1.0](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.0.1...v1.1.0) (2022-06-14)


### Bug Fixes

* **TipTapToolbar:** tooltip文本在dialog下无法显示 ([908c1b3](https://github.com/yikoyu/vuetify-pro-tiptap/commit/908c1b393ed35b8252541edee8bf91513581915b))


### Features

* 编辑器可进行全局配置 ([1ab3299](https://github.com/yikoyu/vuetify-pro-tiptap/commit/1ab329991a5ade7897452f4b5200bea4de257c33))

## [1.0.1](https://github.com/yikoyu/vuetify-pro-tiptap/compare/v1.0.0...v1.0.1) (2022-06-12)


### Bug Fixes

* 初始化语言设置改为setLang ([6d8f6b3](https://github.com/yikoyu/vuetify-pro-tiptap/commit/6d8f6b37c0fd17756edced36de40bb53ae1d8811))

# 1.0.0 (2022-06-11)


### Bug Fixes

* **image:** display预览模式下无效 ([6e489b7](https://github.com/yikoyu/vuetify-pro-tiptap/commit/6e489b7201ea3cc53a57a98e578651ed08355e66))
* **locales:** 判断当前语言是否可切换 ([d53cfae](https://github.com/yikoyu/vuetify-pro-tiptap/commit/d53cfae401e6ee09847ba275e01a2b2fd0d85a18))
* **toolbar:** divider在dark模式下颜色问题 ([e35e0c0](https://github.com/yikoyu/vuetify-pro-tiptap/commit/e35e0c0a3a1292e79f5b22d582f798074fbdf60d))
* **toolbar:** 组件color和highlight不显示tooltip ([fbe8f84](https://github.com/yikoyu/vuetify-pro-tiptap/commit/fbe8f842d812d6adfdb99c11f1c207ac2dccd060))
* **vuetify:** 打开dialog rtl还原问题 ([6eb3863](https://github.com/yikoyu/vuetify-pro-tiptap/commit/6eb386384f7477eef801826bcc376ead5170ae01))
* **xss:** 标题无法使用对齐 ([b421b2c](https://github.com/yikoyu/vuetify-pro-tiptap/commit/b421b2c292db1eca7087ccdadc657abe710ee687))


### Features

* **logger:** console日志调用封装，warn和error进行统一设置 ([2edeb7c](https://github.com/yikoyu/vuetify-pro-tiptap/commit/2edeb7c83a4322fd2e314f4f3e1b8d0af815940a))
* 添加editor ([3067737](https://github.com/yikoyu/vuetify-pro-tiptap/commit/3067737edfdd4964dfd36aa9d7732a73eec34cb1))
