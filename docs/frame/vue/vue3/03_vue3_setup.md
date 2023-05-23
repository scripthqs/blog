# 组合式 API

Composition API：组合式 API

官方文档: <https://v3.cn.vuejs.org/guide/composition-api-introduction.html>

## Options API 和 Composition API

### Options API 存在的问题

使用传统 OptionsAPI 中，新增或者修改一个需求，就需要分别在 data，methods，computed 里修改。

### Composition API 的优势

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。

## setup 函数

1. 理解：Vue3.0 中一个新的配置项，值为一个函数。
2. setup 是所有**Composition API（组合 API）** “_表演的舞台_ ”
3. 组件中所用到的：**数据、方法**等等，均要**配置在 setup**中。
4. setup 函数的两种返回值
5. 若**返回一个对象**，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）

   ```js
   setup () {
       //数据
       let msg = 'hello world'
       //方法
       function sayFun () {
         console.log(msg)
       }
       return {
         msg,
         sayFun
       }
     }
   ```

6. _若返回一个渲染函数：则可以自定义渲染内容。（**了解**）_

   ```js
   import { h } from "vue";
   //返回一个函数（渲染函数）
   return () => h("h1", "hello world");
   ```

注意:

尽量**不要与 Vue2.x 配置混用**

- Vue2.x 配置（data、methods、computed...）中**可以访问到**setup 中的属性、方法。
- 但在 setup 中**不能访问到**Vue2.x 配置（data、methods、computed...）。
- 如果有重名, **setup 优先**。

setup**不能是一个 async 函数**，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性。（后期也可以返回一个 Promise 实例，但需要 Suspense 和异步组件的配合）

## ref 函数

作用: 定义一个响应式的数据

需要先引入

```js
import { ref } from "vue";
```

语法:

```js
let xxx = ref(initValue);
let msg = ref("hello world");
let job = ref({
  type: "前端开发",
  money: "10k",
});
```

- 创建一个包含响应式数据的**引用对象（reference 对象，简称 ref 对象）**
- JS 中操作（改）数据： `xxx.value`
- 模板中读取数据: 不需要使用.value

```js
//修改数据
function changeInfo () {
  name.value = 'xiaoMing'
  age.value = 18
  job.value.type = '后端开发'
  console.log(name, age, job)
}
//读取数据
<h2>{{name}}</h2>s
<h2>{{age}}</h2>
<h2>{{job.type}}</h2>
```

ref 函数接收的数据类型：

- 接收的数据可以是：基本类型、也可以是对象类型。
- 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
- 对象类型的数据：内部 “ 求助 ”了 Vue3.0 中的一个新函数—— `reactive`函数。

## reactive 函数

作用: 定义一个**对象类型**的响应式数据（基本类型不要用它，要用`ref`函数）

需要先引入

```js
import { reactive } from "vue";
```

语法：

```js
const 代理对象 = reactive(源对象);
const per = reactive({
  name: "zhangSan",
  age: "20",
}); //Proxy{}
```

接收一个对象（或数组），返回一个**代理对象（Proxy 的实例对象，简称 proxy 对象）**

reactive 定义的响应式数据是“**深层次的**”

```js
hobby: ["抽烟", "喝酒", "烫头"];
person.hobby[0] = "学习";
```

> 直接通过**修改索引改数组，也是响应式**，vue2.0 通过索引修改数组不是响应式

内部**基于 ES6 的 Proxy 实现**，通过代理对象操作源对象内部数据进行操作。

## Vue3.0 的响应式原理

### vue2.x 的响应式

- 实现原理：

  - 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。
  - 数组类型：通过**重写更新数组的一系列方法**来实现拦截。（对数组的变更方法进行了包裹）。

    ```js
    Object.defineProperty(data, "count", {
      get() {},
      set() {},
    });
    ```

- 存在问题：

  - **新增属性、删除属性**, 界面不会更新。
  - 直接通过**下标修改数组**, 界面不会自动更新。
  - 通过 Vue.set()方法或者 `this.$set()`方法修改，解决问题
  - 通过 Vue.delete()或者 `this.$delete()`方法删除，解决问题
  - 使用数组的 splice 方法解决

### Vue3.0 的响应式

- 实现原理:

  - 通过 Proxy（代理）: **拦截对象中任意属性的变化**, 包括：属性值的读写、属性的添加、属性的删除等。
  - 通过 Reflect（反射）: 对源对象的属性进行操作。
  - MDN 文档中描述的 Proxy 与 Reflect：

    - Proxy：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy>

    - Reflect：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect>

      ```js
      new Proxy(data, {
        // 拦截读取属性值
        get(target, prop) {
          return Reflect.get(target, prop);
        },
        // 拦截设置属性值或添加新属性
        set(target, prop, value) {
          return Reflect.set(target, prop, value);
        },
        // 拦截删除属性
        deleteProperty(target, prop) {
          return Reflect.deleteProperty(target, prop);
        },
      });

      proxy.name = "tom";
      ```

## reactive 对比 ref

从定义数据角度对比：

- ref 用来定义：**基本类型数据**。
- reactive 用来定义：**对象（或数组）类型数据**。
- 备注：ref 也可以用来**定义对象（或数组）类型数据**, 它内部会自动通过`reactive`转为**代理对象**。

从原理角度对比：

- ref 通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）。
- reactive 通过使用**Proxy**来实现响应式（数据劫持）, 并通过**Reflect**操作**源对象**内部的数据。

从使用角度对比：

- ref 定义的数据：操作数据**需要**`.value`，读取数据时模板中直接读取**不需要**`.value`。
- reactive 定义的数据：操作数据与读取数据：**均不需要**`.value`。

## setup 的两个注意点

- setup 执行的时机

  - 在 beforeCreate 之前执行一次，this 是 undefined。

- setup 的参数
  - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
  - context：上下文对象
    - attrs: 值为对象，包含：组件外部传递过来，但**没有在 props 配置中声明的属性**, 相当于 `this.$attrs`。
    - slots: 收到的插槽内容, 相当于 `this.$slots`。
    - emit: 分发自定义事件的函数, 相当于 `this.$emit`。
