import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("StudyDaily", defineAsyncComponent(() => import("C:/Users/huangqiansheng/Desktop/project/blog/docs/.vuepress/components/StudyDaily.vue")))
  },
}
