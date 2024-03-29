# git 多人协作

## git 多人协作的流程

1. A 在自己计算机中创建本地仓库
2. A 在 github 中创建远程仓库
3. A 将本地仓库推送到远程仓库
4. B 克隆远程仓库到本地进行开发
5. B 将本地仓库中开发的内容推送到远程仓库
6. A 将远程仓库中的最新内容拉到本地

## 将本地仓库推送到远程仓库

A 创建好本地仓库和远程仓库后，将本地仓库推送到远程仓库中。

- `git push 远程仓库地址 分支名称`
- 第一次推送应该会验证 github 账号密码
- 然后计算机会自动保存账号密码，账号密码保存的位置
  - 打开控制面板
  - 点击右上角的查看方式设置为大图标（默认一般是类别）
  - 点击凭据管理器
  - 选择 Windows 凭据
  - 可以看到这个账号，删除后下次推送还会验证账号密码
    远程仓库地址可以起一个方便的别名，方便推送
- `git remote add 别名 远程仓库地址`
- `git push 别名 分支名称`

这种方法还是不够方便

- `git push -u 远程仓库地址 分支名称`
- `git push -u 别名 分支名称`
- 以上两种方法选择一种，只要在 push 后面加上`-u`下次就可以直接通过`git push`提交代码

## 将远程仓库克隆到本地仓库

B 在本地计算机中，选择一个合适的地方，打开 git bash 命令行窗口，将远程仓库克隆到本地。

- `git clone 远程仓库地址`
- B 克隆的远程仓库依然可以使用 A 之前创建的别名
- B 在可以在本地开发功能和提交到本地仓库
- 注意：此时 B 还不能直接将本地仓库推送到远程仓库中，如果可以，那么远程仓库将很可能被随意修改。

A 可以 github 中给 B 权限，让 B 成为协作者

- 点击仓库中 settings(设置)
- 左侧选择 Manage access(管理访问)
- 输入账号密码验证身份
- invite a collaborator(邀请协作伙伴)
- 输入 B 的 github 账号
- 会生成一个邀请链接，A 将这个链接发送给 B
- B 访问这个链接，并同意
- 此时 B 可以将本地仓库推送到远程仓库

## 将最新版本更新到本地仓库

A 将最新的版本拉取到本地仓库

- `git pull 远程仓库地址 分支名称`
- `git pull 别名 分支名称`
- `git pull`也可以直接使用
- 拉取操作属于读取操作，不需要验证身份
- 如果远程仓库中的版本高于本地仓库的版本，本地仓库不能向远程仓库进行提交

## 解决冲突

在多人同时开发一个项目时，如果两个人同时修改了同一个文件的同一个地方，就会发生冲突，冲突需要人为解决。

- 使用`git pull`命令，可以看见文件冲突的开始和结束，再人为修改

## 为开源项目做贡献

C 不是团队成员，也可以向项目提交代码，不过需要项目人 A 的同意。

- C 先点击项目的 Fork
- C 会有一个相同的项目
- C 将这个开源项目克隆到本地
  - `git clone Fork项目的地址`
- C 在本地中修改这个项目
- C 提交到自己 Fork 的那个项目中
  - `git pull Fork开源项目的地址 分支`
- C 点击自己 Fork 项目的 Pull Request
- C 点击 New Pull Request
- A 可以同意或者拒绝
