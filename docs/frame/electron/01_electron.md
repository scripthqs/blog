# Electron 简介

官方文档：<https://www.electronjs.org/zh/docs/latest/>

分为主进程和渲染进程

1. 创建了 main.js 脚本来运行主要进程
2. 使用 Electron 的 app 和 BrowserWindow 模块来创建一个浏览器窗口，在一个单独的进程(渲染器)中显示网页内容
3. 为了访问渲染器中的 Node.js 的某些功能，在 BrowserWindow 的构造函数上附加了一个预加载脚本

## 控制台

```js
const mainWindow = new BrowserWindow();
//  打开开发者工具
mainWindow.webContents.openDevTools();
// mainWindow.webContents.openDevTools({ mode: 'detach' })
// { mode: 'detach' } 选项可以将 DevTools 作为一个独立的窗口打开
// 使用快捷键打开开发工具
globalShortcut.register("Alt+F12", () => {
  mainWindow.webContents.openDevTools();
});
```

## BrowserWindow

- width
- height
- webPreferences.preload 将脚本附在渲染进程上

## contextBridge

在隔离的上下文中创建一个安全的、双向的、同步的桥梁。

1. contextBridge.exposeInMainWorld(apiKey, api)

   - 通过 window[apiKey]访问

2. contextBridge.exposeInIsolatedWorld(worldId, apiKey, api)

- 定义全局对象

## 进程通信 IPC

- ipcMain 模块
- ipcRenderer 模块
