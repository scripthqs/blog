# Promise

## Promise 简介

promise 是 ES6 引入的异步编程的新解决方案。(旧方案是单纯使用回调函数)。语法上 Promise 是一个**构造函数**，用来**封装异步操作**并可以**获取其成功或失败**的结果。

1. Promise 构造函数: Promise (executor) {}
2. Promise.prototype.then
3. Promise.prototype.catch 方法

异步编程:fs 文件操作 、数据库操作 、Ajax 、定时器

- async：异步
- sync：同步

- `Promise`是一个构造函数 (自己身上有`all`、`reject`、`resolve`这几个方法，原型上有`then`、`catch`等方法)
- `promise`对象用来封装一个异步操作并可以获取其成功/失败的结果值

## JS 中的 Error

1. 错误的类型
   Error: 所有错误的父类型
   ReferenceError: 引用的变量不存在
   TypeError: 数据类型不正确的错误
   RangeError: 数据值不在其所允许的范围内
   SyntaxError: 语法错误
2. 错误处理
   捕获错误: try ... catch
   抛出错误: throw error
3. 错误对象
   message 属性: 错误相关信息
   stack 属性: 函数调用栈记录信息

## 异步事件的应用场景

一个很常用的场景就是网络请求，封装一个网络请求函数，因为不能立即拿到结果，所以我们往往会传入另一个函数，在数据请求成功时，将数据通过传入的函数调回去。一个简单的网络请求时，这方案问题不大，当网络请求复杂时，就会出现回调地狱。

有异步操作时，使用 promise 对异步操作进行包装。

在 new Promise()时，会传入两个参数，resolve 和 reject。resolve 和 reject 本身也是函数。

## Promise 的状态

`Promise`对象代表一个异步操作，异步操作之后会出现**3 种状态**：

- pending：等待状态，比如正在进行网络请求，或者定时器没有到时间
- fulfilled/resolved：满足状态，当我们主动**回调 resolve**时，就处于该状态，并且会回调.then()
- rejected：拒绝状态，当我们主动**回调 reject**时，就处于该状态，并且会回调.catch()

当把一件事情交给 promise 时，它的状态就是 Pending，任务完成了状态就变成了 Resolved、没有完成失败了就变成了 Rejected。

`Promise`对象的状态改变，只有两种可能，**两个过程**：

- 从`pending`变为`fulfilled/resolved`**Resolved（已完成）**
- 从`pending`变为`rejected`**Rejected（已拒绝）**

**注意：一旦从进行状态变成为其他状态就永远不能更改状态了。**

- `async->promise->pending->fulfilled/rejected->then()/catch()`

无论成功还是失败，都会有一个结果数据，成功的结果数据称为 value(data)，失败的结果数据一般称为 reason(error)

![Promise](https://raw.githubusercontent.com/scripthqs/assets/master/blog/Promise.png)

## Promise 的使用

`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`，这个**两个参数也是函数**

```js
//1.创建一个新的Promise对象
const p = new Promise((resolve, reject) => {
  //执行器函数executor 同步回调
  console.log("执行executor函数");
  //2.执行异步操作任务
  setTimeout(() => {
    const time = Date.now(); //当前时间时偶数代表成功,奇数代表失败
    if (time % 2 === 0) {
      //3.1.如果成功调用resolve(value)
      resolve(`成功的数据,time=${time}`);
    } else {
      //3.2.如果失败调用reject(reason)
      reject(`失败的数据,time=${time}`);
    }
  }, 1000);
});
//4.1接收成功的value数据,onResolved回调函数
p.then((value) => {
  console.log("成功的回调", value);
});
//4.2接收失败的value数据,onRejected回调函数
p.catch((reason) => {
  console.log("失败的回调", reason);
});
```

`resolve`函数：

- 将`Promise`对象的状态从“未完成”变为“成功”（即从 pending 变为 fulfilled），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去

`reject`函数:

- 将`Promise`对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

`Promise`实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数。

```js
//写法1：.then()方法同时处理resolved和rejected
promise.then(
  function (value) {
    // success
  },
  function (error) {
    // failure
  }
);
//写法2：.then()方法同时处理resolved,.catch()方法处理rejected
```

`then`方法可以接受两个回调函数作为参数。第一个回调函数是`Promise`对象的状态变为`resolved`时调用，第二个回调函数是`Promise`对象的状态变为`rejected`时调用。这两个函数都是可选的，不一定要提供。它们都接受`Promise`对象传出的值作为参数。

## Promise 的优点

1.**指定回调函数的方式更加灵活**

纯回调函数：必须在启动异步任务之前指定

```js
// 成功的回调函数
function successCallback(result) {
  console.log("声音文件创建成功：" + result);
}
// 失败的回调函数
function failureCallback(error) {
  console.log("声音文件创建失败：" + error);
}
// 必须先指定回调函数，再执行异步任务
createAudioFileAsync(audioSettings, successCallback, failureCallback); // 回调函数在执行异步任务（函数）前就要指定
```

Promise：启动异步任务 => 返回 Promise 对象 => 给 Promise 对象绑定回调函数（甚至可以在异步任务结束后指定）

```js
const promise = createAudioFileAsync(audioSettings); // 执行2秒
setTimeout(() => {
  promise.then(successCallback, failureCallback); // 也可以获取
}, 3000);
```

2.**支持链式调用，可以解决回调地狱的问题**

回调地狱：回调函数嵌套调用，外部回调函数异步执行的结果是其内部嵌套的回调函数执行的条件

```js
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log("Got the final result:" + finalResult);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);
```

1. 不便于阅读
2. 不便于异常处理

解决方案：**使用 promise 的链式调用解决回调地狱**

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log("Got the final result:" + finalResult);
  })
  .catch(failureCallback); //所有的异常都传到这里，异常传透
