<template>
  <div>
    <h-button disabled>按钮</h-button>
    <h-button :loading="loading1" @click="loading1=!loading1" icon="set">按钮</h-button>
    <h-button :loading="loading2" @click="loading2=!loading2" icon="set" icon-position="right">按钮</h-button>
    <h-button-group>
      <h-button icon="left">上一页</h-button>
      <h-button>更多</h-button>
      <h-button icon="right" icon-position="right">下一页</h-button>
    </h-button-group>

    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

export default {
  data () {
    return {
      loading1: true,
      loading2: false,
      content: `
        data(){loading1: true,loading2: false}
        <h-button disabled :loading="loading1" @click="loading1=!loading1">按钮</h-button>
        <h-button :loading="loading2" @click="loading2=!loading2" icon="set">按钮</h-button>
        <h-button :loading="loading3" @click="loading3=!loading3" icon="set" icon-position="right">按钮</h-button>
        <h-button-group>
            <h-button icon="left">上一页</h-button>
            <h-button>更多</h-button>
            <h-button icon="right" icon-position="right">下一页</h-button>
        </h-button-group>
      `.replace(/\s{2,}/, '').trim()
    }
  },
}
</script>
<style>
</style>