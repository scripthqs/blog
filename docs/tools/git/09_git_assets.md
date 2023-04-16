# 远程仓库的实用技巧

## 存放静态资源

1. 新建仓库，将本地仓库的图片上传到远程仓库
2. 然后在其他地方就可以使用远程仓库中资源（主要是图片）的链接引入
3. 本人主要是将这些链接引入我的个人网站。

### 作用

在项目中可以不用新建文件夹放入静态资源，写繁琐的相对路径。

### 注意

如果直接复制码云 gitee 仓库中的图片地址，复制的是 base64，太长了，使用并不方便。

只需要将链接中的 blob 改成 raw，即可得到正确的图片链接，而不是 base64。例如：

```js
https://gitee.com/scripthqs/assets/blob/master/js/%E5%8E%9F%E5%9E%8B%E9%93%BE.png
//将链接中的blob改成raw，即可
https://gitee.com/scripthqs/assets/raw/master/js/%E5%8E%9F%E5%9E%8B%E9%93%BE.png
```

base64 的图片：

```js
data: image / png;
base64, xxxxx很多字符;
```
