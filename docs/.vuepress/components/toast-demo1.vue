<template>
  <div>
    <f-button @click="showToast('top')">上方弹出</f-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
import Vue from "vue"
Vue.use(plugin)

export default {
  components: {
    'f-button': Button,
  },
  methods: {
    showToast (position) {
      this.$toast('hello world', {
        position,
        closeButton: {
          text: 'ok',
        },
      })
    }
  },
  data () {
    return {
      content: `
        methods: {
            showToast(position) {
                this.$toast('hello world', {
                    position,
                    closeButton: {
                        text: 'ok',
                    },
                })
            }
        },
        <f-button @click="showToast('top')">上方弹出</f-button>
      `.replace(/\s{2,}/, '').trim()
    }
  },
}
</script>