```

终极解决方案： **async/await**

```js
async function request() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log("Got the final result:" + finalResult);
  } catch (error) {
    failureCallback(error);
  }
}
```

## Promise 的 API

**1. Promise 构造函数：`Promise(executor) {}`**

- `executor` 函数：**同步执行** `(resolve, reject) => {}`
- `resolve` 函数：内部定义成功时调用的函数 `resove(value)`
- `reject` 函数：内部定义失败时调用的函数 `reject(reason)`

说明：`executor` 是执行器，会在 `Promise` 内部立即同步回调，异步操作 `resolve`/`reject` 就在 `executor` 中执行

**2.Promise.prototype.then 方法：`p.then(onResolved, onRejected)`**

指定两个回调（成功+失败）

- `onResolved` 函数：成功的回调函数 `(value) => {}`
- `onRejected` 函数：失败的回调函数 `(reason) => {}`

说明：指定用于得到成功 `value` 的成功回调和用于得到失败 `reason` 的失败回调，**返回一个新的 `promise` 对象**

**3. Promise.prototype.catch 方法：`p.catch(onRejected)`**

指定失败的回调

1）`onRejected` 函数：失败的回调函数 `(reason) => {}`

说明：这是`then()` 的语法糖，相当于 `then(undefined, onRejected)`

**4. Promise.resolve 方法：`Promise.resolve(value)`**

`value`：将被 `Promise` 对象解析的参数，也可以是一个成功或失败的 `Promise` 对象

返回：返回一个带着给定值解析过的 Promise 对象，如果参数本身就是一个 Promise 对象，则直接返回这个 Promise 对象。

1. 如果传入的参数为 非 Promise 类型的对象, 则返回的结果为成功 promise 对象

   ```js
   let p1 = Promise.resolve(521);
   console.log(p1); // Promise {<fulfilled>: 521}
   ```

2. 如果传入的参数为 Promise 对象, 则参数的结果决定了 resolve 的结果

```js
let p2 = Promise.resolve(
  new Promise((resolve, reject) => {
    // resolve('OK'); // 成功的Promise
    reject("Error");
  })
);
console.log(p2);
p2.catch((reason) => {
  console.log(reason);
});
```

**5. Promise.reject 方法：`Promise.reject (reason)`**

```js
let p = Promise.reject(521);
let p2 = Promise.reject("hello world");
let p3 = Promise.reject(
  new Promise((resolve, reject) => {
    resolve("OK");
  })
);

console.log(p);
console.log(p2);
console.log(p3);
```

- **Promise.resolve()/Promise.reject() 方法就是一个语法糖**
- 用来快速得到 Promise 对象

```js
//产生一个成功值为1的promise对象
new Promise((resolve, reject) => {
  resolve(1);
});
//相当于
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);

