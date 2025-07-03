# React Hooks

Hook 是 React 16.8 的新增特性，可以在不编写 class 的情况下使用 state 以及其他 React 特性(比如生命周期)。

class 组件的优势：

- 可以定义自己的状态
- 有自己的生命周期
- 在状态改变时会重新执行 render 函数

所以在 hook 出现之前，通常是使用 class 组件

class 组件的不足：

- class 组件会变得复杂
- componentDidMount 会包含大量逻辑代码，包括网络请求，事件监听
- 难以拆分
- this 的指向和 class 可能会有点难

所以，hook 的出现解决了这些问题

- 不用写 class，替代之前 class
- 向下兼容，可以渐进式使用，不影响之前的内容
- hook 只能在函数式组件中使用

```js
import React, { memo, useState } from "react";

const countHook = memo((props) => {
  // 参数：初始化值，如果不设置就是 undefined
  // 返回值：数组，包含两个元素
  //    当前状态的值
  //    设置状态值的函数
  // const arr = useState(100);//返回一个数组
  const [counter, setCounter] = useState(100); //解构
  return (
    <div>
      <h2>countHook</h2>
      {/* <div>当前计数{arr[0]}</div> */}
      <div>当前计数{counter}</div>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
});

export default countHook;
```

useState 来自 react，从 react 导入，它是一个 hook。

Hook 是 js 函数，可以帮助我们钩入(hook into) React State 以及生命周期等特性。类似 useState,useEffect 函数叫 hook，hooks 是这一类函数的总称。

- 只能在函数最外层调用 Hook。不要在循环、条件判断或子函数中调用
- 只能在 React 的函数组件中调用 Hook。不要在其他 js 函数中调用
- 在自定义 hooks 中，可以使用 hooks，自定义 hook 必须使用 use 开头

## useState

useState 可以定义个 state 变量，和 class 里面的 this.state 提供的功能完全一样。

- 参数：接受唯一一个参数，用作初始化值，如果不设置就是 undefined
- 返回值：数组，包含两个元素，配合数组的解构，完成赋值会非常方便
  - 当前状态的值
  - 设置状态值的函数

```js
import React, { memo, useState } from "react";

const App = memo(() => {
  const [message, setMessage] = useState("Hello World");
  function changeMessage() {
    setMessage("你好,世界");
  }
  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  );
});

export default App;
```

### 操作数组

不要直接修改原数组

- 避免使用 push、pop、splice、sort、reverse 等会直接修改原数组的方法。
- 直接修改原数组不会触发 React 的视图更新。

推荐用不可变方法

- 使用 concat、filter、map、slice 等返回新数组的方法。
- 每次都要返回一个新数组给 setState。

### 操作对象

不要直接修改原对象

- 直接修改对象属性（如 obj.key = value）不会触发 React 的视图更新。
- React 依赖对象引用的变化来判断是否需要重新渲染。

每次都要返回一个新对象

- 使用展开运算符 { ...obj } 或 Object.assign 创建新对象，再传给 setState。
  这样可以保证对象引用发生变化，React 能检测到并更新视图。

### useState 的更新机制

useState 的更新是异步的，将更新操作放入队列，等到本轮事件循环结束后统一批量处理，然后重新渲染组件。可以提升性能，避免多次重复渲染，并保证数据的一致性。

## useEffect

Effect Hook 可以用来完成一些类似于 class 中生命周期的功能。

- 类似于网络请求、手动更新 DOM、一些事件的监听，都是 React 更新 DOM 的一些副作用（Side Effects）
- 对于完成这些功能的 Hook 被称之为 Effect Hook
- 两个参数：回调函数和依赖数组（可选）

```js
useEffect(() => {
  // 副作用逻辑
  // 在组件渲染后执行副作用逻辑（如请求、订阅、DOM 操作等）。
  return () => {
    // 清理逻辑
    // 可以返回一个清理函数，用于组件卸载或依赖变化时清理副作用。
  };
}, [依赖1, 依赖2]);
// 依赖数组：[依赖1, 依赖2]
// 控制副作用的执行时机。
// 为空数组 [] 时只在首次挂载和卸载时执行。
// 不传时每次渲染都会执行。
// 填写依赖项时，只有依赖变化才会重新执行副作用。
```

```js
import React, { memo, useState, useEffect } from "react";

const EffectHook = memo(() => {
  const [count, setCount] = useState(100);
  useEffect(() => {
    // 当前传入的回调函数会在组件被渲染完成后, 自动执行
    // 网络请求/DOM操作(修改标题)/事件监听
    document.title = count;
  });
  return (
    <div>
      <div>EffectHook</div>
      <h2>计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default EffectHook;
```

- 通过 useEffect 的 Hook，告诉 React 需要在渲染后执行某些操作
- useEffect 需要传入一个回调函数，在 React 执行完更新 DOM 操作之后，就会回调这个函数
- 默认情况下，无论是第一次渲染之后，还是每次更新之后，都会执行这个回调函数

