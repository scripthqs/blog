# vue 原理

## vue2 和 vue3

1. defineProperty 该为 Proxy,解决数组无法通过下标修改，对象属性增减的问题
2. 组合式 api 改为函数式编程，方便按需引入，配合 tree-shaking 打包体积变小
3. vue3 的 mixin 改为 hooks
4. v-model 监听的事件和传递值不一样
   - vue2 value，change
   - vue3 传递 modelValue，监听 update:modelValue

## ref 和 reactive

ref:支持基本数据类型+引用数据类型
reactive:只支持引用数据类型

他们解构后都会丢失响应式，需要使用 toRefs。

ref 和 reactive 都可以定义对象、数组，具体使用哪个根据赋值方式来定

- 直接赋值：ref 会保留响应式，reactive 会丢失响应式
- 修改数据：reactive 和 ref 都可以，但是 ref 需要多写个.value，vscode 可以提供插件自动补全 ref

所以，官方推荐尽量都使用 ref

```js
ref=> new RefImpl
if(是引用类型){
  把对象包装成proxy对象，数组包装成类数组对象;
}
把值作为.value属性;
利用es6的class，通过get和set给对象一个value属性;
ref本身的set在整体替换时会触发=>直接赋值
修改属性时是触发Proxy的get和set=>修改属性

reactive=>new Proxy
return 不是引用类型
设置Proxy的get和set
收集依赖
修改值，触发依赖更新
```

## 虚拟 dom

1. vue 组件实例的`_vnode` 中可以看到这个属性
2. 数据驱动，数据变化->页面用到相关数据的地方精准变化，最好知道是某个属性和内容
3. vue 能定位到变化的最小的颗粒度是组件，数据变化->组件变化
4. 虚拟算法，用来比较两个虚拟 dom，找到变化点，更新真实 dom

## diff 算法

- 同层比较和优化策略
- 三大核心操作：移动节点、更新节点、新增和删除节点
- 差异记录和批量更新

v-for 的 key 作用

- key 属性是 dom 元素的唯一标识， 可以在 diff 算法用来判断是否是同一个节点
- 可以调高虚拟 dom 的更新效率：使用 index 做 key，破坏顺序操作的时候， 因为每一个节点都找不到对应的 key，导致部分节点不能复用,所有的新 vnode 都需要重新创建。
- 不设置 key 或者 key 不唯一可能会有 bug：结构中包含输入类的 DOM，会产生错误的 DOM 更新
- 数据没有逆序添加，逆序删除破坏顺序的操作， 只用于列表展示的话 使用 index 作为 Key 没有毛病
