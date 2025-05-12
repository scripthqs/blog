# scss

## BEM 方法论

在web开发中，你是否会有这样的体验：在开发中随便建立css文件，从上到下依次写，为怎样取类名而烦劳，因为害怕取重名了，把前面的样式覆盖了。怎么减少这个问题？

BEM（Block，Element，Modifier）是一种前端开发中常用的命名规范和方法论。
<https://en.bem.info/methodology/quick-start/>

- 块（Block）
- 元素（Element）
- 修饰符（Modifier）

```css
.block {}
.block__element {}
.block--modifier {}
/* 使用两个连字符和下划线而不是一个，是为了让 block 可以用单个连字符来界定 */
.site-search {} /* 块 */
.site-search__field {} /* 元素 */
.site-search--full {} /* 修饰符 */
```

```html
<nav class="nav">
  <a href="#" class="nav__item nav__item--active">当前状态</a>
  <a href="#" class="nav__item nav__item--hover">鼠标移上时的状态</a>
  <a href="#" class="nav__item nav__item--normal">正常状态</a>
</nav>
```

```scss
.nav {
  &__item {
    &--active {
    }
    &--hover {
    }
    &--normal {
    }
  }
}
```

## Block

1. 描述这个组件是什么，而不是像什么
2. 可以多层级嵌套
3. 需要复用，并且不依赖其它任何组件，那么这个时候就应该建立一个Block

```html
<!-- 正确。`error` 块在语义上是有意义的 -->
<div class="error"></div>

<!-- 不正确。它描述的是外观 -->
<div class="red-text"></div>

<!-- 可以多层级嵌套 -->
<header class="header">
  <!--嵌套了'logo'block-->
  <div class="logo"></div>
  <!--嵌套了'search-form' block-->
  <form class="search-form"></form>
</header>
```

## Element

1. Element是Block的一部分，并且不能离开Block单独使用
2. 取名应该描述它的目标，而不是描述它的外貌
3. 并且嵌套层级不限制
4. 不能离开一个实体而单独使用，那么这个时候就应该建立一个Element

```html
<form class="search-form">
  <!--'search-form' block 中的 'input' element-->
  <input class="search-form__input" />

  <!--'search-form' block 中的 'button' element-->
  <button class="search-form__button">Search</form>
</form>

<!--正确的：Element的名字格式"block-name__element-name"-->
<form class="search-form">
  <div class="search-form__content">
    <input class="search-form__input" />
    <button class="search-form__button">Search</button>
  </div>
</form>

<!--错误的：Element的名字格式不能是这样："block-name__element-name__element-name"-->
<form class="search-form">
  <div class="search-form__content">
    <!--推荐使用：'search-form__input'或者'search-form__content-input'-->
    <input class="search-form__content__input"/>

    <!--推荐使用：'search-form__content'或者'search-form__content-button'-->
    <button class="search-form__content__button">Search</button>
  </div>
</form>

<!-- Block名字定义了命名空间，保证Elements可以依赖于Block而存在 -->
<div class="block">
  <div class="block__elem1">
    <div class="block__elem2">
      <div class="block__elem3"></div>
      </div>
  </div>
</div>
<!-- 可以使在改变dom-tree的情况下，不改变css就能使用-->
<style>
.block {}
.block__elem1 {}
.block__elem2 {}
.block__elem3 {}
</style>
```

## Modifier

1. 定义了Block或者Element的状态、外观等“附加”的样式！
2. 描述了组件的外观(比如size等)或者状态(比如disabled等)

```css
.block__elem--full {}
.block__elem--disabled {}
.block__elem--size {}
```

## elementUI 对 BEM 的运用

<https://github.com/ElemeFE/element/blob/dev/packages/theme-chalk/src/mixins/mixins.scss>

## 声明变量

scss使用`$`声明变量，less 用`@`声明变量，`&`指父元素引用

## !default 和 !global

!default 用来定义局部变量（默认值）、!global可以把局部变量转为全局变量

```css
#main {
  $width: 5em !global;
  width: $width;
}
#sidebar {
  width: $width;
}

/* 编译后 */
#main {
  width: 5em;
}
#sidebar {
  width: 5em;
}
```

## 混入 @mixin 和 @include

@mixin用来定义代码块、@include引入

```scss
@mixin color-links {
    color: blue;
    background-color: red;
}
span {
   @include color-links;
}
/* 编译后 */
span {
  color: blue;
  background-color: red;
}
```

