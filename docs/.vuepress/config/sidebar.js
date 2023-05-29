import { getChildren } from "../auto-sidebar/vuepress-auto-sidebar";

export default {
  // "/guide/": require("docs/guide/"),

  //前端基础
  "/web/html/": getChildren("docs/web/html/"),
  "/web/css/": getChildren("docs/web/css/"),
  "/web/js/": [
    {
      text: "JavaScript 基础",
      collapsible: true,
      children: getChildren("docs/web/js/JavaScript"),
    },
    {
      text: "JavaScript 高级",
      collapsible: true,
      children: getChildren("docs/web/js/JsAdvanced/"),
    },
    {
      text: "ECMAScript 6",
      collapsible: true,
      children: getChildren("docs/web/js/ECMAScript6/"),
    },
  ],
  "/web/ts/": getChildren("docs/web/ts/"),
  "/web/algorithm/": [
    {
      text: "算法基础",
      collapsible: true,
      children: getChildren("docs/web/algorithm/docs/"),
    },
    {
      text: "Word",
      collapsible: true,
      children: getChildren("docs/web/algorithm/word/"),
    },
  ],
  //服务器知识
  "/net/ajax/": getChildren("docs/net/ajax/"),
  "/net/axios/": getChildren("docs/net/axios/"),
  "/net/node/": getChildren("docs/net/node/"),
  "/net/express/": getChildren("docs/net/express/"),
  "/net/koa/": getChildren("docs/net/koa/"),
  "/net/db/": getChildren("docs/net/db/"),
  "/net/ssr/": getChildren("docs/net/ssr/"),

  //框架学习
  "/frame/vue/": [
    {
      text: "Vue2",
      collapsible: true,
      children: getChildren("docs/frame/vue/vue2"),
    },
    {
      text: "Vue Router",
      collapsible: true,
      children: getChildren("docs/frame/vue/vuer"),
    },
    {
      text: "VueX",
      collapsible: true,
      children: getChildren("docs/frame/vue/vuex"),
    },
    {
      text: "Vue3",
      collapsible: true,
      children: getChildren("docs/frame/vue/vue3"),
    },
  ],
  "/frame/echarts/": getChildren("docs/frame/echarts/"),
  "/frame/mini_program/": getChildren("docs/frame/mini_program/"),
  "/frame/uniapp/": getChildren("docs/frame/uniapp/"),
  "/frame/react/": getChildren("docs/frame/react/"),

  //实用工具
  "/tools/vscode/": getChildren("docs/tools/vscode/"),
  "/tools/git/": getChildren("docs/tools/git/"),
  "/tools/webpack/": getChildren("docs/tools/webpack/"),
  "/tools/vite/": getChildren("docs/tools/vite/"),

  // 开源项目
  "/project/h5/": getChildren("docs/project/h5/vue2_h5/"),
  "/project/vue/": [
    {
      text: "Vue3_TS_ERP",
      collapsible: true,
      children: getChildren("docs/project/vue/vue3_ts/"),
    },
    {
      text: "Vue2_CMS",
      collapsible: true,
      children: getChildren("docs/project/vue/vue2/"),
    },
  ],
  "/project/react/": getChildren("docs/project/react/react_test/"),
  "/project/ui/": [
    {
      text: "快速上手",
      collapsible: true,
      children: getChildren("docs/project/ui/install/"),
    },
    {
      text: "UI组件",
      collapsible: true,
      children: getChildren("docs/project/ui/docs/"),
    },
  ],
  "/project/utils/": [
    {
      text: "打包自定义工具库",
      collapsible: true,
      children: getChildren("docs/project/utils/install/"),
    },
    {
      text: "各种自定义",
      collapsible: true,
      children: getChildren("docs/project/utils/docs/"),
    },
  ],

  "/project/work/": getChildren("docs/project/work/"),
};
