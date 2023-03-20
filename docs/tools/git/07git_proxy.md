# 通过 git 命令给 github 网站设置代理

由于 github 是国外网站，正常访问速度可能非常慢，使用 ss/ssr/v2rayN 等代理软件配置的网络能够轻松快速的访问 google 和 github，但是，使用`git clone`克隆 github 上仓库代码时，发现克隆的速度仍然非常慢。此时就需要给 github 配置代理。

## 全局代理（不推荐）

1. 确定打开了 ss/ssr/v2rayN 代理
2. 设置全局代理

- `git config --global http.proxy http://127.0.0.1:1080`
- `git config --global https.proxy https://127.0.0.1:1080`

注意：需要打开代理查看设置，确认后面的端口是不是 1080，确认是 http 还是 socks5 代理，如果是 socks5 则使用以下命令

- `git config --global http.proxy socks5://127.0.0.1:1080`
- `git config --global https.proxy socks5://127.0.0.1:1080`

比如，我的代理端口是 10808，而不是 1080，我的代理协议（ss/ssr/v2rayN）都是使用 socks5，而不是 http。

此时，使用`git clone`下载的速度是代理网络的速度了，但是只对 https 协议的仓库地址有效，对 SSH 协议的仓库地址依然无效。

如需取消全局代理，使用：

- `git config --global --unset http.proxy`
- `git config --global --unset https.proxy`

通过`git config --list`可以检查代理网络，按键盘`q`可以退出列表

## 只对 github 网站进行代理（推荐）

使用全局代理，会对国内的仓库造成影响，所有只对 github 网站进行代理，**确认端口和协议后**(这取决于代理软件设置)，开始配置代理。
http 代理协议：

- `git config --global http.https://github.com.proxy https://127.0.0.1:1080`
- `git config --global https.https://github.com.proxy https://127.0.0.1:1080`

socks5 代理协议：

- `git config --global http.https://github.com.proxy socks5://127.0.0.1:1080`
- `git config --global https.https://github.com.proxy socks5://127.0.0.1:1080`

如果在输入以上命令之前，已经设置了全局代理，先使用以下命令取消：

- `git config --global --unset http.proxy`
- `git config --global --unset https.proxy`

取消全局代理的命令并不能取消 github 网站的代理，如需取消，则要使用以下命令：

- `git config --global --unset http.https://github.com.proxy`
- `git config --global --unset https.https://github.com.proxy`

可以通过以下命令检查设置的代理是否成功，

- `git config --list`（按键盘`q`可以退出列表）

比如我的 config list 中可以看到设置的代码，我的代理端口是 10808，我的代理协议使用 socks5

```bash
http.https://github.com.proxy=socks5://127.0.0.1:10808
https.https://github.com.proxy=socks5://127.0.0.1:10808
```

或者找到用户(user)-下面的.gitconfig 文件，直接添加以下代码

```bash
# [http]
#  sslVerify = false
[http "https://github.com"]
 proxy = socks5://127.0.0.1:10808
[https "https://github.com"]
 proxy = socks5://127.0.0.1:10808
[http]
 proxy = socks5://127.0.0.1:10808
[https]
 proxy = socks5://127.0.0.1:10808
[git]
 proxy = socks5://127.0.0.1:10808
```

## 使用镜像网站替换（尝试了一次好像没成功）

- 将原本仓库地址的`github.com`替换成`github.com.cnpmjs.org`
- `www.github.com/后面为代码库`替换成`www.github.com.cnpmjs.org/后面为代码库`

## 要针对 SSH 协议的仓库地址

- 找到存储 SSH 密钥的地方`系统-用户-.ssh 文件夹`
- 新建 config（注意文件类型，没有后缀名，不是 txt）
- 在文件中根据 http 或者 socks5，输入以下两条之一，
  - `ProxyCommand "git的安装路径" -S 127.0.0.1:1080 %h %p`
  - `ProxyCommand "git的安装路径" -H 127.0.0.1:1080 %h %p`

说明：

- `-S` 指 socks 代理，默认是 socks5
- `-H` 指 HTTP 代理
- 后面的 `%h` `%p` 意思是 Host 和 Port，必须写上

以上命令针对全局，如果只针对某个网站，使用

```bash
Host github.com
ProxyCommand "git的安装路径" -S 127.0.0.1:1080 %h %p
```

或者

```bash
Host github.com
ProxyCommand "git的安装路径" -H 127.0.0.1:1080 %h %p
```

## 注册国内的仓库

- 注册码云
- 通过码云 导入 github 中已有的项目
- git clone 码云中的项目
