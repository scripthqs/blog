const { getChildren } = require("../auto-sidebar/vuepress-auto-sidebar");

module.exports = {
  // "/guide/": require("docs/guide/"),

  //前端基础
  "/web/html/": getChildren("docs/web/html/"),
  "/web/css/": getChildren("docs/web/css/"),
  "/web/js/": [
    {
      title: "JavaScript 基础",
      collapsable: true,
      children: getChildren("docs/web/js/JavaScript/"),
    },
    {
      title: "JavaScript 高级",
      collapsable: true,
      children: getChildren("docs/web/js/JsAdvanced/"),
    },
    {
      title: "ECMAScript 6",
      collapsable: true,
      children: getChildren("docs/web/js/ECMAScript6/"),
    },
  ],
  "/web/ts/": getChildren("docs/web/ts/"),
  "/web/algorithm/": [
    {
      title: "算法基础",
      collapsable: true,
      children: getChildren("docs/web/algorithm/docs/"),
    },
    {
      title: "Word",
      collapsable: true,
      children: getChildren("docs/web/algorithm/word/"),
    },
  ],
  //服务器知识
  "/net/ajax/": getChildren("docs/net/ajax/"),
  "/net/axios/": getChildren("docs/net/axios/"),
  "/net/node/": getChildren("docs/net/node/"),
  "/net/express/": getChildren("docs/net/express/"),
  "/net/db/": getChildren("docs/net/db/"),

  //框架学习
  "/frame/vue/": [
    {
      title: "Vue2",
      collapsable: true,
      children: getChildren("docs/frame/vue/vue2"),
    },
    {
      title: "Vue Router",
      collapsable: true,
      children: getChildren("docs/frame/vue/vuer"),
    },
    {
      title: "VueX",
      collapsable: true,
      children: getChildren("docs/frame/vue/vuex"),
    },
    {
      title: "Vue3",
      collapsable: true,
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

  // 开源项目
  "/project/vuemall/": getChildren("docs/project/vuemall/"),
  "/project/vuecms/": [
    {
      title: "Vue3_Ts_ERP",
      collapsable: true,
      children: getChildren("docs/project/vuecms/ts_vue3_erp/"),
    },
    {
      title: "Vue2_CMS",
      collapsable: true,
      children: getChildren("docs/project/vuecms/vue2_cms/"),
    },
  ],
  "/project/hqsui/": [
    {
      title: "快速上手",
      collapsable: true,
      children: getChildren("docs/project/hqsui/install/"),
    },
    {
      title: "UI组件",
      collapsable: true,
      children: getChildren("docs/project/hqsui/docs/"),
    },
  ],
  "/project/utils/": [
    {
      title: "打包自定义工具库",
      collapsable: true,
      children: getChildren("docs/project/utils/chapter1/"),
    },
    {
      title: "各种自定义",
      collapsable: true,
      children: getChildren("docs/project/utils/chapter2/"),
    },
  ],
  "/project/work/": getChildren("docs/project/work/"),
};
