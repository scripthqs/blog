# 图标字体

## 1.图标字体简介

图标字体(iconfont)：在页面中使用一些图标，可以将图标直接设置为字体，通过`font-face`的形式来对字体引入，可以使用字体的形式使用图标。

## 2.Font Awesome

Font Awesome 是国外的一个图标字体库。

### 2.1.基本使用

使用步骤：

1. 官网下载<https://fontawesome.com/>

2. 解压，里面会有很多文件夹

3. 将 CSS 和 webfonts 文件夹（必须在同一级目录下）移动到项目中

4. 使用 link 将 all.css 引入网页

   ```css
      <link rel="stylesheet" href="./fa/css/all.css"
   ```

5. 直接通过类名使用图标字体，一般有两种，在两种格式中尝试。

   ```css
      /*fas格式*/
      <i class="fas fa-bell"></i>
      /*fab格式*/
      <i class="fab fa-bell"></i>
   ```

### 2.2.伪元素使用

通过伪元素设置图标字体,一般有两种：

- 找到要设置的图标元素通过 before 或 after 选中
- 在content中设置字体编码**一定要加反斜杠**（\字体编码）
- 设置字体的样式，fab 格式或 fas 格式

````css
   li::before{
      content:"\字体编码";
      font-family: 'Font Awesome 5 Brands';/*fab格式，选一种*/
      font-family: 'Font Awesome 5 Free';/*fas格式，选一种*/
   }
````

### 2.3.实体使用

通过实体来使用图标字体，语法：

```css
   &#x字体编码;
```

对于 Font Awesome 图标字体库，也需要区分 fas 或 fas

```css
   <i class=fab>&#x字体编码;</i>
   <i class=fas>&#x字体编码;</i>
```

图标字体的本质还是字体，使用图标字体后，即可**设置字体的样式更改图标字体的样式**。

## 3.Iconfont

国内的阿里图标字体库，官网<https://www.iconfont.cn/>
