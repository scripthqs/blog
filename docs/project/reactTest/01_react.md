# React 项目开发

## 创建 React 项目

```bash
npx create-react-app projectName
```

## 项目配置

- icon
- 配置标题
- 配置 jsconfig.json
- 通过 craco 配置别名和 less 文件

  ```js
  // @ => src: webpack
  // 问题: react 脚手架隐藏 webpack
  // 解决一: npm run eject(不推荐)
  // 解决二: craco => create-react-app config

  // npm i @craco/craco
  // npm i @craco/craco@alpha//如果不支持安装alpha版本
  // npm i craco-less@alpha
  // craco.config.js
  const path = require("path");

  const resolve = (pathname) => path.resolve(__dirname, pathname);

  module.exports = {
    // less
    plugins: [
      {
        plugin: require("craco-less"),
      },
    ],
    // webpack
    webpack: {
      alias: {
        "@": resolve("src"),
        components: resolve("src/components"),
        utils: resolve("src/utils"),
      },
    },
  };

  //修改package.json script
  "dev": "craco start"
  ```

- css 样式重置： normalize.css 和 reset.css

  ```js
  //npm i normalize.css
  import "normalize.css"

  //index.less
  @import "./reset.less";
  ```

- 安装 classnames 库

  ```js
  //  npm i classnames
  import classNames from "classnames";
  ```

## Router 路由配置

```js
// npm i react-router-dom
import { HashRouter } from "react-router-dom";
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// 路由懒加载 Suspense
// router/index.js
const Home = React.lazy(() => import("@/views/home"));
//index.js
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
<React.StrictMode>
  <Suspense fallback={"loading"}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
</React.StrictMode>;
```

## Redux 状态管理

目前主要有 2 种方式配置状态管理

- 普通方式：目前项目中依然使用率非常高
- @reduxjs/toolkit 方式：推荐方式, 未来的趋势

```js
// npm i @reduxjs/toolkit react-redux

// index.js
import { Provider } from "react-redux";
import store from "./store";
<React.StrictMode>
  <Suspense fallback={"loading"}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
</React.StrictMode>;

// store/index.js 使用RTK的方式
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    xxx,
  },
});
export default store;

// store/modules/home.js 使用RTK的方式
import { createSlice } from "@reduxjs/toolkit";
const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: [],
  },
  reducers: {},
});
export default homeSlice.reducer;

/**
 * store/modules/entire.js 使用普通方式，需要4个文件
 * 1.index.js
 * 2.reducer.js
 * 3.createActions.js
 * 4.constants.js 常量
 */

// 1.index.js
import reducer from "./reducer";
export default reducer;

// 2.reducer.js
const initialState = {
  currentPage: 3,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;
```

## axios 网络请求

```js
npm i axios
```

```js
import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Request(BASE_URL, TIMEOUT);
```

## 配置 styled-components

```bash
npm i styled-components
```

```js
// style.js
import styled from "styled-components";
export const HeaderWrapper = styled.div``;

// AppHeader.jsx
import React, { memo } from "react";
import { HeaderWrapper } from "./style";
const AppHeader = memo(() => {
  return <HeaderWrapper>AppHeader</HeaderWrapper>;
});

export default AppHeader;
```

给项目新增主题

```js
// index.js
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";
<Suspense fallback="loading">
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
</Suspense>;
```

```js
// 使用less 文件设置主题色
:root {
  --primary-color: #ff385c;
}
color: var(--primary-color);


// 使用 ThemeProvider 设置主题色
const theme = {
  color: {
    primaryColor: "#ff385c",
  },
};
export default theme;

//-------------------------------------------------
color: ${(props) => props.theme.color.primaryColor};
```

## 创建 React + TypeScript 项目

```bash
npx create-react-app projectName --template typescipt
```

### FC

```ts
const FunComponent: React.FunctionComponent<IProp> = () => {};
// 简写
const FunComponent: FC<IProps> = () => {};
```
