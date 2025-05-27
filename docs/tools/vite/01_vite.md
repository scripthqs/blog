# vite

vite 官方文档：<https://cn.vitejs.dev/>

特点：启动速度快

构建代码的底层是通过 rollup 实现的

- webpack 支持多种模块化代码，他必须要统一模块化，意味着他需要将所有依赖读一遍。
- vite 基于 es modules，webpack 侧重兼容性

## 构建工具

- 处理 typescript
- react/vue
- less/sass/component-style: less-loader,sass-loader
- 语法降级 babel
- 体积优化 uglifyJs

## 浏览器支持 ESM

```json
1、天然支持 html、css、js 文件
2、对于js文件
  只加载 "/"、 "./"、"../"
  不识别 import、require （浪费性能、避免递归查询）
3、webapck
  a、将 EMS、commonjs 都转为 webpack.require() 自己的模式加载
  b、webpack 先进行整体的构建，再开启一个服务器
  c、vite 先启动一个服务器，再依据入口依次加载依赖模块
```

vite 加载非相对路径：esm、commonjs

```js
1、vite会做路径补全：
  /node_modules/.vite/deps/lodash.js
2、依赖预构建
  a、使用 esbuild 都转化为 esm 的方式，放到 /node_modules/vite/deps...
  b、内部使用时，直接引入 /node_modules/.vite/deps...
  c、解决了网络多包传输的问题：common、esm 直接转 var ...
    例如：export {default as a} from './a'
    转为：function a(){}
```

## create-vite 和 vite

create-vite 内置 vite

## 依赖预加载

vite 找到对应的依赖，然后调用 esbuild（对 js 语法进行处理的库），将其他规范代码转换成 esmodule 规范，然后放在当前目录下的 node_modules/.vite/deps

1. 不同的第三方包会有不同的导出格式
2. 对路径的出来可以直接使用.vite/deps，方便路径重写
3. 网络多包传输的性能问题(原生 esmodule 规范不敢支持 node_modules 原因)，有了依赖预构建无论多少额外 export 和 import，vite 都会尽可能进行集成，最后只生成一个或几个模块

## 环境变量

在 vite.config.js 中，即 node 服务端

内置 dotenv 第三方库会自动读取.env 文件，并解析这个文件对应的环境变量，并注入到 process 对象下（考虑到和其他配置冲突，不会直接注入到 process 下）

- root
- envDir:用来配置当前环境变量的文件地址

可以调用 vite 的 loadEnv 来手动确认 env 文件，process.cwd 方法：返回当前 node 进程的工作目录

- .env：所有环境都用的
- .env.development:开发环境，vite 默认取名 development
- .env.product:生产环境，vite 默认取名 product

在客户端，vite 会将环境变量注入到 import.meta.env 里面去，但是 vite 做了一个拦截，保护隐私性变量。必须要以 VITE 开头，才会注入到客户端去，如果我们想要改这个前缀，可以使用 envPrefix 配置

## vite 处理 css 模块

1. 读取引入的 style.css
2. 使用 fs 模块去读取 style.css 中文件内容
3. 直接创建一个 style 标签，将 style.css 的内容直接 copy 到 style 标签中
4. 将 style 标签插入到 index.html 的 head 中
5. 将 css 内容直接替换为 js 脚本（方便热更新或者 css 模块化），同时设置 content-type 为 js，让浏览器以 js 脚本形式来执行该 css

cssmodule 的原理

- componentA.module.css
- componentB.module.css

1. module.css 是一种约定，代表开启 css 模块化
2. 将所有类名进行一定规则的替换(`footer -> _footer_i22st_1`)
3. 同时创建一个映射对象`{footer:'_footer_i22st_1'}`
4. 同时将替换后的内容射到 style 标签中放到 head 标签中
5. 将 componentA.module.css 内容完全抹除，替换成 js 脚本
6. 将创建的映射对象在脚本中默认导出

vite.config.js 通过 css 属性控制 vite 对 css 的处理

css.module:css 模块化处理

- localConvention:模块类名格式
- scopeBehaviour：local 模块化 global 全局化
- generateScopedName:自定义生成的类名格式，可以是函数
- hashPrefix:自定义生成的类名前缀
- globalModulePaths:指定全局样式的路径

css.preprocessorOptions：css 预处理器配置

- less.math:启用数学运算
- globalVars: 全局变量

css.devSourcemap:文件索引

- 代码被压缩或者编译过，程序报错，不会产生正确的错误位置信息，如果设置了 sourceMap 就会生成一个索引文件

## postcss 后处理器

保证 css 执行是万无一失的

1. 处理 css 的兼容性
2. 前缀补全

```js
npm i postcss-cli postcss -D
```

css.postcss:一般需要配置 plugins

- postcss-preset-env:支持 css 变量和未来的 css 语法，自动补全

## vite 处理静态资源

vite 图片和 json 、svg 都可以直接导入

```js
// tree shaking 打包工具自动帮助移除没有用到的方法和变量
import _ from "lodash";
_.deepClone;

import { deepClone } from "lodash";

// json也可以解构导入
import { name } from "test.json";
```

resolve.alias:别名原理就是做一个字符串替换

## vite 对生产环境静态资源的处理

打包的静态资源资源文件为什么要 hash？浏览器缓存机制，静态资源名字只要不改，就会直接用缓存的。刷新页面会读取缓存。

hash 算法：将一串字符串经过运算得到一个新的乱码字符串，利用 hash 算法就可以更好的控制浏览器缓存机制

## vite 插件

vite 会在生命周期的不同阶段调用不同的插件达到目的

vite-aliases：自动生成别名，检测 src 在内的所有文件夹，生成别名。插件需要在 vite 执行配置文件之前去改写配置文件。vite 插件必须返回 vite 一个配置对象，为了让插件扩展性更高，设计成函数。

vite 内置了很多插件

## vue-cli(webpack)升级 vite 攻略

为什么要升级?

项目越来越大,原有的编译速度越来越慢,严重影响开发效效率,而 Vite 以原生 ESM 方式提供源码,让浏
览器接管了打包程序的部分工作,节省了这部分的打包时间同,从而编译起来显得快多了。

- <https://vitejs.dev/guide/why.html>

- 提升编译构建速度 26 倍

## webpack -> vite

1. 在根目录创建模版 index.html
2. 安装相关依赖，支持低版本浏览器的 babel、处理 vue、jsx、svg 的插件
3. 更新 package.json
4. 升级 vue 2.7.14 版本以上
5. 配置 vite.config.js，配置别名、自动为文件加后缀、plugins、自定义 env 前缀、构建配置
6. 更新 process.env 为 import.meta.env
7. require.context 替换为 import.meta.glob，只支持静态字面量，不支持 alias
