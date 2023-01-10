const { getChildren } = require("./auto-sidebar/vuepress-auto-sidebar");
let sidebar = {};
/**
 * */
sidebar = {
  //左侧列表
  "/guide/": [
    {
      title: "guide",
      collapsable: false, //来让一个组永远都是展开状态
      sidebarDepth: 2,
      children: getChildren("./docs", "guide"),
    },
  ],
  "/": [""], //不能放在数组第一个，否则会导致右侧栏无法使用
};
module.exports = sidebar;
