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
    showToast(position) {
      this.$toast("点击确定关闭", {
        position,
        closeButton: {
          text: "确定",
        },
      });
    },
  },
  data() {
    return {
      content: `
        methods: {
            showToast(position) {
                this.$toast('点击确定关闭', {
                    position,
                    closeButton: {
                        text: '确定',
                    },
                })
            }
        },
        <h-button @click="showToast('top')">上方弹出</h-button>
      `
        .replace(/\s{2,}/, "")
        .trim(),
    };
  },
};
</script>
