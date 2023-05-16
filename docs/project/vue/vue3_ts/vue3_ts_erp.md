# Vue3 + TypeScript 后台管理系统

## 技术栈

- Vue3
- TypeScript
- Vite
- Vue Router
- Pinia
- Element plus
- Echarts

## 创建项目

两种方式：

1. 使用 Vue CLI，基于 Webpack，命令`vue create`
2. create Vue，基于 vite 工具，命令`npm init vue@latest`

注意：第二种方式需要 node 版本 16 及以上

![vue](https://raw.githubusercontent.com/scripthqs/assets/master/vue_create.png)

## 默认文件

- .vscode 文件夹：`extensions.json` 推荐的 vscode 插件，如果没有，vscode 会读取这个文件并且自动安装。

  - ```json
    {
      "recommendations": ["Vue.volar", "Vue.vscode-typescript-vue-plugin"]
    }
    ```

- node_modules：node 相关依赖

- public：在这文件夹中的资源打包时会原封不动的打包到 dist 文件夹

  - `favicon.ico`站点图标

- src：源代码文件夹

- .eslintrc.cjs：代码规范

- .gitignore：git 忽略文件
- .prettierrc.json：代码格式化
- env.d.ts：类型声明文件
- package-lock.json：锁定依赖的版本
- package.json：记录相关的依赖
- readme.md：记录文档
- tsconfig.json：ts 配置文件，这个文件生成后不建议修改（不一定）
- tsconfig.config.json：tsconfig.json 引入的 ts 配置文件，其它单独的配置建议在这里面修改
- vite.config.ts：配置 vite 的文件，等同于 cli 的 vue.config.ts，tsconfig.config.json 中引入了这个文件
- index.html：入口文件

## 项目配置

- 配置项目的 icon
- 配置标题
- 配置别名(vite 默认配置)
- 配置 tsconfig.json

## 代码规范

### .editorconfig

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

- 这个文件默认配置是没有的，可以手动新建`.editorconfig`文件
- VSCode 需要安装一个插件：EditorConfig for VS Code

```json
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

### prettier

Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

- 使用命令行新建项目的时候，默认可以选择 prettier

如果没有选择，可以手动安装

1. 安装 prettier

   ```shell
   npm install prettier -D
   ```

2. 配置.prettierrc 文件

   ```shell
   {
     "useTabs": false,
     "tabWidth": 2,
     "printWidth": 80,
     "singleQuote": true,
     "trailingComma": "none",
     "semi": false
   }
   ```

3. json 文件不能添加注释，下面是说明

   ```shell
   {
     "useTabs": false,//使用tab缩进还是空格缩进，选择false；
     "tabWidth": 2,//tab是空格的情况下，是几个空格，选择2个；
     "printWidth": 80,//当行字符的长度，推荐80，也有人喜欢100或者120；
     "singleQuote": true,//使用单引号还是双引号，选择true，使用单引号；
     "trailingComma": "none",//在多行输入的尾逗号是否添加，设置为 `none`，比如对象类型的最后一个属性后面是否加一个，
     "semi": false//：语句末尾是否要加分号，默认值true，选择false表示不加；
   }
   ```

4. 创建`.prettierignore`忽略文件(也可以不用)

   ```json
   /dist/*
   .local
   .output.js
   /node_modules/**

   **/*.svg
   **/*.sh

   /public/*
   ```

5. 测试是否生效

   - 测试一：安装 prettier 插件，在代码中保存代码；
   - 测试二：配置一次性修改的命令；

   在 package.json 中配置一个 scripts：

   ```json
    "prettier": "prettier --write ."
   ```

6. vscode 中需要配置
   - format on save
   - editor default format

### ESLint

ESLint 可以检测不规范的代码

- 创建项目的时候，选择了 ESLint，所以 Vue 会默认帮助我们配置需要的 ESLint 环境。

如果没有选择 ESLint，可以手动安装

1. 项目中安装插件：（vue 在创建项目时，如果选择 prettier，那么这两个插件会自动安装）

   ```shell
   npm install eslint-plugin-prettier eslint-config-prettier -D
   ```

2. 配置`.eslintrc.cjs`文件

   ```json
   /* eslint-env node */
   require('@rushstack/eslint-patch/modern-module-resolution')

   module.exports = {
     root: true,
     extends: [
       'plugin:vue/vue3-essential',
       'eslint:recommended',
       '@vue/eslint-config-typescript',
       '@vue/eslint-config-prettier'
     ],
     parserOptions: {
       ecmaVersion: 'latest'
     }
   }
   ```

3. 解决 eslint 和 prettier 冲突，在`.eslintrc.cjs`文件`extends`下添加`'plugin:prettier/recommended'`

   ```json
   /* eslint-env node */
   require('@rushstack/eslint-patch/modern-module-resolution')

   module.exports = {
     root: true,
     extends: [
       'plugin:vue/vue3-essential',
       'eslint:recommended',
       '@vue/eslint-config-typescript',
       '@vue/eslint-config-prettier',
        'plugin:prettier/recommended'
     ],
     parserOptions: {
       ecmaVersion: 'latest'
     }
   }
   ```

4. vscode 配置完需要重启，修改了配置也需要重启（vscode 快捷键 ctrl + p 再输入`>`)

5. 配置 eslint 的规则， 在`.eslintrc.cjs`文件中新增`rules`

   复制（vscode 按住 alt）不想要的 eslint 不想要的提示，加入`rules`中`off`

   ```json
   /* eslint-env node */
   require("@rushstack/eslint-patch/modern-module-resolution");

   module.exports = {
     root: true,
     extends: [
       "plugin:vue/vue3-essential",
       "eslint:recommended",
       "@vue/eslint-config-typescript",
       "@vue/eslint-config-prettier",
       "plugin:prettier/recommended"
     ],
     parserOptions: {
       ecmaVersion: "latest"
     },
     rules: {
       "@typescript-eslint/no-unused-vars": "off"
     }
   };
   ```

### 重置 css

1. 安装 normalize.css 库

   ```shell
   npm i normalize.css
   ```

2. 在 main.ts 中引入

   ```ts
   import "normalize.css";
   ```

### prettier 配置

```json
  // "prettier.printWidth": 180, // 超过最大值换行
  // "prettier.tabWidth": 2, // 缩进字节数
  // "prettier.useTabs": false, // 缩进不使用tab，使用空格
  // "prettier.semi": true, // 句尾添加分号
  // "prettier.singleQuote": true, // 使用单引号代替双引号
  // "prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号，不加
  // "prettier.arrowParens": "avoid", // prettier- (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  // "prettier.bracketSpacing": true,
```

## 目录结构

### assets

静态资源文件夹，存放 css 和 img 等

- 在 css 文件夹下新建 index.less 文件

- ```less
  @import "./reset.less";
  @import "./common.less"; //在index.less中引入其他css
  ```

- ```ts
  import "./assets/css/index.less"; //在main.ts中引入index.less
  ```

- ```shell
  npm i less -D //需要安装，不然报错，开发时依赖
  ```

### router

- ```shell
  npm i vue-router
  ```

- 新建 router 文件夹，配置路由

### store

使用 pinia 进行状态管理

- ```shell
  npm i pinia
  ```

- 新建 store 文件夹

### service

- ```ts
  npm i axios
  ```

- 新建 service 文件夹

### 结构图

```shell
vue3_erp
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ hooks               # 常用 Hooks
│  ├─ language            # 语言国际化
│  ├─ layout              # 框架布局
│  ├─ routers             # 路由管理
│  ├─ service             # 网络请求接口管理
│  ├─ store               # pinia store
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 入口页面
│  └─ main.ts             # 入口文件
├─ .editorconfig          # 不同编辑器代码格式化文件
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs          # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.config.js  # prettier 配置
├─ index.html             # 入口 html
├─ yarn.lock              # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```

## 环境变量

在开发中需要，在设置后端接口是通常需要区分开发环境（ development）和生产环境（production ），需要学习 vite 的环境变量

```ts
// 1.手动注释，过分依赖人为修改
// export const BASE_URL = 'http://aaa.dev:8000'
// export const BASE_URL = 'http://aaa.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// vite 默认提供的环境变量
console.log(import.meta.env.MODE)//development
console.log(import.meta.env.DEV, "是否开发环境");
console.log(import.meta.env.PROD, "是否生产环境");
console.log(import.meta.env.SSR, "是否是服务器端渲染(server side render)");

//3. 创建.env文件
//.env文件，开发环境和生成都使用
//创建.env.development 开发环境
//创建.env.production 生成环境
只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。

```

## 组件库

安装 element plus

```js
npm install element-plus --save
```

### 全局引入（简洁方便）

```ts
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

在tsconfig.json中配置;
// "types": ["element-plus/global"]//全局导入引入
```

### 按需引入（优化）

> 首先你需要安装`unplugin-vue-components`和 `unplugin-auto-import`这两款插件

```ts
npm install -D unplugin-vue-components unplugin-auto-import
//unplugin-auto-import //自动导入
//unplugin-vue-components //识别用哪些组件
```

安装后，项目目录会多两个文件（自动声明，不需要手动修改）

- auto-imports.d.ts
- components.d.ts

安装后在 vite.config.ts 文件中配置

```ts
// vite.config.ts
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
```

然后在 tsconfig.json 中配置(**ts 需要配置这一步**)，此时就有了类型提示

```ts
{
  //告诉ts哪些文件需要编译
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "auto-import.d.ts", "components.d.ts"],
}
```

此时，vue 中写的 templeate 写的 el 组件，会在 components.d.ts 自动导入。

但是类似 ElMessage 这种写在 script 中的组件不会自动导入。（好像是导入了没有样式）

```bash
//需要在vite.config.ts中配置
import {
  createStyleImportPlugin,
  ElementPlusResolve
} from "vite-plugin-style-import";


//这个插件支持很多组件库
 plugins: [
     createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`;
          }
        }
      ]
    })
 ]
