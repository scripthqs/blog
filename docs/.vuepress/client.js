import { defineClientConfig } from "@vuepress/client";
import { defineGiscusConfig } from "vuepress-plugin-comment2/client";
import Layout from "./layouts/Layout.vue";

defineGiscusConfig({
  repo: "scripthqs/blog",
  repoId: "MDEwOlJlcG9zaXRvcnk0MDM3Mjg0Mzk=",
  category: "Announcements",
  categoryId: "DIC_kwDOGBBoN84CWrMn",
});

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  layouts: {
    Layout,
  },
  rootComponents: [],
});
