# TypeScript 日常技巧

## 调用第三方库类型

一般直接直接 import type 就能拿到

```ts
import type {} 'xxx三方库'
```

如果没有，找到第三方库的 package.json 中找 exports 下的 types

## DOM 的 TS 类型

常见 DOM 节点类型

- Element
- HTMLElement
- HTMLInputElement
- HTMLCanvasElement
- Node
- Text
- Document
- Window

事件相关类型

- Event：所有事件的基类
- MouseEvent：鼠标事件
- KeyboardEvent：键盘事件
- FocusEvent：焦点事件
- InputEvent：输入事件
