# fetch

Fetch 可以看做是早期的 XMLHttpRequest 的替代方案，它提供了一种更加现代的处理方案。

- 返回一个值是`Promise`
  - 在请求成功时调用 resolve 回调
- 与 XMLHttpRequest 不同 不用把所有操作放在同一个对象上
- 语法简单 更加语义化
- 基于标准的 promise 实现 支持 async/await
- 更加底层

Fetch 缺点：

- 不支持 abort(超时取消请求) 不支持超时控制
- 没有办法检测请求进度 XHR 可以
- 默认不会携带 cookie

```js
// 1.fetch发送get请求
// 1.1.未优化的代码
fetch("http://xxx/")
  .then((res) => {
    // 1.获取到response
    const response = res;

    // 2.获取具体的结果
    response.json().then((res) => {
      console.log("res:", res);
    });
  })
  .catch((err) => {
    console.log("err:", err);
  });

// 1.2. 优化方式一:
fetch("http://xxx/")
  .then((res) => {
    // 1.获取到response
    const response = res;
    // 2.获取具体的结果
    return response.json();
  })
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });

// 1.3. 优化方式二:
async function getData() {
  const response = await fetch("http://xxx/");
  const res = await response.json();
  console.log("res:", res);
}
getData();

// 2.post请求并且有参数
async function getData() {
  const response = await fetch("http://xxx/json", {
    method: "post",
    // headers: {
    //   "Content-type": "application/json"
    // },
    body: JSON.stringify({
      name: "aaa",
      age: 18,
    }),
  });

  // const formData = new FormData();
  // formData.append("name", "aaa");
  // formData.append("age", 18);
  // const response = await fetch("http://xxx/postform", {
  //   method: "post",
  //   body: formData,
  // });

  // 获取response状态
  console.log(response.ok, response.status, response.statusText);

  const res = await response.json();
  console.log("res:", res);
}
getData();
```
