import { defineClientConfig } from '@vuepress/client'
import axios from 'axios'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.config.globalProperties.$http = axios
  },
  setup() { },
  layouts: {},
  rootComponents: [],

})