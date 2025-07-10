# 打包优化

## gzip 压缩

gzip 是一种常用的文件压缩格式，Web 服务中常用于对 HTTP 响应内容进行压缩，减少传输体积，加快页面加载速度。

- gzip 对文本类资源（如 HTML、CSS、JS、JSON 等）的压缩率通常在 **60%~90%**
- gzip 是最常用的 Web 资源压缩方式，压缩率高，兼容性好。

1. 对应的插件配置，构建后生成.gz 文件
2. 服务器（如 Nginx）配置 gzip ，让浏览器能获取压缩资源

## cdn 优化

1. webpack 在 `externals` 配置中声明不打包的库
2. 在 index.html 中配置 cdn

vite 安装 `vite-plugin-cdn-import` 插件
