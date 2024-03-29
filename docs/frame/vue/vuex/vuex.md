# Vuex

Vuex 是一个专门为了 Vue.js 应用程序开发的状态管理模式。

![vuex](../images/vuex.png)

## 状态管理

将多个组件**共享的变量**全部存储在一个对象里面。然后，将这个对象放在顶层的**Vue 实例**中，让其他组件可以使用。

理论上，我们可以自己封装一个对象，将这个对象添加到 Vue 的原型上，但是不能轻易的做到里面的属性是**响应式的**，Vuex 就提供了一个在多个组件间共享状态的插件。

## 使用场景

多个组件需要**共享数据**时。比如**用户的登录状态**，用户名称、头像、地理位置，商品的**收藏**、**购物车中的物品**等等。这些状态信息，我们可以放在统一的地方，对它进行保存和管理，而且还是响应式的。

## Vuex 的安装和配置

1. 安装 Vuex

   ```bash
   npm install vuex
   ```

2. 在 **src 源代码目录**下，新建 **store/index.js** 路由模块

   ```js
   //1 导入vue和Vuex包
   import Vue from "vue";
   import Vuex from "vuex";

   //2 调用Vue.use()函数，把Vuex安装为Vue的插件
   Vue.use(Vuex);

   // 准备state，用于存储数据
   const state = {};

   // 准备actions，用于响应组件中的动作
   const actions = {};

   // 准备 mutations，用于操作数据(state)
   const mutations = {};

   //3 向外共享路由的实例对象
   export default new Vuex.Store({
     state,
     actions,
     mutations,
   });
   ```

   向外导出的是 **new Vuex.Store**，不是 new Vuex

3. 在 **src/main.js** 入口文件中，导入并挂载 Vuex 模块

   ```js
   import store from "./store";

   new Vue({
     router,
     store,
     render: (h) => h(App),
   }).$mount("#app");
   ```

   注意：**在 js 中引入 import 时，都会先执行 import 语句，再执行其他的代码**，所以，导入 VueRouter 和 Vuex 时，都在 Vue

## Vuex 的核心概念

Vuex 有 5 个核心概念，State、Getters、Mutations、Actions、Modules

### state

State 提供**唯一**的**公共**数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储

```js
const store = new Vuex.Store({
  state: { sum: 0 },
});
```

组件访问 State 中数据的方式：

```js
this.$store.state.全局数据名称;
```

如何修改 state，由官方的 Vuex 原理图可只：在组件中使用 dispatch 到 actions，再使用 commit 到 mutations 中修改数据。Vue 开发了一个 Devtools 浏览器插件，可以记录每次修改 state 的状态。如果直接在组件中修改 state 就记录不到，但是可以跳过 actions 直接修改 mutations，但是注意，异步操作只能在 actions 中修改。例如请求后端 api 的操作，就需要在 actions 中操作。

### mutations

mutations 里面定义的函数，可以直接定义形参 state，该 state 就包含 state 里面的数据。Vuex 中的 store 状态**更新唯一方式就是提交 mutations**。**mutation 必须是同步函数**

1. 值是一个对象，包含多个直接更新 state 的方法
2. 谁能调用 mutations 中的方法？如何调用？
   - 在 **action 中使用：commit('对应的 mutations 方法名') 触发**
   - 若没有网络请求或其他业务逻辑，组件中也可以越过 actions，即不写`dispatch`，直接编写`commit`，即可以**直接在组件中使用 commit 触发**
3. mutations 中方法的特点：不能写异步代码、只能单纯的操作 state

```js
//在vuex中定义mutations
const mutations = {
  ADD(state) {
    console.log("ADD被调用", state);
    state.sum++;
  },
  ADD1(state, value) {
    console.log("ADD被调用", state, value);
    state.sum += value;
  },
  ADD2(state) {
    setTimeout(() => {
      //如果在mutations中异步修改state，页面数据会更新，但是调试工具中state中数据不会更新
      context.sum++;
    }, 1000);
  },
};
//在组件中使用
this.$store.commit("ADD");
this.$store.commit("ADD1", "自己需要传的参数value");
```

mutations 中的第一个参数是 state，第二个参数专业名词叫做 payload。

**Vuex 的响应式**必须遵循：

