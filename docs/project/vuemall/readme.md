# Vue购物街

一款基于VueCLI、Vue-router、Vuex、VueLazyLoad、BetterScroll(滚动插件)、Axios等构建的web移动端商城项目。

<a href="http://scripthqs.gitee.io/vuemall/#/home">项目预览</a><OutboundLink/>

<a href="http://scripthqs.gitee.io/vantmall">使用vant-ui组件库重构的版本</a><OutboundLink/>

<a href="https://github.com/Scripthqs/vuemall">源码链接</a><OutboundLink/>

## 1 准备

### 1.1 划分目录结构

```bash
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

   ```bash
   npm install --save normalize.css 
   ```

   main.js引入

   ```bash
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

### 5.1.navbar导航栏封装

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

### 5.2.网络的请求的封装

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

2. 将**不同页面**的网络请求分类，分别封装对于的请求文件

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

### 5.3 swiper轮播图封装

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

### 5.4 推荐信息封装

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

### 5.5 Tab 标签页封装

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

### 5.6 better-scroll滚动封装

1 安装better-scroll插件

```bash
npm install @better-scroll/core --save
npm install @better-scroll/pull-up --save
npm install @better-scroll/observe-image --save
```

2 当content 的高度>父容器wrapper的高度，才能滚动的，当有图片异步请求时，很容易出问题。

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

## 3
