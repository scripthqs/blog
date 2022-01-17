# 后台管理系统

[项目预览](http://scripthqs.gitee.io/vuecms)

[源码链接](https://github.com/Scripthqs/vuecms)

## 1 项目概述

电商系统一般都提供了PC客户端，PC后台管理端、移动app端，移动web端、微信小程序端等终端访问方式。

对于PC后台管理系统，一般有用户登录、退出登录、用户管理、权限管理、商品管理、订单管理、数据统计等业务。

本项目采用前后端分离的模式，前端是**基于Vue技术栈的SPA项目**。

前端技术栈：Vue + Vue-router + Element-UI + Axios + Echarts

前端负责**构建用户界面**并通过ajax等技术调用后端提供的接口获得数据。

## 2 项目初始化

1. 使用 vuecli 创建项目
2. 配置 vue-router 路由
3. 安装 element-ui 组件库
4. 配置 axios
5. 初始化 git
6. 将项目托管到 github 或码云等远程仓库

项目开发的具体思路：

总的来说，将基本页面通过element-ui组件库来实现，之后向后端服务器发起请求，获取数据，将获取的数据保存到每个组件的data中，methods方法区实现各模块所需要的基本方法。需要注意：后端返回的数据是什么格式的，与前端的格式是否一致，不一致需要转换。

每新建一个路由模块都要在路由配置文件 router.js 中进行配置，其中还使用了嵌套路由。将组件component映射到路由，使用 router-view 作为路由的的占位符。

### 其他配置

- 配置Eslint的检测规则
  - 在根路径创建一个 格式化 配置的文件 `.prettierrc` 文件是JSON格式 `semi` true加分号/false不加分号 `singleQuote`: true为单引号/false为双引号
  - `.eslintrc.js`下取消func之间的空格: `'space-before-function-paren': 0` rules里面写
- 分支的推送: 把 本地分支 login 推送到远程仓库上 `git push -u remote branch`
  - 如果远程仓库没有本地的分支则可以使用 `git push -u remote user`  在哪个分支上就是那个分支 来推送到远程仓库
  - 切换分支 -> 提交分支 -> 回到主分支合并分支 -> 推送主分支
  - pull

## 3 如何使用element组件库

[element-ui组件库官方文档](https://element.eleme.cn/#/zh-CN/component/installation)

1. 安装 element

    ```shell
    npm i element-ui -S
    ```

2. 按需引入，安装 babel-plugin-component：

    ```shell
    npm install babel-plugin-component -D
    ```

3. 官网介绍的是，修改.babelrc文件，但vue-cli3中没有.babelrc，需要在babel.config.js中修改

    ```js
    module.exports = {
      presets: [
        '@vue/cli-plugin-babel/preset',
        ['@babel/preset-env']
      ],
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
    ```

4. 在main.js中按需引入

      ```js
      import { Button } from 'element-ui';
      Vue.component(Button.name, Button);
      /* 或写为
      * Vue.use(Button)
      */
      有的需要加的Vue原型上，例如Message
      Vue.prototype.$message = Message
      ```

在实际开发中，可以一次性、**完整导入并注册所有 element-ui组件**，这样存在优缺点：

- **优点**：**所有的 element组件都进行了全局的注册**。在每个组件中，不再需要按需引入并注册组件了。
- **缺点**：项目中没有用到的组件也会被打包进来，**导致打包体积过大的问题**（此问题在项目发布时，可通过 **CDN 加速**解决）

## 4 项目准备工作

- 开始项目前创建一个分支来书写 写完成后在合并分支  

  ```shell
  //创建一个名为xxx的分支
  git checkout -b xxx
  //合并分支，合并分支前要先切换到主分支
  git merge xxx
  ```

- 清空不必要的文件

----

1. 创建一个Login组件(三标签) : `template`(一: 模板) `script`(二: 属性/方法) `<style lang="less" scoped>` (三: 样式 支持less并且具有作用域)

2. 创建路由组件: 并且使用重定向 `redirect` 如果用户访问的是根路由路径 会自动重定向到登录的路由组件

   ```js
   const routes = [
   {
       path: '/',
       redirect: '/login'
     },
     {
       path: '/login',
       component: Login
     },
   ]
   ```

## 5 登录和退出分析

### 5.1 登录的业务流程

1. 在登录页面输入用户名和密码
2. 调用后台接口进行验证
3. 通过验证后，根据后台的响应状态跳转到项目主页

**如何保持用户的登录状态**：

1. 使用cookie
2. 使用session
3. 使用token

当前端和后端存在**不存在跨越问题**时，可以使用**cookie和session**来保存登录状态。如果前端和后端**存在跨越问题**，可以使用**token方式**来位置状态。

### 5.2 记录token

**token的原理**：用户在客户端输入账号和密码登录，**服务器验证通过**后生成对应**不同的token**并返回给客户端，**客户端存储该token**，后续的所有请求都**携带这个token**发起请求，服务器验证token是否通过，根据token返回数据。

**sessionStorage和localStorage的区别**：

登录成功之后的 token，可以保存到客户端的 sessionStorage或者localStorage。

- sessionStorage(会话机制/**只在当前页面生效**)

- localStorage(持久话机制/**关闭页面也不会忘记数据**)

对于本项目：

1. 项目中除了登录之外的API接口，必须在登录之后才能访问
2. token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage中

**具体步骤**：

1. 第一次登录，将登录成功后的token，保存到客户端的sessionStorage中

    ```js
    window.sessionStorage.setItem('token', res.data.token)
    ```

2. 通过编程式导航跳转到后台主页，路由地址是/home

    ```js
    this.$router.push('/home')
    ```

    注意：

    - 项目中除了登录之外的其他API接口，必须在登录之后才能访问
    - token只能在当前网站打开期间生效，所以将token保存在sessionStorage中

3. 在完成登录后，后续项目中每次调用后端接口都要在请求头中加入token，也就是在请求头中使用 Authorization 提供token令牌，此时，在项目的全局中**main.js文件下**

    ```js
    import axios from 'axios'
    // 配置请求的根路径
    axios.defaults.baseURL = 'http://ip地址/api/private/v1/'
    // 使用请求拦截器，在请求头中使用 Authorization 提供token令牌
    axios.interceptors.request.use(config => {
      // console.log(config)
      config.headers.Authorization = window.sessionStorage.getItem('token')
      return config
    })
    // 挂载Vue的原型对象上
    Vue.prototype.$http = axios
    ```

### 5.3 登录路由导航守卫

配置导航守卫全局前置守卫`router.beforeEach`对为登录的客户端进行拦截。如果用户没有登录，跳转至`'/login'`页面，根据的是客户端是否有获取到服务器返回的 token 值进行判断拦截，以此决定是否重定向至`'/login'`页面进行登录，在路由文件下的index.js中添加

```js
// 为路由对象，挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next是一个函数，表示放行
  // next()放行，next('login')强制跳转
  if (to.path === '/login') return next()
  // 获取token，判断sessionStorage中获取保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  // 有token，放行
  next()
})
```

### 5.4 实现退出功能

基于token的方式实现的退出比较简单，只需要销毁本地的token即可，这样，后续的请求就不会携带token，必须重新登录生成一个新的token之后才可以访问页面

```js
// 清除token
window.sessionStorage.clear()
//跳转路由
this.$router.push('/login')
```

问题

```js
css.extract
Type: boolean | Object

Default: 生产环境下是 true，开发环境下是 false

是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。

同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。

当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。

提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。

#css.sourceMap
```

## 6 Login组件

使用element-ui设计登录页面。

1. 背景居中 使用element-ui 设置头像框 使用 `position: absolute和` transform: translate(-50%, -50%);` 样式居中
2. Element-ui 表单按钮的使用 因为设置了按需加载需要在 `plugins`文件夹下的`element.js` 配置引入的 `{Button, Form, FormItem, Input}`

- `<el-form label-width="80px">`(表单默认label属性占位80px) `<el-form-item label="用户名">`(一个项使用label属性左侧文字的显示)
  - 使用第三方的字体图标: 引入第三方的库 再到标签上使用类名
  - 将属性数据绑定到表单 `<el-form :rules="form" :model="loginForm">` form的对象中 `loginForm`的数据保存在data中
  - 在表单项中再通过v-model来访问表单对象的属性`<el-input v-model="loginForm.username"></el-input>`
  - 表单的数据验证: 给表单`<el-form>`绑定`rules`属性校验(存放在`data`) 例子: `rules: { name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }] }`
    - `required` 必填不能为空 `message` 错误消息提示 `trigger`触发事件 `min/max` 最小/大输入长度
    - 通过`prop`属性`rules`调用验证: 给 `el-form-item` 添加而不是里面的标签 `el-input`: `<el-form-item prop="username">`
    - 表单的重置: 给`<el-form ref='loginForm'>` 绑定一个ref 通过$refs拿到组件对象,通过点击事件使用表单上自带的resetFields()重置方法

输入用户名和密码，调用后端接口进行验证，根据后台返回的响应结果跳转页面，使用axios发起登录请求。由于后端服务器和前端项目存在跨越问题（协议、域名、端口号），所有采用token的方式维持登录状态。可以在项目的全局中**main.js文件下记录token**

## 7 Home组件

- 表单的预登录: `validate` 方法 对象rules的规则进行校验也是用过$refs拿到组件调用其身上的方法

  - 验证通过后发送axios(Ajax)请求 把axios引入并赋值给Vue的原型上(可以全局访问) :`Vue.prototype.$http = axios`
- 消息提示: 添加 message 全局(Vue原型)添加`$message = Message` error:失败的提示 success:成功的提示
- 登录成功之后的 token,保存到客户端的 sessionStorage(会话机制/只在当前页面生效)中 / localStorage(持久话机制/关闭页面也不会忘记数据)
- `window.sessionStorage.setItem('token', res.data.token)` 因为除了登录界面都需要token来验证操作所以登录时会保存token作为身份验证
- 保存token后自动跳转到后台界面 使用`this.$router.push('/home')`
- 防止别人直接访问`login`以外的路由,而需要调用 路由的 导航守卫 使用 `beforeEach` 离开之前 检查是否有token的存在如果没有就直接跳转到 login 页面
- `router.beforeEach((to, from, next) => {})` to 即将跳转到哪里(到那里去) from 在哪里跳转(从哪里来) next 放行枷(给不给走)
- 退出登录: 在home页面设置按钮 清空token并且跳转到 login

### 页面布局

使用element-ui的Container 布局容器对主页进行布局。`<el-header>`头部区域， `<el-aside>`侧边栏，`<el-menu >`菜单栏

### Aside 侧边栏菜单

- element-ui 提供的组件,每个组件名都是它自己的类名

- 布局容器: Container Aside Main
  - 右侧菜单(二级可折叠) `el-menu`(最外层包裹菜单) `<el-submenu>`一级菜单 `<el-menu-item>` 二级菜单(里层)  `<template>` 菜单的模板(icon/span)

- 请求拦截器:  **登录授权 请求验证是否有 token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌**
  - login 不需要 token 可以直接登录 登录进去后每次操作/请求都会验证 `Authorization` 的 token令牌

  ```js
  //在全局环境下的main.js文件中设置拦截器
  import axios from 'axios'
  // 配置请求的根路径
  axios.defaults.baseURL = 'http://ip地址/api/private/v1/'
  // 使用请求拦截器，在请求头中使用 Authorization 提供token令牌
  axios.interceptors.request.use(config => {
    // console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  })
  // 挂载Vue的原型对象上
  Vue.prototype.$http = axios
  ```
  
- 创建完成后立即发送 网络请求 请求左侧菜单栏的数据 get
  - 通过 async 和 await 来获取需要的数据 因为是数组所以可以使用 v-for 来遍历生成数据 **第一级的icon不同的解决方法之一:定义一个对象来存放字体图标需要的类名**  
  
  ```js
  //使用async和await，简化promise
  async getMenuList () {
     //使用解构赋值，对返回的数据进行处理
        const { data: res } = await this.$http.get('/menus')
        //判断响应状态码，对数据进行处理
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        // res.data.unshift(this.welcome)
        this.menuList = res.data
        console.log(res, 'menus')
  }
  //动态绑定图标样式
  <i :class="iconsObj[item.id]"></i>
  //定义一个对象来存放字体图标需要的类名
  iconsObj: {
          // 一级菜单的icon图标
          147: 'el-icon-magic-stick',
          125: 'iconfont icon-users',
          103: 'iconfont icon-tijikongjian',
          101: 'iconfont icon-shangpin',
          102: 'iconfont icon-danju',
          145: 'iconfont icon-baobiao'
        },
  ```
  
  - 菜单栏只打开一个的可以给`el-menu` 添加 `unique-opened` 属性(1) 为 `true` |  折叠属性(2): `collapse` | 关闭过渡动画属性(3): `:collapse-transition="false"` |
  
  - 左侧边栏的宽度变化(Aside): `:width="isCollapse ? '61px' : '200px'"` 利用三元表达式
  
  - 子菜单的跳转: `el-from` 有router(index属性)默认为false关闭的  index='/login' index做路由跳转
    - 里面的组件都是作为Home的子组件展示的,如果作为一个独立的路由而不是Home的子路由那么左侧的导航栏就销毁没有了

    ```js
    {
        path: '/home',
        component: Home,
        redirect: '/welcome',
        children: [
          {
            path: '/welcome',
            component: Welcome
          },
     }
    ```

    左侧导航激活的高亮`:default-active="activePath"`: 点击导航-> 使用sessionStorage来保存激活的路径 并赋值给高亮的变量->  当离开再回来created时得到 sessionStorage 的路径赋值给高亮变量  (导航守卫.beforeEach)

### 用户管理

- 导航的名称: `el-breadcrumb` 面包屑 : 首页 > 用户管理 > 用户列表

- 卡片搜索框的使用: `el-card` 配合 栅栏布局 使用 input复合框 : 样式配合 Row 和 Col的栅栏配合

- 使用get获取用户数据 参数为 params  { params : {name:'HQS'} }

- 表格数据: `<el-table :data="数据源" stripe(active) border(边框)>` `<el-table-column prop="数据名" label="列的名字">`
  - 显示按钮使用作用预插槽: 在`<el-table-column>` 添加template模板再使用`v-slot`属性拿到当前槽作用域的布尔值 Boolean 再通过 Switch 组件显示 而在 `<el-table-column>` 使用了**作用域插槽**会覆盖当前层的prop所以可以删除prop 按钮使用时需要 插槽作用域
  
  ```js
  <el-table-column label="状态">
      <template v-slot="scope">
       <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949" @change="userStatusChanged(scope.row)"> 
       </el-switch>
      </template>
  </el-table-column>
  ```
  
- 分页: `pagination`: `page-sizes` 每页显示个数选择器的选项设置 `page-size` 每页显示条目个数，支持 .sync 修饰符 number  `layout`: 显示那些组件 监听改变事件 页码的修改 显示个数的修改 `handleSizeChange(newValue)` 监听显示页数的改变自带参数 是 新的值 `handleCurrentChange`监听页码的改变

**数据的分页显示：**

数据的分页显示有三种思路：

一是把后端的所有查询结果都发到前端，然后由前端进行处理。

二是由后端查询后，由后端来分页，将其分好再发给前端。

三是我需要时再查，每次点击上一页，下一页时发送一个请求，请求包含分页的信息，由后端返回该分页的结果。

根据本项目后台提供的接口，采用第三种方法。每次点击分页请求，后端返回数据。

```js
    async getUserList () {
      const { data: res } = await this.$http.get('users', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        this.$message.error('获取用户列表失败!')
      }
      this.$message.success('获取用户列表成功!')
      this.userData.userList = res.data.users
      this.userData.total = res.data.total
      // console.log(res)
    },
    // 监听 pagesize 改变事件 每页显示的个数
    handleSizeChange (newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    // 监听 页码值 改变的事件 当前页面值
    handleCurrentChange (newPage) {
      console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getUserList()
    },
```

- 按钮状态的修改: 通过Switch的chang改变事件触发回调函数
- nextTick
- 搜索功能: 给搜索框双向绑定到 `queryInfo.query` 因为搜索时根据它来的 再搜索按钮绑定点击事件发送用户数据请求,根据query返回对应的参数 , 清空搜索框并清空搜索的内容 element-ui的搜索框有自带的clear事件,点击清楚时再次发送用户数据请求,此时因为query已经清空所以返回的是默认的数据
- 点击添加用户弹出 `:visible.sync = DialogVisible` 为true显示反之隐藏
- 添加 **el-form** 项 :model="绑定要显示数据的对象" :rules="绑定校验规则的对象" ref="重置表单数据素要的方法"
  - 手机和邮箱验证规则: 在data里面与return同级 用变量接收一个箭头函数(rule, value, callback) 里面时校验的正则表达式 通过直接callback() 不通过则callback(new Error(''))
  - 使用变量名的方法: `{ validator: checkEmail, trigger: 'blur' }` 在验证规则里面写下`validator: 变量名` 就可以调用正则表达式来验证邮箱或手机号码
- 调用form的validate属性判断数据是否合法,  值是true就发送网络请求添加用户 否则直接返回结束函数 post 对象 if(res.meta.status) 201为创建成功
  - 对话框的代码可以放到外面,只需要使用点击事件来变换 布尔值 就可以做到显示和隐藏
- 修改用户信息: 点击按钮使用作用插槽传id值,再发送axios.get请求获取当前id的用户 并将数据保存到起来
  - 点击确认按钮: 表单预登录验证 如果成功就发送 put请求并将保存的数据作为参数修改(因为双向绑定)
- 删除用户: 点击删除按钮 弹出对话框 -> 确认是否删除;  需要使用ui的 MessageBox 且要全局挂载在Vue.prototype.confirm = MessageBox .confirm

### 权限管理

- 添加两个 home 的子路由 rights/roles
- 权限列表:  使用卡片再用过table绑定请求来的网络数据，用 `v-if`进行判断展示等级，其它展示数据根据后端获取并渲染到客户端就可以

```js
<el-table-column label="权限等级">
  <template v-slot="scope">
    <el-tag v-if="scope.row.level === '0'">一级</el-tag>
    <el-tag type="success" v-else-if="scope.row.level === '1'">二级</el-tag>
    <el-tag type="warning" v-else-if="scope.row.level === '2'">三级</el-tag>
  </template>
</el-table-column>
```

通过权限管理模块可以控制不同的用户进行操作，具体可以通过角色的方式进行控制，即每个用户分配一个特定的角色，角色包括不同的功能权限。

- 角色列表: 使用table 最后一项需要按钮使用作用于插槽  
- 其table第一个数据是展开项: 需要给el-table-column 绑定一个 expand 属性 此属性是展开卡片 index 索引
- Dialog 对话框的关闭  表单的清空

  - 点击按钮显示框 并获取数据 .点击确认按钮验证表单的 `rules` 规则是否全通过返回 true 就发送相应的 修改/删除等操作
  - Dialog有关闭事件可以清空表单操作

----

- 展开的设置: 使用 栅栏布局 嵌套 for 循环 遍历children ,el-row -> el-col**2 -> el-row -> el-col*2  

  - 栅栏row套栅栏会重置成24块样

- Tree 树形结构 : :data 要绑定的数据源 :prop展示的属性名字 `show-checkbox` 以复选框的形式 `node-key="id"`绑定id

  - `:default-checked-keys="defKeys"` 默认选中的 使用递归推送到数组中 没有子了直接推进数组 否则重再调用自己
    - 递归的形式:  结束的条件  自己调用自己

### 商品分类

- 树形表格:由于 element-ui 没有 树形的表格要借助于第三方的 `vue-table-with-tree-grid`
- [github地址](https://github.com/MisterTaki/vue-table-with-tree-grid)
  - columns｛label template  type  prop｝-- show-index index-text
- 分页: 由于获取用户的方法关系,可以每次修改 页码 或 页数 时直接重新发送获取用户请求

- 分类的添加:

```javascript
 <!-- 添加分类的对话框   -->
    <el-dialog
      title="添加分类"
      :visible.sync="addCateDialogVisible"
      width="50%"
      @close="addCateDialogClosed"
    >
      <el-form
        :model="addCateForm"
        :rules="addCateFormRules"
        ref="addCateFormRef"
        label-width="100px"
      >
        <el-form-item label="分类名称:" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类:">
          <!-- options 用来指定数据源 -->
          <!-- props 用来指定配置对象 expandTrigger: 触发方式 value(id) label(显示的文字) children(下层元素) -->
          <!-- v-model 双向绑定keys -->
          <el-cascader
            v-model="selectedKeys"
            :options="parentCateList"
            :props="{
              expandTrigger: 'hover',
              ...cascaderProps,
              checkStrictly: 'true'
            }"
            @change="parentCateChanged"
            clearable
          ></el-cascader>
        </el-form-item>
      </el-form>

```

- tree-table

```js
<tree-table
          :data="cateList"
          :expand-type="false"
          :selection-type="false"
          show-index
          class="treetable"
          index-text="#"
          stripe
          border
          :show-row-hover="false"
          :columns="columns"
        >
          <!-- 是否有效 -->
          <!-- <template slot='isok' v-slot="scope"> -->
          <template v-slot:isok="scope">
            <i
              class="el-icon-success"
              v-if="scope.row.cat_deleted === false"
              style="color: lightgreen"
            ></i>
            <i class="el-icon-error" style="color: red" v-else></i>
          </template>
          <!-- 排序 -->
          <template v-slot:order="scope">
            <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
            <el-tag
              size="mini"
              type="success"
              v-else-if="scope.row.cat_level === 1"
              >二级</el-tag
            >
            <el-tag size="mini" type="warning" v-else>三级</el-tag>
          </template>
          <template v-slot:opt="scope">
            <el-button
              type="primary"
              @click="showeditCateDialog(scope.row)"
              icon="el-icon-edit"
              size="mini"
              >编辑</el-button
            >
            <el-button
              type="danger"
              @click="removeCate(scope.row.cat_id)"
              icon="el-icon-delete"
              size="mini"
              >删除</el-button
            >
          </template>
        </tree-table>
```

- 级联选择框

  ```js
      <el-cascader
        v-model="addForm.goods_cat" 选择出来的keys
        :options="cateList" 绑定的数据元
        :props="{ expandTrigger: 'hover', ...cateProps  (要显示的东西) }"
        @change="handleChange" 选择项发生变化
      ></el-cascader>
      cateProps: {
            label: 'cat_name', 显示的名字
            value: 'cat_id', 双向绑定的id
            children: 'children' 显示的子项
          }
  ```

  - 判断双向绑定的 选择数组长度  不等于3表示没有选择对应的三级子级 可以把数组直接赋值为空 把一二级清空
  - 接收参数前 把 attr_vals 进行分割成为数组,再由v-for循环遍历配合组件渲染

  ```js
  <!-- 渲染表单的item项 -->
              <el-form-item
                :label="item.attr_name"
                v-for="item in manyTableData"
                :key="item.attr_id"
              >
                <el-checkbox-group v-model="item.attr_vals">
                  <el-checkbox
                    border
                    :label="item"
                    v-for="(item, i) in item.attr_vals"
                    :key="i"
                    >{{ item }}</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
  ```

- 图片的上传

  - 使用 element-ui的 upload 删除操作

   ```js
    // 处理移除图片的操作
       handleRemove(file) {
         // 1. 获取将要删除的图片的临时路径
         const filePath = file.response.data.tmp_path
         // 2. 从 pics 数组中找到这个图片的对应的索引值
         const index = this.addForm.pics.findIndex(x => x.pic === filePath)
         // 3. 调用数组的splice方法,把图片信息对象,从pics数组中移除
         this.addForm.pics.splice(index, 1)
         console.log('移除图片', file, this.addForm)
       }
    ```

- 富文本编辑器: **vue-quill-editor**

    ```bash
    npm install vue-quill-editor --save
    ```

## 8 项目优化

### 1.NProgress 加载时进度条

- NProgress.done() 隐藏进度条
- NProgress.start() 展示进度条
  - 其条件可以在 axios 请求拦截器里面设置

### 2.打包移除console.log

- 打包是 console的处理: babel-plugin-transform-remove-console
- 需要在 babel.config.js 中添加

  - plugins: [ "transform-remove-console"  ]

### 3.生成打包报告

  1. vue-cli-service build --report
  2. UI面版

### 4.vue.config.js 修改 webpack

- 如果程序员有修改 webpack 默认配置的需求，可以在项目根目录中，按需创建 vue.config.js 这个配置文件，从而对项目的打包发布过程做自定义的配置
- 具体配置参考 <https://cli.vuejs.org/zh/config/#vue-config-js>。

### 5.configureWebpack和chainWebpack

在vue.config.js导出的配置对象中，新增 configureWebpack 或 chainWebpack 节点，用来定义 webpack 的打包配置

在这里：configureWebpack 和 chainWebpack 的作用相同，唯一的区别就是它们修改webpack配置的方式不同：

- chainWebpack 通过链式编程的形式，来修改默认的 webpack 配置

- chainWebpack 通过操作对象的形式，来修改默认的 webpack 配置

    两者具体的使用差异，可参考如下网址：

    <https://cli.vuejs.org/zh/guide/webpack.html#webpack-%E7%9B%B8%E5%85%B3>

### 6.为开发模式与发布模式指定不同的打包入口

默认情况下，vue项目的开发模式与发布模式，功用同一个打包的入口文件（即src/main.js）。为了将项目的开发模式与发布过程分离，

我们可以为两种模式，各自指定打包的入口文件

- 开发模式的入口文件为src/main-dev.js

- 发布模式的入口文件为src/main-prod.js

通过chainWebpack自定义打包入口：

```js
module.exports = {undefined
chainWebpack: config => {undefined
config.when(process.env.NODE_ENV === ‘production’, config =>{undefined
config.entry(‘app’).clear().add(’./src/main-prod.js’)
})
config.when(process.env.NODE_ENV === ‘development’, config =>{undefined
config.entry(‘app’).clear().add(’./src/main-dev.js’)
})
}
}
```

### 7.通过 externals 加载外部 CDN 资源

- 默认情况下，通过 import 语法导入的第三方依赖包，最终会被打包合并到同一个文件中，从而导致打包成功后，单文件体积过大的问题。
- 为了解决上述问题，可以通过 webpack 的 externals 节点，来配置并加载外部的 CDN 资源。凡是声明在externals 中的第三方依赖包，都不会被打包。
- 开发时直接下载引入
  - 发布时把直接引入可以省的包 使用window全局的方式来查找  也就是说 CDN 挂载 通过CDN挂载的方式进行引用

```js
//在 vue.config.js 的发布模式的方法快中添加代码
config.set(‘externals’, {undefined
// 如果在打包期间，发现import的一个包名为vue，就不会把这个包合并到文件中
// 而是去window全局查找 Vue 对象，并直接使用
vue: ‘Vue’,
‘vue-router’: ‘VueRouter’,
axios: ‘axios’,
lodash: ‘_’,
echarts: ‘echarts’,
nprogress: ‘NProgress’,
‘vue-quill-editor’: ‘VueQuillEditor’
})
```

把 main-prod.js 文件中引入的样式表删除（只删除导入的样式）

同时，需要在public/index.html文件的头部，添加如下的CDN资源引用：

如果打包后再次运行页面发生页面空白注释掉import VueRouter from ‘vue-router’

### 8.路由懒加载

1. 安装 babel 插件

    ```shell
      npm install --save-dev @babel/plugin-syntax-dynamic-import
    ```

2. 修改项目根目录下的 babel.config.js 配置文件，新增 plugins 节点：

    ```js
    module.exports = {
      presets: ['@vue/cli-plugin-babel/preset'],
      // 实现路由组件按需导入的 babel 插件
      plugins: ['@babel/plugin-syntax-dynamic-import']
    }
    ```

3. 在 /src/router/index.js 模块中，基于 const Foo = () => import('./Foo.vue') 语法，改造每个路由组件的导入方式。

  ```js
  // 分组名生成文件
  const Login = () => import(/* webpackChunkName: "login_home_welcome" */ 'components/login/Login')
  const Home = () => import(/* webpackChunkName: "login_home_welcome" */ 'components/home/Home')
  const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ 'components/home/welcome/Welcome')
  
  const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ 'components/home/users/Users')
  const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ 'components/home/power/rights/Rights')
  const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ 'components/home/power/roles/Roles')
  
  const Cate = () => import(/* webpackChunkName: "Cate_Params" */ 'components/home/goods/cate/Cate')
  const Params = () => import(/* webpackChunkName: "Cate_Params" */ 'components/home/goods/params/Params')
  
  const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ 'components/home/goods/list/List')
  const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ 'components/home/goods/list/children/Add')
  
  const Order = () => import(/* webpackChunkName: "Order_Report" */ 'components/home/order/Order')
  const Report = () => import(/* webpackChunkName: "Order_Report" */ 'components/home/report/Report')
  // 独立生成一个文件
  const Login = () => import('components/login/Login')
  const Home = () => import('components/home/Home')
  const Welcome = () => import('components/home/welcome/Welcome')
  
  const Users = () => import('components/home/users/Users')
  const Rights = () => import('components/home/power/rights/Rights')
  const Roles = () => import('components/home/power/roles/Roles')
  
  const Cate = () => import('components/home/goods/cate/Cate')
  const Params = () => import('components/home/goods/params/Params')
  
  const GoodsList = () => import('components/home/goods/list/List')
  const Add = () => import('components/home/goods/list/children/Add')
  
  const Order = () => import('components/home/order/Order')
  const Report = () => import('components/home/report/Report')
  
  ```

### 9.首页内容定制

不同的打包环境下，首页内容可能会有所不同。我们可以通过插件的方式进行定制，插件配置如下

```js
module.exports = {
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === ‘production’, config => { 
    // 生产环境定制首页内容
      config.plugin(‘html’).tap(args => {
      args[0].isProd = true
      return args
    })
    })
    //开发模式
    config.when(process.env.NODE_ENV === ‘development’, config => {
      config.plugin(‘html’).tap(args => {
      args[0].isProd = false
      return args
  })
  })
}
}
```

在public/index.html首页中，可以根据isProd的值，来决定如何渲染页面结构：

```html
  <title>
    <%= htmlWebpackPlugin.options.isProd ? '' : 'dev -' %>电商后台管理系统
  </title>
  <% if (htmlWebpackPlugin.options.isProd) {%>
  <!通过 externals 加载外部 CDN 资源>
  <% }else{ %>
  <!通过 externals 加载外部 CDN 资源>
  <% } %>
```

//用判断语句把CDN包裹起来，判断是否显示，进行到这一步把之前注释的vue-router打开，因为这里做了判断条件，不会影响显示

## 9 项目上线相关配置

### 1.通过node创建web服务器

创建node项目，并安装express，通过express快速创建web服务器，将vue打包生成的dist文件夹，托管为静态资源即可，

```js
const express = require(‘express’)
// 创建 web 服务器
const app = express()
// 托管静态资源
app.use(express.static(’./dist’))
// 启动 web服务器
app.listen(80,()=>{undefined
console.log(’'web server running at http:127.0.01)
})
```

### 2.开启gzip配置

- 开启gzip包  compression
- 开启 HTTPS
  - 官网: <https://freessl.org/>
  -
- pm2 关闭命令行窗口依旧执行
  - npm i pm2 -g
    - 启动项目: pm2 start script --name(自定义名字)
    - 查看运行项目：pm2 ls
    - 重启项目：pm2 restart 自定义名称
    - 停止项目：pm2 stop 自定义名称
    - 删除项目：pm2 delete 自定义名称
