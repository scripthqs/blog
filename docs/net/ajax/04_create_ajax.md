# XHR 基础

## XHR 简介

1. 使用`XMLHttpRequest` (XHR)对象可以与服务器交互, 也就是发送 ajax 请求
2. 前端可以获取到数据，而无需让整个的页面刷新。
3. 这使得 Web 页面可以只更新页面的局部，而不影响用户的操作。

[`XMLHttpRequest()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/XMLHttpRequest)

该构造函数用于初始化一个 `XMLHttpRequest` 实例对象，AJAX 的所有操作都是通过该对象进行的

## XHR 使用步骤

1. 创建网络请求的 ajax 对象，使用 XMLHttpRequest
2. 通过 open 方法配置网络请求
3. 发送 send 请求
4. 监听 XMLHttpRequest 对象状态的变化，或者监听 onload 事件

### 创建 XMLHttpRequest 对象

```js
var xhr = new XMLHttpRequest();
```

### 设置请求信息（请求方法和 url）

```js
// 请求方式
xhr.open(method, url);
//可以设置请求头，一般不设置
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```

### 发送请求

```js
xhr.send(body); //get请求不传 body 参数，只有post请求使用
```

### 接收响应

事件绑定，处理服务端返回的结果

```js
//xhr.responseXML 接收 xml格式 的响应数据
//xhr.responseText 接收 文本格式 的响应数据
xhr.onreadystatechange = function() {
  // readyState 是 xhr对象中的属性, 表示状态 0 1 2 3 4
  if (xhr.readyState == 4 && xhr.status == 200) {
    var text = xhr.responseText;
    console.log(text);

    // if (xhr.readyState !== XMLHttpRequest.DONE) return;
    // // 将字符串转成JSON对象(js对象)
    // const resJSON = JSON.parse(xhr.response);
    // console.log(resJSON);
  }
};
```

除了 onreadystatechange 还有其他事件可以监听

- loadstart：请求开始
- progress： 一个响应数据包到达，此时整个 response body 都在 response 中
- abort：调用 xhr.abort() 取消了请求
- error：发生连接错误，例如，域错误。不会发生诸如 404 这类的 HTTP 错误。
- load：请求成功完成
- timeout：由于请求超时而取消了该请求（仅发生在设置了 timeout 的情况下）
- loadend：在 load，error，timeout 或 abort 之后触发

## 响应数据和响应类型

发送请求后，对应的结果是 response 属性，返回的类型取决于 responseType 的属性设置，如果将 responseType 的值设置为空字符串，则会使用 text 作为默认值，目前服务器基本返回的都是 json 数据，直接设置为 json 即可。

```js
xhr.responseType = "json";
```

## 响应状态 status

可以通过 status 和 statusText 来获取，status 返回响应状态码

```js
xhr.status;
xhr.statusText;
```

## get/post 参数传递

常见传递给服务器数据方式：

- get 请求的 query 参数
- post 请求 x-www-form-urlencoded 格式
- post 请求 formData 格式
- post 请求 JSON 格式

```js
sendBtn.onclick = function() {
  // 创建xhr对象
  const xhr = new XMLHttpRequest();

  // 监听数据响应
  xhr.onload = function() {
    console.log(xhr.response);
  };

  // 配置请求
  xhr.responseType = "json";

  // 1.传递参数方式一: get -> query
  // xhr.open("get", "http://xxx/get?name=aaa&age=18&address=China")

  // 2.传递参数方式二: post -> urlencoded
  // xhr.open("post", "http://xxx/posturl")
  // // 发送请求(请求体body)
  // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  // xhr.send("name=aaa&age=18&address=China")

  // 3.传递参数方式三: post -> formdata
  // xhr.open("post", "http://xxx/postform")
  // // formElement对象转成FormData对象
  // const formData = new FormData(formEl)
  // xhr.send(formData)

  // 4.传递参数方式四: post -> json
  xhr.open("post", "http://xxx/postjson");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify({ name: "aaa", age: 18, address: "China" }));
};
```

## 取消请求和超时时间

```js
const xhr = new XMLHttpRequest();

xhr.onload = function() {
  console.log(xhr.response);
};
xhr.onabort = function() {
  console.log("请求被取消掉了");
};

xhr.responseType = "json";

// timeout: 浏览器达到过期时间还没有获取到对应的结果时, 取消本次请求

// 超时设置 （2秒）
xhr.timeout = 2000;
// 超时回调
xhr.ontimeout = function() {
  alert("网络超时，请稍后重试");
};

// 网络异常回调
xhr.onerror = function() {
  alert("网络异常，请稍后重试");
};
xhr.open("get", "http://xxx/timeout");

xhr.send();

// 手动取消结果
const cancelBtn = document.querySelector("button");
cancelBtn.onclick = function() {
  xhr.abort();
};
```
