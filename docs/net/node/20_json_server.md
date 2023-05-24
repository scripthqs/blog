# json-server

## json-server 简介

json-server 是一个在前端本地运行，可以存储数据的 server，可以模拟接口，操作模拟数据。

## 使用 json-server

1. 下载

   ```bash
   npm install -g json-server
   ```

2. 目标根目录下创建数据库 json 文件: `db.json`

   ```js
   {
   "posts": [
     { "id": 1, "title": "json-server", "author": "typicode" },
     { "id": 2, "title": "json-server2", "author": "typicode" }
   ],
   "comments": [
     { "id": 1, "body": "some comment", "postId": 1 }
   ],
   "profile": { "name": "typicode" }
   }
   ```

3. 启动服务器执行命令:

   ```js
   json-server --watch db.json
   ```

4. 使用浏览器访问测试

   ```js
   http://localhost:3000/posts
   http://localhost:3000/posts/1
   ```
