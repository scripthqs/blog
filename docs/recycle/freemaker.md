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

## 函数

```html
<#function getOpOptions type ctype>
  <#assign options = {
    "varchar": [
      {"key": "1", "value": "="},
      {"key": "2", "value": "!="},
      {"key": "3", "value": "like"},
      {"key": "4", "value": "left_like"},
      {"key": "5", "value": "right_like"},
      {"key": "6", "value": "in"}
    ],
    "clob": [
      {"key": "1", "value": "="},
      {"key": "2", "value": "!="},
      {"key": "3", "value": "like"},
      {"key": "4", "value": "left_like"},
      {"key": "5", "value": "right_like"},
      {"key": "6", "value": "in"}
    ],
    "number": [
      {"key": "1", "value": "="},
      {"key": "2", "value": ">"},
      {"key": "3", "value": "<"},
      {"key": "4", "value": ">="},
      {"key": "5", "value": "<="}
    ],
    "int": [
      {"key": "1", "value": "="},
      {"key": "2", "value": ">"},
      {"key": "3", "value": "<"},
      {"key": "4", "value": ">="},
      {"key": "5", "value": "<="}
    ],
    "date": [
      {"key": "1", "value": "="},
      {"key": "2", "value": ">"},
      {"key": "3", "value": "<"},
      {"key": "4", "value": ">="},
      {"key": "5", "value": "<="},
      {"key": "6", "value": "日期范围"}
    ]
  }>

  <#assign otherOption = [
    {"key": "1", "value": "="},
    {"key": "2", "value": ">"},
    {"key": "3", "value": "<"},
    {"key": "4", "value": ">="},
    {"key": "5", "value": "<="}
  ]>

  <#if ctype == "userSelect" || ctype == "orgSelect">
    <#return [
      {"key": "1", "value": "="},
      {"key": "3", "value": "like"},
      {"key": "6", "value": "in"}
    ]>
  <#else>
    <#if options[type]??>
      <#return options[type]>
    <#else>
      <#return otherOption>
    </#if>
  </#if>
</#function>


<#function getOpOptions type ctype>
  <#assign options = {
    "varchar": [
      {"key": "EQUAL", "value": "="},
      {"key": "NOT_EQUAL", "value": "!="},
      {"key": "LIKE", "value": "like"},
      {"key": "LEFT_LIKE", "value": "left_like"},
      {"key": "RIGHT_LIKE"value": "right_like"},
      {"key": "IN", "value": "in"}
    ],
    "clob": [
      {"key": "EQUAL", "value": "="},
      {"key": "NOT_EQUAL", "value": "!="},
      {"key": "LIKE", "value": "like"},
      {"key": "LEFT_LIKE", "value": "left_like"},
      {"key": "RIGHT_LIKE", "value": "right_like"},
      {"key": "IN", "value": "in"}
    ],
    "number": [
      {"key": "EQUAL", "value": "="},
      {"key": "GREAT "value": ">"},
      {"key": "LESS", "value": "<"},
      {"key": "GREAT_EQUAL", "value": ">="},
      {"key": "LESS_EQUAL", "value": "<="}
    ],
    "int": [
      {"key": "EQUAL", "value": "="},
      {"key": "GREAT", "value": ">"},
      {"key": "LESS", "value": "<"},
      {"key": "GREAT_EQUAL", "value": ">="},
      {"key": "LESS_EQUAL", "value": "<="}
    ],
    "date": [
      {"key": "EQUAL", "value": "="},
      {"key": "GREAT", "value": ">"},
      {"key": "LESS", "value": "<"},
      {"key": "GREAT_EQUAL", "value": ">="},
      {"key": "LESS_EQUAL", "value": "<="},
      {"key": "between", "value": "日期范围"}
    ]
  }>

  <#assign otherOption = [
    {"key": "1", "value": "="},
    {"key": "2", "value": ">"},
    {"key": "3", "value": "<"},
    {"key": "4", "value": ">="},
    {"key": "5", "value": "<="}
  ]>

  <#if ctype == "userSelect" || ctype == "orgSelect">
    <#return [
      {"key": "1", "value": "="},
      {"key": "3", "value": "like"},
      {"key": "6", "value": "in"}
    ]>
  <#else>
    <#if options[type]??>
      <#return options[type]>
    <#else>
      <#return otherOption>
    </#if>
  </#if>
</#function>


```

