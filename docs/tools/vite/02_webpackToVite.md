# webpack -> vite

## vue-cli(webpack)升级 vite 攻略

为什么要升级?

项目越来越大,原有的编译速度越来越慢,严重影响开发效效率,而 Vite 以原生 ESM 方式提供源码,让浏
览器接管了打包程序的部分工作,节省了这部分的打包时间同,从而编译起来显得快多了。

- <https://vitejs.dev/guide/why.html>

- 提升编译构建速度 26 倍

## 去掉之前 webpack 相关依赖

1. 首先需要把 node_modules 删掉，
2. 更新 package.json，如果直接安装 vite，可能装不上，需要把开发依赖 devDependencies 去掉
3. 删掉 webpack 之前相关的 babel.config.js，jsconfig.json，eslintConfig、eslintrc、postcss

## 升级 vue

vue 2.7.14 版本以上

```js
"vue": "2.7.16"
"vue-template-compiler": "2.7.16"
```

## 安装 vite 相关依赖

```js
"@vitejs/plugin-vue2": "2.3.1",
"@vitejs/plugin-vue2-jsx": "1.1.1",
"vite": "5.0.12",
"vite-plugin-commonjs": "0.10.1",
"vite-plugin-html": "3.2.0",
"vite-plugin-node-polyfills": "0.19.0",
"vite-plugin-require": "1.1.14",
"vite-plugin-svg-icons": "2.0.1",
"path-browserify": "^1.0.1",
```

## 配置 vite.config.js

- 配置代理 devServe=>server
- 配置别名 resolve.alias
- 自动为文件加后缀 resolve.extensions、
- 更新环境变量， process.env 为 import.meta.env
- 定义全局 sass 文件：css.preprocessorOptions.scss.additionalData
- 降级 sass1.5
- commonjs 不支持，使用 vite-plugin-commonjs

### index.html

在根目录创建模版 index.html，使用 vite-plugin-html，
修改原来的 html 模板变量，引入 script modules main.js

```js
<script type="module" src="/src/main.js"></script>
```

## 常见的问题

- Can't find stylesheet to import：

```js
解决：@import "~@/styles 改成 @import "@/styles
```

- This experimental syntax requires enabling one of the following parser plugin(s): "jsx", "flow", "typescript"

```js
解决：script 标签添加 lang="jsx"
```

- require is not defined

```js
解决：require.context 替换为 import.meta.glob，只支持静态字面量，不支持 alias
```

- The requested module '/src/styles/element-variables.scss' does not provide an export named 'default'

```js
解决：element-variables.scss 改成 element-variables.module.scss
```
