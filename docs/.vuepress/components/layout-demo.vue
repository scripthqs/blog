<template>
  <div>
    <h-layout style="color: white; margin-bottom:50px;">
      <h-header style="height: 50px; background:lightskyblue;">
        header
      </h-header>
      <h-content style="height: 100px; background:deepskyblue;">
        content
      </h-content>
      <h-footer style="height: 50px; background:lightskyblue;">
        footer
      </h-footer>
    </h-layout>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    <br>
    <h3>内部分栏布局</h3>
    <hr>
    <h4>预览</h4>
    <h-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <h-header style="height: 50px; background:lightskyblue;">
        header
      </h-header>
      <h-layout>
        <h-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </h-sider>
        <h-content style="height: 100px; background:deepskyblue;">
          content
        </h-content>
      </h-layout>
      <h-footer style="height: 50px; background:lightskyblue;">
        footer
      </h-footer>
    </h-layout>
    <h4>代码</h4>
    <pre><code>{{content1}}</code></pre>
    <br>
    <h3>左右分栏布局</h3>
    <hr>
    <h4>预览</h4>
    <h-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <h-sider style=" background:#ddd; width:200px; color: black;">
        sider
      </h-sider>
      <h-layout>
        <h-header style="height: 50px; background:lightskyblue;">
          header
        </h-header>
        <h-content style="height: 100px; background:deepskyblue;">
          content
        </h-content>
        <h-footer style="height: 50px; background:lightskyblue;">
          footer
        </h-footer>
      </h-layout>
    </h-layout>
    <h4>代码</h4>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<script>

export default {
  data () {
    return {
      content: `
         <h-layout style="color: white; margin-bottom:50px;">
            <h-header style="height: 50px; background:lightskyblue;">
                header
            </h-header>
            <h-content style="height: 100px; background:deepskyblue;">
                content
            </h-content>
            <h-footer style="height: 50px; background:lightskyblue;">
                footer
            </h-footer>
        </h-layout>
      `.replace(/\s{2,}/, '').trim(),
      content1: `
        <h-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <h-header style="height: 50px; background:lightskyblue;">
                header
            </h-header>
            <h-layout>
                <h-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                    sider
                </h-sider>
                <h-content style="height: 100px; background:deepskyblue;">
                    content
                </h-content>
            </h-layout>
            <h-footer style="height: 50px; background:lightskyblue;">
                footer
            </h-footer>
        </h-layout>
                `.replace(/\s{2,}/, '').trim(),
      content2: `
        <h-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <h-sider style=" background:#ddd; width:200px; color: black;">
                sider
            </h-sider>
            <h-layout>
                <h-header style="height: 50px; background:lightskyblue;">
                    header
                </h-header>
                <h-content style="height: 100px; background:deepskyblue;">
                    content
                </h-content>
                <h-footer style="height: 50px; background:lightskyblue;">
                    footer
                </h-footer>
            </h-layout>
        </h-layout>
                `
    }
  },
}
</script>
