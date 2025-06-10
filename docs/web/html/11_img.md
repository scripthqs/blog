# 图片、框架、多媒体标签

## 图片标签

`<img>`是图像(image)的缩写，用于向当前界面引入图片，`<img/>`是一个自结束标签。

### `img`标签的属性

- `src`：引入图片的路径，src 是来源(source)的缩写。
- `alt`：对图片的描述。
- `title`：鼠标的悬停文本。
- `width、height`：宽度和高度，只设置一个图片会等比例缩放。
  - pc 端不建议修改图片的大小，最好是要多大的图片就裁多大。
  - 移动端经常需要对图片进行缩放来保证清晰图。
- `align` ：图片和周围文字的相对位置，可以是 bottom（默认值）、center、left、right、top 等

```html
<img src="相对路径或者绝对路径"alt="当图片无法显示时对图片的描述" / >
```

`<img>`这种元素属于替换元素，介于块和行内元素之间，具有两种元素的特性。

### 图片的类型

- `jpeg(jpg)`
  - 支持的颜色比较丰富，不支持透明效果，不支持动图。
  - 一般用于显示照片。
- `gif`
  - 支持的颜色比较少，支持简单的透明，支持动图。
  - 颜色单一的动图。
- `png`
  - 支持的颜色丰富，支持复杂透明，不支持动图。
  - 网页一般都选择这个格式。
- `webp`
  - 谷歌推出的专门用来网页图片的格式，具备所有优点，但是兼容性不太好。
- `base64`
  - 将图片使用 base64 进行编码，这样将图片转换成字符，通过字符形式来引入图片。
  - 需要网页和图片一起加载时，用这种方法，比如网站的背景图片。

## 框架标签

`<iframe>`内联框架，用于向当前页面引入一个其他页面，跟图片标签`<img>`引入方式一样，不过`<iframe>`成对出现。
`<iframe>`基本属性：

- `src`：指定要引入的路径

```html
<iframe src="https://www.qq.com"></iframe>
```

- `frameborder`：指定内联框架的边框

```html
<iframe src="https://www.qq.com" frameborder="0"></iframe>
```

- `width和height`：指定宽度和高度
- `scrolling="no"`：是否需要滚动条。默认值是 true。

内联框架的网页不会被搜索引擎检索到，对 SEO 没什么好处，使用较少。

iframe 页面通信

```js
// 父页面发送
iframe.contentWindow.postMessage('内容'，'子页面域名')
// 子页面接收
// 注意webpack会触发message事件，所以内容最好写个type
window.addEventListener('message',(event)=>{
  //安全校验
  if(event.origin==='父页面域名'){
    console.log(event.data)
  }
})

//子页面发送
window.parent.postMessage.postMessage('你好，父页面！', 'http://父页面域名');

// window.top 最顶层窗口
// window.parent：父级窗口

// 父页面接收消息
window.addEventListener('message', (event) => {
  if (event.origin === 'http://子页面域名') {
    console.log('收到子页面消息:', event.data);
  }
});

//也可以通过dom操作
```

## 多媒体标签(HTML5)

多媒体包括音频`<audio>`和视频`<video>`

### `audio`标签

`audio`标签向页面引入一个外部的音频文件，音视频文件引入时，默认情况下不允许用户自己控制播放停止。`audio`标签属性：

- controls：允许用户控制播放。
- autoplay：音频文件自动播放，设置了 autoplay 打开音乐会自动播放，但是大部分浏览器不会对浏览器进行播放（IE 支持），但是有可能对用户体验不太好。
- loop：循环播放。

```html
<audio src="xxx路径" controls autoplay loop />
```

### `video`标签

`video`标签属性：

- controls：允许用户控制播放。
- loop：循环播放。
- muted：谷歌浏览器需要添加 muted 来解决自动播放的问题

```html
<video src="xxx路径" controls autoplay muted loop />
```

如果要考虑 IE8 的兼容性，就需要加上`<embed>`标签。
