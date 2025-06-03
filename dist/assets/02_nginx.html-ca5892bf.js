import{_ as i,r as t,o as l,c,b as n,e as s,d as e,f as p}from"./app-06f72143.js";const o={},d=n("h1",{id:"项目部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目部署","aria-hidden":"true"},"#"),s(" 项目部署")],-1),r=n("h2",{id:"nginx-官方文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-官方文档","aria-hidden":"true"},"#"),s(" nginx 官方文档")],-1),u={href:"http://nginx.org",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m=n("h2",{id:"下载地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载地址","aria-hidden":"true"},"#"),s(" 下载地址")],-1),k={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},b=p(`<h2 id="centos-安装-nginx" tabindex="-1"><a class="header-anchor" href="#centos-安装-nginx" aria-hidden="true">#</a> centos 安装 nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装基础库</span>
yum <span class="token function">install</span> gcc gcc-c++
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> pcre pcre-devel
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zlib zlib-devel
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> openssl openssl-devel

<span class="token comment"># 下载nginx</span>
<span class="token builtin class-name">cd</span> /usr/local
<span class="token function">wget</span> http://nginx.org/download/nginx-1.22.1.tar.gz

<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.22.1.tar.gz
<span class="token builtin class-name">cd</span> ./nginx-1.22.1

<span class="token comment"># 初始化配置，添加ssl模块</span>
./configure --with-http_ssl_module

<span class="token comment"># 编译源码</span>
<span class="token function">make</span>
<span class="token comment"># 安装</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-常用命令" tabindex="-1"><a class="header-anchor" href="#nginx-常用命令" aria-hidden="true">#</a> nginx 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nginx安装目录/usr/local/nginx/sbin 下执行</span>
<span class="token comment"># 启动</span>
./nginx
<span class="token comment"># 热重载</span>
./nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># 停止</span>
./nginx <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> nginx 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
  include       mime.types<span class="token punctuation">;</span>
  default_type  application/octet-stream<span class="token punctuation">;</span>

  sendfile        on<span class="token punctuation">;</span>
  <span class="token comment">#tcp_nopush     on;</span>

  <span class="token comment">#keepalive_timeout  0;</span>
  keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

  server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
    <span class="token comment">#限制请求体大小，限制文件上传大小</span>
    client_max_body_size 10m<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$server_port</span> <span class="token operator">!</span>~ <span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        rewrite ^<span class="token punctuation">(</span>/.*<span class="token punctuation">)</span>$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    ssl_certificate   /usr/local/nginx/cert/liguangtao.cn.pem<span class="token punctuation">;</span>
    ssl_certificate_key  /usr/local/nginx/cert/liguangtao.cn.key<span class="token punctuation">;</span>
    ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
    ssl_session_timeout  5m<span class="token punctuation">;</span>
    ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

    <span class="token comment">#gzip配置</span>
    <span class="token function">gzip</span> on<span class="token punctuation">;</span>
    gzip_min_length <span class="token number">100</span><span class="token punctuation">;</span>
    gzip_buffers <span class="token number">32</span> 4K<span class="token punctuation">;</span>
    gzip_comp_level <span class="token number">5</span><span class="token punctuation">;</span>
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png<span class="token punctuation">;</span>
    gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>
    gzip_vary on<span class="token punctuation">;</span>

    <span class="token comment"># 部署到根路径</span>
    location / <span class="token punctuation">{</span>
      root /usr/local/nginx/html/dist<span class="token punctuation">;</span>
      index index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#部署到二级路径</span>
    location ^~/console <span class="token punctuation">{</span>
      root /usr/local/nginx/html<span class="token punctuation">;</span>
      index index.html index.htm<span class="token punctuation">;</span>
      try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /console /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location /api <span class="token punctuation">{</span>
      <span class="token comment">#跨域配置</span>
      <span class="token comment">#add_header Access-Control-Allow-Credentials true;</span>
      <span class="token comment">#add_header Access-Control-Allow-Origin &#39;http://localhost:9999&#39;;</span>
      <span class="token comment">#add_header Access-Control-Allow-Methods &#39;GET, POST, PUT, DELETE, OPTIONS&#39;;</span>
      <span class="token comment">#add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,token,appId&#39;;</span>
      <span class="token comment">#if ($request_method = &#39;OPTIONS&#39;) {</span>
      <span class="token comment">#    return 200;</span>
      <span class="token comment">#}</span>
      <span class="token comment">#代理配置</span>
      proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
      proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
      proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
      proxy_set_header Connection <span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">;</span>
      proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
      proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
      proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
      proxy_pass http://localhost:8080<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-打包开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#vite-打包开启-gzip-压缩" aria-hidden="true">#</a> vite 打包开启 gzip 压缩</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vite-plugin-compression <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-compression&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode<span class="token punctuation">,</span> command <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置二级目录</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/cosole/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function h(g,_){const a=t("ExternalLinkIcon");return l(),c("div",null,[d,r,n("p",null,[n("a",u,[s("http://nginx.org"),e(a)]),v]),m,n("p",null,[n("a",k,[s("http://nginx.org/en/download.html"),e(a)])]),b])}const f=i(o,[["render",h],["__file","02_nginx.html.vue"]]);export{f as default};
