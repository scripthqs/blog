const { getChildren } = require("./auto-sidebar/vuepress-auto-sidebar");
console.log(getChildren("./docs/web/css/"), "----------------");
let sidebar = {};
module.exports = {
  // '/guide/': require('../guide/sidebar'),
  //前端基础
  "/web/html/": [
    {
      title: "基础知识",
      collapsable: true,
      children: getChildren("./docs/web/html/docs"),
    },
  ],
  "/web/css/": [
    {
      title: "css",
      collapsable: true,
      children: getChildren("./docs/web/css/docs/"),
    },
  ],
  "/web/js/": [
    {
      title: "JavaScript 基础",
      collapsable: true,
      children: getChildren("./docs/web/js/docs/"),
    },
    {
      title: "JavaScript 高级",
      collapsable: true,
      children: getChildren("./docs/web/js/JavaScript/"),
    },
    {
      title: "ECMAScript 6",
      collapsable: true,
      children: getChildren("docs/web/js/ECMAScript6/"),
    },
  ],

  // "/web/html/": require("../web/css/sidebar"),
  // "/web/css/": require("../web/css/sidebar"),
  // "/web/js/": require("../web/js/sidebar"),
  // "/web/ts/": require("../web/ts/sidebar"),
  // "/web/algorithm/": require("../web/algorithm/sidebar"),
  // //服务器知识
  // "/net/http/": require("../net/http/sidebar"),
  // "/net/ajax/": require("../net/ajax/sidebar"),
  // "/net/axios/": require("../net/axios/sidebar"),
  // "/net/node/": require("../net/node/sidebar"),
  // "/net/express/": require("../net/express/sidebar"),
  // "/net/db/": require("../net/db/sidebar"),
  // //开源项目
  // "/project/vuemall/": require("../project/vuemall/sidebar"),
  // "/project/vuecms/": require("../project/vuecms/sidebar"),
  // "/project/hqsui/": require("../project/hqsui/sidebar"),
  // "/project/utils/": require("../project/utils/sidebar"),
  // "/project/work/": require("../project/work/sidebar"),
  // //实用工具
  // "/tools/vscode/": require("../tools/vscode/sidebar"),
  // "/tools/git/": require("../tools/git/sidebar"),
  // "/tools/webpack/": require("../tools/webpack/sidebar"),
  // //框架学习
  // "/frame/vue/": require("../frame/vue/sidebar"),
  // "/frame/echarts/": require("../frame/echarts/sidebar"),
  // "/frame/mini_program/": require("../frame/mini_program/sidebar"),
  // "/frame/uniapp/": require("../frame/uniapp/sidebar"),
  // "/": [""], //不能放在数组第一个，否则会导致右侧栏无法使用
};
