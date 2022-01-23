# 组件

Uni-App 提供了丰富的基础组件给开发者，开发者可以像搭积木一样，组合各种组件拼接称自己的应用，Uni-App  中的组件，就像 `HTML` 中的 `div` 、`p`、`span` 等标签的作用一样，用于搭建页面的基础结构。

## 1 text 文本组件

- `text` 组件相当于行内标签、在同一行显示
- 除了文本节点以外的其他节点都无法长按选中

|    属性    |  类型   | 默认值 | 必填  |                      说明                      |
| :--------: | :-----: | :----: | :---: | :--------------------------------------------: |
| selectable | boolean | false  |  否   |                  文本是否可选                  |
|   space    | string  |   /    |  否   | 显示连续空格，可选参数：`ensp`、`emsp`、`nbsp` |
|   decode   | boolean | false  |  否   |                    是否解码                    |

## 2 view 视图容器组件

View 视图容器， 类似于 HTML 中的 div

- hover-class="box-active"  指定按下去的样式
- hover-stop-propagation 阻止冒泡
- hover-start-time="2000"  按住后多久出现点击态，单位毫秒
- hover-stay-time="2000" 手指松开后，持续的时间

## 3 button 按钮组件

|  属性名  |  类型   | 默认值  |           说明           |        可选值        |
| :------: | :-----: | :-----: | :----------------------: | :------------------: |
|   size   | String  | default |        按钮的大小        |     default/mini     |
|   type   | String  | default |      按钮的样式类型      | default/primary/warn |
|  plain   | Boolean |  false  | 按钮是否镂空，背景色透明 |                      |
| disabled | Boolean |  false  |         是否按钮         |                      |
| loading  | Boolean |  false  | 名称是否带 loading t图标 |                      |

`button` 组件默认独占一行，设置 `size` 为 `mini` 时可以在一行显示多个

## 4 image 图片组件

| 属性名 | 类型   | 默认值        | 说明                 |
| ------ | ------ | ------------- | -------------------- |
| src    | String |               | 图片资源地址         |
| mode   | String | 'scaleToFill' | 图片裁剪、缩放的模式 |

**Tips**：

- `<image>` 组件默认宽度 300px、高度 225px；
- `src` 仅支持相对路径、绝对路径，支持 base64 码；
- 页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 `image{will-change: transform}` ,可优化此问题。
