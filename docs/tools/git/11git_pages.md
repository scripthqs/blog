# pages 的项目问题解决

## 打包报错

vue-cli 在项目开发完成后，打包时有可能报错

```bash
npm run build
```

打包时报错

```bash
Error: Callback was already called.
```

解决方法：

1. 打开 vue.config.js 文件，如果没有
2. 新建一个和 package.json 同级的 vue.config.js 文件
3. 添加

   ```js
   module.exports = {
     css: {
       extract: false,
     },
   };
   ```

4. 再次打包即可

## 页面空白

利用 vueCLI 搭建的项目，当我们把打包的 dist 文件夹放在 github 或者 gitee 中 Pages 部署很可能会出现两个问题：

1. 页面空白
2. 手动刷新页面出现 404 问题

对于页面空白，出现的原因一般是静态资源加载失败。资源路径不对，通常没有加上仓库名，查看网络资源里当前路径与资源路径的差异

解决方法：

在项目根目录新建 vue.config.js 文件，配置 publicPath

```js
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/仓库名/" : "/",
};
// 例如我的仓库项目叫vuemall
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vuemall/" : "/",
};
```

[Vue CLI](https://cli.vuejs.org/zh/)官方链接说明：[详情](https://cli.vuejs.org/zh/guide/deployment.html#github-pages)

## 刷新页面 404

路由使用了 history 模式，路由的路径不对

解决方法：

方法 1：把路由改成 hash

```js
// src/router/index.js
const router = new VueRouter({
  routes,
  // mode: 'history'
});
```

方法 2：还是用 history，给路由加一个 base 路径，与 publicPath 一致

```js
// src/router/index.js
const router = new VueRouter({
  routes,
  mode: "history",
  base: "/vuemall/",
});
```

[Vue Router](https://router.vuejs.org/zh/)官方链接说明：[详情](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)

## 对于 gitee pages

1. 在项目**根目录下添加 `.spa` 文件**，内容为空，主要是为了用于自动切换 Nginx 的 404 配置，[详情](https://gitee.com/help/articles/4237)。

2. **修改 `vue.config.js` 配置中的 `publicPath` 配置**（同上）

   ```js
   const BASE_URL = process.env.NODE_ENV === "production" ? "/yourProjName/" : "/";
   module.exports = {
     publicPath: BASE_URL,
   };
   ```

3. **关闭 vue-router 的 `history` 模式**（同上）
4. **使用 deploy.sh 部署的方法**，[详情](https://cli.vuejs.org/zh/guide/deployment.html#github-pages)
5. 此时，手动刷新还可能会出现 404 的

给站点根目录添加`404.html`,一般也就是 public 目录下

```xml
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'"></meta>
    </head>
    <body>

    </body>
    </html>
```

给 index.html 添加

```js
    <script>
      // 这段代码要放在其他js的前面
      (function(){
        var redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        if (redirect && redirect != location.href) {
          history.replaceState(null, null, redirect);
        }
      })();
    </script>
```
