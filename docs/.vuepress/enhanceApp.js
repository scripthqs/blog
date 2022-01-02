export default ({ Vue }) => {
  Vue.mixin({
    mounted () {
      import('hqs-ui').then(function (m) {
        Vue.use(m.default)
      })
    },
  })
}