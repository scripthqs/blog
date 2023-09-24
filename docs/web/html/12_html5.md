# HTML5 新特性

HTML5 定义了一系列新元素，如新语义标签、智能表单、多媒体标签等，还提供了一些 javascript API，如地理定位、重力感应、硬件访问等，可以在浏览器内实现类原生应用，可以结合 Canvas 开发网页游戏。

总结：**HTML5 是新一代开发富客户端应用程序整体解决方案，包括：HTML5，CSS3，javascript API 在内的一套技术组合。**

- 富客户端：具有很强的交互性和体验的客户端程序。比如说，浏览博客，是比较简单的客户端；一个在线听歌的网站、即时聊天网站就是富客户端。

## HTML 的应用场景

1. 极具表现力的网页：内容简约而不简单。
2. 网页应用程序：
   - 代替 PC 端的软件：iCloud、百度脑图、Office 365 等。
   - APP 端的网页：淘宝、京东、美团等。
   - 微信端：公众号、小程序等。
3. 混合式本地应用。
4. 简单的游戏。

## 语义化的作用

- 能够便于开发者阅读和写出更优雅的代码。
- 同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容。
- 更好地搜索引擎优化。

总结：**HTML 的职责是描述一块内容是什么（或其意义），而不是它长什么样子；它的外观应该由 CSS 来决定。**

HTML5 增加了大量有意义的语义标签，更有利于搜索引擎或辅助设备理解 HTML 页面内容。HTML5 会让 HTML 代码的内容更结构化、标签更语义化。

最常见的 css+div 传统经典布局：

