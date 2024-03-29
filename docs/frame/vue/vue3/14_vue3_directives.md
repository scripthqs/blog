# Vue 自定义指令

vue 自带了 v-show、v-if、v-model 等指令，除了使用这些指令，vue 也允许自定义自己的指令。

- 在 vue 中，代码的复用和抽象主要还是通过组件
- 在某些情况，需要对 DOM 元素进行底层操作，这时可以用到自定义指令

自定义指令分为

- 自定义局部指令：组件通过 directives 选项，只能在当前组件中使用
- 自定义全局指令：app 的 directive 方法，可以在任意组件中使用。

实现一个功能：当元素挂在完成后可以自动获取焦点。

```js
//vue3 setup中

//自定义局部指令
const vFocus = {
  // 生命周期的函数(自定义指令)
  mounted(el) {
    // console.log("v-focus应用的元素被挂载了", el)
    el?.focus();
  }
};

//实际开发中，一般使用自定义全局指令
// 1.新建一个directives文件夹
// 2.directives文件夹下新建一个focus.js文件
export default function directiveFocus(app) {
  app.directive('focus', {
    // 生命周期的函数(自定义指令)
    mounted(el) {
      // console.log("v-focus应用的元素被挂载了", el)
      el?.focus();
    }
  });
}
//3.directives文件夹下新建一个index.js文件
import directiveFocus from './focus';
import directiveAaa from './aaa';
export default {
  directiveFocus,
  directiveAaa
};
//4.在main.js中引入
import { directiveFocus,directiveAaa } from './directives/index';
directiveFocus(app);
directiveAaa(app)

// 但是这样写，有可能出现过多的导入导出，可以换一种

//3-1 directives文件夹下新建一个index.js文件
import directiveFocus from './focus';
import directiveAaa from './aaa';

export default function useDirective {
  directiveFocus(app)
  directiveAaa(app)
};
//4-1 在main.js中引入
import useDirective from './directives/index';
useDirective(app)
```

## 自定义指令参数修饰符

```html
<!-- 1.参数-修饰符-值 -->
<h2 v-why:kobe.abc.cba="message">哈哈哈哈</h2>
<script>
  const message = "你好啊, 自定义修饰符";
  const vWhy = {
    mounted(el, bindings) {
      console.log(bindings); //参数-修饰符-值在这里面都可以拿到
      el.textContent = bindings.value;
    },
  };
</script>
```

自定义指令的生命周期跟之前的生命周期大同小异。

自定义指令，添加单位

```html
<!-- 2.价格拼接单位符号 -->
<h2 v-unit>{{ 111 }}</h2>
<script>
  app.directive("unit", {
    mounted(el, bindings) {
      const defaultText = el.textContent;
      let unit = bindings.value || ￥;
      let arg =bindings.arg;
      if(arg==='end'){
        el.textContent = defaultText +unit;
      }else{
        el.textContent = unit + defaultText;
      }
    }
  })
</script>
```

自定义一个指令 v-format-time，格式化后端传入的时间戳

```js
import dayjs from "dayjs";
export default function directiveFtime(app) {
  app.directive("time", {
    mounted(el, bindings) {
      // 1.获取时间, 并且转化成毫秒
      let timestamp = el.textContent;
      if (timestamp.length === 10) {
        timestamp = timestamp * 1000;
      }

      timestamp = Number(timestamp);

      // 2.获取传入的参数
      let value = bindings.value || "YYYY-MM-DD HH:mm:ss";

      // 3.对时间进行格式化
      const formatTime = dayjs(timestamp).format(value);
      el.textContent = formatTime;
    },
  });
}
```
