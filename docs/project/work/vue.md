# 前端进阶

## diff 算法

diff 全称 difference，就是差异，不同。前端的 diff 算法是比较虚拟 dom。

### 虚拟 dom

描述 ui 节点的对象就是虚拟 DOM。

```js
//真实 DOM
<div class="hello-text">你好</div>
//虚拟 DOM
const virtualNode = {
  type:'div',
  content:'你好'，
  props:{
    class:['hello-text']
  }
}
```

真实 DOM 的属性非常多，直接 crud 是非常消耗性能。所以先用 diff 算法对比两个虚拟 DOM 哪里不同，再渲染成真实 DOM。
