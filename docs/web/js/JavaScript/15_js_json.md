# JSON

## json 简介

JSON(JavaScript Object Notation)JS 对象表示法。

- JS 中的对象只有 JS 自己认识，其他语言不认识。
- JSON 就是一个特殊格式的字符串，这个字符串可以被任意语言所识别。
- 并且可以转换为任意语言中的对象。
- JSON 在开发中主要用来数据的交互。
- JSON 和对象的格式一样，不过 JSON 字符串中的属性名必须加双引号。

## json 分类

- 对象{}，不能使函数对象
- 数组[]

JSON 中允许的值：

- 字符串
- 数值
- 布尔值
- null
- 对象
- 数组

## json 转换

将 JSON 字符串转换成 JS 中的对象

- 在 JS 中提供了一个工具类，叫做 JSON。
- 这个对象可以将 JSON 和 JS 对象相互转换。
- `JSON.parse()`
  - 可以将 JSON 字符串转换成 JS 对象。
  - 需要一个 JSON 字符串作为参数，会将该 JSON 字符串装换成对象。
- `JSONstringify()`
  - 可以将一个 JS 对象转换成 JSON 字符串。
  - 需要一个 JS 对象作为参数，会返回一个 JSON 字符串。