### 清除 Effect

在 class 组件中，有些事件需要在 componentWillUnmount 中进行清除

- useEffect 传入的回调函数 A 本身可以有一个返回值，这个返回值是另外一个回调函数 B
- effect 可选的清除机制。每个 effect 都可以返回一个清除函数
- 可以将添加和移除订阅的逻辑放在一起

```js
import React, { memo, useState, useEffect } from "react";

const ClearEffect = memo(() => {
  const [count, setCount] = useState(100);
  useEffect(() => {
    document.title = count;
    // 1.监听事件
    // const unubscribe = store.subscribe(() => {
    // })
    // function foo() {
    // }
    // eventBus.on("abc", foo)
    console.log("监听redux中数据变化, 监听eventBus中的事件");
    // 返回值: 回调函数 => 组件被重新渲染或者组件卸载的时候执行
    return () => {
      console.log("取消监听redux中数据变化, 取消监听eventBus中的事件");
    };
  });
  return (
    <div>
      <div>ClearEffect</div>
      <h2>计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default ClearEffect;
```

### 分离 useEffect

使用 Effect Hook，我们可以根据代码的用途将它们分离到不同的 useEffect 中

```js
import React, { memo, useEffect } from "react";
import { useState } from "react";

const ManyEffect = memo(() => {
  const [count, setCount] = useState(0);

  // 负责告知react, 在执行完当前组件渲染之后要执行的副作用代码
  useEffect(() => {
    // 1.修改document的title
    console.log("修改title");
  });

  // 一个函数式组件中, 可以存在多个useEffect
  useEffect(() => {
    // 2.对redux中数据变化监听
    console.log("监听redux中的数据");
    return () => {
      // 取消redux中数据的监听
    };
  });

  useEffect(() => {
    // 3.监听eventBus中的事件
    console.log("监听eventBus的事件");
    return () => {
      // 取消eventBus中的why事件监听
    };
  });

  return (
    <div>
      <div>ManyEffect</div>
      <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
    </div>
  );
});

export default ManyEffect;
```

### 性能优化 effect

默认情况下，useEffect 的回调函数会在每次渲染时都重新执行

- 某些代码我们只是希望执行一次即可，类似于 componentDidMount 和 componentWillUnmount 中完成的事情。(比如网
  络请求、订阅和取消订阅)

useEffect 实际上有两个参数

1. 执行的回调函数
2. 该 useEffect 在哪些 state 发生变化时，才重新执行(受谁的影响)

如果一个函数我们不希望依赖任何的内容时，也可以传入一个空的数组 `[]`

```js
import React, { memo, useEffect } from "react";
import { useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello World");

  useEffect(() => {
    console.log("修改title:", count);
  }, [count]);

  useEffect(() => {
    console.log("监听redux中的数据");
    return () => {};
  }, []);

  useEffect(() => {
    console.log("监听eventBus的事件");
    return () => {};
  }, []);

  // 通过这种方式，可以模拟出 componentDidMount 和 componentWillUnmount 等生命周期函数
  useEffect(() => {
    console.log("发送网络请求, 从服务器获取数据");
    return () => {
      console.log("会在组件被卸载时, 才会执行一次");
    };
  }, []);

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
      <button onClick={(e) => setMessage("你好")}>修改message({message})</button>
    </div>
  );
});
export default App;
```

## useLayoutEffect

和 useEffect 非常的相似

- useEffect 在 DOM 更新后异步执行，不会阻塞浏览器渲染，不会阻塞 DOM 的更新
- useLayoutEffect 会在渲染的内容更新到 DOM 上之前执行，会阻塞 DOM 的更新

什么时候用：

1. 需要同步读取或更改 DOM，例如读取元素的带下或者位置，并再渲染前调整
2. 防止闪烁：某情况下使用异步 useEffect 可能导致布局的跳动或者闪烁
3. 模拟生命周期的方法

## useReducer

useReducer 有 3 个参数

1. reducer：处理 state 的函数（必选）,接收 (state, action)，返回新 state。
2. initialState：初始 state（必选）
3. init：可选的初始化函数（可选）,用于惰性初始化 state 的函数。

```js
const [state, dispatch] = useReducer(reducer, initialState, init?);
```

## useSyncExternalStore

用于订阅外部可变数据源（如 Redux、全局状态、原生事件、localStorage 等），保证并发渲染下数据一致性。

```js
const value = useSyncExternalStore(
  subscribe,      // 订阅函数，注册回调，数据变化时触发
  getSnapshot,    // 获取当前快照（同步返回当前值）
  getServerSnapshot? // SSR 时获取快照（可选）
);
```

getSnapshot 如果和上次不同，react 是会重新渲染

## useTransition

useTransition 用于实现并发 UI 更新，让一些“低优先级”的状态更新（如大列表渲染、搜索过滤等）不会阻塞高优先级的交互（如输入、点击）。

## useDeferredValue