p1.then((value) => {
  console.log(value);
}); // 1
p2.then((value) => {
  console.log(value);
}); // 2
p3.catch((reason) => {
  console.log(reason);
}); // 3
```

**6. Promise.all 方法：`Promise.all(iterable)`**

```js
iterable`：包含 n 个 `promise` 的可迭代对象，如 `Array` 或 `String
```

说明：返回一个新的 `promise`，只有所有的 `promise` 都成功才成功，**只要有一个失败了就直接失败**，多个失败返回第一个失败的

```js
let p1 = new Promise((resolve, reject) => {
  resolve("OK");
});
let p2 = Promise.resolve("Success");
let p3 = Promise.resolve("hello world");

const result = Promise.all([p1, p2, p3]);
console.log(result);
```

**7.Promise.race 方法：`Promise.race(iterable)`**

```js
iterable`：包含 n 个 `promise` 的可迭代对象，如 `Array` 或 `String
```

说明：返回一个新的 `promise`，第一个完成的 `promise` 的结果状态就是最终的结果状态
**谁先完成就输出谁(不管是成功还是失败)**

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
const p2 = Promise.reject(2);
const p3 = Promise.reject(3);

const pRace = Promise.race([p1, p2, p3]);
// 谁先完成就输出谁(不管是成功还是失败)

pRace.then(
  (value) => {
    console.log("race onResolved()", value);
  },
  (reason) => {
    console.error("race onRejected()", reason); //race onRejected() 2
  }
);
```

## Promise 问题

### 如何改变 promise 的状态

(1)`resolve(value)`：如果当前是 `pending` 就会变为 `resolved`

(2)`reject(reason)`：如果当前是 `pending` 就会变为 `rejected`

(3)抛出异常：如果当前是 `pending` 就会变为 `rejected`

```js
const p = new Promise((resolve, reject) => {
  //resolve(1) // promise变为resolved成功状态
  //reject(2) // promise变为rejected失败状态
  // throw new Error('出错了') // 抛出异常，promise变为rejected失败状态，reason为抛出的error
  throw 3;
});
p.then(
  (value) => {},
  (reason) => {
    console.error("reason", reason);
  } // reason Error:出错了
);
```

### 一个 promise 指定多个成功/失败回调函数

当 `promise` **改变**为对应状态时**都会调用**

```js
const p = new Promise((resolve, reject) => {
  //resolve(1)
  reject(2);
});
p.then(
  (value) => {},
  (reason) => {
    console.log("reason", reason);
  }
);
p.then(
  (value) => {},
  (reason) => {
    console.error("reason2", reason);
  }
);
// reason 2
// reason2 2
```

### 改变 promise 状态和指定回调函数谁先谁后

都有可能，常规是先指定回调再改变状态，但也可以先改状态再指定回调

- 常规是先指定回调再改变状态

```js
//先指定回调再改变状态
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK"); //2.后改变状态（同时指定数据），异步执行回调函数
  }, 1000);
}).then(
  (value) => {
    //1.指定回调，(保存当前指定的回调函数)
    console.log(value);
  },
  (reason) => {}
);
```

- **如何先改状态再指定回调？**

(1)在执行器中直接调用 `resolve()`/`reject()`

```js
new Promise((resolve, reject) => {
  resolve("OK"); //1.先改变状态，同时指定数据
}).then(
  (value) => {
    //2.后指定回调函数，异步执行回调函数
    console.log(value);
  },
  (reason) => {}
);
```

(2)延迟更长时间才调用 `then()`

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK"); //1.先改变状态，同时指定数据
  }, 1000);
});

setTimeout(() => {
  p.then((value) => {
    console.log(value); ////2.后指定回调函数，异步执行回调函数
  });
}, 1100);
```

- **什么时候才能得到数据？**

(1)如果先指定的回调，那当**状态发生改变时**，回调函数就会调用得到数据

```js
//先指定回调再改变状态
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK"); //2.后改变状态（同时指定数据），异步执行回调函数
  }, 1000);
}).then(
  (value) => {
    //1.指定回调，(保存当前指定的回调函数)
    console.log(value);
  },
  (reason) => {}
);
```

(2)如果先改变的状态，那当**指定回调时**，回调函数就会调用得到数据

```js
new Promise((resolve, reject) => {
  resolve("OK"); //1.先改变状态，同时指定数据
}).then(
  (value) => {
    //2.后指定回调函数，异步执行回调函数
    console.log(value);
  },
  (reason) => {}
);
```

### promise.then() 返回的新 promise 的结果状态由什么决定？

promise.then() 会返回的一个新 promise，但是新 promise 的结果和状态时什么呢？

1)简单表达：由 `then()` 指定的**回调函数执行的结果**决定

```js
new Promise((resolve, reject) => {
  resolve("ok");
  // reject('no')
})
  .then(
    (value) => {
      console.log(value);
      // return 2
      // return Promise.resolve(3)
      // return Promise.reject(4)
      throw 5;
    },
    (reason) => {
      console.warn(reason);
    }
  )
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.warn(reason);
    }
  );
