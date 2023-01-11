# Vue3 + TypeScript 后台管理系统

## 技术栈

- Vue3
- TypeScript
- Vite
- Vue Router
- Pinia
- Element plus
- Echarts

## 创建项目

两种方式：

1. 使用 Vue CLI，基于 Webpack，命令`vue create`
2. create Vue，基于 vite 工具，命令`npm init vue@latest`

注意：第二种方式需要 node 版本 16 及以上

![vue](https://raw.githubusercontent.com/scripthqs/assets/master/vue_create.png)

## 默认文件

- .vscode 文件夹：`extensions.json` 推荐的 vscode 插件，如果没有，vscode 会读取这个文件并且自动安装。

  - ```json
    {
      "recommendations": ["Vue.volar", "Vue.vscode-typescript-vue-plugin"]
    }
    ```

- node_modules：node 相关依赖

- public：在这文件夹中的资源打包时会原封不动的打包到 dist 文件夹

  - `favicon.ico`站点图标

- src：源代码文件夹

- .eslintrc.cjs：代码规范

- .gitignore：git 忽略文件
- .prettierrc.json：代码格式化
- env.d.ts：类型声明文件
- package-lock.json：锁定依赖的版本
- package.json：记录相关的依赖
- readme.md：记录文档
- tsconfig.json：ts 配置文件，这个文件生成后不建议修改（不一定）
- tsconfig.config.json：tsconfig.json 引入的 ts 配置文件，其它单独的配置建议在这里面修改
- vite.config.ts：配置 vite 的文件，等同于 cli 的 vue.config.ts，tsconfig.config.json 中引入了这个文件
- index.html：入口文件

## 项目配置

- 配置项目的 icon
- 配置标题
- 配置别名（vite 默认配置)
- 配置 tsconfig.json

## 代码规范

### .editorconfig

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

- 这个文件默认配置是没有的，可以手动新建`.editorconfig`文件
- VSCode 需要安装一个插件：EditorConfig for VS Code

