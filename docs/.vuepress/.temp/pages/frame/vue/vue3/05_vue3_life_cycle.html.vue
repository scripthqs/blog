<template><div><h1 id="vue3-生命周期" tabindex="-1"><a class="header-anchor" href="#vue3-生命周期" aria-hidden="true">#</a> vue3 生命周期</h1>
<p>vue2 的生命周期</p>
<ul>
<li>beforeCreate</li>
<li>created</li>
<li>beforeMount</li>
<li>mounted</li>
<li>beforeUpdate</li>
<li>updated</li>
<li>beforeDestroy</li>
<li>destroyed</li>
</ul>
<p>Vue3.0 中可以继续使用 Vue2.x 中的生命周期钩子，但有两个被更名：</p>
<ul>
<li><code v-pre>beforeDestroy</code>改名为 <code v-pre>beforeUnmount</code></li>
<li><code v-pre>destroyed</code>改名为 <code v-pre>unmounted</code></li>
</ul>
<p>Vue3.0 也提供了 Composition API 形式的生命周期钩子，与 Vue2.x 中钩子对应关系如下：</p>
<ul>
<li><code v-pre>beforeCreate</code>===&gt;<code v-pre>setup()</code></li>
<li><code v-pre>created</code>=======&gt;<code v-pre>setup()</code></li>
<li><code v-pre>beforeMount</code> ===&gt;<code v-pre>onBeforeMount</code></li>
<li><code v-pre>mounted</code>=======&gt;<code v-pre>onMounted</code></li>
<li><code v-pre>beforeUpdate</code>===&gt;<code v-pre>onBeforeUpdate</code></li>
<li><code v-pre>updated</code> =======&gt;<code v-pre>onUpdated</code></li>
<li><code v-pre>beforeUnmount</code> ==&gt;<code v-pre>onBeforeUnmount</code></li>
<li><code v-pre>unmounted</code> =====&gt;<code v-pre>onUnmounted</code></li>
</ul>
</div></template>


