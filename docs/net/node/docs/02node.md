# NPM使用介绍

## 1.NPM简介

NPM（Node Package Manager）是随同Node.js一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种；

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

- `npm -v` 查看npm的版本，npm相当于手机的app应用商店。

由于 npm 默认的下载地址在国外（npmjs.com），有时候会被墙，导致无法下载或者下载很慢。因此，我们可以尝试切换成，从其他的镜像源下载 npm 包。

npm仓库地址：<https://www.npmjs.com/>

除了npm以外还有yarn，功能和npm一样，也可以作为包管理工具，windows系统一般使用npm就可以了，另外还有npx（了解）。

## 2.NPM源切换

源：源站，镜像源，镜像。通过 NRM 切换镜像源（推荐），让下载更快。

**方法1：**

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

>执行完毕上述命名后，在系统中提供了一个cnpm包管理工具，功能和npm一样，所不同的是cnpm镜像源地址为阿里提供的源地址。
>

**方法2：**

nrm 是一个 npm 源管理器，允许你快速地在 npm源间切换。npm默认情况下是使用npm官方源(npm config list 来查看)，如果直接修改npm源，如果后续需要连接到官方源才能工作，这样来回切换源就变得麻烦了，nrm通过简单的命令就可以解决此问题。

- NRM：Node Registry Manager。作用是：切换和管理 npm 包的镜像源。
- `npm i -g nrm`安装 NRM
- `nrm ls`显示全部的镜像
- `nrm use taobao` 使用淘宝的镜像

> 注：-g表示`global`全局，让nrm不限于到某一个项目中，而是在所有的项目中都可使用

`nrm ls`显示全部的镜像报错`code: ERR_INVALID_ARG_TYPE`

解决方法:

- 打开`cli.js`第17行修改成

  ```js
  //const NRMRC = path.join(process.env.HOME, '.nrmrc'); (删除)
  const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
  ```

重启CMD生效。

## 3.NPM相关命令

```bash
# 搜索模块包 切换淘宝源后就不可以使用search
npm search
# 初始化生成package.json文件（创建项目的）
npm init
npm init -y[不询问]
# 查看本项目已安装模块
npm list
# 安装模块
npm install(简写i)
# 自动下载依赖所需的包
npm install(简写i)
# 卸载已安装模块
npm uninstall 模块名
# 查看全局node_modules的地址
npm root -g
# 删除
npm remove(简写r)
```

安装参数：

- --save -S     记录生产环境所需模块 默认
- --save-dev -D 记录开发环境所需模块
- -g 安装到全局

生产环境：代码已经上线了的运行环境

开发环境：开发人员在开发的时候环境

```bash
# 安装包并添加到依赖中，重要，主要使用这一条
npm install 包名 --save
# 全局安装包，一般都是一些工具
npm install 包名 -g
# 查看全局node安装路径
npm root -g
```

通过npm安装的包都放在node_modules文件夹中，直接通过包名引入即可

## 4.语义化版本

版本格式：主版本号，次版本号，修订号，先行版本号

- 主版本号：当做了不兼容的api修改时
- 次版本号：当作了向下兼容的功能性新增
- 修订号：日常bug修改
- 先行版本号：作为延伸

1. `~`：表示版本号只能改变最末尾那一段
2. `^`：表示除了大版本号以外，小版本号和补丁版本号都可以改变

0开头的版本号有特殊情况。

软件版本发行的四个阶段：

1. alpha：内测版本
2. beta：公测版本
3. release candidate：RC，候选版本，功能已经确定，主要时排bug
4. release：正式发行版本

下载软件不要只看版本号，还要看阶段。

## 5.自定义npm命令

目的：npm允许我们执行npm调用三方模块，由于通过npm调用三方模块的指令写起来不方便，但是有需要频繁使用，因此我们可以自定义命令进行简化（别名）。在package.json文件中的script下，使用`npm run 自定义命令`，在webpack和vue中会经常使用。

```bash
{
  "scripts": {
    "test": "echo hello"
  }
}
```

随后就可以在命令行中运行（npm run `自定义指令名称`）：

```bash
npm run test
```

## 6.自动重启应用

每次修改服务端得代码时，都需要重新运行node xx.js才能运行，安装supervisor或者nodemon自动重启工具可以自动运行服务端代码。

### supervisor

1. 首先安装supervisor

   ```bash
   npm install supervisor -g
   ```

2. 使用supervisor代替node命令启动应用

   ```bash
   supervisor app.js
   ```

### nodemon

更便于记忆

```bash
# 全局安装nodemon
npm i -g nodemon

# 执行node脚本
nodemon app.js
```

应用非常广泛，框架也是这样的应用。

## ni 包管理工具

除了 npm 包管理工具，还有 yarn，cnpm，pnpm等，不同的项目经常会用不用包管理工具。Vue3 的源码刚开始使用 yarn，后来又改用 pnpm，还推荐了一个工具`ni`。

>We also recommend installing ni to help switching between repos using different package managers. ni also provides the handy nr command which running npm scripts easier.
>
>我们还建议安装 ni 以帮助使用不同的包管理器在 repos 之间切换。 ni 还提供了方便的 nr 命令，可以更轻松地运行 npm 脚本。

安装 ni

```bash
npm i -g @antfu/ni
```

ni 会检测项目中的 yarn.lock / pnpm-lock.yaml / package-lock.json 以了解当前的包管理器，并运行相应的命令。

- 使用 `ni` 在项目中安装依赖时：
  - 假设你的项目中有锁文件 `yarn.lock`，那么它最终会执行 `yarn install` 命令。
  - 假设你的项目中有锁文件 `pnpm-lock.yaml`，那么它最终会执行 `pnpm i` 命令。
  - 假设你的项目中有锁文件 `package-lock.json`，那么它最终会执行 `npm i` 命令。
- 使用 `ni -g vue-cli` 安装全局依赖时,默认使用 `npm i -g vue-cli`
- `nr`：run
- `nx`：execute
- `nu`：upgrade
- `nci`：clean install
- `nrm`：remove

ni相关的命令，都可以在末尾追加`\?`，表示只打印，不是真正执行。

假设项目目录下没有锁文件，默认就会让用户从npm、yarn、pnpm选择，然后执行相应的命令。

但如果在`~/.nirc`文件中，设置了全局默认的配置，则使用默认配置执行对应命令。

```bash
; ~/.nirc

; fallback when no lock found
defaultAgent=npm # default "prompt"

; for global installs
globalAgent=npm
```

[ni教程](https://segmentfault.com/a/1190000040937835)