## @content向混合样式中导入内容

```css
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
/* 编译后 */
* html #logo {
  background-image: url(/logo.gif);
}


/* 下面这种是错误的 */
* html {
  #logo {
    background-image: url(/logo.gif);
  }
}
```

## @at-root 跳出嵌套

`#{}`是scss的插值语法

```css
.block {
    color: red;
    @at-root #{&}__element {
        color: blue;
    }
    @at-root #{&}--modifier {
        color:orange;
    }
}

/* 编译后 */
.block {
   color: red;
}
.block__element {
   color: blue;
}
.block--modifier {
  color: orange;
}
```

## @each in 遍历列表

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
// 编译后
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

## @if @else 条件判断

```scss
p {
  @if 1 + 1 == 2 { border: 1px solid; }
  @if 5 < 3 { border: 2px dotted; }
  @else  { border: 3px double; }
}
// 编译后
p {
  border: 1px solid;
}
```

## sass 内置函数

- @debug 在scss 编译过程中打印信息到控制台

```scss
// map-has-key($map,$key) 函数将返回一个布尔值。当 $map 中有这个 $key，则函数返回 true，否则返回 false。 通过map-get($map,$key)获取$key 对应的值

$map: ('xs' : '200px', 'sm': '100px');
$key: 'xs';
@if map-has-key($map, $key) {
  @debug map-get($map, $key) // 200px
}

// inspect(value)函数返回 value 的字符串表示形式
@debug inspect(null); // "null"
@debug inspect(('width': 200px)); // "('width': 200px)"

// str-index 返回字符串的第一个索引位置(索引从 1 开始)，如果字符串不包含该子字符串，则返回 null
@debug str-index("sans-serif", "ans"); // 2

// str-slice($str, $beginIndex, $endIndex) 截取字符串的指定字符
@debug str-slice("(.el-message)", 2, -2); // .el-message
```

## element的BEM实现

### 定义 block

给组件添加el-前缀，通过@content将include{}中传递过来的内容导入到指定位置

```scss
$namespace: 'el'; // 所有的组件以el开头，如el-input
$element-separator: '__'; // 元素以__分割，如el-input__inner
$modifier-separator: '--'; // 修饰符以--分割，如el-input--mini
$state-prefix: 'is-'; // 状态以is-开头，如is-disabled

@mixin b($block) {
  $B: $namespace+'-'+$block !global;  // 使用el-拼接组件名
  .#{$B} {
    @content;
  }
}

@include b(button) {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}
// 编译后
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}
```

### 定义 element

```scss
$element-separator: '__'; // 元素以__分割，如el-input__inner
@mixin e($element) {
  $E: $element !global;
  $selector: &;
  $currentSelector: "";
  @each $unit in $element { // $element传入的值可以单个，也可以是列表
    $currentSelector: #{$currentSelector + "." + $B + $element-separator + $unit + ","};
  }
// hitAllSpecialNestRule 判断父级选择器是否包含-- .is- ：这三种字符
  @if hitAllSpecialNestRule($selector) {
    @at-root {
      #{$selector} {
        #{$currentSelector} {
          @content;
        }
      }
    }
  } @else {
    @at-root {
      #{$currentSelector} {
        @content;
      }
    }
  }
}


@include b(message-box) {
    color: blue;
    @include m(header) {
        padding-bottom: 30px;
  }
}
//转化为：
.el-message-box {
    color: blue;
}
.el-message-box--header {
    padding-bottom: 30px;
}
```

## 定义 modifier

通过`--`连接符将父级选择器和传入的修饰符拼接起来

```scss
$modifier-separator: '--'; 
@mixin m($modifier) {
  $selector: &;
  $currentSelector: "";
  @each $unit in $modifier {
    $currentSelector: #{$currentSelector + & + $modifier-separator + $unit + ","};
  }

  @at-root {
    #{$currentSelector} {
      @content;
    }
  }
}

@include b(button) {
  display: inline-block;
  @include m(primary) {
    color:blue;
  }
}
// 编译后
.el-button {
  display: inline-block;
}
.el-button--primary {
  color:blue;
}


@include b(message-box) {
    color: blue;
    @include m(center) {
       padding-bottom: 30px;
    @include e(header) {
       padding-top: 30px;
    }
  }
}

//转化为：
.el-message-box {
    color: blue;
}
.el-message-box--center {
    padding-bottom: 30px;
}
.el-message-box--center .el-message-box__header {
    padding-top: 30px;
}

```
