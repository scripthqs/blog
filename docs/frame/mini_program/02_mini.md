# 小程序的技术选型

## 原生小程序开发

[微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/)：主要技术包括：WXML、WXSS、JavaScript

[支付宝小程序](https://opendocs.alipay.com/mini/developer)：主要技术包括：AXML、ACSS、JavaScript

## 选择框架开发小程序

### mpvue（已经被放弃）

- mpvue 是一个使用 Vue 开发小程序的前端框架，也是支持微信小程序、百度智能小程序，头条小程序和支付宝小程序
- 该框架在 2018 年之后就不再维护和更新了，所以目前已经被放弃

### wepy（不推荐）

- Wepy 是由腾讯开源的，一款让小程序支持组件化开发的框架，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序
- 该框架目前维护的也较少，在前两年还有挺多的项目在使用，不推荐使用

### uni-app（推荐）

- 由 DCloud 团队开发和维护；
- uni-app 是一个使用 Vue 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/ 百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台
- uni-app 目前是很多公司的技术选型，特别是希望适配移动端 App 的公司

### taro（推荐）

- 由京东团队开发和维护；
- taro 是一个开放式 **跨端 跨框架** 解决方案，支持使用 **React/Vue/Nerv** 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用
- taro 因为本身支持 React、Vue 的选择，给了我们更加灵活的选择空间
- 特别是在 Taro3.x 之后，支持 Vue3、React Hook 写法等；

## 使用框架开发的问题

使用 uni-app 和 taro 开发原生 App 或者原生小程序时：

- 无论是适配原生小程序还是原生 App，都有较多的**适配问题**，所以还是需要多**了解原生的一些开发知识**
- 产品使用**体验整体相较于原生 App 差很多**
- 也有其他的技术选项来**开发原生 App：ReactNative、Flutter**
