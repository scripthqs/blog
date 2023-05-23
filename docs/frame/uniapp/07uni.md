# 生命周期

## 1 生命周期简介

- 生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。

- 生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数

## 2 应用生命周期函数

| 函数名   | 说明                                           |
| -------- | ---------------------------------------------- |
| onLaunch | 当`uni-app` 初始化完成时触发（全局只触发一次） |
| onShow   | 当 `uni-app` 启动，或从后台进入前台显示        |
| onHide   | 当 `uni-app` 从前台进入后台                    |
| onError  | 当 `uni-app` 报错时触发                        |

## 3 页面生命周期函数

| 函数名   | 说明                                                                                                                                      |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| onLoad   | 监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考[示例](https://uniapp.dcloud.io/api/router?id=navigateto) |
| onShow   | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面                                                                |
| onReady  | 监听页面初次渲染完成。                                                                                                                    |
| onHide   | 监听页面隐藏                                                                                                                              |
| onUnload | 监听页面卸载                                                                                                                              |

- tabBar 中的页面自带缓存 keep-alive，再次切换只会触发 onShow，不会触发  onLoad。

## 4 下拉刷新

在 uni-app 中有两种方式开启下拉刷新：监听 `onPullDownRefresh` 函数和 调用 `uni.startPullDownRefresh()` 方法

### enablePullDownRefresh

首先需要开启下拉刷新功能，需要在 `pages.json` 里，找到的当前页面的 pages 节点，并在 `style` 选项中开启 `enablePullDownRefresh`

```json
  {
   "path": "pages/contact/contact",
   "style":{
         "enablePullDownRefresh": true
       }
  },
```

### onPullDownRefresh(){}

通过 `onPullDownRefresh` 处理函数（和onLoad等生命周期函数同级），监听该页面用户下拉刷新事件。当处理完数据刷新后，`uni.stopPullDownRefresh` 可以停止当前页面的下拉刷新。

```vue
  onPullDownRefresh(){
   console.log('触发下拉刷新了')
   this.list.push('vue')
   uni.stopPullDownRefresh()
  }
```

### uni.startPullDownRefresh()

通过调用 `uni.startPullDownRefresh()` 方法**开始**当前页面下拉刷新

```vue
  methods:{
   startPull () {
      uni.startPullDownRefresh()
    }
  },
```

### uni.stopPullDownRefresh()

通过调用 `uni.stopPullDownRefresh()`方法**停止**当前页面下拉刷新。

## 5 上拉加载

### onReachBottomDistance

首先需要开启上拉加载功能，通过在 pages.json 文件中找到当前页面的 pages 节点下 style 中配置 `onReachBottomDistance` 可以设置距离底部开启加载的距离，默认为 50px。

### onReachBottom

通过 `onReachBottom` 监听到触底的行为

```vue
  onReachBottom(){
   console.log('触发上拉加载了')
   this.list.push('node')
  }
```