- 提前在 state 中进行初始化的属性，后来加上的不算
- 当需要给 state 中的对象添加新的属性时，使用下面的方式：
  - 使用 Vue.set(obj,'newProp‘,123)添加属性
  - 使用 Vue.delete(obj,'newProp')删除属性
  - 用新对象给旧对象重新赋值

### actions

**更新 state 唯一方式就是提交 mutations。**

1. 值为一个对象，包含多个响应用户动作的回调函数

2. 通过 commit( )来触发 mutation 中函数的调用, 间接更新 state

3. 如何触发 actions 中的回调？

   在组件中使用 dispatch 触发

   ```js
   this.$store.dispatch("对应的 action 回调名", 传给actions的参数);
   ```

4. 可以包含异步代码（定时器, ajax 等等）

```js
//在vuex中定义
const actions = {
  //actions可以传递2个参数，第一个context相当于store,第二个参数是payload
  add(context, value) {
    setTimeout(() => {
      console.log("add被调用", context, value);
      context.commit("ADD", value);
    }, 1000);
  },
};
```

actions 可以搭配 promise 来使用

```js
//在vuex中定义
const actions = {
  //actions可以传递2个参数，第一个context相当于store,第二个参数是payload
  add(context, value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("add被调用", context, value);
        context.commit("ADD", value);
        resolve("成功");
      }, 1000);
    });
  },
};
//在组件中
this.$store.dispatch("add", "我是参数value").then((res) => console.log(res));
```

### getters

当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工。

值为一个对象，包含多个用于返回数据的函数

getters 可以作为参数，也可以传递参数，传递参数返回一个函数就可以了。

```js
this.$store.getters.xxx;
```

在`store.js`中追加`getters`配置

```js
const getters = {
 bigSum(state){
  return state.sum * 10
 }，
 //getters可以作为参数，第一个参数是state，第二个参数是getters
 bigSumA(state,getters){
     //通过这个getters可以拿到bigSum函数
     return getters.bigSum + 1
 }
//getters也可以传递参数
bigSumB(state){
   //传递参数返回一个函数就可以
  return function(value){
      return state.sum + value
  }
}
}

//创建并暴露store
export default new Vuex.Store({
 ......
 getters
})
```

组件中读取数据：

```js
$store.getters.bigSum;
$store.getters.bigSum(10); //传参
```

### modules 方法

modules，模块化，因为是单一状态树，如果在 state 里面写的东西太多，就不好进行查找，那我们可以在我们的 modules 里面重新定义一个模块，就是相当于一个 store，里面也有我们所需要的五个属性，所进行的操作也是一样的。

```js
const moduleA = {
  state:{
   message: 'hello wolrd'
  },
  getters:{},
  mutations:{},
  actions:{}
},
const moduleB = {
  state:{},
  getters:{},
  mutations:{},
  actions:{}
}
modules:{
 a:moduleA
}
//在组件中
this.$store.state.a.message//'hello world'
```

## 四个 map 方法的使用

```js
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
```

### mapState 方法

用于帮助我们映射`state`中的数据为计算属性

```js
computed: {
    //借助mapState生成计算属性：sum、school、subject（对象写法）
     ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState(['sum','school','subject']),
},
```

### mapGetters 方法

用于帮助我们映射`getters`中的数据为计算属性

```js
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
},
```

### mapActions 方法

用于帮助我们生成与`actions`对话的方法，即：包含`$store.dispatch(xxx)`的函数

```js
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```

### mapMutations 方法

用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数

```js
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```

> 备注：**mapActions 与 mapMutations**使用时，若需要传递参数需要：**在模板中绑定事件时传递好参数**，否则参数是事件对象。

## 模块化+命名空间

1. 目的：让代码更好维护，让多种数据分类更加明确。

2. 修改`store.js`

   ```js
   const countAbout = {
     namespaced:true,//开启命名空间
     state:{x:1},
     mutations: { ... },
     actions: { ... },
     getters: {
       bigSum(state){
         return state.sum * 10
       }
     }
   }

   const personAbout = {
     namespaced:true,//开启命名空间
     state:{ ... },
     mutations: { ... },
     actions: { ... }
   }

   const store = new Vuex.Store({
     modules: {
       countAbout,
       personAbout
     }
   })
   ```

3. 开启命名空间后，组件中读取 state 数据

   ```js
   //方式一：自己直接读取
   this.$store.state.personAbout.list
   //方式二：借助mapState读取：
   ...mapState('countAbout',['sum','school','subject']),
   ```

4. 开启命名空间后，组件中读取 getters 数据

   ```js
   //方式一：自己直接读取
   this.$store.getters['personAbout/firstPersonName']
   //方式二：借助mapGetters读取：
   ...mapGetters('countAbout',['bigSum'])
   ```

5. 开启命名空间后，组件中调用 dispatch

   ```js
   //方式一：自己直接dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   //方式二：借助mapActions：
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```

6. 开启命名空间后，组件中调用 commit

   ```js
   //方式一：自己直接commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   //方式二：借助mapMutations：
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
   ```
