<template><div><h1 id="react-组件通信" tabindex="-1"><a class="header-anchor" href="#react-组件通信" aria-hidden="true">#</a> React 组件通信</h1>
<p>通常来说，一个应用会存在多个嵌套关系的组件。</p>
<h2 id="父组件传递给子组件" tabindex="-1"><a class="header-anchor" href="#父组件传递给子组件" aria-hidden="true">#</a> 父组件传递给子组件</h2>
<ul>
<li>父组件通过 <code v-pre>属性=值</code> 的形式传递给子组件数据</li>
<li>子组件通过 props 参数获取父组件传递过来的数据</li>
</ul>
<h2 id="propstypes" tabindex="-1"><a class="header-anchor" href="#propstypes" aria-hidden="true">#</a> propsTypes</h2>
<p>对传递给子组件的数据，希望进行验证</p>
<ul>
<li>如果项目继承了 Flow 或者 TypeScript，那么可以直接进行类型验证</li>
<li>通过 Prop-type 库进行参数验证</li>
</ul>
<p>从 React v15.5 后，React.PropTypes 已移入另一个包中：prop-types 库</p>
<p><a href="https://react.docschina.org/docs/typechecking-with-proptypes.html" target="_blank" rel="noopener noreferrer">https://react.docschina.org/docs/typechecking-with-proptypes.html<ExternalLinkIcon/></a></p>
<h2 id="子组件传递给父组件" tabindex="-1"><a class="header-anchor" href="#子组件传递给父组件" aria-hidden="true">#</a> 子组件传递给父组件</h2>
<ul>
<li>vue 是通过自定义事件完成的</li>
<li>React 同样是通过 props 传递信息，只是让父组件给子组件传递一个回调函数，在子组件调用这个函数就可以</li>
</ul>
</div></template>


