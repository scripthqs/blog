# axios 的配置

## 基本配置

1. baseURL
2. timeout
3. headers

```js
// 1.baseURL
const baseURL = "https://httpbin.org/";

// 给axios实例配置公共的基础配置
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 10000;
axios.defaults.headers = {};
```

## axios.all

使用 axios 发送多个请求

```js
// baseURL
const baseURL = "https://httpbin.org/";
let params = { pageIndex: 1, pageSize: 20 };
axios.all([axios.get("/get", { params }), axios.post("/post", params)]).then((res) => {
  console.log("res:", res);
});
```

## axios 创建实例

axios 默认库提供给我们的实例对象 axios，默认就是直接使用的这个实例，这个默认的实例会存在一些问题：

1. 当给该实例设置一些默认配置时, 这些配置就被固定下来了
2. 如某些请求需要使用特定的 baseURL 或者 timeout 等
3. 就可以创建新的实例, 并且传入属于该实例的配置信息

```js
// axios默认库提供给我们的实例对象
axios.get("https://httpbin.org/get");

// 创建其他的实例发送网络请求
const baseURL = "https://httpbin.org/";
const instance1 = axios.create({
  baseURL,
  timeout: 5000,
  headers: {},
});
instance1.get("/get");

//创建多个实例
const instance2 = axios.create({
  timeout: 5000,
  headers: {},
});
instance2.defaults.baseURL = baseURL;
instance2.get("/get");
```
