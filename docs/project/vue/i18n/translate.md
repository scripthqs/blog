# Vue翻译方案


## 原始方案

Vue2 项目都是通过 [vue-i18n](https://kazupon.github.io/vue-i18n/) 来实现的，这个库的使用方式也很简单，就是在组件中使用 `$t` 方法来获取翻译后的文本。

但是我们在使用的过程中，发现了一些问题：

1. 国际化命名没有统一的命名规范，可能会导致一条相同的翻译，被写了多次
2. Key 经常会重复，导致添加翻译的时候，需要去查找是否已经存在了
3. 页面里翻译使用的是 Key 值，不利于开发人员理解，查找问题时无法直接定位到页面
4. 添加翻译时，需要在代码中添加，如果翻译文件较多，需要多次添加，效率低下
本方案基于：https://blog.csdn.net/qq_40259641/article/details/124382298，并在此基础上做了一些改进。

1. 使用 i18next-scanner 来扫描项目中的翻译，生成翻译文件

2. 魔改 vue-i18n，使用中文作为 Key 值，方便开发人员理解

  实际翻译时，是通过中文生成的 Key 值来获取翻译的，可以解决后端存储时的编码问题

3. 当 Key 为中文时，直接使用中文作为翻译，不需要再去翻译

4. 兼容默认的 key 模式，如果使用默认的 key 模式，不会影响到翻译的使用

## 代码

1. Vue-i18n 修改代码：

```js
import { crc32 } from 'crc'
import VueI18n from 'vue-i18n'

export class I18n extends VueI18n {
  constructor(...params) {
    super(...params)

    const oldParsePath = this._path.parsePath.bind(this._path)

    // custom the path key parser
    this._path.parsePath = (path, ...args) => {
      let key = path

      if (path && /[\u4E00-\u9FFF]/.test(path)) {
        key = this.getKeyForPath(path)
      }

      return oldParsePath(key, ...args)
    }
  }

  getKeyForPath(path) {
    return `K${crc32(path).toString(16)}`
  }
}
```

2. i18next-scanner 配置：

```js
const fs = require('fs')
const path = require('path')
const { crc32 } = require('crc')

module.exports = {
  input: [
    'src/**/*.{htm,html,js,jsx,vue}',
    '!src/components/business/TrUser/**',
    '!src/components/feature/TrEditTree/**',
    '!src/i18n/**',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: false,
    sort: true,
    removeUnusedKeys: true,
    attr: false,
    func: false,
    trans: false,
    lngs: ['en', 'zh'],
    ns: ['app', 'base'],
    defaultLng: 'zh',
    defaultNs: 'app',
    defaultValue: '__NOT_TRANSLATED__',
    resource: {
      loadPath: 'src/i18n/lang/{{lng}}/{{ns}}.json',
      savePath: 'src/i18n/lang/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: ':',
    keySeparator: '.',
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  transform: function customTransform(file, enc, done) {
    const parser = this.parser

    const extname = path.extname(file.path)
    const content = fs.readFileSync(file.path, enc)

    const parseKey = (key, options) => {
      if (key && /[\u4E00-\u9FFF]/.test(key)) {
        const newKey = `K${crc32(key).toString(16)}`

        parser.set(`app:${newKey}`, {
          ...options,
          defaultValue: key,
        })
      } else {
        // add prefix to split base and app
        parser.set(`base:${key}`, options)
      }
    }

    parser.parseFuncFromString(content, { list: ['$t', '$tc', '$te', 'i18n.t'] }, parseKey)
    // add support for vue-i18n interpolation
    // https://kazupon.github.io/vue-i18n/guide/interpolation.html
    if (['.vue', '.htm', '.html'].includes(extname)) {
      parser.parseAttrFromString(content, { list: ['path'] }, parseKey)
    }

    if (['.jsx'].includes(extname)) {
      parser.parseTransFromString(content, { component: 'I18n', i18nKey: 'path' }, parseKey)
    }

    done()
  },
}
```

3. 使用 Vite 动态导入翻译文件

```js
const jsonFiles = import.meta.globEager('./lang/**/*.json', { eager: true })

const localeMap = Object.keys(jsonFiles).reduce((acc, file) => {
  const match = file.match(/\.\/lang\/(.+)\/.+\.json$/i)

  const lang = match[1]

  return { ...acc, [lang]: { ...acc[lang], ...jsonFiles[file] } }
}, {})
```
