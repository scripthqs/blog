# 前端监控

监控 SDK（Software Development Kit，软件开发工具包）在前端领域通常指的是用于采集、上报和分析前端应用运行数据的工具库。它可以帮助开发者快速集成前端监控能力，无需手动编写底层采集和上报逻辑。

1. 自动采集性能数据（如白屏时间、首屏时间、资源加载时间、长任务（longtask）、FCP/LCP 等）
2. 捕获并上报 JS 错误、Promise 异常、资源加载失败等
3. 记录用户行为（如点击、页面跳转、表单提交等）
4. 监控接口请求、白屏、崩溃等异常
5. 数据上报到后端平台，便于分析和告警

## 性能监控

- 长任务，超过 50ms 的任务

```js
window.addEventListener("load", () => {
  const timing = performance.timing;
  // 计算各阶段耗时
  const whiteScreen = timing.responseStart - timing.navigationStart;
  const firstScreen = timing.domContentLoadedEventEnd - timing.navigationStart;
  // 上报到监控平台
});
```

## 错误监控

- 捕获 JS 运行时错误、Promise 未捕获异常、资源加载失败等。
- 通过 window.onerror、window.addEventListener('error', ...)、window.onunhandledrejection 监听并上报。

```js
window.onerror = function (msg, url, line, col, error) {
  // 上报错误信息
};
window.onunhandledrejection = function (event) {
  // 上报 Promise 错误
};
```

## 行为监控

- 采集用户点击、页面跳转、表单提交、停留时长等行为数据。
- 可通过事件监听、埋点、自动化采集等方式实现。

```js
document.addEventListener("click", (e) => {
  // 上报点击事件
});
```

## 页面什么使用发送埋点数据

- beforeunload visibilitychange 事件，监听页面关闭
- navigator.sendBeacon 在页面关闭或切换时发送积压的埋点数据，保证数据可靠上报。

```js
window.addEventListener("beforeunload", sendPendingData);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    sendPendingData();
  }
});

// 全局数组 pendingData 存储待上报的埋点数据
let pendingData = [];

// 埋点数据采集时调用
function collectData(data) {
  pendingData.push(data);
}

// sendPendingData 实现
function sendPendingData() {
  if (pendingData.length === 0) return;
  // 发送所有积压的数据
  navigator.sendBeacon("/log", JSON.stringify(pendingData));
  // 清空已上报的数据
  pendingData = [];
}
```
