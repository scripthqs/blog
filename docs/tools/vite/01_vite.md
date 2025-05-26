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
