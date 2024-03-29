# axios 基础

## axios 简介

1. 前端最流行的 ajax 请求库
2. react/vue 官方都推荐使用 axios 发 ajax 请求
3. [文档: https://github.com/axios/axios](https://github.com/axios/axios)

调用 axios 方法，**返回的是一个 promise 对象**

> 接口测试网站<https://httpbin.org/#/>

## axios 特点

1. 基于 xhr + promise 的异步 ajax 请求库
2. 浏览器端/node 端都可以使用
3. 支持请求／响应拦截器
4. 支持请求取消
5. 请求/响应数据转换
6. 批量发送多个请求

## axios 常用语法

`axios(config)`: 通用/最本质的发任意类型请求的方式
`axios(url[, config])`: 可以只指定 url 发 get 请求
`axios.request(config)`: 等同于 axios(config)
`axios.get(url[, config])`: 发 get 请求
`axios.delete(url[, config])`: 发 delete 请求
`axios.post(url[, data, config])`: 发 post 请求
`axios.put(url[, data, config])`: 发 put 请求
`axios.defaults.xxx`: 请求的默认全局配置（method\baseURL\params\timeout…）
`axios.interceptors.request.use()`: 添加请求拦截器
`axios.interceptors.response.use()`: 添加响应拦截器
`axios.create([config])`: 创建一个新的 axios(它没有下面的功能)
`axios.Cancel()`: 用于创建取消请求的错误对象
`axios.CancelToken()`: 用于创建取消请求的 token 对象
`axios.isCancel()`: 是否是一个取消请求的错误
`axios.all(promises)`: 用于批量执行多个异步请求
`axios.spread()`: 用来指定接收所有成功数据的回调函数的方法

<!-- ![axios](./images/axios.png) -->

![axios](https://raw.githubusercontent.com/scripthqs/assets/master/blog/axios.png)

## axios 的基本使用

### axios 发送 get 请求

发起 GET 请求：**通过 params 传参**

1. 通过`axios({})`通用方式发送

   ```js
   axios({
     // 请求方式
     method: "GET",
     // 请求的地址
     url: "https://autumnfish.cn/top/playlist",
     // URL 中的查询参数
     params: {
       limit: 10,
       order: "new",
     },
   }).then(function(result) {
     console.log(result);
   });
   ```

2. 通过`axios('url',{})`发送

   ```js
   axios("https://autumnfish.cn/top/playlist", {
     // 请求方式
     method: "GET",
     params: {
       limit: 10,
       order: "new",
     },
   }).then(function(result) {
     console.log(result);
   });
   ```

3. 通过`axios.get('url',{})`发送

   get 请求传递 2 个参数：

   1. 请求的地址
   2. 表示配置信息，

   ```js
   //  方式1
   axios.get("https://autumnfish.cn/top/playlist?limit=10&order=new").then(function(result) {
     console.log(result);
   });

   // 方式2，开发中，这种使用最多
   axios
     .get("https://autumnfish.cn/top/playlist", {
       // URL 中的查询参数
       params: {
         limit: 10,
         order: "new",
       },
     })
     .then(function(result) {
       console.log(result);
     });
   ```

### axios 发送 post 请求

发起 POST 请求：**通过 data 传参**，**上面的前两种方法，get 和 post 都可以使用。**

通过`axios.post("",{},{})`发送

```js
axios.post("", {}, {});
```

post 请求传递 3 个参数，

1. 请求地址
2. 传递的数据，在请求体中传递，默认是 json 格式
3. 配置的信息，header 等

```js
// 方式1
axios
  .post("https://httpbin.org/post", {
    data: {
      pageIndex: 2,
      pageSize: 10,
    },
  })
  .then((res) => {
    console.log(res, "post-res--");
  });

//方式2，开发中，这种使用最多
axios
  .post(
    "https://httpbin.org/post",
    {
      pageIndex: 2,
      pageSize: 10,
    },
    {}
  )
  .then((res) => {
    console.log(res);
  });
```

可以使用 async 和 await 简化 promise

```js
  // 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！
 async created () {
  // await 只能用在被 async “修饰”的方法中
    const { data: res } = await axios.post("https://autumnfish.cn/login/cellphone", {
      phone: '15588889999',
      password: '123456789'
    })
    console.log(res)
  },
```

1. 调用 axios 之后，使用 async/await 进行简化
2. 使用结构赋值，从 axios 封装的大对象中，把 data 属性解构出来
3. 把解构出来的 data 属性，使用冒号`:`进行重命名{data: res}
