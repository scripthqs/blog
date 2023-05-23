<template><div><h1 id="组件创建和生命周期" tabindex="-1"><a class="header-anchor" href="#组件创建和生命周期" aria-hidden="true">#</a> 组件创建和生命周期</h1>
<h2 id="_1-组件创建" tabindex="-1"><a class="header-anchor" href="#_1-组件创建" aria-hidden="true">#</a> 1 组件创建</h2>
<p>在 uni-app 中，可以通过创建一个后缀名为 vue 的文件，即创建一个组件成功，其他组件可以将该组件通过 import 的方式导入，在通过components 进行注册即可</p>
<ul>
<li>
<p>创建 login 组件，在 component 中创建 login 目录，然后新建 login.vue 文件</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
  这是一个自定义组件
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在其他组件中导入该组件并注册</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> login <span class="token keyword">from</span> <span class="token string">"@/components/test/test.vue"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>注册组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>components: {test}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>使用组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>test</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>test</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_2-组件的生命周期函数" tabindex="-1"><a class="header-anchor" href="#_2-组件的生命周期函数" aria-hidden="true">#</a> 2 组件的生命周期函数</h2>
<p>组件的生命周期和 vue 生命周期一样</p>
<table>
<thead>
<tr>
<th>beforeCreate</th>
<th>在实例初始化之后被调用。<a href="https://cn.vuejs.org/v2/api/#beforeCreate" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>created</td>
<td>在实例创建完成后被立即调用。<a href="https://cn.vuejs.org/v2/api/#created" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>beforeMount</td>
<td>在挂载开始之前被调用。<a href="https://cn.vuejs.org/v2/api/#beforeMount" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>mounted</td>
<td>挂载到实例上去之后调用。<a href="https://cn.vuejs.org/v2/api/#mounted" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a> 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用<code v-pre>$nextTick</code><a href="https://cn.vuejs.org/v2/api/#Vue-nextTick" target="_blank" rel="noopener noreferrer">Vue官方文档<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>beforeUpdate</td>
<td>数据更新时调用，发生在虚拟 DOM 打补丁之前。<a href="https://cn.vuejs.org/v2/api/#beforeUpdate" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td>仅H5平台支持</td>
</tr>
<tr>
<td>updated</td>
<td>由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。<a href="https://cn.vuejs.org/v2/api/#updated" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td>仅H5平台支持</td>
</tr>
<tr>
<td>beforeDestroy</td>
<td>实例销毁之前调用。在这一步，实例仍然完全可用。<a href="https://cn.vuejs.org/v2/api/#beforeDestroy" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>destroyed</td>
<td>Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。<a href="https://cn.vuejs.org/v2/api/#destroyed" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


