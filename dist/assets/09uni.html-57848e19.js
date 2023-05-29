import{_ as i,r as s,o as r,c as d,b as e,e as n,d as t,f as l}from"./app-dcac65c0.js";const o={},c=e("h1",{id:"数据缓存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据缓存","aria-hidden":"true"},"#"),n(" 数据缓存")],-1),u=e("h2",{id:"uni-setstorage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uni-setstorage","aria-hidden":"true"},"#"),n(" uni.setStorage")],-1),v=e("code",null,"uni.setStorage",-1),g={href:"https://uniapp.dcloud.io/api/storage/storage?id=setstorage",target:"_blank",rel:"noopener noreferrer"},h=l(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>setStorage(){
    uni.setStorage({
      key: &#39;storage_key&#39;,
         data: &#39;hello&#39;,
         success: function () {
             console.log(&#39;缓存成功&#39;);
         }
    })
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-setstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-setstoragesync" aria-hidden="true">#</a> uni.setStorageSync</h2><p>将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。</p><h2 id="uni-getstorage" tabindex="-1"><a class="header-anchor" href="#uni-getstorage" aria-hidden="true">#</a> uni.getStorage</h2><p>从本地缓存中异步获取指定 key 对应的内容。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>getStorage(){
    uni.getStorage({
     key: &#39;storage_key&#39;,
     success(res){
      console.log(res.data)
     }
    })
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-getstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-getstoragesync" aria-hidden="true">#</a> uni.getStorageSync</h2><p>从本地缓存中同步获取指定 key 对应的内容。</p><h2 id="uni-removestorage" tabindex="-1"><a class="header-anchor" href="#uni-removestorage" aria-hidden="true">#</a> uni.removeStorage</h2><p>从本地缓存中异步移除指定 key。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>removeStorage(){
    uni.removeStorage({
      key: &#39;storage_key&#39;,
         success(res) {
             console.log(&#39;移除缓存数据&#39;);
         }
    })
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-removestoragesync" tabindex="-1"><a class="header-anchor" href="#uni-removestoragesync" aria-hidden="true">#</a> uni.removeStorageSync</h2><p>从本地缓存中同步移除指定 key。</p>`,13);function m(b,_){const a=s("ExternalLinkIcon");return r(),d("div",null,[c,u,e("p",null,[v,n(" 的"),e("a",g,[n("官方文档"),t(a)]),n("，将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。")]),h])}const y=i(o,[["render",m],["__file","09uni.html.vue"]]);export{y as default};
