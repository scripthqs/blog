# toRef 和 toRefs

```js
const info = reactive({
  name: "aaa",
  age: 18,
  height: 1.88,
});

// reactive被解构后会变成普通的值, 失去响应式
// const { name, age, height } = info; //直接解构会失去响应式

const { name, age } = toRefs(info); //使用toRefs解构，保留响应式
const height = toRef(info, "height");
```

- 作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。

  ```js
  //toRef(对象,'对象中的属性')
  const name = toRef(person, "name");
  ```

- 应用: 要将响应式对象中的某个属性**单独提供给外部使用**时，此时，**该属性也具有响应式**。

```js
let person = reactive({
  name: "小明",
  age: 22,
  job: {
    j1: {
      salary: 20,
    },
  },
});
const name1 = person.name;
console.log("%%%", name1);
const name2 = toRef(person, "name");
console.log("toRef", name2);
return {
  person,
  name2,
};
```

扩展：`toRefs` 与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`，**配合解构**可以将对象中的属性分离出来。

```js
setup () {
  // 数据
  let person = reactive({
    name: '小明',
    age: 22,
    job: {
      j1: {
        salary: 20
      }
    }
  })
  const name1 = person.name
  // console.log('%%%', name1)
  const name2 = toRef(person, 'name')
  // console.log('toRef', name2)
  const name3 = ref(person.name)
  const x = toRefs(person)
  console.log('toRefs', x)
  return {
    person,
    name1,
    name2,
    name3,
    x,
    ...toRefs(person)
  }
}
```
