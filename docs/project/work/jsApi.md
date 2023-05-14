# 处理数据

## 分组

```js
let arr = [
  { id: 1, type: 2 },
  { id: 2, type: 2 },
  { id: 3, type: 2 },
  { id: 4, type: 3 },
  { id: 5, type: 3 },
  { id: 6, type: 4 },
];
// 根据type分组成下面这种
let obj = {
  2: [
    { id: 1, type: 2 },
    { id: 2, type: 2 },
    { id: 3, type: 2 },
  ],
  3: [
    { id: 4, type: 3 },
    { id: 5, type: 3 },
  ],
  4: [{ id: 6, type: 4 }],
};
//方法1，两次循环
let obj = {};
for (const item of arr) {
  obj[item.type] = [];
}
for (const item of arr) {
  obj[item.type].push(item);
}
// 方法2，一次循环
let obj = {};
for (const item of arr) {
  obj[item.type] = obj[item.type] ?? [];
  obj[item.type].push(item);
  // let v = obj[item.type];
  // if (!v) {
  //   v = [];
  //   obj[item.type] = v;
  // }
  // v.push(item);
}

//forEach
arr.forEach((item) => {
  obj[item.type] = obj[item.type] ?? [];
  obj[item.type].push(item);
});
```

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

## valueOf 方法

```js
//(a==1 &&a==2&&a==3)为true
//==会触发隐式转换，所以可以使用valueOf或者toString方法
class A {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value++;
  }
}
const a = new A(1);
//(a===1 &&a===2&&a===3)为true
//===不会触发隐式转换，Object.defineProperty 数据劫持的方法来实现

let value = 1;
Object.defineProperty(window, "a", {
  get() {
    return value++;
  },
});
```

## js 中的 Truthy 和 Falsy

Truthy 和 Falsy 并不是拼写错误。Truthy 不等于 true，指是在 Boolean 上下文中转换后的值为真的值。即在 javascript 中所有表达式为 true 的值。同理 Falsy 指的是在 javascript 中所有表达式为 false 的值。

- falsy: false，0，''，null，undefined 和 NaN

## require.context()函数

require.context 是 webpack 的一个 api，通过执行 require.context()函数，来获取指定的文件夹内的特定文件，在需要多次从同一个文件夹内倒入的模块，使用这个函数可以自动倒入，不用每个都显示的写 import 来引入。

## 路由传参

1. query 传参 参数会跟在 url 后面，刷新页码不丢失
2. params 传参 参数不可见 但是刷新页面参数会丢失，解决不丢失的方法存在 localStorage 或 sessionStorage 中

## js 连点

```js
const pointEl = [];
const frequency = 500;
alert("请先点击需要连点的按钮，完成后按下回车键");
document.onmousedown = (e) => {
  console.log(e, "获得e元素");
  pointEl.push(e);
};
document.onkeyup = (e) => {
  if (e.code === "Enter") {
    if (!pointEl.length) return alert("你还未点击按钮");
    setInterval(() => {
      pointEl.forEach((event, index) => {
        setTimeout(() => {
          const cc = document.elementFromPoint(event.clientX, event.clientY);
          console.log(cc);
          cc.click();
        }, frequency * index);
      });
    }, frequency * pointEl.length);
  }
};
```

## 设置随机颜色

```js
function getRandomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}
const itemEls = document.querySelectorAll(".item");
for (const item of itemEls) {
  item.style.backgroundColor = getRandomColor();
}
```

## dayjs 格式化时间 UTC

```js
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

//北京时间加 8小时
export function formatUTC(utcString: string, format: string = "YYYY/MM/DD HH:mm:ss") {
  const resultTime = dayjs
    .utc(utcString)
    .utcOffset(8)
    .format(format);
  return resultTime;
}
```

## 封装 storage

```js
enum CacheType {
  Local,
  Session
}

class Cache {
  storage: Storage

  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }

// import { localCache ,sessionCache} from '@/utils/cache'

```
