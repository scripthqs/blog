const navConfig = require('./config/nav')
const sidebarConfig = require('./config/sidebar')
const pluginsConfig = require('./config/plugins')
module.exports = {
  // base: "/docs/",
  title: 'Script',
  // description: '记录个人的学习笔记和各种工具',
  // dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'stylesheet', href: '/style/index.css' }],
    ['link', { rel: 'stylesheet', href: '/style/valine.css' }],
    ['link', { rel: 'stylesheet', href: '/style/code.css' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true
  },
  // theme: 'default-prefers-color-scheme',
  themeConfig: {
    // overrideTheme: { light: [6, 22], dark: [22, 6] },
    // overrideTheme: 'dark',
    logo: '/logo.png',
    nav: navConfig,
    sidebar: sidebarConfig,
    collapsable: true,
    sidebarDepth: 2,
    lastUpdated: '更新时间',
    searchMaxSuggestoins: 10
  },
  plugins: pluginsConfig
}