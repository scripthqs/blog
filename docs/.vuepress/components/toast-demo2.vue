<template>
  <div>
    <h-button @click="showToast('top')">上方弹出</h-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

export default {

  methods: {
    showToast (position) {
      this.$toast('<strong>8s后自动关闭</strong>', {
        enableHtml: true,
        position,
        closeButton: {
          text: '马上关闭',
          callback () {
            console.log('马上关闭')
          }
        },
        autoClose: 8,
      })
    }
  },
  data () {
    return {
      content: `
        methods: {
            showToast(position) {
                this.$toast('<strong>8s后自动关闭</strong>', {
                    enableHtml: true,
                    position,
                    closeButton: {
                        text: '马上关闭',
                        callback() {
                            console.log('马上关闭');
                        }
                    },
                    autoClose: 8,
                })
            }
        },
        <h-button @click="showToast('top')">上方弹出</h-button>
      `.replace(/\s{2,}/, '').trim()
    }
  },
}
</script>
