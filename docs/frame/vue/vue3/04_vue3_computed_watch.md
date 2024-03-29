# 计算属性与监视

## computed 函数

需要先引入：

```js
import { reactive, computed } from "vue";
```

- 与 Vue2.x 中 computed 配置功能一致

- 写法

  ```js
  import {computed} from 'vue'

  setup(){
      ...
      //计算属性——简写，只读，没考虑读和写
      let fullName = computed(()=>{
          return person.firstName + '-' + person.lastName
      })
      //计算属性——完整
      let fullName = computed({
          get(){
              return person.firstName + '-' + person.lastName
          },
          set(value){
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
  }
  ```

## watch 函数

需要先引入

```js
import { ref, reactive, watch } from "vue";
```

- 与 Vue2.x 中 watch 配置功能一致

- 两个小“坑”：

  - 监视 reactive 定义的响应式数据时：oldValue 无法正确获取、强制开启了深度监视（deep 配置失效）。
  - 监视 reactive 定义的响应式数据中某个属性时，**并且该属性是一个对象**：deep 配置有效。

  ```js
  //情况一：监视ref定义的响应式数据
  watch(
    sum,
    (newValue, oldValue) => {
      console.log("sum变化了", newValue, oldValue);
    },
    { immediate: true }
  );

  //情况二：监视多个ref定义的响应式数据
  watch([sum, msg], (newValue, oldValue) => {
    console.log("sum或msg变化了", newValue, oldValue);
  });

  /* 情况三：监视reactive定义的响应式数据
     若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
     若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
  */
  watch(
    person,
    (newValue, oldValue) => {
      console.log("person变化了", newValue, oldValue);
    },
    { immediate: true, deep: false }
  ); //此处的deep配置不再奏效

  //情况四：监视reactive定义的响应式数据中的某个属性
  watch(
    () => person.job,
    (newValue, oldValue) => {
      console.log("person的job变化了", newValue, oldValue);
    },
    { immediate: true, deep: true }
  );

  //情况五：监视reactive定义的响应式数据中的某些属性
  watch(
    [() => person.job, () => person.name],
    (newValue, oldValue) => {
      console.log("person的job变化了", newValue, oldValue);
    },
    { immediate: true, deep: true }
  );

  //特殊情况
  watch(
    () => person.job,
    (newValue, oldValue) => {
      console.log("person的job变化了", newValue, oldValue);
    },
    { deep: true }
  ); //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
  ```

### watch 时 value 问题

watch **ref 定义的基本数据类型**时，不能.value

```js
let sum = ref(0); //ref定义的基本数据类型
let msg = ref("你好");
watch(sum, (n, o) => {
  console.log(n, o);
});
watch(sum.value, (n, o) => {
  //sum.value===0，相当于监视0，没有意义
  console.log(n, o);
});
```

watch **ref 定义的引用数据类型**时，需要.value

```js
const person = ref({
  //ref定义的引用数据类型
  name: "小明",
  age: 20,
  job: {
    j1: {
      salary: 20,
    },
  },
});
watch(person.value, (n, o) => {
  //ref监视对象数据类型，需要.value，这个值借助了reactive,
  console.log(n, o);
});
```

## watchEffect 函数

- watch 的套路是：既要指明监视的属性，也要指明监视的回调。

- watchEffect 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。
- watchEffect 有点像 computed：

  - 但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
  - 而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。

  ```js
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(() => {
    const x1 = sum.value;
    const x2 = person.age;
    console.log("watchEffect配置的回调执行了");
  });

  const counter = ref(0);
  const name = ref("aaa");
  // watch(counter, (newValue, oldValue) => {})
  // 1.watchEffect传入的函数默认会直接被执行
  // 2.在执行的过程中, 会自动的收集依赖(依赖哪些响应式的数据)
  const stopWatch = watchEffect(() => {
    console.log("-------", counter.value, name.value);
    // 判断counter.value > 10
    if (counter.value >= 10) {
      stopWatch();
    }
  });
  ```
