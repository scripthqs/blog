import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from '@vuepress/bundler-vite'
import head from "./config/head";
import navbar from "./config/nav";
import sidebar from "./config/sidebar";
import plugins from "./config/plugins";
export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          '/api': {
            // https://api.frdic.com/api/open/v1/studylist/words/{id}
            target: 'https://api.frdic.com/api/open/v1',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
          }
        }
      }
    },
    vuePluginOptions: {},
  }),
  lang: "zh-CN",
  title: "Script",
  dest: "./dist",
  description: "前端开发学习笔记",
  head,
  theme: defaultTheme({
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
    logo: "/img/logo.png",
    navbar,
    sidebar,
    sidebarDepth: 1,
    repo: "scripthqs/blog",
    docsBranch: "master",
    docsDir: "docs",
    editLinkText: "编辑此页",
    lastUpdatedText: "更新时间",
    contributors: false,
  }),
  plugins,
});
