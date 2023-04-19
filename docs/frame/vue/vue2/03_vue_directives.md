# Vue 指令

指令（Directives）是 vue 为开发者提供的**模板语法**，用于辅助开发者渲染页面的基本结构。

vue 中的指令按照不同的用途可以分为如下 6 大类：

1. **内容渲染**指令
2. **属性绑定**指令
3. **事件绑定**指令
4. **双向绑定**指令
5. **条件渲染**指令
6. **列表渲染**指令

## 内容渲染指令

**内容渲染指令**用来辅助开发者**渲染 DOM 元素的文本内容**。常用的内容渲染指令：

### `v-text`

- `v-text="msg"`可以将一个变量的值渲染到指定的元素中
- `v-text`**会覆盖元素中原本的内容**
- `v-text`没有闪烁的问题，因为它是放在属性里的

```vue
<span v-text="msg"></span>
<!-- 等价于 -->
<span>{{msg}}</span>
```

### `{{}}`

- 模板语法
- 插值表达式，也称 Mustache 语法（也就是双大括号）**很常用**
- 数据绑定最常见的形式就是使用双大括号的文本插值
- 插值处的内容都会自动更新
- 可以是一个 **JavaScript 的表达式**
- `{{}}`之间**可以使用表达式**，比如复杂的 3 元表达式

### `v-html`

- `v-html="msg"`可以将 msg 解析成 html 元素
- 使用 v-html 渲染数据可能会非常危险，因为它很容易导致 XSS（跨站脚本）攻击
- 使用的时候请谨慎，能够使用`{{}}`或者 v-text 实现的不要使用 v-html

### `v-pre`

- 将插值表达式原封不动的显示

### `v-cloak`

- `v-cloak`保持和元素实例的关联，直到结束编译自动消失
- 和 CSS 规则一起用的时候，能够解决差值表达式闪烁的问题
- 即可以隐藏未编译的标签直到实例准备完毕）

```js
<style>
    [v-cloak]{
        display:none;
    }
</style>
```

### `v-once`

`v-once` 用于指定元素或者组件只渲染一次。

- 当数据发生变化时，元素或者组件以及其所有的子元素将视为静态内容并且跳过；
- 该指令可以用于性能优化
- 如果有子节点，也是只会渲染一次

```vue
<div v-once>
  <p>{{msg}}</p>
</div>
```

## 属性绑定指令

### `v-bind:`

> 注意：插值表达式只能用在元素的**内容节点**中，不能用在元素的**属性节点**中！

- 在 vue 中，可以使用 `v-bind:` 指令，为元素的**属性动态绑定值**；
- 简写是英文的 `:`
- 在使用 v-bind 属性绑定期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号，例如：

  ```vue
  <div :title="'box' + index">这是一个 div</div>
  ```

另外很常用的场景：

1. v-bind 动态绑定`class`属性
2. v-bind 动态绑定`style`属性

动态绑定 class

- 基本绑定
- 对象语法
  - { className: Boolean }
- 数组语法

动态绑定 style

- 对象语法:
  - { cssName: cssValue }
- 数组语法:
  - [obj1, obj2]

