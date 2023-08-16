# bpm

![image-20230613111358767](C:\Users\qiansheng.huang\AppData\Roaming\Typora\typora-user-images\image-20230613111358767.png)

部署 manage front mobile 代码分支 fix-hqs-20230613

## bpm 介绍

bpm 是一个低代码管理平台，分为管理端、应用端、移动端。

前端技术栈：vue + element

## bpm 自动化测试

## 搭建环境

1. 安装 python
2. 安装 IDE Pycharm
3. 安装 pip
4. 安装 WebDrive 或 Playwright

## 自动化测试

简单理解程序模拟用户去自动执行

- 单元测试
- 合约测试
- 集成测试
- 组件测试
- 端到端测试：移动端、web 端
- 探索性测试

### 使用 xpath 和 playwright

- xpath 用来获取页面的元素
- playwright 自动化库

```js
import { test, expect, chromium } from "@playwright/test";
```
