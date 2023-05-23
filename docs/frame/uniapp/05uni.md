# 样式

## rpx

Uni-App 使用 作为单位。rpx 即响应式px，一种根据屏幕宽度自适应的动态单位。以750宽的屏幕为基准，750rpx恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大。

## @import

使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用`;`表示语句结束

```js
    @import url("@/static/style.css");
    @import '@/static/style.css';
```

## 选择器

支持基本常用的选择器 class、id、element 等，在 `uni-app` 中不能使用 `*` 选择器。

## page

`page` 相当于 `body` 节点。定义在 **App.vue** 中的样式为**全局样式**，作用于每一个页面。在 **pages 目录下** 的 vue 文件中定义的样式为**局部样式**，只作用在对应的页面，并会覆盖 App.vue 中相同的选择器。

## 字体图标

`uni-app` 支持使用字体图标，使用方式与普通 `web` 项目相同，需要注意以下几点：

+ 字体文件小于 40kb，`uni-app` 会自动将其转化为 base64 格式；

+ 字体文件大于等于 40kb， 需开发者自己转换，否则使用将不生效。

+ 字体文件的引用路径推荐使用以 `~@`开头的绝对路径。

  ```js
   @font-face {
       font-family: test1-icon;
       src: url('~@/static/iconfont.ttf');
   }
  ```

## less 和 scss

scss 或者 less 插件安装即可使用，编译器自动安装。
