# 在项目中使用 axios

## 直接 Vue 原型上中使用 axios(不推荐)

```js
import axios from "axios"

created () {
    axios({
      url: "https://autumnfish.cn/banner",
      method: 'get'
    }).then((res) => {
      console.log(res)
    })
  },
```

## 将 axios 挂载到 Vue 原型上

```js
// 1. 全局配置 axios 的请求根路径
axios.defaults.baseURL = "https://autumnfish.cn/";

// 2. 把 axios 挂载到 Vue.prototype 上，供每一个.vue 组件的实例直接使用
Vue.prototype.$http = axios;

// 3. 今后在每一个.vue 组件中发起请求，直接调用 this.\$http.xxx 即可
created () {
    this.getMenuList()
  },
  methods: {
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      this.menuList = res.data
      // console.log(res)
    }
  }
```

注意：**把 axios 挂载到原型上，有一个缺点，不利于 API 接口的复用**

## 对 axios 简易二次封装

```js
import axios from "axios";
const request = axios.create({
  baseURL: "https://httpbin.org/",
  timeout: 5000,
});
export function get(url, params) {
  return request.get(url, {
    params,
  });
}

export function post(url, data) {
  return request.post(url, data);
}

export function delete(url) {
  return request.delete(url);
}
export function put(url, data) {
  return request.put(url, data);
}
```

## 基于 axios 二次封装

1. 新建一个 network 文件夹，基于 axios 框架封装 request.js

   ```js
   import axios from 'axios'
   export function request(config) {
       //1 创建axios实例
       const instance = axios.create({
           //baseURL: 'https://httpbin.org/',
           baseURL: '/api'，//这样配置，再结合vue.config.js可以解决跨域问题
           timeout: 5000
       })

       //2 axios拦截器
       // 请求拦截，可以对结果进行处理
       instance.interceptors.request.use(config => {
           // console.log(config);
           //比如config中的一些信息不符合服务器的要求
           //比如希望每次发送请求时，在界面中显示一个请求的图标
           //某些网络请求，比如登录token，必须携带一些特殊的信息，跳转到某个地方登录
           config.header.token='123456'
           //拦截后必须返回
           return config;
       }, err => {
           console.log(err);
       })

       // 响应拦截,可以对结果进行处理
       instance.interceptors.response.use(res => {
           //可以根据服务器的返回状态码做x
           // console.log(res.data);
           return res.data;
       },err => {
           console.log(err);
       })

       //3.发送真正的网络请求
       return instance(config);
   }
   ```

2. 引入 request.js，配置各页面的具体 url，例如首页的 home.js

   ```js
   import { request } from "./request";

   export function getData() {
     return request({
       url: "/get",
     });
   }
   ```

3. 有的接口可能会出现跨域问题，需要在 vue.config.js 中追加如下配置

   ```js
   devServer: {
       proxy: {
         '/api': {
           target: 'https://httpbin.org/',
           pathRewrite:{'^/api':''},
           ws: true, //用于支持websocket
           changeOrigin: true //用于控制请求头中的host值
         },
         '/demo': {
           target: 'http://localhost:5001',
           pathRewrite:{'^/demo':''},
         }
       }
   }
   ```

## 使用 class 对 axios 二次封装(简介版)

```js
import axios from "axios";

class Request {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new Request("https://httpbin.org/");
export default r2 = new Request("https://httpbin.org/");
```

## 使用 TypeScript 对 axios 封装(复杂)

```ts
//  1.config.ts
export const BASE_URL = "https://httpbin.org/";
export const TIME_OUT = 5000;

//  2.type.ts
import type { AxiosRequestConfig, AxiosResponse } from "axios";
// 针对AxiosRequestConfig配置进行扩展
interface Interceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: Interceptors<T>;
}


//  3.request.ts
import axios from "axios";
import type { AxiosInstance } from "axios";
import type { RequestConfig } from "./type";
/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */
class Request {
  instance: AxiosInstance;

  // request实例 => axios的实例
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);

    // 每个instance实例都添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 1.开始loading的动画
        // 2.对原来的配置进行一些修改
        // 2.1. header
        // 2.2. 认证登录: token/cookie
        // 2.3. 请求参数进行某些转化
        return config;
      },
      (err) => {
        return err;
      }
    );
    // 每个instance实例都添加响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // 1.结束loading的动画
        // 2.对数据进行转化, 再返回数据

        /**
         * 
         */
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
        return err;
      }
    );

    // 针对特定的request实例添加请求拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
    // 针对特定的request实例添加响应拦截器
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    );
  }

  // 封装网络请求的方法
  request<T = any>(config: RequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }
  delete<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" });
  }
}

export default Request;


//  4.index.ts
import { BASE_URL, TIME_OUT } from "./config";
import request from "./request";

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})


export const request2 = new Request({
  baseURL: "http://xxxxxx/api",
  timeout: 8000,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log("实例2请求成功的拦截")
      return config
    },
    requestFailureFn: (err) => {
      console.log("实例2请求失败的拦截")
      return err
    },
    responseSuccessFn: (res) => {
      console.log("实例2响应成功的拦截")
      return res
    },
    responseFailureFn: (err) => {
      console.log("实例2响应失败的拦截")
      return err
    }
  }
})

export default request
```
