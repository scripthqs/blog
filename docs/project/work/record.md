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

## object-fit

object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度。

- contain 保持原有尺寸比例。内容被缩放。
- fill 默认，不保证保持原有的比例，内容拉伸填充整个内容容器
- cover 保持原有尺寸比例。但部分内容可能被剪切。

## 倒计时

```vue
<a-statistic-countdown title="倒计时" :value="deadline" format="H 时 m 分 s 秒">
  <!-- <template #title>
    <div style="font-size: 24px"></div>
  </template> -->
</a-statistic-countdown>
// Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
<!-- const deadline = ref(new Date(new Date().setHours(0, 0, 0, 0) + 18.5 * 60 * 60 * 1000 - 1)); -->
```

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
