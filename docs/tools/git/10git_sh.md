# git一键提交
使用Git的过程中，有时候需要经常和频繁的提交操作，每次都要add，commit，pull，push

## 方法

新建一个 .sh 文件，比如 git.sh

```bash
now=$(date "+%Y-%m-%d %H:%M:%S")
echo "进入项目目录"
cd D:/user/Desktop/scripthqs/vuepress-blog
echo "开始提交"
git add -A && git commit -m "$now" && git pull && git push
echo "提交完成"
read
```

## 注意

- 在文件夹下复制的路径是\，应该改成正斜杠/

- 如何连命令窗口都不想保留，那就把最后那个 read 拿掉就好了。

- 如果想每次输入commit文字，那就把 now 这个变量设置成 read 变量

  ```shell
  read -p  "请输入提交信息：" msg
  git commit -m "$msg"
  ```

## 我的git文件

```bash
#!/usr/bin/env sh
# 获取当前时间
now=$(date "+%Y-%m-%d %H:%M:%S")

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run build
npm run docs:build 

# 进入生成的文件夹

# cd dist
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "$now"

# 如果发布到 https://<USERNAME>.github.ioz
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git push -f git@github.com:Scripthqs/Scripthqs.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@github.com:Scripthqs/vuepress-blog.git master:gh-pages

echo "进入项目目录"
cd D:/user/Desktop/scripthqs/vuepress-blog
echo "开始提交"
git add -A && git commit -m "$now" && git pull && git push
echo "提交完成"
read

cd -
```