useDeferredValue 用于延迟某个值的更新，让界面在高优先级更新（如输入、点击）时更流畅，低优先级的内容（如大列表渲染）可以稍后再更新。

和防抖很像，防抖需要一个固定时间，useDeferredValue 是根据用户设备情况觉得，设备好就几乎没有延迟。

useTransition 和 useDeferredValue 的区别：

1. 用于包裹一段低优先级的更新逻辑，主动控制哪些更新可以延后。
2. 用于延迟某个值的变化，让依赖这个值的渲染变成低优先级。

## useRef

useRef 返回一个 ref 对象，返回的 ref 对象在组件的整个生命周期保持不变。用法：

- 引入 DOM（或者组件，但是需要是 class 组件）元素
- 保存一个数据，这个对象在整个生命周期中可以保存不变（比如定时器）
- useRef 保存的数据修改不会导致组件重新渲染，适合保存一些临时变量或缓存

1. 组件在重新渲染时，useRef 的值不会重新初始化
2. 改变 ref.current 属性时，React 不会重新渲染组件。ref 是一个普通的 js 对象
3. useRef 的值不能作为 useEffect 等其他 hooks 的依赖项，因为它不是一个响应式数据
4. useRef 不能直接获取去子组件的实例，需要使用 forwardRef

## forwardRef

用于让父组件可以拿到子组件内部的 ref，常用于函数组件需要暴露 DOM 或实例给父组件的场景。

## useImperativeHandle

对于 ref 和 forwardRef 结合使用

- 通过 forwardRef 可以将 ref 转发到子组件
- 子组件拿到父组件中创建的 ref，绑定到自己的某一个元素中

这样的做法将子组件的 DOM 直接暴露给了父组件，会有一些问题

- 直接暴露给父组件不可控
- 父组件可以拿到 DOM 后进行任意的操作

useImperativeHandle 可以只暴露固定的操作

## useContext

在之前的开发中，要在组件中使用共享的 Context 有两种方式

- 类组件可以通过类名.contextType = MyContext 方式，在类中获取 context
- 多个 Context 或者函数式组件中通过 MyContext.Consumer 共享 context

```js
import React, { memo, useContext } from "react";
import { UserContext, ThemeContext } from "./context";

const App = memo(() => {
  // 使用Context
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>
        User: {user.name}-{user.level}
      </h2>
      <h2 style={{ color: theme.color, fontSize: theme.size }}>Theme</h2>
    </div>
  );
});

export default App;
```

## useCallback

当需要将一个函数传递给子组件时, 最好使用 useCallback 进行优化, 将优化之后的函数, 传递给子组件

- useCallback 会返回一个函数的 memoized（记忆的） 值
- 在依赖不变的情况下，多次定义的时候，返回的值是相同的；

通常使用 useCallback 的目的是不希望子组件进行多次渲染，并不是为了函数进行缓存

## useMemo

- 和 vue 的计算属性类似
- useMemo 返回的也是一个 memoized（记忆的） 值
- 在依赖不变的情况下，多次定义的时候，返回的值是相同的

useCallback、useEffect、useMemo 这些方法如果用到了 state 数据，一定要把这些依赖写在依赖数组里，否则会出现数据不同步、闭包陷阱等 bug。

## redux hooks

为了让组件和 redux 结合起来，需要使用 react-redux 的 connect

- 这种方式必须使用高阶函数结合返回的高阶组件
- 必须编写 mapStateToProps 和 mapDispatchToProps 映射函数

使用 hook 的方式，不需要编写 connect 以及对应的映射函数

### useSelector

useSelector 将 state 映射到组件

- 参数 1：将 state 映射到需要的数据中
- 参数 2：可以进行比较来决定是否重新渲染组件

useSelector 会默认比较返回的两个对象是否相等，必须返回两个完全相等的对象才不重新渲染

### useDispatch

useDispatch 直接获取 dispatch 函数，之后在组件中直接使用即可

## 自定义 hooks

自定义 hook 本质式函数代码逻辑的抽取，不是只有 React 可以写，Vue3 也可以写 hooks 了

```js
//打印生命周期
function useLogLife(cName) {
  useEffect(() => {
    console.log(cName + "组件被创建");
    return () => {
      console.log(cName + "组件被销毁");
    };
  }, [cName]);
}

import { useState, useEffect } from "react";

//获取窗口滚动位置
function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      // console.log(window.scrollX, window.scrollY)
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollX, scrollY];
}

export default useScrollPosition;

//localStorage数据库存储
import { useEffect, useState } from "react";

function useLocalStorage(key) {
  // 1.从localStorage中获取数据, 并且数据数据创建组件的state
  const [data, setData] = useState(() => {
    const item = localStorage.getItem(key);
    if (!item) return "";
    return JSON.parse(item);
  });

  // 2.监听data改变, 一旦发生改变就存储data最新值
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  // 3.将data/setData的操作返回给组件, 让组件可以使用和修改值
  return [data, setData];
}

export default useLocalStorage;
```