```html
<!-- 基本用法 -->
<!-- 1.绑定img的src属性 -->
<img v-bind:src="showImgUrl" alt="" />
<!-- 语法糖: v-bind -> : -->
<img :src="showImgUrl" alt="" />
<!-- 2.绑定a的href属性 -->
<a :href="href">百度一下</a>
<!-- 3.动态拼接 -->
<div :title="'box' + index">这是一个 div</div>

<!-- 动态绑定class -->
<!-- 1.基本绑定class -->
<h2 :class="classes">Hello World</h2>
<!-- 2.动态class可以写对象语法 -->
<button :class=" isActive ? 'active': '' " @click="btnClick">我是按钮</button>
<!-- 2.1.对象语法的基本使用(掌握) -->
<button :class="{ active: isActive }" @click="btnClick">我是按钮</button>
<!-- 2.2.对象语法的多个键值对 -->
<button :class="{ active: isActive, bbb: true, aaa: false }" @click="btnClick">我是按钮</button>
<!-- 2.3.动态绑定的class是可以和普通的class同时的使用 -->
<button class="abc cba" :class="{ active: isActive, bbb: true, aaa: false }" @click="btnClick">我是按钮</button>
<!-- 2.4.动态绑定的class是可以和普通的class同时的使用 -->
<!--getDynamicClasses 函数返回一个对象 -->
<!-- getDynamicClasses: function() { return { active: this.isActive, bbb: true, aaa: false } } -->
<button class="abc cba" :class="getDynamicClasses()" @click="btnClick">我是按钮</button>
<!-- 3.动态class可以写数组语法(了解) -->
<h2 :class="['abc', 'cba']">Hello Array</h2>
<h2 :class="['abc', className]">Hello Array</h2>
<h2 :class="['abc', className, isActive? 'active': '']">Hello Array</h2>
<h2 :class="['abc', className, { active: isActive }]">Hello Array</h2>

<!-- 动态绑定style -->
<!-- 1.普通的html写法 -->
<h2 style="color: red; font-size: 30px;">哈哈哈哈</h2>
<!-- 2.style中的某些值, 来自data中 -->
<!-- 2.1.动态绑定style, 在后面跟上 对象类型 (重要)-->
<h2 v-bind:style="{ color: fontColor, fontSize: fontSize + 'px' }">哈哈哈哈</h2>
<!-- 2.2.动态的绑定属性, 这个属性是一个对象 -->
<h2 :style="objStyle">呵呵呵呵</h2>
<!-- 3.style的数组语法 -->
<h2 :style="[objStyle, { backgroundColor: 'purple' }]">嘿嘿嘿嘿</h2>

<!-- 动态绑定属性名-->
<h2 :[name]="'aaaa'">Hello World</h2>

<!-- v-bind绑定对象: 给组件传递参数 -->
<h2 v-bind="infos">Hello Bind</h2>
n
```

## 事件绑定指令

### `v-on:`

vue 提供了 v-on 事件绑定指令，为 DOM 元素绑定事件监听。

注意：原生 DOM 对象有 **onclick、oninput、onkeyup** 等原生事件，替换为 vue 的事件绑定形式后，分别为：**v-on:click、v-on:input、v-on:keyup**

通过 v-on 绑定的事件处理函数，需要在 methods 节点中进行声明

1. **简写是 `@`**
2. **绑定传参( )：**

   ```vue
   <button @click="add"></button>
   ```

   - 在使用 v-on 指令绑定事件时，可以使用 **( ) 进行传参**
   - methods 中配置的函数，不要用箭头函数，否则 this 就不是 vm
   - methods 中配置的函数，都是 Vue 所管理的函数，this 的指向都是 vm 或组件的实例对象

3. **`$event` ：**
   Vue 会默认将浏览器生成的 event 事件对象作为参数传入到方法。
   如果默认的事件对象 e 被覆盖了，则可以手动传递一个 `$event`。例如：

   ```vue
   <button @click="add(3, $event)"></button>
   <script>
   methods: {
      add(n, e) {
         // 如果在方法中要修改 data 中的数据，可以通过 this 访问到
         this.count += 1
      }
   }
   </script>
   ```

4. **事件修饰符**：

   - `.prevent`阻止默认事件（默认行为）

   ```vue
   <a @click.prevent="xxx">链接</a>
   ```

   - `.stop`阻止冒泡

   ```xml
   <button @click.stop="xxx">按钮</button>
   ```

   - `@keyup.enter`检测回车键按下时
   - `.once`事件只触发一次
   - 一个事件，允许同时使用多个事件修饰符

## 双向绑定指令

### `v-model:`

v-model 指令**配合表单使用**，实现双向绑定。

表单：

1. input 输入框

   - type="radio"
   - type="checkbox"
   - type="xxxx"

2. textarea
3. select

**v-model 指令的修饰符：**

为了方便对用户输入的内容进行处理，vue 为 v-model 指令提供了 3 个修饰符：

1. `.lazy`默认情况下，data 中的数据会和 input 中的数据同步变化，`.lazy`修饰符可以在数据失去焦点或者回车时才更新
2. `.number`输入框中输入元素的值总会返回字符串类型，`.number`修饰符可以将用户的输入值转为数值类型
3. `.trim`自动过滤用户输入的首尾空白字符

**v-model 指令的原理：**

`v-model` 实质是语法糖 `:value` + `@input`。

