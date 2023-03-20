# Git 的简介

## git 是什么

git 是一个版本控制管理系统（VCS,version control system），可以在任何时间点，将文档的状态记录作为更新记录保存起来，也可以在任何时间点，将更新记录恢复出来。

## 使用 git 的目的

通过 git 管理托管项目代码。

## 下载和安装 git

git 官网下载：<https://git-scm.com/downloads>

- 安装完后打开 git bash 命令行窗口
- `git --version` 可以使用这条命令查看当前 git 版本

## git 的初始配置

git 安装后需要先配置，使用 git 可以多人协作，可以做到责任分工。

1. 初始化用户名
   `git config --global user.name 'username'`
2. 设置用户名邮箱  
   `git config --global user.email 'xxx@qq.com'`
3. 查看设置(验证是否初始化成功)  
   `git config --list`
4. 如果配置需要修改配置信息
   - 再重复上述的命令可以修改配置信息
   - 也可以找到`C盘-用户文件夹-.gitconfig`中的文件，该文件中修改修改配置信息

**注意：此操作只需要执行一次，该设置在 GitHub 仓库主页显示谁提交了该文件。**

## git 初始化仓库

**前 5 步的作用主要通过命令行创建文件夹和文件，熟悉命令行**，也可以手动创建文件夹

1. 显示当前位置  
   `pwd`
2. 创建名为`test`的文件夹  
   `mkdir test`
3. 进入名为`test`文件夹  
   `cd test`
4. 返回上一级目录  
   `cd ..`
5. 创建名为`index.html`的文件  
   `touch index.html`
6. 在文件内初始化 Git（创建 Git 仓库）  
   `git init`  
   文件夹中会出现一个隐藏文件夹`.git`，如图：

   ![git](https://raw.githubusercontent.com/scripthqs/assets/master/blog/git.png)

   - hooks：目录包含客户端或服务端的钩子脚本
   - info：包含一个全局性排除文件
   - logs：保存日志信息
   - objects：目录存储所有数据内容
   - refs：目录存储指向数据（分支）的提交对象指针
   - config：文件包含项目特有的配置选项
   - description：用来显示对仓库的描述信息
   - HEAD：文件指示目前被检出的分支
   - index：文件保存暂存区信息

## git 的工作区域

git 有 3 个工作区域：

1. 工作区(Working Directory)：添加、编辑、修改文件等动作。

2. 暂存区：暂存已经修改的文件，最后统一提交到 Git 仓库中。

3. 版本库(git Repository)：最终确定的文件保存到仓库，成为一个新的版本，对他人可见。

## git 的基本使用

- `git init` 初始化仓库，一个项目只需要做一次
- `git status` 查看当前状态
- `git add xx` 将 xx 文件提交到暂存区
- `git add .` 使用`.`时，代表将当前文件夹下的所有文件提交到暂存区
- `git commit -m 描述` 提交到仓库，每次提交一定要写描述
- `git log` 查看提交状态，每一次提交都会有一个唯一的提交 ID
