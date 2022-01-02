<template>
  <div>
    <h-collapse :selected.sync="selectedTab">
      <h-collapse-item title="图片1" name="1">
        <img height="200" src="./1.png">
      </h-collapse-item>
      <h-collapse-item title="图片2" name="2">
        <img height="200px" src="./2.png">
      </h-collapse-item>
      <h-collapse-item title="图片3" name="3">
        <img height="200px" src="./3.png">
      </h-collapse-item>
    </h-collapse>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedTab: ['2'],
      content: `
            data() {selectedTab: ['2']
            // selectedTab: ['1','2']
            }
        <h-collapse :selected.sync="selectedTab">
            <h-collapse-item title="图片1" name="1">
                <img height="445"
                     src="./1.png">
            </h-collapse-item>
            <h-collapse-item title="图片2" name="2">
                <img height="300px"
                     src="./2.png">
            </h-collapse-item>
            <h-collapse-item title="图片3" name="3">
                <img height="440"
                     src="./3.png">
            </h-collapse-item>
        </h-collapse>
      `.replace(/\s{2,}/, '').trim()
    }
  },
}
</script>
