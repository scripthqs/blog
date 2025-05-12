# vite

vite 官方文档：<https://cn.vitejs.dev/>

特点：启动速度快

构建代码的底层是通过 rollup 实现的

## vue-cli(webpack)升级vite攻略

为什么要升级?

项目越来越大,原有的编译速度越来越慢,严重影响开发效效率,而Vite以原生ESM方式提供源码,让浏
览器接管了打包程序的部分工作,节省了这部分的打包时间同,从而编译起来显得快多了。

- <https://vitejs.dev/guide/why.html>

- 提升编译构建速度 26 倍

## webpack -> vite

1. 在根目录创建模版index.html
2. 安装相关依赖，支持低版本浏览器的babel、处理vue、jsx、svg的插件
3. 更新package.json
4. 升级vue 2.7.14版本以上
5. 配置vite.config.js，配置别名、自动为文件加后缀、plugins、自定义env前缀、构建配置
6. 更新process.env为import.meta.env
7. require.context替换为import.meta.glob，只支持静态字面量，不支持alias
