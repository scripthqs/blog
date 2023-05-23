export default [
  {
    text: "首页",
    link: "/guide/",
  },
  {
    text: "前端基础",
    children: [
      { text: "HTML", link: "/web/html/01_web" },
      { text: "CSS", link: "/web/css/01_css" },
      { text: "JavaScript", link: "/web/js/JavaScript/01_JavaScript" },
      { text: "TypeScript", link: "/web/ts/01_TypeScript" },
      { text: "数据结构和算法", link: "/web/algorithm/docs/00_intro" },
    ],
  },
  {
    text: "服务器知识",
    children: [
      { text: "AJAX", link: "/net/ajax/01_ssr" },
      { text: "Axios", link: "/net/axios/01_axios" },
      { text: "Node", link: "/net/node/01_node" },
      { text: "Express", link: "/net/express/01_express" },
      { text: "数据库", link: "/net/db/01_database" },
      { text: "SSR", link: "/net/ssr/01_ssr" },
    ],
  },
  {
    text: "框架学习",
    children: [
      { text: "Vue", link: "/frame/vue/vue3/01_vue3" },
      { text: "可视化", link: "/frame/echarts/01_visualization" },
      { text: "小程序", link: "/frame/mini_program/01_mini" },
      { text: "Uni-App", link: "/frame/uniapp/01_uni" },
      { text: "React", link: "/frame/react/01_react" },
    ],
  },
  {
    text: "实用工具",
    children: [
      { text: "VSCode", link: "/tools/vscode/01vsc" },
      { text: "Git", link: "/tools/git/01_git" },
      { text: "Webpack", link: "/tools/webpack/01_webpack" },
      { text: "Vite", link: "/tools/vite/01_vite" },
    ],
  },
  {
    text: "开源项目",
    children: [
      { text: "Vue项目搭建", link: "/project/vue/vue3_ts/vue3_ts_erp" },
      { text: "React项目搭建", link: "/project/react/react_test/01_react" },
      { text: "自定义组件库", link: "/project/ui/install/01_install" },
      { text: "自定义工具函数库", link: "/project/utils/install/01_install" },
      { text: "H5移动端", link: "/project/h5/vue2_h5/vue2_h5" },
      { text: "Work", link: "/project/work/css" },
    ],
  },
  {
    text: "官方文档",
    children: [
      { text: "MDN", link: "https://developer.mozilla.org/zh-CN/" },
      { text: "Vue", link: "https://v3.cn.vuejs.org/" },
      { text: "React", link: "https://zh-hans.reactjs.org/" },
      {
        text: "微信小程序",
        link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
      },
      { text: "Uni-App", link: "https://uniapp.dcloud.net.cn/" },
      { text: "Webpack", link: "https://webpack.docschina.org/concepts/" },
      { text: "Vant", link: "https://youzan.github.io/vant/#/zh-CN/" },
      { text: "Element-UI", link: "https://element.eleme.cn/#/zh-CN" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/zh/" },
      { text: "网道", link: "https://wangdoc.com/" },
    ],
  },
  {
    text: "更多链接",
    children: [
      {
        text: "在线编辑",
        children: [
          { text: "图片压缩", link: "https://tinypng.com/" },
          { text: "前端工具箱", link: "https://tool.lu/" },
          { text: "VeryToolz在线工具", link: "https://verytoolz.com/" },
        ],
      },
      {
        text: "在线服务",
        children: [
          { text: "阿里云", link: "https://www.aliyun.com/" },
          { text: "腾讯云", link: "https://cloud.tencent.com/" },
        ],
      },
      {
        text: "博客指南",
        children: [
          { text: "掘金", link: "https://juejin.im/" },
          { text: "CSDN", link: "https://blog.csdn.net/" },
        ],
      },
    ],
  },
];
