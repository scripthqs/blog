<template><div><h1 id="数据缓存" tabindex="-1"><a class="header-anchor" href="#数据缓存" aria-hidden="true">#</a> 数据缓存</h1>
<h2 id="uni-setstorage" tabindex="-1"><a class="header-anchor" href="#uni-setstorage" aria-hidden="true">#</a> uni.setStorage</h2>
<p><code v-pre>uni.setStorage</code> 的<a href="https://uniapp.dcloud.io/api/storage/storage?id=setstorage" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>，将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>setStorage(){
    uni.setStorage({
      key: 'storage_key',
         data: 'hello',
         success: function () {
             console.log('缓存成功');
         }
    })
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-setstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-setstoragesync" aria-hidden="true">#</a> uni.setStorageSync</h2>
<p>将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。</p>
<h2 id="uni-getstorage" tabindex="-1"><a class="header-anchor" href="#uni-getstorage" aria-hidden="true">#</a> uni.getStorage</h2>
<p>从本地缓存中异步获取指定 key 对应的内容。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>getStorage(){
    uni.getStorage({
     key: 'storage_key',
     success(res){
      console.log(res.data)
     }
    })
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-getstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-getstoragesync" aria-hidden="true">#</a> uni.getStorageSync</h2>
<p>从本地缓存中同步获取指定 key 对应的内容。</p>
<h2 id="uni-removestorage" tabindex="-1"><a class="header-anchor" href="#uni-removestorage" aria-hidden="true">#</a> uni.removeStorage</h2>
<p>从本地缓存中异步移除指定 key。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>removeStorage(){
    uni.removeStorage({
      key: 'storage_key',
         success(res) {
             console.log('移除缓存数据');
         }
    })
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-removestoragesync" tabindex="-1"><a class="header-anchor" href="#uni-removestoragesync" aria-hidden="true">#</a> uni.removeStorageSync</h2>
<p>从本地缓存中同步移除指定 key。</p>
</div></template>


