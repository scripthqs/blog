# TypeScript 模块化

TypeScript 最主要使用的模块化方案是 ES Module

## 非模块

JavaScript 规范声明任何没有 export 的 js 文件都应该被认为是一个脚本，而非一个模块。

- 在一个脚本文件中，变量和类型会被声明在共享的全局作用域，将多个输入文件合并成一个输出文件，或者在 HTML 使用多
  个 `<script>` 标签加载这些文件。

如果你有一个文件，现在没有任何 import 或者 export，但是你希望它被作为模块处理，添加这行代码：

```js
// 把js文件改成一个没有导出任何内容的模块
export {};
```

## 内置类型的导入

需要使用 type 前缀 ，表明被导入的是一个类型

```ts
import type { IDType, IPerson } from "./utils/type";
```

## 类型的查找

有一些类型，并不是我们自己编写的

```ts
const imageEl = document.getElementById("image") as HTMLImageElement;
```

HTMLImageElement 并不是我们自己编写的，但是又这个类型，是因为 ts 有自己的类型管理和查找规则。

typescript 有 3 个地方查找类型声明：

1. 内置类型声明
2. 外部定义类型声明(第三方库，Vue、React、axios)
3. 自己定义类型声明

### `.d.ts`文件

`.d.ts`文件用来做类型的声明(declare)，称之为类型声明或者类型定义文件。

- 该文件仅仅用来做类型检测，告知 typescript 我们有哪些类型

### 内置类型声明

内置类型声明是 ts 自带的，帮助我们内置了 js 运行时的一些标准化 API 的声明文件

- 包括比如 Function、String、Math、Date 等内置类型
- 包括运行环境中的 DOM API，比如 Window、Document 等

内置类型声明通常在我们安装 typescript 环境中带有，这些声明文件名称类似 `lib.[something].d.ts`

可以通过 target 和 lib 来决定哪些内置类型声明是可以使用的

### 外部定义类型声明

外部类型声明通常是我们使用一些库（比如第三方库）时，需要的一些类型声明，通常有两种类型声明方式

1. 在自己库中进行类型声明（编写.d.ts 文件），比如 axios
2. 通过社区的一个公有库 DefinitelyTyped 存放类型声明文件

   - <https://github.com/DefinitelyTyped/DefinitelyTyped/>
   - <https://www.typescriptlang.org/dt/search?search=>
   - 比如我们安装 react 的类型声明： `npm i @types/react --save-dev`

有些情况下需要自己来定义声明文件

- 我们使用的第三方库是一个纯的 JavaScript 库，没有对应的声明文件
- 我们给自己的代码中声明一些类型，方便在其他地方直接进行使用

```ts
//假设 lodash 没有对应的声明文件
// index.d.ts
declare module "lodash" {
  export function join(...args: any[]): any;
}
//index.ts
import _ from "lodash";
_.join(); //此时vscode中输入_就会有提示join的方法
```

## declare 声明

我们可以使用 declare 声明模块、变量、文件、空间等。

- 平时使用的代码中用到的类型, 直接在当前位置进行定义或者在业务文件夹某一个位置编写一个类型文件即可，不一定需要使用 declare

```ts
// 声明模块
declare module "lodash" {
  export function join(...args: any[]): any;
  export function push(...args: any[]): any;
}

// 为自己的 变量/函数/类 定义类型声明
declare const TName: string;
declare const TAge: number;
declare const THeight: number;

declare function foo(bar: string): string;

declare class Person {
  constructor(public name: string, public age: number);
}

// 作为一个第三方库为其他开发者提供类型声明文件 .d.ts => axios.d.ts

// 声明文件模块

// 在开发vue的过程中，默认是不识别我们的.vue文件的，需要对其进行声明
// declare module "*.vue";
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

// 开发中我们使用了 jpg 这类图片文件，默认typescript也是不支持的，也需要对其进行声明
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

// <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
// 通过cdn引入时，声明成模块(不合适)
// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any;
}
```
