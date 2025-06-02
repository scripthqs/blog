# 项目部署

## nginx 官方文档

[http://nginx.org](http://nginx.org)<br/>

## 下载地址

[http://nginx.org/en/download.html](http://nginx.org/en/download.html)

## centos 安装 nginx

```bash
# 安装基础库
yum install gcc gcc-c++
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel
yum install -y openssl openssl-devel

# 下载nginx
cd /usr/local
wget http://nginx.org/download/nginx-1.22.1.tar.gz

# 解压
tar -zxvf nginx-1.22.1.tar.gz
cd ./nginx-1.22.1

# 初始化配置，添加ssl模块
./configure --with-http_ssl_module

# 编译源码
make
# 安装
make install
```

### nginx 常用命令

```bash
# nginx安装目录/usr/local/nginx/sbin 下执行
# 启动
./nginx
# 热重载
./nginx -s reload
# 停止
./nginx -s stop
```

### nginx 配置

```bash
#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
  include       mime.types;
  default_type  application/octet-stream;

  sendfile        on;
  #tcp_nopush     on;

  #keepalive_timeout  0;
  keepalive_timeout  65;

  server {
    listen 80;
    listen 443 ssl;
    server_name  localhost;
    #限制请求体大小，限制文件上传大小
    client_max_body_size 10m;
    if ($server_port !~ 443){
        rewrite ^(/.*)$ https://$host$1 permanent;
    }
    ssl_certificate   /usr/local/nginx/cert/liguangtao.cn.pem;
    ssl_certificate_key  /usr/local/nginx/cert/liguangtao.cn.key;
    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;

    #gzip配置
    gzip on;
    gzip_min_length 100;
    gzip_buffers 32 4K;
    gzip_comp_level 5;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_disable "MSIE [1-6]\.";
    gzip_vary on;

    # 部署到根路径
    location / {
      root /usr/local/nginx/html/dist;
      index index.html index.htm;
    }

    #部署到二级路径
    location ^~/console {
      root /usr/local/nginx/html;
      index index.html index.htm;
      try_files $uri $uri/ /console /index.html;
    }

    location /api {
      #跨域配置
      #add_header Access-Control-Allow-Credentials true;
      #add_header Access-Control-Allow-Origin 'http://localhost:9999';
      #add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE, OPTIONS';
      #add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,token,appId';
      #if ($request_method = 'OPTIONS') {
      #    return 200;
      #}
      #代理配置
      proxy_http_version 1.1;
      proxy_set_header Host $http_host;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_pass http://localhost:8080;
    }
  }
}
```

### vite 打包开启 gzip 压缩

```bash
npm i vite-plugin-compression -D
```

```js
// vite.config.js
import viteCompression from "vite-plugin-compression";
export default defineConfig(({ mode, command }) => {
  return {
    // 配置二级目录
    base: "/cosole/",
    plugins: [viteCompression()],
  };
});
```
