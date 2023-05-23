# 网络请求

## uni.request

在 uni 中可以调用 uni.request 方法进行请求网络请求。需要注意的是：**在小程序中网络相关的 API 在使用前需要配置域名白名单**。

## 发送 get 请求

```vue
methods: {
   sendGet () {
    uni.request({
     url: 'http://localhost:8082/api/getlunbo',
     success(res) {
      console.log(res)
     }
    })
   }
  }
```