```

> <https://github.com/vbenjs/vite-plugin-style-import/blob/main/README.md>

## cache 封装

封装一个方法，存 localStorage 或者 sessionStorage

```ts
class Cache {
  storage: Storage;

  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage;
  }

  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getCache(key: string) {
    const value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  removeCache(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

const localCache = new Cache(CacheType.Local);
const sessionCache = new Cache(CacheType.Session);

export { localCache, sessionCache };
```

## 登录流程

### 判断 token

在路由配置中，`/`重定向到`main`主页面，但是可以判断有无 token，让路由到 login 页面

```ts
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/main/Main.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/notFound/NotFound.vue"),
    },
  ],
});

//导航守卫
router.beforeEach((to, from) => {
  console.log(to, from);
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path === "/main" && !token) {
    return "/login";
  }
});
```

### 记住密码

登录的时候判断是否勾选记住密码

```ts
const loginAction = (isKeep: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.获取用户输入的帐号和密码
      const name = account.name;
      const password = account.password;

      // 2.向服务器发送网络请求(携带账号和密码)
      loginStore.loginAction({ name, password }).then((res) => {
        //3.判段是否需要记住密码
        if (isKeep) {
          localCache.setCache("name", name);
          localCache.setCache("password", password);
        }
      });
    } else {
      ElMessage.error("Oops, 请您输入正确的格式后再操作~~.");
    }
  });
};
```

账号和密码是记住了，但是记住密码的勾选状态还是默认 false，使用 watch 将记住密码保存在 localStorage

```ts
const isKeep = ref<boolean>(localCache.getCache("isKeep"));
watch(isSave, (newValue) => {
  localCache.setCache("isKeep", newValue);
});
```

经过我测试，发现上述方法有 bug，经排查是封装的 cache 方法有问题

```ts
setCache(key: string, value: any) {
  if(value){
    this.storage.setItem(key, JSON.stringify(value));
  }
}
getCache(key: string) {
  const value = this.storage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
}
//就是因为这个if(value)，判断有问题，如果外面传一个布尔值类型false,就无法执行setItem方法
setCache(key: string, value: any) {
  this.storage.setItem(key, JSON.stringify(value));
}
```

可以将 if(value)判断去掉，

- 布尔值的 false，经过 JSON.stringify 将转成字符串的 false，
- 同样，字符串的 false 经过 JSON.parse 可以转成布尔值的 false

### 携带 token

通常来说，登录接口会返回一个 token，此外的大多数接口，基本都需要携带这个 token，不然会报 401。需要给其他接口添加一个 headers。

```ts
apiRequest.get({
  url: `/users/${id}`,
  headers: {
    Authorization: "Bearer " + localCache.getCache(LOGIN_TOKEN),
  },
});
```

开发中肯定不可能每个接口都写一次 header，而是在请求拦截时，将 header 放在里面

```ts
interceptors: {
  requestSuccessFn: (config) => {
    console.log(config, "config");
    const token = localCache.getCache(LOGIN_TOKEN);
    if (config.headers && token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  };
}
```

遇到另外一个问题：

```ts
config.headers!.Authorization = `Bearer ${token}`;
//这样写，ts会报警告，之前加!非空断言就可以，最新axios的版本不行了，需要换一种写法
if (config.headers && token) {
  // config.headers!.Authorization = `Bearer ${token}`;
  typeof config.headers.set === "function" && config.headers.set("Authorization", `Bearer ${token}`);
}
```

## 角色权限

权限管理：根据登录用户的不同，呈现不同的后台管理系统的内容，具有不同的操作权限。

设计依据：基于后端数据库设计，RBAC(role based access control)基于角色的访问控制。

给用户分配不同的角色：

- 超级管理员
- 管理员
- 普通成员
- ......

## 动态组件

```ts
<el-icon>
  <component :is="item.icon.split('-icon-')[1]" />
</el-icon>
```

## 列表和树转换

```ts
// 方式1：列表转换成树形结构;
const setTree = (source: any) => {
  let cloneData = JSON.parse(JSON.stringify(source)); // 对源数据深度克隆
  return cloneData.filter((father: any) => {
    // 循环所有项，并添加children属性
    let branchArr = cloneData.filter((child: any) => father.departmentId == child.parentId); // 返回每一项的子级数组
    branchArr.length > 0 ? (father.children = branchArr) : ""; //给父级添加一个children属性，并赋值
    return father.parentId == "0"; //返回第一层
  });
};

// 方式2：列表转换成树形结构;
const toTree = (data: any) => {
  //没有父节点的数据
  let parents = data.filter((val: any) => {
    return val.parentId == "0";
  });
  //有父节点的数据
  let children = data.filter((val: any) => {
    return val.parentId > "0";
  });
  //定义方法
  const translator = (parents: any, children: any) => {
    //遍历父节点数据
    parents.forEach((item: any) => {
      //遍历子节点数据
      children.forEach((current: any, index: number) => {
        //此时找到父节点下的子节点
        if (current.parentId == item.departmentId) {
          let temp: any = JSON.parse(JSON.stringify(children)); //让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
          temp.splice(index, 1); //让当前子节点作为唯一的父节点，去递归查找其对应的子节点
          translator([current], temp); //把找到子节点放入父节点的children属性中
          typeof item.children !== "undefined" ? item.children.push(current) : (item.children = [current]);
        }
      });
    });
  };
  translator(parents, children);
  return parents;
};
```

## 动态路由

根据不用用户（菜单）动态的注册应该有的路由，而不是一次性将所有的路由注册到 router 中。

1. 基于角色（role)动态路由管理

   ```ts
   const roles = {
     superAdmin: (所有路由) => router.main,
     children,
     admin: (一部分路由) => router.main.childern,
     service: 少部分路由,
   };
   ```

   每增加一个角色，都要多一个 key/value，前端该代码或者后端返回 json

2. 基于菜单(menu)的动态路由管理，将菜单路由映射成路由对象

   ```ts
   1.获取菜单
   2.动态获取所有的路由对象，放在数组
   3.根据菜单去匹配正确的路由
   ```

动态添加路由

```ts
    {
      path: "/main",
      name: "main",
      component: () => import("@/layout/layout.vue")
    },
    //添加一个name
    router.addRoute("main", {path:'',components:()=>import('')});
```
