const { yikoyu } = require('@yikoyu/commitlint-config')

module.exports = yikoyu({
  rules: {
    ...yikoyu().rules,
    'footer-max-line-length': [0]
  }
})
