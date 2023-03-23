export default ({ Vue, options, router, siteData }) => {
  Vue.mixin({
    mounted() {
      import("hqs-ui").then(function(m) {
        Vue.use(m.default);
      });
    },
  });
  Vue.prototype.$global = new Vue({
    data() {
      return {
        CURRENT_PROVERB: "",
      };
    },
  });
};
