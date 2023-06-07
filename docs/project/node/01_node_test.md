# 搭建 node 项目

## 初始化项目

```bash
npm init -y
```

在 package.json 添加脚本

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node ./src/main.js"
  }
}
```

## 安装 express 或者 koa 框架

