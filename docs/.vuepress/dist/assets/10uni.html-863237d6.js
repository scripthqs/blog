import{_ as e,r as o,o as c,c as i,d as n,e as a,b as t,f as p}from"./app-68a897fb.js";const l={},u=n("h1",{id:"图片的上传和预览",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片的上传和预览","aria-hidden":"true"},"#"),a(" 图片的上传和预览")],-1),r={id:"uni-chooseimage",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#uni-chooseimage","aria-hidden":"true"},"#",-1),d={href:"https://uniapp.dcloud.io/api/media/image?id=chooseimage",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>uni.chooseImage 方法从本地相册选择图片或使用相机拍照。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chooseImg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>上传图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in imgArr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">imgArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token function">chooseImg</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
     <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>imgArr <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFilePaths
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m={id:"uni-previewimage",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#uni-previewimage","aria-hidden":"true"},"#",-1),b={href:"https://uniapp.dcloud.io/api/media/image?id=unipreviewimageobject",target:"_blank",rel:"noopener noreferrer"},h=p(`<p>使用 uni.previewImage 预览图片</p><p>结构</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in imgArr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>previewImg(item)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预览图片的方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">previewImg</span> <span class="token punctuation">(</span><span class="token parameter">current</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">urls</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imgArr<span class="token punctuation">,</span>
    current
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function _(q,f){const s=o("ExternalLinkIcon");return c(),i("div",null,[u,n("h2",r,[k,a(),n("a",d,[a("uni.chooseImage"),t(s)])]),v,n("h2",m,[g,a(),n("a",b,[a("uni.previewImage"),t(s)])]),h])}const y=e(l,[["render",_],["__file","10uni.html.vue"]]);export{y as default};
