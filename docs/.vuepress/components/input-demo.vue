<template>
  <div>
    <h-input value="张三"></h-input>
    <h-input value="李四" :disabled="true"></h-input>
    <h-input value="王五" readonly></h-input>
    <h-input value="王" error="姓名不能少于两个字"></h-input>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    <br>
    <h3>双向绑定</h3>
    <hr>
    <h4>预览</h4>
    <h-input value="王" v-model="message"></h-input>
    <p>message: {{message}}</p>
    <h4>代码</h4>
    <pre><code>{{content1}}</code></pre>
  </div>
</template>
<script>

export default {
  data () {
    return {
      message: 'hello',
      content: `
        <h-input value="张三"></h-input>
        <h-input value="李四" :disabled="true"></h-input>
        <h-input value="王五" readonly></h-input>
        <h-input value="王" error="姓名不能少于两个字"></h-input>
      `.replace(/\t+| +/g, '').trim(),
      content1: `
        data(){message: 'hello'}
        <p>
            <h-input value="王" v-model="message"></h-input>{{message}}
        </p>
                `.replace(/\s{2,}/, '').trim()
    }
  },
}
</script>