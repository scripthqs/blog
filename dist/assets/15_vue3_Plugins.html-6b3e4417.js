import{_ as e,o as i,c as l,f as o}from"./app-4d122d87.js";const t={},c=o('<h1 id="vue-插件" tabindex="-1"><a class="header-anchor" href="#vue-插件" aria-hidden="true">#</a> Vue 插件</h1><p>向 Vue 全局添加一些功能时，会采用插件的模式，它有两种编写方式：</p><ol><li>对象类型：一个对象，但是必须包含一个 install 的函数，该函数会在安装插件时执行</li><li>函数类型：一个 function，这个函数会在安装插件时自动执行</li></ol><p>插件的使用场景：</p><ol><li>添加全局方法或者 property，通过把它们添加到 <code>app.config.globalProperties</code> 上实现</li><li>添加全局资源：指令/过滤器/过渡等</li><li>通过全局 mixin 来添加一些组件选项</li><li>一个库，提供自己的 API(例如：vue-router)</li></ol>',5),n=[c];function r(a,_){return i(),l("div",null,n)}const u=e(t,[["render",r],["__file","15_vue3_Plugins.html.vue"]]);export{u as default};