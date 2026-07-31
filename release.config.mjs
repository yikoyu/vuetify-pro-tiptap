import { yikoyu } from '@yikoyu/semantic-release-config'

export default yikoyu({
  branches: ['master', { name: '2.8.x', range: '2.8.x', channel: 'v2-latest' }], // 指定在哪个分支下要执行发布操作
})
