<template><div><h1 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h1>
<h2 id="uni-request" tabindex="-1"><a class="header-anchor" href="#uni-request" aria-hidden="true">#</a> uni.request</h2>
<p>在 uni 中可以调用 uni.request 方法进行请求网络请求。需要注意的是：<strong>在小程序中网络相关的 API 在使用前需要配置域名白名单</strong>。</p>
<h2 id="发送-get-请求" tabindex="-1"><a class="header-anchor" href="#发送-get-请求" aria-hidden="true">#</a> 发送 get 请求</h2>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>methods: {
   sendGet () {
    uni.request({
     url: 'http://localhost:8082/api/getlunbo',
     success(res) {
      console.log(res)
     }
    })
   }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


