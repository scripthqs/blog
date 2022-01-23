# 目录结构和配置

## 1 项目目录结构解析

`pages.json` 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等

`manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。

`App.vue`是根组件，所有页面都是在`App.vue`下进行切换的，是页面入口文件，可以调用应用的生命周期函数。

`main.js`是我们的项目入口文件，主要作用是初始化`vue`实例并使用需要的插件。

`uni.scss`文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，`uni.scss`文件里预置了一批scss变量预置。

`unpackage` 就是打包目录，在这里有各个平台的打包文件。

`pages` 所有的页面存放目录。

`static` 静态资源目录，例如图片等。

`components` 组件存放目录。

## 2 Uni-App 开发规范

为了实现多端兼容，综合考虑编译速度、运行性能等因素，`uni-app` 约定了如下开发规范：

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.io/component/README)
- 接口能力（JS API）靠近微信小程序规范，但需将前缀 `wx` 替换为 `uni`，详见[uni-app接口规范](https://uniapp.dcloud.io/api/README)
- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期
- 为兼容多端运行，建议使用 flex 布局进行开发

## 3 全局配置和页面配置

uniapp中的局配置和页面配置都在 pages.json 文件中进行配置，.json文件是一个对象 `{}`

### 1 globalStyle

通过 globalStyle 进行全局配置。用于设置应用的状态栏、导航条、标题、窗口背景色等。[详细文档](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)

| 属性                         | 类型     | 默认值  | 描述                                                                                                                                                           |
| ---------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| navigationBarBackgroundColor | HexColor | #F7F7F7 | 导航栏背景颜色（同状态栏背景色）                                                                                                                               |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜色及状态栏前景颜色，仅支持 black/white                                                                                                             |
| navigationBarTitleText       | String   |         | 导航栏标题文字内容                                                                                                                                             |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                                                                                                                                   |
| backgroundTextStyle          | String   | dark    | 下拉 loading 的样式，仅支持 dark / light                                                                                                                       |
| enablePullDownRefresh        | Boolean  | false   | 是否开启下拉刷新，详见[页面生命周期](https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)。                                 |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位只支持px，详见[页面生命周期](https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f) |

```json
 "globalStyle": {
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "吃饭睡觉",
  "navigationBarBackgroundColor": "#aa0000",
  "backgroundColor": "#000000",
  "app-plus": {
   "background": "#efeff4"
  }
 }
```

### 2 新建页面

右键 pages 新建 message 目录，在 message 目录下右键新建 .vue 文件，并选择基本模板。

```vue
<template>
 <view>这是一条信息</view>
</template>

<script>
</script>

<style>
</style>
```

### 3 pages

通过 pages.json 来配置页面的路径和样式

| 属性  | 类型   | 描述                                                                                          |
| :---- | :----- | --------------------------------------------------------------------------------------------- |
| path  | String | 配置页面路径                                                                                  |
| style | Object | 配置页面窗口表现，配置项参考 [pageStyle](https://uniapp.dcloud.io/collocation/pages?id=style) |

```json
 "pages": [
  {
   "path": "pages/message/message",
   "style":{
    "navigationBarTitleText": "喝水"
   }
  },
  {
   "path": "pages/index/index"
  }
 ],
```

### 4 tabBar

配置 tabbar，如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页。

**Tips**：

- 当设置 position 为 top 时，将不会显示 icon
- tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。

| 属性            | 类型     | 必填 | 默认值 | 描述                                                 | 平台差异说明              |
| --------------- | -------- | ---- | ------ | ---------------------------------------------------- | ------------------------- |
| color           | HexColor | 是   |        | tab 上的文字默认颜色                                 |                           |
| selectedColor   | HexColor | 是   |        | tab 上的文字选中时的颜色                             |                           |
| backgroundColor | HexColor | 是   |        | tab 的背景色                                         |                           |
| borderStyle     | String   | 否   | black  | tabbar 上边框的颜色，仅支持 black/white              | App 2.3.4+ 支持其他颜色值 |
| list            | Array    | 是   |        | tab 的列表，详见 list 属性说明，最少2个、最多5个 tab |                           |
| position        | String   | 否   | bottom | 可选值 bottom、top                                   | top 值仅微信小程序支持    |

其中 list 接收一个数组，数组中的每个项都是一个对象，其属性值如下：

| 属性             | 类型   | 必填 | 说明                                                                                                                    |
| ---------------- | ------ | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| pagePath         | String | 是   | 页面路径，必须在 pages 中先定义                                                                                         |
| text             | String | 是   | tab 上按钮文字，在 5+APP 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标                                          |
| iconPath         | String | 否   | 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片，不支持字体图标 |
| selectedIconPath | String | 否   | 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 position 为 top 时，此参数无效                        |

```json
"tabBar":{
  "color":"#1785FF",
  "selectedColor":"#FF0000",
  "position":"top",
  "list":[
   {
    "text":"首页",
    "pagePath": "pages/index/index",
    "iconPath":"static/c1.png",
    "selectedIconPath":"static/c2.png"
   },
   {
    "text":"信息",
    "pagePath": "pages/message/message",
    "iconPath":"static/c3.png",
    "selectedIconPath":"static/c4.png"
   },
   {
    "text":"我们",
    "pagePath": "pages/contact/contact",
    "iconPath":"static/c5.png",
    "selectedIconPath":"static/c6.png"
   }
  ]
 }
```

### 5 condition

启动模式配置 condition，启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。

**属性说明：**

| 属性    | 类型   | 是否必填 | 描述                             |
| ------- | ------ | -------- | -------------------------------- |
| current | Number | 是       | 当前激活的模式，list节点的索引值 |
| list    | Array  | 是       | 启动模式列表                     |

**list说明：**

| 属性  | 类型   | 是否必填 | 描述                                                                                                                             |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| name  | String | 是       | 启动模式名称                                                                                                                     |
| path  | String | 是       | 启动页面路径                                                                                                                     |
| query | String | 否       | 启动参数，可在页面的 [onLoad](https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f) 函数里获得 |

```json
"condition":{
  "current": 0,
  "list":[
   {
    "name":"详情页",
    "path": "pages/detail/detail",
    "query":"id=80"
   }
  ]
 }
```
