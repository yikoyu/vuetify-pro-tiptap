module.exports = {
  branches: ['master'], // 指定在哪个分支下要执行发布操作
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        "releaseRules": [
          { breaking: true,     release: "major" },
          { revert: true,       release: "patch" },
          { type: "feat",       release: "minor" },
          { type: "fix",        release: "patch" },
          { type: "perf",       release: "patch" },
          { type: "refactor",   release: "patch" },
          { type: "test",       release: "patch" },
          { type: "revert",     release: "patch" }
        ]
      }
    ], // 解析 commit 信息，默认就是 Angular 规范
    [
      '@semantic-release/release-notes-generator',
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [{
              type: "feat",
              section: "Features",
              hidden: false
            },
            {
              type: "fix",
              section: "Bug Fixes",
              hidden: false
            },
            {
              type: "perf",
              section: "Performance",
              hidden: false
            },
            {
              type: "refactor",
              section: "Refactor",
              hidden: false
            },
            {
              type: "test",
              section: "Tests",
              hidden: false
            },
            {
              type: "revert",
              section: "Revert",
              hidden: false
            },
            {
              type: "docs",
              section: "Docs",
              hidden: true
            },
            {
              type: "style",
              section: "Styles",
              hidden: true
            },
            {
              type: "build",
              section: "Build",
              hidden: true
            },
            {
              type: "ci",
              section: "CI/CD",
              hidden: true
            }
          ]
        }
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md' // 把发布日志写入该文件
      }
    ],
    [
      '@semantic-release/npm',
      // {
      //   npmPublish: false
      // }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'], // 前面说到日志记录和版本好是新增修改的，需要 push 回 Git
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
}