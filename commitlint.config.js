import { yikoyu } from '@yikoyu/commitlint-config'

export default yikoyu({
  rules: {
    ...yikoyu().rules,
    'footer-max-line-length': [0],
  },
})
