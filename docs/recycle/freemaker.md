# Freemarker

Freemarker 是一种模板引擎，用于动态生成 html 页面

## 常见语法

### 变量的声明和输出

- `<#assign>`用于声明变量
- `${}`用于输出变量

```js
<#assign w='world'>
hello,${w}
//hello,world
```

### 条件判断

- if~else

```js
<#if age >= 18>
  You are an adult.
<#else>
  You are a minor.
</#if>
```

### 循环迭代

- `<#list>`来迭代一个列表

```js
<#list users as user>
  Name: ${user.name}, Age: ${user.age}
</#list>
```

### 宏定义

-`<#macro>`可以定义一个宏，然后可以通过`<@greeting>`来调用宏并传递参数。

```js
<#macro greeting name>
  Welcome, ${name}!
</#macro>

<@greeting name="freemaker" />
```

### 导入包含

- `<#import>`可以导入其他模板文件，并使用`<#include>`可以包含其他模板文件

```js
<#import "header.ftl" as header>
<#include "footer.ftl">
```
