# 使用自定义工具包

## 下载工具包

```shell
npm install hqs-utils
```

## 网页中引入并使用

```html
<script src="./node_modules/hqs-utils/dist/hqs-utils.js"></script>
<script>
  utils.test();
</script>
```

## 模块化引入并使用

```js
// 使用ESM引入
import {test} from 'hqs-utils'
test()

// 使用commonjs引入
const {test} = require('hqs-utils)
test()
```