```yam
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

### prettier

Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

- 使用命令行新建项目的时候，默认可以选择 prettier

如果没有选择，可以手动安装

1. 安装 prettier

   ```shell
   npm install prettier -D
   ```

2. 配置.prettierrc 文件

   ```shell
   {
     "useTabs": false,
     "tabWidth": 2,
     "printWidth": 80,
     "singleQuote": true,
     "trailingComma": "none",
     "semi": false
   }
   ```

3. json 文件不能添加注释，下面是说明

   ```shell
   {
     "useTabs": false,//使用tab缩进还是空格缩进，选择false；
     "tabWidth": 2,//tab是空格的情况下，是几个空格，选择2个；
     "printWidth": 80,//当行字符的长度，推荐80，也有人喜欢100或者120；
     "singleQuote": true,//使用单引号还是双引号，选择true，使用单引号；
     "trailingComma": "none",//在多行输入的尾逗号是否添加，设置为 `none`，比如对象类型的最后一个属性后面是否加一个，
     "semi": false//：语句末尾是否要加分号，默认值true，选择false表示不加；
   }
   ```

4. 创建`.prettierignore`忽略文件(也可以不用)

   ```json
   /dist/*
   .local
   .output.js
   /node_modules/**

   **/*.svg
   **/*.sh

   /public/*
   ```

5. 测试是否生效

   - 测试一：安装 prettier 插件，在代码中保存代码；
   - 测试二：配置一次性修改的命令；

   在 package.json 中配置一个 scripts：

   ```json
    "prettier": "prettier --write ."
   ```

6. vscode 中需要配置
   - format on save
   - editor default format

### ESLint

ESLint 可以检测不规范的代码

- 创建项目的时候，选择了 ESLint，所以 Vue 会默认帮助我们配置需要的 ESLint 环境。

如果没有选择 ESLint，可以手动安装

1. 项目中安装插件：（vue 在创建项目时，如果选择 prettier，那么这两个插件会自动安装）

   ```shell
   npm install eslint-plugin-prettier eslint-config-prettier -D
   ```

2. 配置`.eslintrc.cjs`文件

   ```json
   /* eslint-env node */
   require('@rushstack/eslint-patch/modern-module-resolution')

   module.exports = {
     root: true,
     extends: [
       'plugin:vue/vue3-essential',
       'eslint:recommended',
       '@vue/eslint-config-typescript',
       '@vue/eslint-config-prettier'
     ],
     parserOptions: {
       ecmaVersion: 'latest'
     }
   }
   ```

3. 解决 eslint 和 prettier 冲突，在`.eslintrc.cjs`文件`extends`下添加`'plugin:prettier/recommended'`

   ```json
   /* eslint-env node */
   require('@rushstack/eslint-patch/modern-module-resolution')

   module.exports = {
     root: true,
     extends: [
       'plugin:vue/vue3-essential',
       'eslint:recommended',
       '@vue/eslint-config-typescript',
       '@vue/eslint-config-prettier',
        'plugin:prettier/recommended'
     ],
     parserOptions: {
       ecmaVersion: 'latest'
     }
   }
   ```

4. vscode 配置完需要重启，修改了配置也需要重启（vscode 快捷键 ctrl + p 再输入`>`)

5. 配置 eslint 的规则， 在`.eslintrc.cjs`文件中新增`rules`

   复制（vscode 按住 alt）不想要的 eslint 不想要的提示，加入`rules`中`off`

   ```json
   /* eslint-env node */
   require("@rushstack/eslint-patch/modern-module-resolution");

   module.exports = {
     root: true,
     extends: [
       "plugin:vue/vue3-essential",
       "eslint:recommended",
       "@vue/eslint-config-typescript",
       "@vue/eslint-config-prettier",
       "plugin:prettier/recommended"
     ],
     parserOptions: {
       ecmaVersion: "latest"
     },
     rules: {
       "@typescript-eslint/no-unused-vars": "off"
     }
   };
   ```

### 重置 css

1. 安装 normalize.css 库

   ```shell
   npm i normalize.css
   ```

2. 在 main.ts 中引入

   ```ts
   import "normalize.css";
   ```

## 目录结构

### assets

静态资源文件夹，存放 css 和 img 等

- 在 css 文件夹下新建 index.less 文件

- ```less
  @import "./reset.less";
  @import "./common.less"; //在index.less中引入其他css
  ```

- ```ts
  import "./assets/css/index.less"; //在main.ts中引入index.less
  ```

- ```shell
  npm i less -D //需要安装，不然报错，开发时依赖
  ```

### router

- ```shell
  npm i vue-router
  ```

- 新建 router 文件夹，配置路由

### store

使用 pinia 进行状态管理

- ```shell
  npm i pinia
  ```

- 新建 store 文件夹

### service

- ```ts
  npm i axios
  ```

- 新建 service 文件夹

区分开发环境（ development）和生产环境（production ），需要学习 vite 的环境变量

```ts
// 1.手动注释，过分依赖人为修改
// export const BASE_URL = 'http://aaa.dev:8000'
// export const BASE_URL = 'http://aaa.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// vite 默认提供的环境变量
console.log(import.meta.env.MODE)//development
console.log(import.meta.env.DEV, "是否开发环境");
console.log(import.meta.env.PROD, "是否生产环境");
console.log(import.meta.env.SSR, "是否是服务器端渲染(server side render)");

//3. 创建.env文件
//.env文件，开发环境和生成都使用
//创建.env.development 开发环境
//创建.env.production 生成环境
只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。

```

### prettier 配置

```json
  // "prettier.printWidth": 180, // 超过最大值换行
  // "prettier.tabWidth": 2, // 缩进字节数
  // "prettier.useTabs": false, // 缩进不使用tab，使用空格
  // "prettier.semi": true, // 句尾添加分号
  // "prettier.singleQuote": true, // 使用单引号代替双引号
  // "prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号，不加
  // "prettier.arrowParens": "avoid", // prettier- (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  // "prettier.bracketSpacing": true,
```

## 组件库

安装 element plus

```js
npm install element-plus --save
```

### 全局引入（简洁方便）

```ts
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

在tsconfig.json中配置;
// "types": ["element-plus/global"]//全局导入引入
```

### 按需引入（优化）

> 首先你需要安装`unplugin-vue-components`和 `unplugin-auto-import`这两款插件

```ts
npm install -D unplugin-vue-components unplugin-auto-import
//unplugin-auto-import //自动导入
//unplugin-vue-components //识别用哪些组件
```

安装后，项目目录会多两个文件（自动声明，不需要手动修改）

- auto-imports.d.ts
- components.d.ts

安装后在 vite.config.ts 文件中配置

```ts
// vite.config.ts
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
```

然后在 tsconfig.json 中配置(**ts 需要配置这一步**)，此时就有了类型提示

```ts
{
  //告诉ts哪些文件需要编译
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "auto-import.d.ts", "components.d.ts"],
}
```

此时，vue 中写的 templeate 写的 el 组件，会在 components.d.ts 自动导入。

但是类似 ElMessage 这种写在 script 中的组件不会自动导入。