```

2)详细表达：

① 如果抛出异常，新 `promise` 变为 `rejected`，`reason` 为抛出的异常

```js
 p.then(value => {
  throw 5//1.抛出异常
 }).then(value => {
  console.log(value);//
 }.reason => {//2.新promise变为rejected
  console.warn(reason);//3. warn(5)
 })
```

② 如果返回的是非 `promise` 的任意值，新 `promise` 变为 `resolved`，`value` 为返回的值

```js
 p.then(value => {
  return 123 //1.非 `promise` 的任意值
  //return undefined//如果不写，默认返回undefined
 }).then(value => {//2.新promise变为resolved
  console.log(value);//3.value === 123
 }.reason => {
  console.warn(reason);
 })
```

③ 如果返回的是另一个新 `promise`，此 `promise` 的结果就会成为新 `promise` 的结果

```js
 p.then(value => {
  return  Promise.resolve(123) //1.新 `promise`
 }).then(value => {//2.新promise变为resolved
  console.log(value);//3.value === 123
 }.reason => {
  console.warn(reason);
 })
```

### promise 如何串联多个操作任务？

(1)`promise` 的 `then()` 返回一个新的 `promise`，可以并成 `then()` 的链式调用

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 1000);
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      resolve("success");
    });
  })
  .then((value) => {
    console.log(value); // success
  })
  .then((value) => {
    console.log(value); // undefined
  });
```

(2)通过 `then` 的链式调用串联多个同步/异步任务

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("执行任务1(异步)");
    resolve(1);
  }, 1000);
})
  .then((value) => {
    console.log("任务1的结果", value);
    console.log("执行任务2(同步)");
    return 2; // 同步任务直接return返回结果
  })
  .then((value) => {
    console.log("任务2的结果", value);
    return new Promise((resolve, reject) => {
      // 异步任务需要包裹在Promise对象中
      setTimeout(() => {
        console.log("执行任务3(异步)");
        resolve(3);
      }, 1000);
    });
  })
  .then((value) => {
    console.log("任务3的结果", value);
  });

// 执行任务1(异步)
// 任务1的结果 1
// 执行任务2(同步)
// 任务2的结果 2
// 执行任务3(异步)
// 任务3的结果 3
```

**同步任务直接 return 返回结果，异步任务需要包裹在 Promise 对象中**。

### Promise 异常穿透(传透)

(1)当使用 `promise` 的 `then` 链式调用时，可以在最后指定失败的回调

(2)前面任何操作出了异常，都会传到最后失败的回调中处理

```js
new Promise((resolve, reject) => {
  //resolve(1)
  reject(1);
})
  .then((value) => {
    console.log("onResolved1()", value);
    return 2;
  })
  .then((value) => {
    console.log("onResolved2()", value);
    return 3;
  })
  .then((value) => {
    console.log("onResolved3()", value);
  })
  .catch((reason) => {
    console.log("onRejected1()", reason); // onRejected1() 1
  });
```

相当于这种写法：多写了很多`reason => {throw reason}`

```js
new Promise((resolve, reject) => {
  //resolve(1)
  reject(1);
})
  .then(
    (value) => {
      console.log("onResolved1()", value);
      return 2;
    },
    (reason) => {
      throw reason;
    } // 抛出失败的结果reason
  )
  .then(
    (value) => {
      console.log("onResolved2()", value);
      return 3;
    },
    (reason) => {
      throw reason;
    } // 抛出失败的结果reason
  )
  .then(
    (value) => {
      console.log("onResolved3()", value);
    },
    (reason) => {
      throw reason;
    } // 抛出失败的结果reason
  )
  .catch((reason) => {
    console.log("onRejected1()", reason);
  });
