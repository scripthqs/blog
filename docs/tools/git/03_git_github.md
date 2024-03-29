# Git 管理远程仓库 GitHub

目的：借助 github 托管代码，备份，实现代码共享集中化管理。

## 注册 github 账号

官网：github.com

## Github 基本概念

1. 仓库(Repository)：仓库用来存放项目代码，每个项目对应一个仓库，多个开源项目则有多个仓库。
2. 收藏(Star)：收藏项目，方便下次查看。
3. 复制克隆项目(Fork)：复制克隆他人项目，可以添加修改代码，但只会影响自身的仓库。 注意：**Fork 的项目是独立存在的。**
4. 发起请求(Pull Request)：Fork 他人项目后，自己添加修改代码，发起请求，项目作者可以选择同意或拒绝请求。
5. 关注(Watch)：关注项目后，可以收到该项目更新的通知消息。
6. 创建项目：一个 git 库对应一个开源项目，通过 git 管理 git 库。新建或者导入文件。
7. 修改项目：直接在项目上修改或者本地修改再上传到仓库。
8. 删除项目：设置(setting)往下翻到最下面可以找到删除仓库(repository)。
9. 搜索文件：点击 go to file 或者按快捷键 T。
10. 事务卡片(Issue)：发现代码 BUG 或各种问题，需讨论时使用。
11. 可以点击 Issue 来给别人提出问题或建议，别人或自己可以选择关闭或者回答。可以通过新建 Issue 和 Pull Request 为开源项目做贡献。

## github 的三个页面

1. github 主页
2. 仓库主页
3. 个人主页

## GitHub pages 搭建

首先你需要注册一个 GitHub 账号，并在个人主界面里选择创建一个新的 Repository 。

1. 进入项目主页，点击 setting
2. 在 setting 页面中找到 Github pages 下面的选择主题(choose a theme)
3. Source 下拉框选择 main,最后会得到一个网址
4. 生成网页
5. 访问`https://用户名.github.io`
