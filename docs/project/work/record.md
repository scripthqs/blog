# work

## list to tree

```ts
// 方式1：列表转换成树形结构;
const setTree = (source: any) => {
  let cloneData = JSON.parse(JSON.stringify(source)); // 对源数据深度克隆
  return cloneData.filter((father: any) => {
    // 循环所有项，并添加children属性
    let branchArr = cloneData.filter((child: any) => father.departmentId == child.parentId); // 返回每一项的子级数组
    branchArr.length > 0 ? (father.children = branchArr) : ""; //给父级添加一个children属性，并赋值
    return father.parentId == "0"; //返回第一层
  });
};

// 方式2：列表转换成树形结构;
const toTree = (data: any) => {
  //没有父节点的数据
  let parents = data.filter((val: any) => {
    return val.parentId == "0";
  });
  //有父节点的数据
  let children = data.filter((val: any) => {
    return val.parentId > "0";
  });
  //定义方法
  const translator = (parents: any, children: any) => {
    //遍历父节点数据
    parents.forEach((item: any) => {
      //遍历子节点数据
      children.forEach((current: any, index: number) => {
        //此时找到父节点下的子节点
        if (current.parentId == item.departmentId) {
          let temp: any = JSON.parse(JSON.stringify(children)); //让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
          temp.splice(index, 1); //让当前子节点作为唯一的父节点，去递归查找其对应的子节点
          translator([current], temp); //把找到子节点放入父节点的children属性中
          typeof item.children !== "undefined" ? item.children.push(current) : (item.children = [current]);
        }
      });
    });
  };
  translator(parents, children);
  return parents;
};
```

## 传入数字获取序列数组

输入 5，获得[0,1,2,3,4]

```js
[...new Array(20).keys()];
```

## 获取对象的长度

```js
Object.keys(obj).length;
```

## 锚点滚动效果

```js
  <div id='item'></div>
  const click = () =>{
    (document.getElementById(item) as any).scrollIntoView({ behavior: 'smooth' });
  }
```

## 点击闪烁效果

- vue 配合动态绑定 css

```html
<div :class="{ tableFade: a===b }"></div>
<div :class="{ tableFade: true }"></div>
```

```css
@keyframes fade {
  from {
    border: none;
    background: #fff;
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    background: #f84726;
    border: 1px #f84726 solid;
    opacity: 1;
  }
}

.tableFade {
  animation: fade 500ms 2;
}
```

## vue v-for 遍历对象

- 能够获取到键名、键值和索引

```js
<div v-for="(val, key, index) in data" :key="index" :id="key"></div>
```

## require.context()函数

require.context 是 webpack 的一个 api，通过执行 require.context()函数，来获取指定的文件夹内的特定文件，在需要多次从同一个文件夹内倒入的模块，使用这个函数可以自动倒入，不用每个都显示的写 import 来引入。

## 路由传参

1. query 传参 参数会跟在 url 后面，刷新页码不丢失
2. params 传参 参数不可见 但是刷新页面参数会丢失 ，解决不丢失的方法存在 localStorage 或 sessionStorage 中

## antd

表单验证滚动到错误的地方

```js
const funForm = async () => {
  setTimeout(() => {
    const errorList = (document as any).querySelectorAll(".ant-form-item-explain-error");
    if (errorList && errorList.length != 0) {
      //由于校验失败ant会自动给失败表单项添加类名，直接获取即可
      errorList[0].scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, 200);
  await busRef.value.validateFields();
  return busState.busForm;
};
```
