# Vue购物街

一款基于VueCLI、Vue-router、Vuex、VueLazyLoad、BetterScroll(滚动插件)、Axios等构建的web移动端商城项目。

[源码链接](https://github.com/Scripthqs/vuemall)

本项目是移动端项目，推荐手机**扫描二维码预览**

![可手机扫描二维码预览](./images/vuemall.png)

[没有使用组件库的项目预览](http://scripthqs.gitee.io/vuemall/#/home)

![可手机扫描二维码预览](./images/vantmall.png)

[使用 vant-ui 组件库重构的版本](http://scripthqs.gitee.io/vantmall)

本项目功能模块包含首页轮播、商品详情、商品分类、购物车功能等业务、采用模块化、组件化、工程化的模式开发

## 1 准备

### 1.1 划分目录结构

```shell
vue create vuemall
```

使用vuecli创建项目，

- src/network文件夹：专门用来封装网络请求，里面对axios进行了二次封装
- components/views文件夹：
  - 两个文件夹都可以用来放组件
  - components文件夹，存放**不使用路由**切换，**可复用**的组件
  - views文件夹，存放**通过路由来切换的**的组件

### 1.2 css样式重置

1. 引入normalize.css，npm引入或者直接下载到src/assets/css文件夹中

   ```shell
   npm install --save normalize.css 
   ```

   main.js引入

   ```shell
    import 'normalize.css/normalize.css
   ```

2. 定义基础样式base.css

3. 在vue中引入css文件时，需要注意，例如引入base.css

   在app.vue文件中引入时，需要在style标签里面引入

   ```bash
   @import "@/assets/css/base.css";
   ```

   在main.js文件中引入

   ```bash
   import '@/assets/css/base.css';
   ```

### 1.3 vue的配置文件

在vue项目中，默认隐藏了webpack的默认配置，需要新建配置文件vue.config.js和.editorconfig

- 在vue.config.js中配置别名

  ```js
  module.exports = {
      configureWebpack: {
        resolve: {
          alias: {
            components: '@/components',
            content: 'components/content',
            common: 'components/common',
            assets: '@/assets',
            network: '@/network',
            views: '@/views'
          }
       }
     }
  }
  ```

- 在.editorconfig中统一代码格式化规则

  ```js
  root = true
  
  [*]
  charset = utf-8
  indent_style = space
  indent_size = 2
  end_of_line = lf
  insert_final_newline = true
  trim_trailing_whitespace = true
  ```

### 1.4 项目模板的划分

在app.vue文件中，引入**Tabbar底部切换**的标签栏组件，然后再**配置路由**的映射关系

1. 如果完全手写，需要自己手动封装一个Tabbar组件
2. 封装组件时，一般都会使用到插槽，对于一个完整的Tabbar组件，一般需要封装Tabbar组件和TabBarItem组件

```vue
//Tabbar组件
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

//TabBarItem组件
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 下面这个slot会被替换掉，所以得放在div中 并在div中设置 :class -->
    <!-- <div :class="{ active: isActive }"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
```

## 2 首页的开发

### 2.1  navbar导航栏封装

导航栏的封装一般比较简单

```vue
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
```

### 2.2 网络的请求的封装

1. 在src/network文件夹中，基于axios框架封装request.js

    ```javascript
    import axios from 'axios'
    export function request(config) {
        // 初始化：新建一个axios实例
        const instance1 = axios.create({
            //baseURL: 'http://152.136.185.210:7878/api/m5',
            baseURL: '/api'，//这种方式，配合vue.config.js可以解决跨域问题
            timeout: 5000
        })
        
        // 拦截：请求request，
        instance1.interceptors.request.use(config => {
            //拦截某些网络请求，比如登录token，必须携带一些特殊的信息，跳转到某个地方登录
            // console.log(config);
            //拦截后必须返回
            return config;
        }, err => {
            console.log(err);
        })
        
        // 拦截：响应response
        instance1.interceptors.response.use(res => {
            //拦截响应，可以对结果进行处理，比如，根据服务器的返回状态码做判断
            // console.log(res.data);
            //拦截后必须返回
            return res.data;
        },err => {
            console.log(err);
        })
        
        // 返回：发送真实请求
        return instance1(config);
    }
    ```

2. 将**不同页面**的网络请求分类，分别封装对于的请求文件，例如 home.vue 面向 home.js 开发，可降低耦合度

3. 例如首页的网络的网络请求，可以封装home.js，引入request.js，配置各页面的具体url，

   ```javascript
   import {request} from "./request";
   
   export function getHomeMultidata() {
     return request({
       url: '/home/swiperdata',
     })
   }
   
   export function getHomeGoods(type,page) {
     return request({
       //url: 'api/getHomeMock',
       params: {
         type,
         page
       }
     })
   }
   ```

   4.有的接口可能会出现跨域问题，需要在vue.config.js中追加如下配置

   ```javascript
   devServer: {
       proxy: {
         '/api': {
           target: 'http://152.136.185.210:7878/api/m5',
           pathRewrite:{'^/api':''},//重写api，将地址栏路径中的api用''替代
           ws: true, //用于支持websocket
           changeOrigin: true //用于控制请求头中的host值
         },
         '/demo': {
           target: 'http://localhost:5001',
           pathRewrite:{'^/demo':''},
         }
       }
   }
   ```

### 2.3 swiper轮播图封装

1. 先写对应的结构

   ```vue
   <template>
       <div id="swiper">
         <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
           <slot></slot>
         </div>
         <slot name="indicator">
         </slot>
         <div class="indicator">
           <slot name="indicator" v-if="showIndicator && slideCount>1">
             <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
           </slot>
         </div>
       </div>
   </template>
   ```

   太难了，还是用插件，UI库。

2. 引入轮播图组件

3. 使用轮播图

   ```vue
   <template>
     <swiper>
       <swiper-item v-for="item in cBanners" :key="item.id">
         <a :href="item.link">
           <img :src="item.image" alt="轮播图" @load="imgLoad" />
         </a>
       </swiper-item>
     </swiper>
   </template>
   ```

### 2.4 推荐信息封装

封装RecommendView.vue和FeatureView.vue文件，重点：

1 在组件中使用**自定义属性props**

```js
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
```

2 在父组件中使用v-bind将数据传递给子组件

```vue
<recommend-view :recommends="recommends"></recommend-view>
```

3 使用网络请求，拿到数据

```js
    //在methods中写网络请求的方法
 getHmMultidata () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
 //也可以使用async和await简化promise
 async getHmMultidata () {
      const { data: res } = await getHomeMultidata()
      this.banners = res.banner.list
      this.recommends = res.recommend.list
    },
     
    //在created()中，调用网络请求的方法
 created () {
     this.getHmMultidata()
   },   
```

### 2.5 Tab 标签页封装

1 写出对应的结构

```vue
<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{ active: index === currentIndex }" :key="item" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>
```

2 在组件中使用**自定义属性props**

```js
 props: {
    titles: {
      type: Array,
      default () {
        return []
      },
    },
  },
```

3 在组件中使用**自定义事件**向父组件传递数据

```js
  methods: {
    itemClick (index) {
      if (this.currentIndex != index) {
        this.currentIndex = index
        this.$emit("tabClick", index)
      }
    },
  },
```

4 在**父组件中使用v-bind**将数据传递给子组件

```vue
<tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2" />
```

5 对于tab标签切换，请求不同的网络请求数据，需要设计对应的数据结构

```js
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",

```

6 切换不同的标签，请求不同的数据

```js
tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = "pop"
          break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
          break
      }
    },
```

7 根据不同的type，请求不同的数据

```js
getHmGoods (type) {//定义变量，请求，不同的数据
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    
   created () {
    this.getHmGoods("pop")
    this.getHmGoods("new")
    this.getHmGoods("sell")
  },
```

8 上拉加载更多的数据

```js
loadMore () {
    this.getHmGoods(this.currentType)
}
```

9 根据请求到的数据，封装对应的组件GoodsList

```hs
* props: goods -> list[30]
* v-for goods -> GoodsListItem[30]
* GoodListItem(组件) -> GoodsItem(数据)
```

10 封装GoodsListItem.vue组件

```js
* props: goodsItem 
* goodsItem 取出数据, 并且使用正确的div/span/img基本标签进行展示
```

### 2.6 better-scroll滚动封装

1 安装better-scroll插件

```bash
npm install @better-scroll/core --save
npm install @better-scroll/pull-up --save
npm install @better-scroll/observe-image --save
```

2 当content的高度>父容器wrapper的高度，才能滚动的，当有图片异步请求时，很容易出问题。

```js
  observeDOM: true
  
  updated() {
    this.scroll.refresh();
  },
  activated() {
    this.scroll.refresh();
  },
```

3 better-scroll首次加载无法滑动，在初始化BScroll时，配置属性

```js
disableTouch: false 
```

### 2.7 BackTop回到顶部

1  BackTop的封装

```vue
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>
```

结构比较简单，主要是逻辑的书写。

在Home.vue中使用BackTop组件

```vue
<back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
```

> @click.native可以监听组件根元素的点击

**监听组件的点击：**

- 组件的点击加上修饰符.native
- 回到顶部的点击事件功能实现

```js
   backClick () {
      // 获取滚动的高度
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    },
```

BackTop组件的**显示和隐藏**

- 监听滚动, 拿到滚动的位置

```js
data(){
  return {
    isShowBackTop: false
  }
}
mounted () {
 window.addEventListener('scroll', this.scrollToTop, true)
},
destroyed () {
 window.removeEventListener('scroll', this.scrollToTop, true)
},
methods:{
    scrollToTop () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top >= 700) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
    },
}
  
```

### 2.8 上拉加载更多的问题

1 设计数据结构

```js
    currentType: 'pop',
 goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
```

2 点击切换tab栏切换currentType

```js
    tabClick (index, title) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
```

3 更新数据

```js
    onLoad () {
      // 异步更新数据
      this.getHmGoods(this.currentType)
    },
```

4  商品数据的网络请求

```js
    getHmGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
```

### 2.9 让Home保持原来的状态

从home跳到了category，再返回home后又重新加载home

让Home不要随意销毁掉，使用 keep-alive

- 路由组件会自动 destroyed，要用 keep-alive ,让组件不自动销毁
- 离开home组件时，保存一个位置信息 saveY，再进来时，将位置设置为原来保存的位置信息即可
- 利用生命周期函数 activated(){} 和函数 deactivated(){}
- 进入是触发 activated()，退出时触发 deactivated()
- 页面第一次进入，钩子的出发顺序是 created -> mounted -> activated，退出时触发deactivated
- 当再次进入时，只触发 activated

```vue
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
```

### 2.10 使用防抖，优化监听

当屏幕滚动时，调用获取屏幕高度的函数调用非常频繁，使用防抖优化

```js
/**
 * 防抖
 * 说明：定义一个 const 常量保存本函数的返回值（返回值也是一个函数），并多次调用该返回值函数即可
 * @param {*} func 需要执行的函数，必填
 * @param {*} delay 防抖的延时，默认 100 毫秒
 * @returns 供使用的防抖函数，可为需要执行的函数添加可变参数项，使用...定义
 */
export function debounce (func, delay = 100) {
  // 初始化一个计时器，用于判断上一次调用的计时器是否已经计时结束
  let times = null

  // 返回函数形成闭包，使得 times 变量能够重复引用不被销毁
  return function (...args) {
    // 下次调用时如果存在上次的计时，则清空上次的计时并重置计时
    if (times) clearTimeout(times)
    // 设置延时执行函数，以期待下次调用在本次延时未结束时重新进入此处
    times = setTimeout(() => {
      // 延时结束时最终执行传入的函数
      func.apply(this, args)
    }, delay)
  }
}
```

## 3 详情页的开发

### 3.1 根据商品ID配置路由

配置详情页的路由采用动态路由的方式

```js
{ path: '/detail/:iid', name: 'Detail', component: Detail }
```

根据点击商品的id，获取对应的商品信息

```js
created () {
    // 保存传入的iid数据
    this.iid = this.$route.params.iid
    // 发送网络请求请求详情页数据
    getDetail(this.iid).then((res) => {
      console.log(res)
      const data = res.result
      // 顶部图片轮播数据
      this.topImages = data.itemInfo.topImages
      console.log(this.topImages)
      // 取出并整合需要使用的数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      // 取出并整合店家信息
      this.shop = new Shop(data.shopInfo)
      // 图片详情相关信息
      this.detailInfo = data.detailInfo
      // detailParam相关信息整合
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )
      // 取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      this.itemInfo = data.itemInfo
    })
    getRecommend().then((res) => {
      this.recommend = res.data.list
    })
  },
```

### 3.2 详情页导航栏

### 3.3 轮播图

### 3.4 商品信息

### 3.5 商家信息

### 3.6 商品细节

### 3.7 评论信息

使用过滤器，将获取到的时间戳转换成对应的时间

```js
filters: {
    showDate: function (value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
```

格式化时间的工具函数

```js
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
```

### 3.8 参数信息

### 3.9 推荐商品

主要是网络请求的封装，取出并整合需要使用的数据

### 3.10 标题和内容的联动效果

1 监听标题点击，滚动到对应的模块

```js
onClick (name, title) {
      console.log(name, title)
      // const currentScroll = Math.ceil(document.documentElement.scrollTop)
      // this.active = name
      // console.log(document.querySelector('#推荐').offsetTop - 46)
      switch (title) {
        case '商品':
          document.documentElement.scrollTop = 0
          break
        case '评价':
          document.documentElement.scrollTop = document.querySelector('#评价').offsetTop - 46
          break
        case '参数':
          document.documentElement.scrollTop = document.querySelector('#参数').offsetTop - 46
          break
        case '推荐':
          document.documentElement.scrollTop = document.querySelector('#推荐').offsetTop - 46
          break
      }
    },
```

2 滚动模块，改变为显示正确的标题

```js
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
  scrollToTop () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(2)
      if (top >= 700) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
      if (top < document.querySelector('#评价').offsetTop - 46) {
        this.active = 0
      } else if (top < document.querySelector('#参数').offsetTop - 46) {
        this.active = 1
      } else if (top < document.querySelector('#推荐').offsetTop - 47) {
        this.active = 2
      } else {
        this.active = 3
      }
    }
  }
      
```

### 3.11 底部工具栏的封装

重点，点击加入购物车

1 将购物车所需页面的的信息进行整理，network/cart.js

```js
export class CartGoods {
  constructor (itemInfo) {
    this.desc = itemInfo.desc
    this.title = itemInfo.title
    this.iid = itemInfo.iid
    this.imgURL = itemInfo.topImages[0]
    this.newPrice = itemInfo.lowNowPrice
  }
}
```

传入参数，得到商品信息

```js
addToCart () {
      const product = new CartGoods(this.itemInfo)
      // this.$store.dispatch("addCart", product);
      // 由于通过mapActions将store中的方法映射了过来，因此可以直接调用改方法
      //  这是普通方法使用toast，若想要看以插件形式封装的toast使用，看Cart中相关的
      this.addCart(product).then((res) => {
        this.toastMessage = res
        this.$toast.show(res, 1000)
      })
    },
```

### 3.12 toast插件的封装

1. 仔细看components/common/toast文件夹中的index.js和Toast.vue
2. 导入index.js `import toast from 'components/common/toast/'`
3. 注册toast插件 Vue.use(toast)
4. 此后，都可以通过this.$toast.show(message, duration)来显示message
  注意，能使用`$toast`是因为在Vue的原型上添加了`$toast`，其内部添加了一个show方法

```js
//Toast.vue
show(message, duration) {
  this.isShow = true;
  this.message = message;
  clearTimeout(this.timer);
  this.timer = setTimeout(() => {
    this.isShow = false;
    this.message = "";
  }, duration);
},
  
.toast {
  position: fixed;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.65);
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
}
```

插件的封装

```js
// 这是关于toast插件的封装，index.js
import Toast from "./Toast"
const obj = {}
export default obj
// 在main.js安装插件时，会自动调用该插件的install函数，并自动传入Vue对象
obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  // 2.根据组件构造器，可以创建出一个组件对象
  const toast = new toastConstructor();
  // 3.将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'));
  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el);
  // 在Vue原型中定义$toast，方便直接采用$toast使用
  Vue.prototype.$toast = toast;
}
```

## 4 购物车页面的开发

开发流程：在详情页点击加入购物车，将商品的数据（id，图片，名称，数量，价格等）传递到vuex，state中购物车数据应该是数组，放很多json对象，

### 4.1 使用Vuex管理购物车的商品

1. 安装、配置Vuex

2. 定义state，存放购物车状态相关的信息

   ```js
   const state = {
     cartList: []
   }
   ```

3. 定义actions,actions中进行异步方法的处理，或者进行复杂的逻辑判断

   ```js
   addCart (context, payload) {
       return new Promise((resolve, reject) => {
         let flag = false
         for (let i = 0; i < context.state.cartList.length; i++) {
           if (context.state.cartList[i].iid === payload.iid) {
             flag = true
             context.commit('addCounter', i)
             resolve('已存在商品，数量+1')
             break
           }
         }
         if (!flag) {
           context.commit('addGoods', payload)
           resolve('添加至购物车成功！')
         }
       })
     },
   ```

4. 定义mutations，将商品添加到state，cartList，相当于我们vue里面的methods，定义各种方法

   ```js
    // 存在的商品，已有数量+1
   addCounter (state, payload) {
       state.cartList[payload].count++
     },
   
     // 不存在的商品，商品+1
     addGoods (state, payload) {
       payload.count = 1
       payload.checked = true
       state.cartList.push(payload)
     },
   ```

5. 定义getters，其实就是相当于vue里面的计算属性，将 state中的数据进行计算处理

   ```js
   cartLength (state) {
       return state.cartList.length
     },
     // 购物车商品列表
     cartList (state) {
       return state.cartList
     },
   ```

### 4.2 删除商品

```js
  //  actions.js
  deleteCart (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('deleteCart', payload)
      resolve('已移除该商品！')
    })
  },
    //  mutations.js
  deleteCart (state, payload) {
    var arrRemoveJson = function (arr, attr, value) {
      if (!arr || arr.length === 0) {
        return ''
      }
      const newArr = arr.filter(function (item) {
        return item[attr] !== value
      })
      return newArr
    }
    state.cartList = arrRemoveJson(state.cartList, 'iid', payload)
  },
```

### 4.3 全选按钮

```js
  //  actions.js
allCheckClick (context) {
    context.commit('changeAllChecked')
 }
  //  mutations.js
    changeAllChecked (state) {
    if (state.cartList.length !== 0) {
      if (state.cartList.find(item => !item.checked)) {
        for (const item of state.cartList) { item.checked = true }
      } else {
        for (const item of state.cartList) { item.checked = false }
      }
    }
  }
```

### 4.4 计算总价格

- 计算选中的数量

```js
// getters.js
  cartChecked (state) {
    return state.cartList.filter(item => item.checked)
  },
```

- 计算选中的价格

```js
// getters.js
  // 已选的购物车商品总额
  cartTotal (state) {
    // console.log(cartChecked)
    return state.cartList.filter((item) => {
      return item.checked
    }).reduce((preValue, item) => {
      return preValue + item.newPrice * item.count
    }, 0)
  }
```

可以引入vuex 的 mapGetters 做解构引入

```js
import { mapGetters } from "vuex"

computed: {
    //   1.普通写法
    // cartLength () {
    // //   return this.$store.state.cartList.length  将方法封装到getters之前的写法
    //   return this.$store.getters.cartLength   封装到getters之后的写法
    // }
    // 2.利用mapGetters解构 ， 还可用 mapState , mapActions
    ...mapGetters(['cartLength'])
  }
```

## 5 分类页面的开发

### 5.1 导航栏的开发

### 5.2 侧边栏的开发

### 5.3 商品分类的开发

## 6 项目的优化打包和发布

### 6.1 解决移动端点击问题

解决移动端点击300ms延迟问题，引入 FastClick，插件使用的步骤：下载-引入-配置

```js
import FastClick from 'fastclick'
// 解决移动端300ms延迟
FastClick.attach(document.body)
```

### 6.2 图片懒加载

图片需要显示在屏幕时在加载，使用 vue-lazyload，使用图片的懒加载，并传入 options，这些选项中可以定义图片加载失败要显示的情况，或加载中显示的情况

```js
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png'),
  error: require('assets/img/common/placeholder.png')
})

//Home.vue
 <img v-lazy="showImage" alt="" @load="imageLoad">
```

### 6.3 配置路由懒加载

1. 安装 babel 插件

    ```shell
      npm install --save-dev @babel/plugin-syntax-dynamic-import
    ```

2. 修改项目根目录下的 babel.config.js 配置文件，新增 plugins 节点：

    ```js
    module.exports = {
      presets: ['@vue/cli-plugin-babel/preset'],
      // 实现路由组件按需导入的 babel 插件
      plugins: ['@babel/plugin-syntax-dynamic-import']
    }
    ```

3. 在 /src/router/index.js 模块中，基于 const Foo = () => import('./Foo.vue') 语法，改造每个路由组件的导入方式。例如：

```js
// 导入 Login 组件
// import Login from '@/views/Login/Login.vue'
const Login = () => import('@/views/Login/Login.vue')
// 导入 Main 组件
// import Main from '@/views/Main/Main.vue'
const Main = () => import('@/views/Main/Main.vue')
```

### 6.3 px2vm

webpack 配置，移动端适配，使用 postcss-px-to-viewport 插件，将css中 px 编译为 vm。

```bash
    npm i postcss-px-to-viewport --save-dev
```

安装 postcss-px-to-viewport 插件，该只是开发时依赖，只在打包过程中帮助转化

修改 postcss.config.js 文件

```js
module.exports = {
  plugins: {
    autoprefixer: {}, //  这条不写的话好像不会生效
    'postcss-px-to-viewport': {
      // options
      unitToConvert: 'px',  //  (String) 需要转换的单位，默认为"px"
      viewportWidth: 320, //  (Number) 设计稿的视口宽度
      unitPrecision: 5, //  (Number) 单位转换后保留的精度
      propList: ['*'],  //  (Array) 能转化为vw的属性列表
      viewportUnit: 'vw', //  (String) 希望使用的视口单位
      fontViewportUnit: 'vw', //  (String) 字体使用的视口单位
      selectorBlackList: [],  //  (Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1, //  (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false,  //  (Boolean) 媒体查询里的单位是否需要转换单位
      replace: true,  //  (Boolean) 是否直接更换属性值，而不添加备用属性
      exclude: undefined, //  (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      include: undefined, //  (Array or Regexp) 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
      landscape: false, //  (Boolean) 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw',  //  (String) 横屏时使用的单位
      landscapeWidth: 568 //  (Number) 横屏时使用的视口宽度
    }
  }
}
```

### 6.4 移除console的信息

在项目打包后，借助 babel-plugin-transform-remove-console 进行去除 console.log 打印信息

1. 安装@babel/plugin-syntax-dynamic-import包

    ```bash
        npm install --save-dev @babel/plugin-syntax-dynamic-import
    ```

2. 修改项目根目录下的 babel.config.js 配置文件，新增 plugins 节点：

    ```js
    module.exports = {
      presets: ['@vue/cli-plugin-babel/preset'],
      // 实现路由组件按需导入的 babel 插件
      plugins: ['@babel/plugin-syntax-dynamic-import']
    }
    ```

3. 在 /src/router/index.js 模块中，基于 const Foo = () => import('./Foo.vue') 语法，改造每个路由组件的导入方式

    ```js
    // 导入 Login 组件
    // import Login from '@/views/Login/Login.vue'
    const Login = () => import('@/views/Login/Login.vue')

    // 导入 Main 组件
    // import Main from '@/views/Main/Main.vue'
    const Main = () => import('@/views/Main/Main.vue')
    ```
  