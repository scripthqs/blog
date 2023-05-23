import{_ as p,r as t,o as e,c as o,d as n,e as s,b as c,f as l}from"./app-f790074e.js";const i={},u=l(`<h1 id="nodejs-综合应用" tabindex="-1"><a class="header-anchor" href="#nodejs-综合应用" aria-hidden="true">#</a> nodejs 综合应用</h1><p>由于 Vue 项目的个人中心需要登录，此处需要设计 2 个接口，分别是：</p><ul><li>登录</li><li>获取用户信息</li></ul><blockquote><p>用户数据可以存储在 MongoDB 中。</p><p>约定：</p><ul><li>库名：maizuo</li><li>表名：users</li></ul></blockquote><p>接下来就可以使用 NodeJS 来创建后端服务器来提供 API 接口运行环境了。</p><h2 id="_1-用户登录接口" tabindex="-1"><a class="header-anchor" href="#_1-用户登录接口" aria-hidden="true">#</a> 1.用户登录接口</h2><p>① 新建一个空文件夹，在其中初始化 NodeJS 项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token function">npm</span> i <span class="token parameter variable">-S</span> express md5 mongoose jsonwebtoken body-parser moment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>② 新建<code>http.js</code>文件，创建一个 express 服务器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> md5 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;md5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;body-parser&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;jsonwebtoken&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Server is running at http://127.0.0.1:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③ 使用<code>md5</code>模块来编写一个对密码加密的中间件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 密码加密中间件</span>
<span class="token keyword">const</span> <span class="token function-variable function">passwdCrypt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  passwd <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password<span class="token punctuation">;</span>
  req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>passwdCrypted <span class="token operator">=</span> <span class="token function">md5</span><span class="token punctuation">(</span>passwd <span class="token operator">+</span> <span class="token function">md5</span><span class="token punctuation">(</span>passwd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>④ 调用写好的密码加密中间件生成一个用户的初始密码用于后面做登录使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取初始化密码（用完即删）</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/init&quot;</span><span class="token punctuation">,</span> passwdCrypt<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;init password is:&quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>passwdCrypted<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// init password is:f5e441058f943860805d9a9af7318dc0【明文密码是123456】</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>POST 形式访问<code>/init</code>获得密码后就得到了一个完整的用户数据，此时可以将数据写入到 MongoDB 中。</p><p>如果我们自己的加密方式与讲义的代码不一样，请根据自己加密得到的密码来实际替换下面的 password 字段的值。</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">31167509</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mobile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18512345678&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;67e807163633906f0e989ce17abb292f&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://mall.s.maizuo.com/4f0b29878f62f5e298a89a4654f0e8f0.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将模拟好的数据，写入到数据库中，以便后面做登录操作：</p><p><img src="https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/12/49445839b58961aef64d39fec96c93fa97b2adc9.png?sign=5f921a04479fe5b4d775ebcc94a1aa11&amp;t=5fe02f7c" alt="mongoDB"></p><p>⑤ 配置<code>jsonwebtoken</code>模块需要用的<code>secret</code>，并在代码中读取供后续使用</p><blockquote><p>在 node 项目目录中创建一个.env（Linux 以.开头都为隐藏文件）并在此文件中写入 jwt 加密所需要的秘钥。同时，.env 文件不要上传到 Github 上（.gitignore 文件中声明忽略）。</p></blockquote><p><img src="https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/204d74229dcc25e9147bd73e6b1d01a86bcccffc.png?sign=33e1a22a1fbcf1e0f58f2352a37edfb9&amp;t=5f868353" alt="secret配置"></p><p>在代码中读取<code>secret</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 读取JWT的密钥</span>
<span class="token keyword">const</span> jwt_secret <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;.env&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>⑥ 引入<code>mongoose</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入mongoose</span>
<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/maizuo&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> UserSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headIcon</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Model <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;User&quot;</span><span class="token punctuation">,</span> UserSchema<span class="token punctuation">,</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⑦ 创建登录路由<code>/api/v1/user/login</code>实现用户名密码校验，并判断校验结果做出响应</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 登录验证接口</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1/user/login&quot;</span><span class="token punctuation">,</span> passwdCrypt<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> mobile<span class="token punctuation">,</span> passwdCrypted <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Model<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> mobile<span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> passwdCrypted <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// jwt.sign：jwt签发方法</span>
        <span class="token comment">// 参数1：载荷中的数据</span>
        <span class="token comment">// 参数2：签名的secret</span>
        <span class="token literal-property property">_token</span><span class="token operator">:</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">userId</span><span class="token operator">:</span> result<span class="token punctuation">.</span>userId<span class="token punctuation">,</span>
            <span class="token literal-property property">mobile</span><span class="token operator">:</span> result<span class="token punctuation">.</span>mobile<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          jwt_secret
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&quot;9999&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;mobile or password is invalid&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终输出</p><blockquote><p>登录成功则输出：</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxMTY3NTA5LCJtb2JpbGUiOiIxODUxMjM0NTY3OCIsImlhdCI6MTYwMjY0OTg2NX0.tVByVZYu4s5dgzLZwR00HHW7QZ0gkYpVXaVNhCdawbU&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>登录失败则输出：</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9999&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mobile or password is invalid&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取用户信息接口" tabindex="-1"><a class="header-anchor" href="#获取用户信息接口" aria-hidden="true">#</a> 获取用户信息接口</h2><p>个人中心的信息是用户<strong>登录成功后</strong>才能进行的页面展示，在请求数据时，后台接口一定要判断当前请求是否有 token，且 token 解密后一定是一个合法数据。</p><p><strong>接口需求</strong>：依据客户端传递给服务端的用户编号<code>userId</code>，在验证通过<code>jwt</code>后输出对应用户信息</p><blockquote><p>注意点：</p><p>有些企业提供的接口 jwt 所返回的 token 格式可能会在原有 token 之前拼接一个<code>持有者（空格）</code>的信息，例如用户<code>zhangsan</code>获取到的 token：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zhangsan eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxMTY3NTA5LCJtb2JpbGUiOiIxODUxMjM0NTY3OCIsImlhdCI6MTYwMjY0OTg2NX0.tVByVZYu4s5dgzLZwR00HHW7QZ0gkYpVXaVNhCdawbU
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果是上述在接收 token 的时候需要注意，别获取错误了。注意，验证是否合法只用 token，前面的持有者不用。</p></blockquote><p>① 定义获取并验证<code>jwt</code>的中间件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 中间件：验证客户端发送过来的token</span>
<span class="token keyword">const</span> <span class="token function-variable function">checkToken</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理并获取token</span>
  <span class="token keyword">let</span> tempArr <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> token <span class="token operator">=</span> tempArr<span class="token punctuation">[</span>tempArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 没有token</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
      <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;illegal access&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 尝试去验证token</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// jwt.verify(令牌, SECRET);</span>
      <span class="token keyword">let</span> <span class="token punctuation">{</span> userId <span class="token punctuation">}</span> <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> jwt_secret<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 查询当前用户是否可用</span>
      <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> Model<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> userId <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
          <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;illegal access&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> data<span class="token punctuation">;</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;bad request&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 定义获取用户信息的路由并使用上一步的中间件实现业务需求</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1/user/info&quot;</span><span class="token punctuation">,</span> checkToken<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> userId<span class="token punctuation">,</span> headIcon<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> mobile <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>userInfo<span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">userinfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      userId<span class="token punctuation">,</span>
      <span class="token literal-property property">mobile</span><span class="token operator">:</span> mobile<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;****&quot;</span><span class="token punctuation">,</span>
      gender<span class="token punctuation">,</span>
      headIcon<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2><p>问：为什么要拆？</p><ul><li>遵循开发规范</li><li>后期维护方便</li></ul><p>问：怎么拆？</p><ul><li>能拆就拆</li><li>RMVC <ul><li>R：router，路由，客户端发起请求与服务端响应之间的映射（app.get/post/put/delete..）</li><li>M：model，模型，用来处理业务逻辑的，但是业务逻辑可能与数据库与关系</li><li>V：view（无），视图，展示用户看的页面</li><li>C：controller，控制器，请求响应流程控制的（其中包含了若干个用于响应的方法）</li></ul></li></ul><p>现在要拆的有：路由、中间件、模型、控制器。</p><p>推荐顺序：模型、中间件、路由、控制器</p><p>各个文件的存放位置：</p><blockquote><ul><li><p>[x] 模型：app/models/*.js</p></li><li><p>[x] 中间件：app/middlewares/*.js</p></li><li><p>[x] 路由：routers/分隔目录/*.js</p></li><li><p>[x] 控制器：app/controllers/*.js</p></li><li><p>[x] DB 连接配置：config/*.js</p></li><li><p>[x] Schema：database/migrations/create_xxxxx_table.js</p></li></ul></blockquote>`,51),r={href:"https://github.com/laravel/laravel",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[s("拆分思想目录结构参考："),n("a",r,[s("https://github.com/laravel/laravel"),c(a)])])])}const b=p(i,[["render",k],["__file","08_node_api.html.vue"]]);export{b as default};