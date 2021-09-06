#!/usr/bin/env sh
# 获取当前时间
now=$(date "+%Y-%m-%d %H:%M:%S")

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹

# cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m "$now"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# git push -f git@github.com:Scripthqs/Scripthqs.github.io.git master:gh-pages



# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@github.com:Scripthqs/Scripthqs.git master:gh-pages

echo "进入项目目录"
cd D:/user/Desktop/scripthqs/blog
echo "开始提交"
git add -A && git commit -m "$now" && git push
echo "提交完成"
read

# cd -

