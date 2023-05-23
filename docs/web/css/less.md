# less

## less 介绍

less 是一门 css 预处理语言，less 是 css 增强版，通过 less 可以编写更少的代码实现更强大的样式。

常见的 css 预处理器：sass、less、stylus

## less 变量

变量时指没有固定的值，可以改变的。因为 css 中的一些颜色和数值经常使用。

```css
@变量: 值;
```

- 必须有@为前缀
- 不能包含特殊字符
- 不能以数字开头
- 大小写敏感

- 原生 css 支持设置变量，语法`--*`：
  - `--color:red`
- 后面通过 var 引用，语法`var(--*)`
  - `var(--color)`
- 原生 css 支持计算，计算函数：
- `calc()`

less 中添加了许多的新特性，语法大体和 css 一致，但是 less 增添了许多 css 的扩展，浏览器不能直接执行 less 代码，要执行必须将 less 转化 css，再由浏览器执行。在 `vscode`下载`Easy LESS`插件。

- 创建`style.less`的文件，文件名必须是`.less`
- 保存时插件会自动生成一个`.css`文件
- //是 less 的单行注释，/\*\*/多行注释
- 在变量中可以存储一个任意的值，方便修改
- 变量的语法：`@变量名:变量值;`，变量值可以时颜色、尺寸|、路径、属性名等等
  - 一般使用时，直接写`@变量名`即可，方便修改。
  - 作为类名或一部分值使用时，`@{变量名}`使用。
- 可以在变量声明前就使用变量
- `&`相当于自身外边那个选择器
- `:extend()`为当前选择器扩展分组
- `.选择器();`直接对指定样式进行引用，`mixin`混合
- 使用类选择器时可以在选择器后面加一个括号，此时就创建了一个 minxi 函数。
  - `.xuzeqi(){}`，之后直接引用。`.xunzeqi;`
- `average()`可以取值的平均值。可以填两个颜色。
- `darken(red,20%)`可以加深颜色
- less 中可以直接将所有数值直接运算`+ - * /`，less 除法时需要用括号括起来。
- `@import "其他less路径"`可以将其他的 less 引入到当前的 less 中。
- `.map`

```less
"less.compile": {
  "compress": false, // true => remove surplus whitespace
  "sourceMap": true, // true => generate source maps (.css.map files)
  "out": true // false => DON'T output .css files (overridable per-file, see below)
}
```

## mixin 混合函数

在混合函数中可以直接设置变量

```less
.test(@w,@h) {
  width: @w;
  height: @h;
}
div {
  .test(200px, 100px);
}
```

调用混合函数，按照顺序传递参数。可以直接把名字写好，此时就不用按顺序。

```less
.test(@w,@h) {
  width: @w;
  height: @h;
}
div {
  .test(@w:200px, @h:100px);
}
```

定义值，定义几个必须传几个参数，可以在定义时直接指定默认值。

```less
.test(@w:200px,@h:100px) {
  width: @w;
  height: @h;
}
div {
  .test(200px);
}
```

## less 样式

less 兼容 less，支持变量、嵌套

```less
// 1.兼容CSS代码
// .box {
//   width: 100px;
//   height: 100px;
//   background-color: orange;
//   font-size: 20px;
//   color: #fff;
// }

// 2.定义变量
@mainColor: #a40011;

@smallFontSize: 12px;
@normalFontSize: 14px;
@bigFontSize: 18px;

// .box .pel {
//   color: @mainColor;
//   font-size: @normalFontSize;
// }

// .box h1 .keyword .section .list .item a .desc {
//   color: @mainColor;
//   font-size: @bigFontSize;
// }

// .box p .link {
//   color: @mainColor;
//   font-size: @smallFontSize;
// }

// 3.选择器的嵌套
.box {
  .pel {
    color: @mainColor;
    font-size: @normalFontSize;
  }

  h1 {
    .keyword {
      color: @mainColor;
      font-size: @bigFontSize;
    }
  }

  p {
    a.link {
      color: @mainColor;
      font-size: @smallFontSize;

      background-color: #0f0;

      &:hover {
        color: #00f;
      }
    }
  }
}

// &符号的练习
.list {
  .item {
    font-size: 20px;

    &:hover {
      color: @mainColor;
    }

    &:nth-child(1) {
      color: orange;
    }

    &:nth-child(2) {
      color: #00f;
    }
  }
}
```

less 混入可以像定义函数一样

```less
// 1.运算
// .box {
//   font-size: 20px;
//   width: 10% + 50px;
//   height: 100px;
//   background-color: #ff0000 + #00ff00;
// }

// px to rem

// 2.混入
// 2.1. 混入的基本使用
.nowrap_ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

// 2.2.混入是可以传递参数(定义变量)的
.box_border(@borderWidth: 5px, @borderColor: purple) {
  border: @borderWidth solid @borderColor;
}

// 2.3.混入和映射(Map)结合使用
// 作用: 弥补less中不能自定义函数的缺陷
.box_size {
  width: 100px;
  height: 100px;
}

.box1 {
  width: .box_size() [width];
  background-color: #f00;

  .nowrap_ellipsis();
  .box_border();
}

.box2 {
  width: 150px;
  background-color: #0f0;

  .nowrap_ellipsis();
  .box_border(10px, orange);
}
```

less 像 js 一样，支持继承，函数，导入等功能

```less
// 1.extend
// .box_border {
//   border: 5px solid #f00;
// }

// .box {
//   width: 100px;
//   background-color: orange;

//   // .box_border();
//   &:extend(.box_border);
// }

// 2.内置函数
// .box {
//   color: color(skyblue);
//   width: convert(100px, "in");
//   font-size: ceil(18.5px);
//   background-color: orange;
// }

// 3.作用域(scope)
@mainColor: #f00;

.box_mixin {
  @mainColor: orange;
}

.box {
  // @mainColor: #0f0;
  .item {
    span {
      color: @mainColor;
      .box_mixin();
      // @mainColor: #00f;
    }
  }
}

// 4.注释(comment)
// 单行注释
/* 多行注释 */
```
