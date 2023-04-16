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
