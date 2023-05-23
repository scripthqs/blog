# 文件上传

## xhr 上传文件

```js
// <input class="file" type="file">
// <button class="upload">上传文件</button>
const uploadBtn = document.querySelector(".upload");
uploadBtn.onclick = function() {
  // 1.创建对象
  const xhr = new XMLHttpRequest();

  // 2.监听结果
  xhr.onload = function() {
    console.log(xhr.response);
  };

  xhr.onprogress = function(event) {
    console.log(event);
  };

  xhr.responseType = "json";
  xhr.open("post", "http://xxx/upload");

  // 表单
  const fileEl = document.querySelector(".file");
  const file = fileEl.files[0];

  const formData = new FormData();
  formData.append("avatar", file);

  xhr.send(formData);
};
```

## fetch 上传文件

```js
// <input class="file" type="file">
// <button class="upload">上传文件</button>
const uploadBtn = document.querySelector(".upload");
uploadBtn.onclick = async function() {
  // 表单
  const fileEl = document.querySelector(".file");
  const file = fileEl.files[0];

  const formData = new FormData();
  formData.append("avatar", file);

  // 发送fetch请求
  const response = await fetch("http://xxx/upload", {
    method: "post",
    body: formData,
  });
  const res = await response.json();
  console.log("res:", res);
};
```
