# 导航跳转

## 1 navigator

利用 [navigator ](https://uniapp.dcloud.io/component/navigator)进行跳转，该组件类似HTML中的`<a>`组件，但只能跳转本地页面。目标页面必须在 pages.json 中注册。

跳转到普通页面

```vue
<navigator url="/pages/about/about" hover-class="navigator-hover">//跳转链接 url
  <button type="default">跳转到关于页面</button>
</navigator>
```

跳转到 tabbar 页面

```vue
<navigator url="/pages/message/message" open-type="switchTab">//跳转方式 open-type
  <button type="default">跳转到message页面</button>
</navigator>
```

## 2 编程式导航

### navigateTo

利用 navigateTo进行导航跳转，保留当前页面，跳转到应用内的某个页面，使用`uni.navigateBack`可以返回到原页面。

```html
<button type="primary" @click="goAbout">跳转到关于页面</button>
```

通过 navigateTo 方法进行跳转到普通页面

```js
goAbout () {
  uni.navigateTo({
    url: '/pages/about/about',
  })
}
```

### switchTab

通过 switchTab 跳转到 tabbar 页面，并关闭其他非 tabBar 页面。

```html
<button type="primary" @click="goMessage">跳转到message页面</button>
```

通过 switchTab 方法进行跳转

```js
goMessage () {
  uni.switchTab({
    url: '/pages/message/message'
  })
}
```

### redirectTo

redirectTo 关闭当前页面，跳转到应用内的某个页面。

```js
<!-- template -->
<button type="primary" @click="goMessage">跳转到message页面</button>
<!-- js -->
goMessage () {
  uni.switchTab({
    url: '/pages/message/message'
  })
}
```

通过 onUnload  测试当前组件确实卸载

```js
onUnload () {
  console.log('组件卸载了')
}
```

## 3 导航跳转传递参数

在导航进行跳转到下一个页面的同时，可以给下一个页面传递相应的参数，接收参数的页面可以通过 onLoad 生命周期进行接收。

### 传递参数的页面

```js
goAbout () {
  uni.navigateTo({
    url: '/pages/about/about?id=80',
  });
}
```

### 接收参数的页面

 通过 onLoad 生命周期进行接收

```js
<script>
	export default {
		onLoad (options) {
			console.log(options)
		}
	}
</script>
```

