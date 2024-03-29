# 发布到 npm 仓库

## 完善 package.json

- 注意:
  - name: 必须是唯一的名称(在 npm 在线中央仓库中没有同名的)
  - main: 必须指定为打包生成的 js 文件
  - keywords: 指定一些方便别的程序员搜索到当前库的关键字

```json
{
  "name": "utils",
  "version": "1.0.0",
  "author": "scripthqs",
  "description": "前端-自定义工具函数库",
  "keywords": ["utils", "array", "object", "function", "string", "axios", "event-bus", "pub-sub", "promise"],
  "main": "dist/hqs-utils.js",
  "license": "MIT",
  "scripts": {
    "build": "webpack --watch"
  },
  "devDependencies": {
    "webpack": "^5.9.0",
    "webpack-cli": "^4.2.0"
  }
}
```

## npm 配置

- npm 配置的中央仓库不能是淘宝镜像
- 发布前必须执行: npm config set registry <https://registry.npmjs.org/>
- 不用发布时: npm config set registry <http://registry.npm.taobao.org/>
- 查看配置: npm config list

## 注册 npm 中央仓库账号

- 注册地址: <https://www.npmjs.com/>
- 关键信息: 用户名/密码/邮箱(<font color='red'>需要验证</font>)

![image-20201204150917555](../images/image-20201204150917555.png)

## 添加用户

- 执行: npm addUser
- 登陆 npm 仓库
- 依次指定用户名/密码/邮箱

![image-20201204151301849](../images/image-20201204151301849.png)

## 发布仓库

- 执行: npm publish

![image-20201210143938993](../images/image-20201210143938993.png)

- 发布失败, 原因是库的名称重复了, 修改 name 为一个唯一值, 再发布

![image-20201204153505733](../images/image-20201204153505733.png)

## 更新代码后再发布

- 修改项目库的版本号: package.json 中的 version 从 1.0.0 改为 1.0.1, 注意一定要变大
- 修改代码后重新打包: npm run build
- 执行发布: npm publish

## 强制删除已发布的库

- 执行: npm unpublish --force
- 注意: 必须在 72 小时内, 否则不能再删除
