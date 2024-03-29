# github 的疑难杂症

## git 修改远程仓库地址

### 方法 1

删除再添加你的远程仓库

```bash
git remote rm origin
git remote add origin 你的新远程仓库地址
git push --set-upstream origin master
```

### 方法 2

直接修改你本地的.git 文件

这里需要注意的问题是需要进入你的项目目录中
例如：你的项目名为 test，那么你就进入 test 文件夹。

`.git` 文件是隐藏文件你需要显示隐藏文件才能看见

## git 报错处理

git push 时报了这个错：fatal: unable to access '<https://github.com/>.......': OpenSSL SSL_read: Connection was reset, errno 10054

一般是这是因为服务器的 SSL 证书没有经过第三方机构的签署，所以才报错

参考网上解决办法：解除 ssl 验证后，再次 git 即可

- `git config --global http.sslVerify "false"`
- `git push`

## github 登录不了

1. 在`C:\Windows\System32\drivers\etc`找到 hosts 文件
2. 访问`http://tool.chinaz.com/dns?type=1&host=github.com&ip=`
3. 找到下面响应的 IP
4. 在 hosts 文件末尾中追加`13.229.188.59 github`(根据查询到的 IP 为准)

## 403 Forbidden 错误

报错：The requested URL returned error:403 Forbidden while accesssing
答案：私有项目，没有权限，输入用户名密码，或者远程地址采用这种类型：

```js
vi .git/config
将[remote 'origin']
`url = <https://github.com/用户名/仓库名.git>`
修改为：
[remote 'origin']
`url = <https://用户名：密码@github.com/用户名/仓库名.git>`
```