// onRejected1() 1
```

所以失败的结果是一层一层处理下来的，最后传递到 `catch` 中。

或者，将 `reason => {throw reason}` 替换为 `reason => Promise.reject(reason)` 也是一样的

### 中断 promise 链？

当使用 `promise` 的 `then` 链式调用时，在中间中断，不再调用后面的回调函数

办法：在回调函数中返回一个 `pending` 状态的 `promise` 对象

```js
new Promise((resolve, reject) => {
  //resolve(1)
  reject(1);
})
  .then((value) => {
    console.log("onResolved1()", value);
    return 2;
  })
  .then((value) => {
    console.log("onResolved2()", value);
    return 3;
  })
  .then((value) => {
    console.log("onResolved3()", value);
  })
  .catch((reason) => {
    console.log("onRejected1()", reason);
  })
  .then(
    (value) => {
      console.log("onResolved4()", value);
    },
    (reason) => {
      console.log("onRejected2()", reason);
    }
  );
// onRejected1() 1
// onResolved4() undefined
```

为了在 `catch` 中就中断执行，可以这样写：

```js
new Promise((resolve, reject) => {
  //resolve(1)
  reject(1);
})
  .then((value) => {
    console.log("onResolved1()", value);
    return 2;
  })
  .then((value) => {
    console.log("onResolved2()", value);
    return 3;
  })
  .then((value) => {
    console.log("onResolved3()", value);
  })
  .catch((reason) => {
    console.log("onRejected1()", reason);
    return new Promise(() => {}); // 返回一个pending的promise
  })
  .then(
    (value) => {
      console.log("onResolved4()", value);
    },
    (reason) => {
      console.log("onRejected2()", reason);
    }
  );
// onRejected1() 1
```

**在 `catch` 中返回一个新的 `promise`，且这个 `promise` 没有结果。**

由于，返回的新的 `promise` 结果决定了后面 `then` 中的结果，所以后面的 `then` 中也没有结果。

这就实现了中断 `promise链`的效果。

## async 和 await

1. async 函数返回值是一个 Promise 对象，promise 对象的结果由 async 函数执行的返回值决定。和 then 方法一样

   ```js
   async function fn1() {
     //return 1
     throw 2;
   }
   const result = fn1();
   //console.log(result);//Promise:resolved 1
   console.log(result); //Promise:rejected 2
   result
     .then((value) => {
       console.log(value);
     })
     .catch((reason) => {
       console.error(reason);
     });
   ```

2. await 右侧的表达式一般为 promise 对象，但也可以是其他的值

   - 如果表达式是 Promise 对象，await 返回的是**Promise 成功的值**
   - 如果表达式是其他值，直接将此值作为 await 的返回值
   - 如果是失败的值，用 try...catch 捕获

```js
function fn2() {
  // return Promise.resolve(2)
  // return 2
  throw "xxx";
}
async function fn3() {
  const value = await fn2();
  console.log(value);
}
fn3();
```

注意：

await 必须写在 async 函数中，但是 async 函数中可以没有 await

如果 await 的 promise 失败了，就会抛出异常，需要通过 try...catch 来捕获处理

```js
function fn2() {
  // return Promise.resolve(2)
  return Promise.reject(3);
  // return 2
  // throw 'xxx'
}
async function fn3() {
  try {
    const value = await fn2();
    console.log(value);
  } catch (error) {
    console.log("得到失败的结果", error);
  }
}
fn3();
```

## js 异步之宏队列和微队列

![宏队列和微队列](https://raw.githubusercontent.com/scripthqs/assets/master/blog/%E5%AE%8F%E9%98%9F%E5%88%97%E5%92%8C%E5%BE%AE%E9%98%9F%E5%88%97.png)

1. 宏列队: 用来保存待执行的宏任务(回调), 比如: 定时器回调/DOM 事件回调/ajax 回调
2. 微列队: 用来保存待执行的微任务(回调), 比如: promise 的回调/MutationObserver 的回调
3. JS 执行时会区别这 2 个队列
   JS 引擎首先必须**先执行所有的初始化同步任务代码**
   每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行（**先微再宏**）

```js
setTimeout(() => {
  //会立即放入宏队列
  console.log("定时器1");
  Promise.resolve(3).then(
    //会立即放入微队列
    (value) => {
      console.log("Promise1", value);
    }
  );
}, 0);
setTimeout(() => {
  //会立即放入宏队列
  console.log("定时器2");
}, 0);

Promise.resolve(4).then(
  //会立即放入微队列
  (value) => {
    console.log("Promise2", value);
  }
);
//Promise2 4
//定时器1
//Promise1 3
//定时器2
```

先同步——再微任务——再宏任务——如果宏任务中有微任务，继续执行微任务——下一个宏任务
