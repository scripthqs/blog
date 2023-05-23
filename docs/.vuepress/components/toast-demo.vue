<template>
  <div>
    <h-button @click="showToast('top')">上方弹出</h-button>
    <h-button @click="showToast('middle')">中间弹出</h-button>
    <h-button @click="showToast('bottom')">下方弹出</h-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
export default {
  methods: {
    showToast(position) {
      this.$toast("hello Toast", {
        position,
      });
    },
  },
  data() {
    return {
      content: `
        methods: {
            showToast(position) {
                this.$toast('hello Toast', {
                    position,
                })
            }
        },
        <h-button @click="showToast('top')">上方弹出</h-button>
        <h-button @click="showToast('middle')">中间弹出</h-button>
        <h-button @click="showToast('bottom')">下方弹出</h-button>
      `
        .replace(/\s{2,}/, "")
        .trim(),
    };
  },
};
</script>
