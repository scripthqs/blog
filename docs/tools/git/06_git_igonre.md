# `.gitignore` 和`.gitkeep`

## git 忽略清单

将不需要被 git 管理的文件名字添加到此文件中，在执行 git 命令时，git 就会忽略这些文件。

- `.gitignore` git 忽略清单文件名称
- 在这个文件中添加需要忽略的文件夹和文件
- 可以直接指定某个文件，指定某个后缀的文件，指定某个文件夹下的文件

```js
test.txt //忽略test.txt文件
*.txt //忽略后缀为.txt的文件
node_modules //忽略node_modules文件夹
```

## git 占位文件

git 不会将空文件夹上传到服务器，添加.gitkeep 文件即可使用 git 命令将空文件夹上传到服务器.

`.gitkeep` 是一个占位文件。

**注意：.gitkeep 并不是 Git 的特性。Git 没有对占位文件名有要求，放一个 README 也行。**

## README.MD

该文件可以向仓库添加详细的说明，使用 markdown 文档语法。

## gitignore 不生效原因和解决

有些时候，发现 gitignore 文件不生效。`.gitignore` 中已经标明忽略的文件目录下的文件，git push 的时候还会出现在 push 的目录中，或者用 git status 查看状态，想要忽略的文件还是显示被追踪状态。

原因：在 git 忽略目录中，新建的文件在 git 中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在`.gitignore` 中已经声明了忽略路径也是不起作用的。

解决方法：git 清除本地缓存（改变成未 track 状态），然后再提交

```bash
git rm --cached package-lock.json
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
git push
```
