# readonly 与 shallowReadonly

- readonly: 让一个响应式数据变为只读的（深只读）。
- shallowReadonly：让一个响应式数据变为只读的（浅只读）。
- 应用场景: 不希望数据被修改时。

```js
<h4>{{person}}</h4>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h2>薪资：{{job.j1.salary}}K</h2>
<button @click="name+='~'">修改姓名</button>
<button @click="age++">增长年龄</button>
<button @click="job.j1.salary++">涨薪</button>
let num = ref(0)
let person = reactive({ //只考虑第一层数据的响应式
  // let person = reactive({
  name: '张三',
  age: 18,
  job: {
    j1: {
      salary: 20
    }
  }
})
num = readonly(num)
person = readonly(person)
person = shallowReadonly(person)//可以改job.j1.salary
```

注意：readonly 修饰的数据**依然是响应式的**
