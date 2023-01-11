const navConfig = require("./config/nav");
const sidebarConfig = require("./config/sidebar");
const pluginsConfig = require("./config/plugins");
module.exports = {
  locales: {
    "/": {
      lang: "zh", // 将会被设置为 <html> 的 lang 属性
    },
  },
  // base: "/docs/",
  title: "Script",
  // description: '记录个人的学习笔记和各种工具',
  dest: "./dist",
  head: [
    ["link", { rel: "icon", href: "/img/icon.png" }],
    ["link", { rel: "stylesheet", href: "/style/index.css" }],
    ["link", { rel: "stylesheet", href: "/style/valine.css" }],
    ["link", { rel: "stylesheet", href: "/style/code.css" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
  ],
  markdown: {
    lineNumbers: true,
  },
  // theme: 'default-prefers-color-scheme',
  themeConfig: {
    // overrideTheme: { light: [6, 22], dark: [22, 6] },
    // overrideTheme: 'dark',
    logo: "/img/logo.png",
    nav: navConfig,
    sidebar: sidebarConfig,
    // sidebar: "auto", //自动生成侧边栏
    displayAllHeaders: true, // 默认值：false
    collapsable: true,
    sidebarDepth: 2,
    lastUpdated: "更新时间",
    searchMaxSuggestions: 10,
    docsRepo: "scripthqs/scripthqs.github.io",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
  },
  plugins: pluginsConfig,
};