1. 原生 DOM

   ```vue
   <input v-model="message" ></input>
   <!-- 基本等价于，因为内部还有一些其他的处理 -->
   <input :value="message" @input="message = $event.target.value"></input>
   <!-- $event 指代当前触发的事件对象; -->
   <!-- $event.target 指代当前触发的事件对象的dom; -->
   <!-- $event.target.message 就是当前dom的message值; -->
   ```

2. 自定义组件

   ```vue
   <v-input v-model="val"></v-input>
   <!-- 等价于 -->
   <v-input :value="val" @input="val = $event"></v-input>
   ```

## 条件渲染指令

条件渲染指令用来辅助开发者按需控制 DOM 的显示与隐藏

### `v-if`

- `v-if` ` v-else``v-else-if `条件判断
- Vue 会尽可能高效地渲染元素，通常**会复用已有元素**而不是从头开始渲染
- Vue 提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需**添加一个具有唯一值的 key** 即可
- `v-if`和 template 结合使用

v-if 指令在使用的时候，有两种方式：

1. 直接给定一个布尔值 true 或 false

   ```vue
   <p v-if="true">被 v-if 控制的元素</p>
   ```

2. 给 v-if 提供一个判断条件，根据判断的结果是 true 或 false，来控制元素的显示和隐藏

   ```vue
   <p v-if="type === 'A'">良好</p>
   <div class="info" v-if="Object.keys(info).length">
      <h2>个人信息</h2>
      <ul>
        <li>姓名: {{info.name}}</li>
        <li>年龄: {{info.age}}</li>
      </ul>
    </div>
   ```

   - v-if 可以单独使用，或配合 v-else 指令一起使用
   - v-else 指令必须配合 v-if 指令一起使用，否则它将不会被识别
   - v-else-if 指令必须配合 v-if 指令一起使用，否则它将不会被识别

### `v-show`

`v-show` 的原理是：动态为元素添加或移除 **`display: none`** 样式，来实现元素的显示和隐藏

- 如果要频繁的切换元素的显示状态，用 v-show 性能会更好
- v-show 不能和 template 结合

性能消耗不同：

- v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
- 如果需要**非常频繁地切换，则使用 v-show 较好**
- 如果在运行时条件很少改变，则使用 v-if 较好

> 在实际开发中，绝大多数情况，不用考虑性能问题，直接使用 v-if 就好了。因为一般需要根据服务器传的数据决定要不要渲染

**v-if 在显示隐藏过程中有 DOM 的添加和删除，v-show 只是操作 css。**

## 列表渲染指令

### `v-for`

vue 提供了 v-for 列表渲染指令，用来基于一个数组和对象**（大多数情况是数组）**来循环**渲染一个列表**结构。v-for 指令需要使 用 **item in items** 形式的特殊语法，其中：

- items 是待循环的数组
- item 是被循环的每一项

v-for 指令还支持一个可选的第二个参数，即当前项的索引。语法格式为 **(item, index) in items**

**也可以用 `of` 替代 `in` 作为分隔符**

**使用 key 维护列表**的状态

在使用 v-for 时，一般需要提供 key

```html
<ul>
  <!-- 1.遍历数组 -->
  <li v-for="(item,index) in list" :key="item.id">{{index}}:{{item.name}}</li>

  <!-- 2.遍历对象 -->
  <ul>
    <li v-for="(value, key, index) in info">{{value}}-{{key}}-{{index}}</li>
  </ul>

  <!-- 3.遍历字符串(iterable) -->
  <ul>
    <li v-for="item in message">{{item}}</li>
  </ul>

  <!-- 4.遍历数字 -->
  <ul>
    <li v-for="item in 100">{{item}}</li>
  </ul>
</ul>

<style>
  data(){
      list: [
         { id: 1, name: 'zhangsan' },
         { id: 2, name: 'lisi' },
         { id: 3, name: 'xiaoming' }
      ]
  }
</style>
```

- 插入数组时，没有 key 会很笨，有 key 在复用时，会对比 key 值，key 需要保证一个唯一 item.id
- key 的作用主要是为了高效的更新虚拟 DOM

总结：

- key 只能是**数字或者字符串**
- key 要求是**独一无二的**，一般都使用 id
- 一般将**循环项的 id**作为 key
- 都**不要使用索引**作为 key，没有意义
- 在 vue 文件中，使用 v-for 不加 key 会报错
