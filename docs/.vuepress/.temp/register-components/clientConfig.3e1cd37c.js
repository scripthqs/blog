import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("button-demo", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/button-demo.vue"))),
      app.component("collapse-demo", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/collapse-demo.vue"))),
      app.component("grid-demo", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/grid-demo.vue"))),
      app.component("input-demo", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/input-demo.vue"))),
      app.component("layout-demo", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/layout-demo.vue"))),
      app.component("popover-demo", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/popover-demo.vue"))),
      app.component("StudyDaily", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/StudyDaily.vue"))),
      app.component("tabs-demo", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/tabs-demo.vue"))),
      app.component("toast-demo", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/toast-demo.vue"))),
      app.component("toast-demo1", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/toast-demo1.vue"))),
      app.component("toast-demo2", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/toast-demo2.vue")))
  },
}
