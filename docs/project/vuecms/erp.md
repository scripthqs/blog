# Vue3 + TypeScript 后台管理系统

## 技术栈

- Vue3
- TypeScript
- Vite
- Vue Router
- pinia
- Element plus
- Echarts

## 创建项目

两种方式：

1. 使用 Vue CLI，基于 Webpack，命令`vue create`
2. create Vue，基于 vite 工具，命令`npm init vue@latest`

注意：第二种方式需要 node 版本 16 及以上

![vue](https://raw.githubusercontent.com/scripthqs/assets/master/vue_create.png)

- npm i

## 目录结构

### .vscode 文件夹

`extensions.json` 推荐的 vscode 两个插件，如果没有，vscode 会自动安装。

```json
{
  "recommendations": ["Vue.volar", "Vue.vscode-typescript-vue-plugin"]
}
```

### node_modules

node 相关依赖

### public

在这文件夹中的资源打包时会原封不动的打包到 dist 文件夹

- `favicon.ico`站点图标

### src

源代码文件夹

### .eslintrc.cjs

### .gitignore

git 忽略文件

### .prettierrc.json

### env.d.ts

### package-lock.json

### package.json

### tsconfig.config.json

### tsconfig.json

### vite.config.ts
