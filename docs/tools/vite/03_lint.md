# 前端集成规范

## eslint

```bash
npm install eslint@8.22.0 -D
npm install eslint-plugin-vue@8.6.0 -D
npm install eslint-config-prettier@8.5.0 -D
npm install eslint-plugin-prettier@4.0.0 -D
npm install prettier@2.6.2 -D
```

### 官方文档

[https://zh-hans.eslint.org/](https://zh-hans.eslint.org/) <br/>
[https://eslint.org/](https://eslint.org/)

### 配置文件

核心配置

- extends:拓展，把当前配置和别人写好的配置合并
- rules:规则，用于定于一条条 eslint 规则
- plugins:插件，引入第三方检验插件，插件本身不会生效，只有在 rules 里引用了插件提供的规则才会生效。。

配置可以写在 package.json 文件和单文件（yml,cjs,js）中

package.json 权重最小，js 文件最高，文件一般叫.eslintrc.js（旧版 8.0） 或者 eslint.config.js（新版 9）,eslintignore 忽略检查文件。

```js
// 如果是eslintrc.js格式，需要
module.exports = {};
// 如果是eslintrc.json格式，直接导出对象
{
}
```

```js
// .eslintrc.js
module.exports = {
  // 指定环境
  env: {
    // 可以使用浏览器的全局变量
    browser: true,
    // 添加所有 ECMAScript 2021 的全局变量，并自动将解析器选项 ecmaVersion 设置为 12
    es2021: true,
    // 添加node全局变量
    node: true,
  },
  // 自定义全局变量
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    $confirm: "readonly",
    $message: "readonly",
    $notify: "readonly",
    $alert: "readonly",
    $storage: "readonly",
    $loading: "readonly",
    localStorage: "off",
    sessionStorage: "off",
  },
  // vue文件解析器
  parser: "vue-eslint-parser",
  parserOptions: {
    // es 语法的版本
    ecmaVersion: "latest",
    // 代码类型
    sourceType: "module",
  },
  extends: [
    "./.eslintrc-auto-import.json",
    // https://zh-hans.eslint.org/docs/latest/rules/ 推荐配置
    "eslint:recommended",
    // https://eslint.vuejs.org/
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    // https://github.com/prettier/eslint-plugin-prettier
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "prettier"],
  rules: {
    // 校验prettier规则
    "prettier/prettier": "warn",
    // 箭头函数规范
    "arrow-body-style": "off",
    // 使用箭头函数作为参数传递
    "prefer-arrow-callback": "off",
    // debugger
    "no-debugger": "off",
    // 为空的代码块
    "no-empty": "off",
    // 未使用的变量
    "no-unused-vars": "off",
    // 强制使用===
    eqeqeq: ["error", "always"],
    // 组件命名格式
    "vue/multi-word-component-names": "off",
    "vue/no-unused-components": "off",
    "vue/no-unused-vars": "off",
    // 组件参数格式
    "vue/max-attributes-per-line": "off",
    // 单个标签内容格式
    "vue/singleline-html-element-content-newline": "off",
  },
};
```

```bash
# .eslintignore
dist
node_modules
package.json
```

```js
// vite.config.js
// 使用vite-eslint-plugin插件
export default defineConfig(({ mode, command }: ConfigEnv) => {
  return {
    plugins: [
      AutoImport({
        // 自动导入配置开启eslintrc，避免变量未定义报错
        eslintrc: {
          enabled: true,
        },
        imports: ["vue", "vue-router", "pinia"],
        dts: true,
      }),
    ],
  };
});
```

### 忽略规则

```js
alert("foo"); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert("foo");

alert("foo"); /* eslint-disable-line no-alert */

/* eslint-disable-next-line no-alert */
alert("foo");
```

### 命令

```json
"script": {
  "lint": "eslint . --ext --fix .vue,.js"
}
```

## prettier

```bash
npm install prettier -D
```

### 官方文档

[https://prettier.io/](https://prettier.io/)

### 配置文件

```js
// .prettierrc
{
 // 每行代码数量
  "printWidth": 120,
  // 缩进的空格个数
  "tabWidth": 2,
  // 制表符使用空格
  "useTabs": false,
  // 末尾分号
  "semi": false,
  // 换行符
  "endOfLine": "auto",
  // 单引号
  "singleQuote": true,
  // 对象末尾始终携带逗号
  "trailingComma": "all",
  // 对象大括号带空格
  "bracketSpacing": true,
  // 箭头符号参数始终带括号
  "arrowParens": "always",
}

// .prettierignore
dist
node_modules
.eslintignore
.prettierignore
```

### 格式化命令

```bash
prettier --write src/
```

## stylelint

## husky commitlint lint-staged

```bash
npm install husky lint-staged @commitlint/cli @commitlint/config-conventional -D
```

### 文档

- [https://typicode.github.io/husky/zh/](https://typicode.github.io/husky/zh/)
- [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)
- [https://www.npmjs.com/package/@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

### package.json 配置

```json
{
  "script": {
    "prepare": "husky",
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": ["eslint --fix", "prettier --write"]
  }
}
```

### husky 初始化

```bash
npx husky init
```

### commitlint 配置

```js
// .commitlintrc.js
// https://www.npmjs.com/package/@commitlint/config-conventional
// [
//   'build',
//   'chore',
//   'ci',
//   'docs',
//   'feat',
//   'fix',
//   'perf',
//   'refactor',
//   'revert',
//   'style',
//   'test'
// ];
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```

### 脚本文件

```bash
# .husky/commit-msg
npx --no -- commitlint --edit ${1}
```

```bash
# .husky/pre-commit
npx lint-staged
```

## 限定 node 和 npm 等包管理工具版本

在 package.json 中添加 engines 字段，指定 node 和 npm 的版本范围：

```js
{
  "engines": {
    "node": ">=16.0.0 <19.0.0",
    "npm": ">=7.0.0"
  }
}
```

.nvmrc

```js
18.16.0
```
