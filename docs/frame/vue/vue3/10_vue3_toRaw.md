# toRaw 与 markRaw

- toRaw：
  - 作用：将一个由`reactive`生成的`响应式对象`转为`普通对象`。
  - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
- markRaw：
  - 作用：标记一个对象，使其永远不会再成为响应式对象。
  - 应用场景:
    1. **有些值不应被设置为响应式**的，例如复杂的第三方类库等。
    2. 当**渲染具有不可变数据源的大列表**时，跳过响应式转换可以提高性能。

```js
<h2>{{num}}</h2>
<button @click="num++">num++</button>
<h4>{{person}}</h4>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h2>薪资：{{job.j1.salary}}K</h2>
<button @click="name+='~'">修改姓名</button>
<button @click="age++">增长年龄</button>
<button @click="job.j1.salary++">涨薪</button>
setup () {
  let num = ref(0)
  let person = reactive({
    // let person = reactive({
    name: '张三',
    age: 18,
    job: {
      j1: {
        salary: 20
      }
    }
  })

  num = toRaw(num)//依然可以改，只能转换 reactive
  // person = readonly(person)
  person = toRaw(person)

  return {
    num,
    person,
    ...toRefs(person)//此时，不能使用toRefs方法
  }
}
```
