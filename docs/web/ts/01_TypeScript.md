# TypeScript 简介

1. TypeScript 是 JavaScript 的超集。
2. 它对 JS 进行了扩展，向 JS 中引入了类型的概念，并添加了许多新的特性。
3. TS 代码需要通过编译器编译为 JS，然后再交由 JS 解析器执行。
4. TS 完全兼容 JS，换言之，任何的 TS 代码都可以直接当成 JS 使用。
5. TypeScript 始于 JavaScript，归于 JavaScript。

相较于 JS 而言，TS 拥有了静态类型，更加严格的语法，更强大的功能；TS 可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS 代码可以编译为任意版本的 JS 代码，可有效解决不同 JS 运行环境的兼容问题；同样的功能，TS 的代码量要大于 JS，但由于 TS 的代码结构更加清晰，变量类型更加明确，在后期代码的维护中 TS 却远远胜于 JS。

- Vue3 源码采用了 TypeScript 进行重写，在阅读源码时会看到大量 TypeScript 的语法
- 编辑器 VSCode 也是使用 TypeScript 来完成的
- 在 React 中已经使用的 ant-design 的 UI 库，也大量使用 TypeScript 来编写
- 目前公司非常流行 Vue3+TypeScript、React+TypeScript 的开发模式
- 包括小程序开发，也是支持 TypeScript 的

## TypeScript 开发环境搭建

Ts 最终会被编译成 Js 来运行，所以需要搭建对应的环境。

1. 下载 Node.js
2. 安装 Node.js
3. 使用 npm 全局安装 typescript
   - 进入命令行
   - 输入：npm i -g typescript
   - 查看版本：tsc --version
4. 创建一个 ts 文件
5. 使用 tsc 对 ts 文件进行编译
   - 进入命令行
   - 进入 ts 文件所在目录
   - 执行命令：tsc xxx.ts
6. 在浏览器或者 Node 环境运行 Js 代码

为了方便可以配置一些环境

- 方式 1：通过 webpack，配置本地 Ts 编译环境和开启一个本地服务，可以直接运行到浏览器。
- 方式 2：通过 ts-node 库，为 TS 的运行提供执行环境。

```bash
# 安装ts-node
npm install ts-node -g
# ts-node需要依赖 tslib 和 @types/node 两个包
npm install tslib @types/node -g
# 通过 ts-node 来运行TypeScript的代码
ts-node math.ts
```
