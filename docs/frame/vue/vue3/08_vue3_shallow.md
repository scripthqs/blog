# shallowReactive 与 shallowRef

shallow：浅的

- shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
- shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。

- 什么时候使用?
  - 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。
  - 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。

shallowReactive：

```js
<h4>{{person}}</h4>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h2>薪资：{{job.j1.salary}}K</h2>
<button @click="name+='~'">修改姓名</button>
<button @click="age++">增长年龄</button>
<button @click="job.j1.salary++">涨薪</button>
  let person = shallowReactive({ //只考虑第一层数据的响应式
    // let person = reactive({
    name: '张三',
    age: 18,
    job: {
      j1: {
        salary: 20
      }
    }
  })
  return {
      person,
      ...toRefs(person)
  }
```

shallowRef：

```js
<h4>当前的x.y值是：{{x.y}}</h4>
<button @click="x={y:888}">点我替换x</button>//可以替换
<button @click="x.y++">点我x.y++</button>//不能监测x.y的改变
let x = shallowRef({
    y: 0
})
return {
  x
}
```
