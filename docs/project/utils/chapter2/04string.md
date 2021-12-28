# 4.字符串相关

## 4.1. API相关

- 字符串倒序
  - 语法: reverseString(str)  
  - 功能: 生成一个倒序的字符串
- 字符串是否是回文
  - 语法: palindrome(str)
  - 功能: 如果给定的字符串是回文，则返回 true ；否则返回 false
- 截取字符串
  - 语法: truncate(str, num)
  - 功能: 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
- 驼峰转下划线
  - 语法: toLine(str)
  - 功能: 将驼峰转换下划线

## 4.2. 编码实现

- `src/string/index.js`

```js
/* 
1. 字符串倒序: reverseString(str)  生成一个倒序的字符串
*/
export function reverseString(str) {
 // return str.split('').reverse().join('')
    // return [...str].reverse().join('')
    return Array.from(str).reverse().join('')
}

/* 
2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false
*/
export function palindrome(str) {
    return str === reverseString(str)
}

/* 
3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
*/
export function truncate(str, num) {
 return str.length > num ? str.slice(0, num) + '...' : str
}

/* 
4. 驼峰转下划线
*/
export function toLine (str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}
```

## 4.3.测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>字符串处理的系列方法</title>
</head>
<body>
  <script src="../dist/hqs-utils.js"></script>
  <script>
    console.log(utils.reverseString('abcd')) // dcba
    console.log(utils.palindrome('abcb'), utils.palindrome('abcba')) // false true
    console.log(utils.truncate('boomerang', 7)) // boomera...
     console.log(utils.toLine('aBdaNf'));//a_bda_nf
  </script>
</body>
</html>
```
