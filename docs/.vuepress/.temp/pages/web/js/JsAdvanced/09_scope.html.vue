<template><div><h1 id="作用域与作用域链" tabindex="-1"><a class="header-anchor" href="#作用域与作用域链" aria-hidden="true">#</a> 作用域与作用域链</h1>
<h2 id="作用域定义" tabindex="-1"><a class="header-anchor" href="#作用域定义" aria-hidden="true">#</a> 作用域定义</h2>
<p>作用域指一个变量作用的范围，在 JS 中有两种作用域：</p>
<ul>
<li><strong>全局作用域</strong></li>
<li><strong>函数作用域</strong></li>
</ul>
<p><strong>作用域</strong>是一个代码段所在的区域，是<strong>静态的</strong>（相对于执行上下文），在编写<strong>编码时就确定</strong>了。</p>
<p>分类：</p>
<ul>
<li>全局作用域</li>
<li>函数作用域</li>
<li>没有块作用域（ES6）之前</li>
</ul>
<p>作用：</p>
<ul>
<li><strong>隔离变量，不同的作用域下同名变量不会有冲突</strong></li>
</ul>
<p>总结：n+1 个作用域，n 代表定义函数的个数，1 代表 window</p>
<h2 id="作用域和执行上下文" tabindex="-1"><a class="header-anchor" href="#作用域和执行上下文" aria-hidden="true">#</a> 作用域和执行上下文</h2>
<p>区别 1：</p>
<ul>
<li><strong>作用域在函数定义时就确定的</strong>（静态的），不是函数调用时</li>
<li>全局执行上下文是全局作用域确定后创建的</li>
<li>函数执行上下文是调用函数时，函数执行前创建的</li>
</ul>
<p>区别 2：</p>
<ul>
<li>作用域是<strong>静态</strong>的，只要<strong>函数定义</strong>好了就一直存在，且<strong>不会变化</strong></li>
<li>执行上下文是<strong>动态</strong>的，<strong>调用函数</strong>时创建，函数调用结束时，<strong>自动释放</strong></li>
</ul>
<p>联系：</p>
<ul>
<li>执行上下文从属于所在的作用域链</li>
<li>全局执行上下文==》全局作用域</li>
<li>函数执行上下文==》对应函数作用域</li>
</ul>
<h2 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h2>
<p>什么是作用域链</p>
<ul>
<li>
<p>多个上下级关系的作用域形成的链, 它的方向是从下向上的(从内到外)</p>
</li>
<li>
<p>查找变量时就是沿着作用域链来查找的</p>
</li>
<li>
<p><strong>查找对象的属性和方法从原型链找</strong></p>
</li>
</ul>
<p><strong>查找一个变量的查找规则</strong>:</p>
<ol>
<li>在当前作用域下的执行上下文中查找对应的属性, 如果有直接返回, 否则进入 2</li>
<li>在上一级作用域的执行上下文中查找对应的属性, 如果有直接返回, 否则进入 3</li>
<li>再次执行 2 的相同操作, 直到全局作用域, 如果还找不到就抛出找不到的异常</li>
</ol>
</div></template>


