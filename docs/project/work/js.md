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
let intervalId = null;
const frequency = 500;

alert("请先点击需要连点的按钮，完成后按下回车键");

document.onmousedown = (e) => {
  console.log(e, "获得e元素");
  pointEl.push(e);
};

const clickPoints = () => {
  pointEl.forEach((event) => {
    const element = document.elementFromPoint(event.clientX, event.clientY);
    console.log(element);
    element.click();
  });
};

document.onkeyup = (e) => {
  if (e.code === "Enter") {
    if (!pointEl.length) return alert("你还未点击按钮");
    intervalId = setInterval(clickPoints, frequency);
  } else if (e.code === "Escape") {
    clearInterval(intervalId);
    intervalId = null;
    pointEl.length = 0;
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
  const resultTime = dayjs.utc(utcString).utcOffset(8).format(format);
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

## 下载文件

在 Vue 处理文件的下载，本次遇到的是后端 Excel 导出，一般会出现两种情况，**文件流和 url**，所以就两种方法（通常对应的是需要不需要携带 token），原理都是通过 a 标签下载

1. 通过 Ajax 请求，拿到 response ，转换为 blob 格式（主要是为了处理 type），为其生成下载链接，下载即可
2. 直接拼接 URL，拼出来对应请求链接，直接访问即可（不需要二次 token 认证）

对于文件流，使用 axios 请求时，需要注意两点：

- 请求时，一定要在请求中，添加：`responseType: 'blob'`
- 响应后，一定要做拦截请求器中判断：`if (response.config.responseType === 'blob') { return response; }`，因为一般`json`数据都是`return response.data`，只有`blob`数据是`return response`

```js
$axios.get($api.exportXlsx, {
  params: { page: page, limit: limit },
  responseType: "blob",
});
```

正常情况下，通过 window.location = url 就可以下载文件。浏览器判断这个链接是一个资源而不是页面的时候，就会下载文件。但是通过文件流生成的 url 对应的资源是没有文件名的，需要添加文件名。这时候可以用到 download 属性指定下载的文件名

### 返回文件流

首先使用接口工具测试后端接口，调用接口成功，如果返回文件流格式（OutputStream）。

服务器返回不同数据，我们会做不同的处理，json 我们直接取用，blob 文件流数据需处理后下载。

### 如何处理 blob 文件

需要在前端发送请求时的请求头中，用 responseType 告知服务器需要返回的数据类型，responseType 默认是“json”，这里需要设置请求的是文件流："blob"。

不同的请求插件设置 header 的方式不同，用 axios 来说，axios.post(url, data, config)，responseType 是在 config 里设置的（这些设置应该是在底层赋给请求头）：

在 axios 项目中，一般为了给所有的请求做一些统一处理，比如 baseURL、请求带 token，回包错误码提示，在底层封装一个 axios 实例，所有的请求都调用该实例的方法。

文件的请求和普通数据的请求很可能调用的是同一个实例。直接在总响应拦截器里判断出文件流并执行下载，就不用在每一文件请求协议回调里各自再写一遍执行下载的代码。

### 在 axios 拦截中区分文件流还是 json 数据

头部 Content-Type 表示服务端发送的类型及采用的编码方式

- Content-Type 为`application/json` 是普通 json 数据
- Content-Type 为`octets/stream`是文件流

```js
//axios响应拦截器里
if (
  res.headers &&
  (res.headers["content-type"].indexOf("application/x-msdownload") != -1 ||
    res.headers["content-type"].indexOf("octets/stream") != -1 ||
    res.headers["content-type"].indexOf("application/octet-stream") != -1)
) {
  //执行下载方法
}
```

### Content-Disposition（响应）和文件名

文件名就需要从响应头里的 Content-Disposition 属性获取

Content-Disposition 可以出现在消息主体中，也可以出现在 multipart/form-data 类型的应答消息体中。Content-Disposition 在不同的地方有不同的作用和意义，而文件下载属于前者。

常规的 HTTP 应答中，Content-Disposition 在响应头，有两个参数。

- 第一个参数用于指示回复的内容该以何种形式展示
  - inline：默认值，内联形式。表示回复中的消息体会以页面的一部分或者整个页面的形式展示
  - attachment：附件形式。意味着消息体应该被下载到本地，大多数浏览器会自动触发一个“保存为”的对话框，将 filename 的值预填为下载后的文件名
- 第二个参数是文件名，只有当第一个参数为 `attachment` 时才有第二个参数`filename`

可能出现的问题：

- 无法获取响应 header 的 Content-Disposition 字段
- filename 有可能文件名可能需要 decodeURI 解码一下，再用正则把文件名匹配出来（替换设置下载文件名那里即可）

### 文件流格式下载

服务返回文件流数据（blob 对象），需要用 JS 对象 Blob 构造函数来接收并储存，然后用 URL.createObjectURL 生成一个可使用的 URL 地址，之后把这个 URL 地址赋给一个临时创建的 a 标签，用 a 标签 HTML5 新属性 download 实现本地储存，以达到实现下载需求

```js
const mimeMap = {
  xlsx: "application/vnd.ms-excel",
  zip: "application/zip",
};
const resolveBlob = (res: any, mimeType: any) => {
  // 创建a标签，并处理二级制数据
  const aLink = document.createElement("a");
  const blob = new Blob([res.data], { type: mimeType });

  // 设置下载文件名称，使用正则取出名称
  const pat = new RegExp("fileName=([^;]+\\.[^\\.;]+)");
  let contentDisposition = "";
  //浏览器问题可能会出现 content-disposition 匹配不到
  if (res.headers["content-disposition"]) contentDisposition = res.headers["content-disposition"];
  if (res.headers["Content-Disposition"]) contentDisposition = res.headers["Content-Disposition"];
  // console.log(contentDisposition, 'contentDisposition');

  const result = pat.exec(contentDisposition);
  // const result = pat.exec(decodeURI(contentDisposition));文件名可能需要解码再正则

  let fileName = result && result[1];

  // 如果Content-Disposition没有暴露，给文件一个默认名字
  if (fileName == null) fileName = "商品查询列表";

  // 生成下载链接
  const URL = window.URL || window.webkitURL;
  aLink.href = URL.createObjectURL(blob);
  aLink.setAttribute("download", fileName);
  // 下载
  document.body.appendChild(aLink);
  aLink.click();
  // 释放URL对象
  window.URL.revokeObjectURL(aLink.href);
  document.body.removeChild(aLink);
};
```

### url 下载

服务器直接返回文件的 url 和 name，

### 利用 a 标签的 href 属性

a 标签的 href 属性包含超链接指向的 URL 或 URL 片段。对于大多数文件，只要用 href 指向文件 url，点击 a 标签，就会下载文件

```js
<a href="${fileUrl}">下载文件</a>
```

### H5 新增了 download 属性

对于一些浏览器可以识别的文件格式，比如`.txt`、`.png`、`.jpg` 、`.mp4` 等，这样写只会直接在浏览器打开该文件，无法下载。针对这种情况，需要 使用 H5 的 download 属性

download 属性可以指示浏览器下载 URL 而不是导航到它。

如果 download 属性有一个值，那么此值将在下载保存过程中作为预填充的文件名。

所以只要加上 download 属性，就可以正常下载文件了。

### 使用 a 标签下载

使用 a 标签下载文件，有两种实现

- 直接在 html 里写个 a 标签

  ```html
  <a href="${fileUrl}" download>下载文件</a>
  ```

- 对于动态数据，需要在 js 里用 api 创建 a 标签

  ```js
  function downloadFile(url, filename) {
    if (!url) return;
    let link = document.createElement("a"); //创建 a 标签
    link.style.display = "none"; //使其隐藏
    link.href = url; //赋予文件下载地址
    link.setAttribute("download", filename); //设置下载属性 以及文件名
    document.body.appendChild(link); //a 标签插至页面中
    link.click(); //强制触发 a 标签事件
    document.body.removeChild(link);
  }
  ```

### download 属性失效

如果加上 download 属性，文件还是直接打开，无法正常下载，这有可能是 download 属性失效造成的。

download 属性也受同源策略的影响，即非同一端口下不能直接下载第三方文件，所以这里 download 失效之后做的仅仅是跳转功能，而非下载。

### 跨域文件下载解决方案(后端)

- 后端解决（推荐）：针对跨域文件下载问题，可以前端仍是采用上面的方法，后端 oss 批量设置 HTTP 头，设置 HTTP 请求头为 Content-Disposition 为 attachment 即可，访问的时候就是直接下载而不是浏览。

### 跨域文件下载解决方案(前端)不好

对文件类型判断，如果不是图片、文本文件，上面的方法不用加 download 属性就是有效的，但是对 txt 文件依然没有解决。

```js
export function downloadImage(url, name) {
  let image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
    let a = document.createElement("a"); // 生成一个a元素
    let event = new MouseEvent("click"); // 创建一个单击事件
    a.download = name || "photo"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = url;
}
```

### 跨域文件下载解决方案(前端)推荐

即使是跨域文件，将该 url 输入在浏览器地址栏回车，是可以查看的。所以我们也可以直接以该文件的 url 发送一个 get 请求，不通过后端协议，而是直接向文件服务器请求资源。理论上如果 url 可以直接查看到文件，那这个 get 请求就应该也能成功。get 请求仍需设置请求头 responseType。这个 get 请求自然直接返回该文件流，我们用上面**二进制式下载**的方法处理返回结果，就能成功下载文件。这也就是变相使用二进制式下载。

用 axios 的项目此时注意，这个 get 请求应是不需要 token 之类的，如果底层封装过的 axios 实例里拦截器各种加东西判断处理，这里就不用和其他的普通请求共用一个封装过的 axios 实例，使用最原始的 axios 实例即可，避免拦截器里的处理对它造成影响。

```js
import axios from "axios";
/**
 * 下载文件
 * @param url 文件url
 * @param fileName
 */
function downloadByURL(url, fileName) {
  axios.get(url, { responseType: "blob" }).then((response) => {
    downloadByFile(response.data, fileName);
  });
}

/**
 * 下载文件
 * @param data  二进制文件流数据
 * @param filename
 */
const downloadByFile = function (data, filename) {
  if (!data) return;

  let url = window.URL.createObjectURL(new Blob([data]));
  let link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("download", filename);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

使用 url 文件下载时，传入 url 和 name

```js
//下载文件的方法
const downloadFile = (src: any, fileName: any) => {
  let x = new XMLHttpRequest();
  x.open("GET", src, true);
  x.responseType = "blob";
  x.onload = function () {
    let url = window.URL.createObjectURL(x.response);
    let a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  };
  x.send();
};
```

## 注意

在请求后端接口的文件流中，Content-Disposition 属性前端在 Network 里是能看到的，但是无法通过 JS 获取到，这是由于跨域浏览器处于安全考虑不让自定义响应头通过 JS 获取，这里后端需要将其暴露出去。

### 后端问题

默认情况下，header 只有六种 simple response headers （简单响应首部）可以暴露给外部，分别是 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 六个属性

此时，以上 6 个属性在客户端可以访问得到，既可以在 Network 里看到，也可以在代码里获取到他们的值。

content-disposition 默认不在其中，所以即使服务器在协议回包里加了该字段，但因没“暴露”给外部，依然看得到拿不到该字段。

响应首部 Access-Control-Expose-Headers 就是控制“暴露”的开关，如果想要让客户端可以访问到其他的首部信息，服务器不仅要在 header 里加入该首部，还要将它们在 Access-Control-Expose-Headers 里面列出来

后端设置：

```java
response.setHeader("Access-Control-Expose-Headers","content-disposition");
response.setHeader("content-disposition");
```

之后在 network 中可以看到：

```java
Access-Control-Expose-Headers:content-disposition
```

```java
// 设置返回类型为excel
response.setContentType("application/vnd.ms-excel; charset=UTF-8");
// 设置返回文件名为filename.xls
response.setHeader("Content-Disposition", "filename.xls");
// 请求或响应消息不能走缓存
response.setHeader("Cache-Control", "no-cache");
// 将Content-Disposition暴露出去，这样就可以用过JS获取到了
response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
```

- 后端还可能开启 jwt token 验证，如果开启需要请求拦截设置 headers

### 前端问题

默认情况下 axios 不会处理二进制数据，即请求可以正常被浏览器接收，但 axios 不会去处理。需要在请求的时候设置 responseType: 'blob' 才可以。

前端在 Axios 请求和响应拦截的时候，需要对其进行处理。

- 请求拦截一般我们都是会设置 headers，这里只是简单处理一下，实际会根据不同情况设置 headers
- 响应拦截一般我们都是把 response.data 进行返回，但是这里我们需要把整个 response 返回（因为文件名在 headers 里面）

```js
export function download(url, data) {
  return axiosInstance.post(url, data, {
    responseType: "blob",
  });
}

// 响应拦截器中
if (response.status === 200) {
  // return Promise.resolve(response.data);
  //下载文件流
  if (response.config.responseType === "blob") {
    return response;
  }

  // 如果请求错误，统一处理
  if (response.data.success) {
    return response;
  } else {
    message.warn(response.data.errMessage);
  }
} else {
  Request.errorHandle(response);
  // return Promise.reject(response.data);
  return response;
}
```

## 使用阿里云 oss，实现上传下载

## 大文件上传

文件切片上传

blob.slice

## 组件封装

1. 单向数据流：子组件不应该修改父组件的数据，不能直接修改 props 和用 this.$parent 读取父组件
2. 单一职责：不要将多个功能耦合在一个组件中
3. 高度封装：松耦合，对外提供接口来控制其行为
4. 高度复用：不要在组件中引入 vuex 或者 redux 等状态管理库，或者使用$router或者$store 等全局对象。不要依赖外部数据的 DOM 和 CSS
5. 使用合适的三方库：文档完善、依赖不要庞大、维护及时、下载量、是否允许商业使用、是否支持 ESModule(支持 Tree shaking)、TS 类型支持
6. 命名规范：多个单词（避免和 html 元素同名）、大驼峰
7. 预留拓展空间、slot 插槽
8. 合理适用样式、组件适用类选择器、不应适用元素选择器
9. 合理适用状态和属性，组件内部适用状态、暴露给外部使用属性
