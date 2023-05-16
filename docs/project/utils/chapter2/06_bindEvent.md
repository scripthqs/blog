# 6 手写 DOM 事件监听(带委托)

## 6.1 理解事件冒泡与事件委托

- 事件冒泡的流程

  - 基于 DOM 树形结构
  - 事件在目标元素上处理后, 会由内向外(上)逐层传递
  - 应用场景: 事件代理/委托/委派

- 事件委托/代理
  - 将多个子元素的同类事件监听委托给(绑定在)共同的一个父组件上
  - 好处：
    - 减少内存占用(事件监听回调从 n 变为 1)
    - 动态添加的内部元素也能响应
    - 也不要滥用

## 6.2 API 相关

- 语法：addEventListener(element, type, fn, selector)
- 说明：如果 selector 没有，直接给 element 绑定事件，如果 selector 有，将 selector 对应的多个元素的事件委托绑定给父元素 element

## 6.3 编码实现

- src/event-bind/index.js

```js
/* 
绑定事件监听的通用函数(带委托)
*/
export function bindEvent(ele, type, fn, selector) {
  if (!selector) {
    ele.addEventListener(type, fn);
  } else {
    ele.addEventListener(type, (event) => {
      // 得到发生事件的目标
      const target = event.target;
      // 如果元素被指定的选择器字符串选择, 返回true; 否则返回false。
      if (target.matches(selector)) {
        // 委托绑定调用
        fn.call(target, event);
      }
    });
  }
}
```

## 6.3.测试

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>自定义事件监听</title>
  </head>
  <body>
    <ul>
      <li>AAA1</li>
      <li>AAA2</li>
      <li>AAA3</li>
      <li>AAA4</li>
    </ul>

    <!-- 功能: 点击每行提示对应的文本 -->
    <script src="../dist/hqs-utils.js"></script>
    <script>
      // 不使用事件委托
      // document.querySelectorAll('li').forEach(li => {
      //   utils.addEventListener(li, 'click', function (event) {
      //     alert(this.innerText)
      //   })
      // })

      // 使用事件委托
      const ul = document.querySelector("ul");
      utils.addEventListener(
        ul,
        "click",
        function(event) {
          alert(this.innerText);
        },
        "li"
      );
    </script>
  </body>
</html>
```