![传统布局](https://raw.githubusercontent.com/scripthqs/assets/master/blog/traditional_layout.png)

```html
<!-- 头部 -->
<div class="header">
  <ul class="nav"></ul>
</div>

<!-- 主体部分 -->
<div class="main">
  <!-- 文章 -->
  <div class="article"></div>
  <!-- 侧边栏 -->
  <div class="aside"></div>
</div>

<!-- 底部 -->
<div class="footer"></div>
```

html5 经典布局：

![html5经典布局](https://raw.githubusercontent.com/scripthqs/assets/master/blog/h5_layout.png)

```html
<!-- 头部 -->
<header>
  <ul class="nav"></ul>
</header>

<!-- 主体部分 -->
<div class="main">
  <!-- 文章 -->
  <article></article>
  <!-- 侧边栏 -->
  <aside></aside>
</div>

<!-- 底部 -->
<footer></footer>
```

## 浏览器兼容性

IE 浏览器已经退出历史的舞台，现在基本不需要考虑 IE 浏览器的兼容性了。

## 新增的表单类型

`<input>`有以下属性：

- email 只能输入 email 格式。自动带有验证功能。
- tel 手机号码。
- url 只能输入 url 格式。
- number 只能输入数字。
- search 搜索框
- range 滑动条
- color 拾色器
- time 时间
- date 日期
- datetime 时间日期
- month 月份
- week 星期

上面的部分类型是针对移动设备生效的，且具有一定的兼容性，在实际应用当中可选择性的使用。

## 表单元素（标签）

- `<datalist>` :数据列表

```html
<input type="text" list="myData" />
<datalist id="myData">
  <option>专科</option>
  <option>本科</option>
  <option>研究生</option>
  <option>学龄前儿童</option>
</datalist>
```

上方代码中，input 里的 list 属性和 datalist 进行了绑定。数据列表可以自动提示和下拉选择。

- `<keygen>`：提供一种验证用户的可靠方法。

  - keygen 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键：一个公钥，一个私钥。
  - 私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。

- `<meter>`：度量器
  - low：低于该值后警告
  - high：高于该值后警告
  - value：当前值
  - max：最大值
  - min：最小值。

```html
<meter value="81" min="0" max="100" low="60" high="80" />
```

## 表单属性

- placeholder 占位符（提示文字）
- autofocus 自动获取焦点
- multiple 文件上传多选或多个邮箱地址
- autocomplete 自动完成（填充的）。on 开启（默认），off 取消。用于表单元素，也可用于表单自身(on/off)
- form 指定表单项属于哪个 form，处理复杂表单时会需要
- novalidate 关闭默认的验证功能（只能加给 form）
- required 表示必填项
- pattern 自定义正则，验证表单

## 表单事件

- oninput()：用户输入内容时触发，可用于输入字数统计。
- oninvalid()：验证不通过时触发。比如，如果验证不通过时，想弹出一段提示文字，就可以用到它。

## DOM 操作

获取元素

- `document.querySelector("selector")` 通过 CSS 选择器获取符合条件的第一个元素。
- `document.querySelectorAll("selector")` 通过 CSS 选择器获取符合条件的所有元素，以类数组形式存在。

**类数组或者叫伪数组，拥有 length 属性，不具有数组所具有的方法。**

类名操作

- `Node.classList.add("class")` 添加 class
- `Node.classList.remove("class")` 移除 class
- `Node.classList.toggle("class")` 切换 class，有则移除，无则添加
- `Node.classList.contains("class")`检测是否存在 class

自定义属性

- js 里可以通过 box1.index=100; box1.title 来自定义属性和获取属性。
- H5 可以直接在标签里添加自定义属性，但必须以 data- 开头。(**图片懒加载会使用到**)

## 拖拽属性

在 HTML5 的规范中，我们可以通过为元素增加 draggable="true" 来设置此元素是否可以进行拖拽操作，其中图片、链接默认是开启拖拽的。

拖拽元素的事件监听：（应用于拖拽元素）

- `ondragstart`当拖拽开始时调用
- `ondragleave` 当鼠标离开拖拽元素时调用
- `ondragend` 当拖拽结束时调用
- `ondrag` 整个拖拽过程都会调用

### 目标元素

比如说，你想把元素 A 拖拽到元素 B 里，那么元素 B 就是目标元素。页面中任何一个元素都可以成为目标元素。

目标元素的事件监听（应用于目标元素）：

- `ondragenter` 当拖拽元素进入时调用
- `ondragover` 当拖拽元素停留在目标元素上时，就会连续一直触发（不管拖拽元素此时是移动还是不动的状态）
- `ondrop` 当在目标元素上松开鼠标时调用
- `ondragleave` 当鼠标离开目标元素时调用

## 历史

界面上所有的 JS 操作不会被浏览器记住，无法回到之前的状态，在 HTML5 中可以通过`window.history`对象操作访问历史状态，让一个页面可以有多个历史状态。
`window.history`可以让我们管理历史记录，用于单页面应用(Single Page Application)，可以无刷新改变网页内容。

- `windows.history.forward();`:前进
- `window.history.back();` : 后退
- `window.history.go();` :刷新
- `window.history.go(n);`: //n=1 表示前进；n=-1 后退；n=0s 刷新。如果移动的位置超出了访问历史的边界，会静默失败，但不会报错。

## 地理定位

我们可以基于用户位置开发互联网应用，即基于位置服务 LBS (Location Base Service)。获取地理信息的方式：

1. IP 地址
2. 三维坐标
   - GPS（Global Positioning System，全球定位系统）
   - Wi-Fi 定位：仅限于室内
   - 手机信号定位：通过运营商的信号塔定位。

浏览器会自动以最优方式去获取用户地理信息。HTML5 Geolocation（地理位置定位）规范提供了一套保护用户隐私的机制，必须先得到用户明确许可，可能获得用户的位置信息。

## 全屏

HTML5 规范允许用户自定义网页上任一元素全屏显示。

开启/关闭全屏显示：

- `requestFullscreen()`：//让元素开启全屏显示
- `exitFullscreen()` ：//让当前文档退出全屏模式
- `Window..fullScreen`:检测当前是否处于全屏状态
- 不同浏览器需要加私有前缀，比如：
- document.webkitIsFullScreen
- document.mozFullScreen

全屏的伪类

- `:full-screen .box {}`
- `:-webkit-full-screen {}`
- `:moz-full-screen {}`

比如说，当元素处于全屏状态时，改变它的样式。这时就可以用到伪类。

## Web 存储

在网页中，会经常性在本地存储大量的数据，传统方式我们以`document.cookie`来进行存储，但是存储大小只有 4kb 左右，解析也非常复杂，H5 有两种存储方式：

1. `window.sessionStorage`：会话存储

   - 保存在内存中
   - 生命周期为关闭浏览器窗口，窗口关闭时浏览器销毁
   - 在同一个窗口下数据可以共享

2. `window.localStorage`：本地存储
   - 有可能保存在浏览器内存里，也可能在硬盘中
   - 永久生效除非手动删除
   - 可以多串口共享

Web 存储的特性：

1. 设置、读取方便
2. 容量较大，`sessionStorage`约 5M，`localStorage`约 20M
3. 只能存储字符串，可以将对象 JSON.stringfy() 编码后存储

JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串。

封装 storage

```js
enum CacheType {
  Local,
  Session
}

class Cache {
  storage: Storage

  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }

// import { localCache ,sessionCache} from '@/utils/cache'

```

## Canvas 绘图

可以使用 js 在其中绘制图像

```html
<canvas id="tutorial" width="300" height="300"></canvas>
```

## Data 属性

`data-` 属性是一种自定义属性，用于存储与元素相关的私有数据，必须以`data-`开头，可以通过 `dataset` 属性来访问这些自定义属性

- 使用 `setAttribute()`来设置 `data-`属性的值
- 使用 `getAttribute()`来获取 `data-` 属性的值

```html
<div class="box" age="20" data-name="abcd" data-age="25" data-mes="hell world"></div>
<h1 class="title"></h1>

<script>
  const boxEl = document.querySelector(".box");
  console.log(boxEl);
  console.log(boxEl.dataset); //可以拿到data对象里面的数据
  boxEl.setAttribute("data-age", "30");
  console.log(boxEl.getAttribute("data-name")); // "abcd"
  console.log(boxEl.getAttribute("data-age")); // "30"
</script>
```
