# axios 拦截器

## axios.create(config)

1. 根据指定配置创建一个新的 axios, 也就是每个新 axios 都有自己的配置
2. 新 axios 只是没有**取消请求**和**批量发请求**的方法, 其它所有语法都是一致的
3. 为什么要设计这个语法?
   (1) 需求: 项目中有部分接口需要的配置与另一部分接口需要的配置不太一样, 如何处理（比如有多个 baseURL 需要指定）
   (2) 解决: 创建 2 个新 axios, 每个都有自己特有的配置, 分别应用到不同要求的接口请求中

```js
const instance = axios.create({
  // instance是函数类型
  baseURL: "http://localhost:3000",
});
// 使用instance发Ajax请求
instance({
  url: "/posts",
});
instance.get("/posts");
```

## 拦截器函数

axios 可以设置拦截器：拦截每次请求和响应

- axios.interceptors.request.use(请求成功拦截, 请求失败拦截)
- axios.interceptors.response.use(响应成功拦截, 响应失败拦截)

```js
// 对实例配置拦截器
axios.interceptors.request.use(
  (config) => {
    console.log("请求成功的拦截");
    // 1.开始loading的动画

    // 2.对原来的配置进行一些修改
    // 2.1. header
    // 2.2. 认证登录: token/cookie
    // 2.3. 请求参数进行某些转化

    return config;
  },
  (err) => {
    console.log("请求失败的拦截");
    return err;
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");

    // 1.结束loading的动画

    // 2.对数据进行转化, 再返回数据

    // 此时接口已经请求成功，response里面便是请求成功后返回的响应体
    // 一般情况下会在这里进行一次数据的剥离。这样真正发起请求的地方就可以少写一层

    //  response里存在data对象，status，statusText，headers对象，config对象，request对象。
    //  此时我们只需要data和config： const { data, config } = response;

    //  项目里一般会存在文件请求，此时返回的response是二进制文件流,要做个判断：
    //  const { responseType } = config; if(responseType == 'blob') return response; return data;

    // 有时虽然请求是200，但是实际接口返回的可能不是正常数据，而是自定义的错误code，这时可以在这里进行相关
    // 前后端协商后的相关配置。比如：code是404，则跳转到404页面。code是502，则跳转到502页面。
    // code 是401，则跳转到401当然也不一定非要跳转页面，也可以引入Element实例然后弹出错误或者警告信息框。

    return res.data;
  },
  (err) => {
    console.log("响应失败的拦截:", err);
    return err;
  }
);

axios
  .get("https://httpbin.org/get")
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
```

### 多个拦截器

1. 说明: 调用`axios()`并不是立即发送 ajax 请求, 而是需要经历一个较长的流程
2. 流程: 请求拦截器 2 => 请求拦截器 1 => 发 ajax 请求 => 响应拦截器 1 => 响应拦截器 2 => 请求的回调
3. 注意: 此流程是通过 promise 串连起来的, 请求拦截器传递的是`config`, 响应拦截器传递的是`response`

```js
// 添加两个请求拦截器(回调函数)
axios.interceptors.request.use(
  (config) => {
    console.log("request interceptor1 onResolved()");
    return config;
  },
  (error) => {
    console.log("request interceptor1 onRejected()");
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    console.log("request interceptor2 onResolved()");
    return config;
  },
  (error) => {
    console.log("request interceptor2 onRejected()");
    return Promise.reject(error);
  }
);

// 添加两个响应拦截器
axios.interceptors.response.use(
  (response) => {
    console.log("response interceptor1 onResolved()");
    return response;
  },
  (error) => {
    console.log("response interceptor1 onRejected()");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("response interceptor2 onResolved()");
    return response;
  },
  (error) => {
    console.log("response interceptor2 onRejected()");
    return Promise.reject(error);
  }
);

axios
  .get("https://httpbin.org/get")
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
// request interceptor2 onResolved()
// request interceptor1 onResolved()
// response interceptor1 onResolved()
// response interceptor2 onResolved()
// res:
```
