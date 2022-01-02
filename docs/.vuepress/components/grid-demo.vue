<template>
  <div>
    <h3>24网格</h3>
    <hr>
    <h-row align="center">
      <h-col span="8">
        <div>8</div>
      </h-col>
      <h-col span="8">
        <div>8</div>
      </h-col>
      <h-col span="8">
        <div>8</div>
      </h-col>
    </h-row>

    <h-row align="center">
      <h-col span="6">
        <div>6</div>
      </h-col>
      <h-col span="6">
        <div>6</div>
      </h-col>
      <h-col span="6">
        <div>6</div>
      </h-col>
      <h-col span="6">
        <div>6</div>
      </h-col>
    </h-row>

    <h-row align="center">
      <h-col span="4">
        <div>4</div>
      </h-col>
      <h-col span="4">
        <div>4</div>
      </h-col>
      <h-col span="4">
        <div>4</div>
      </h-col>
      <h-col span="4">
        <div>4</div>
      </h-col>
      <h-col span="4">
        <div>4</div>
      </h-col>
      <h-col span="4">
        <div>4</div>
      </h-col>
    </h-row>

    <h-row align="center">
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
    </h-row>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    <br>
    <h3>设置 gutter</h3>
    <hr>
    <h4>预览</h4>
    <h-row gutter="10" align="center">
      <h-col span="8">
        <div>8</div>
      </h-col>
      <h-col span="8">
        <div>8</div>
      </h-col>
      <h-col span="8">
        <div>8</div>
      </h-col>
    </h-row>

    <h-row gutter="10" align="center">
      <h-col span="6">
        <div>6</div>
      </h-col>
      <h-col span="6">
        <div>6</div>
      </h-col>
      <h-col span="6">
        <div>6</div>
      </h-col>
      <h-col span="6">
        <div>6</div>
      </h-col>
    </h-row>
    <h4>代码</h4>
    <pre><code>{{content1}}</code></pre>
    <br>
    <h3>设置 空隙</h3>
    <hr>
    <h4>预览</h4>
    <h-row gutter="10" align="center">
      <h-col span="8">
        <div>8</div>
      </h-col>
      <h-col span="8" offset="8">
        <div>8</div>
      </h-col>
    </h-row>
    <h-row gutter="10" align="center">
      <h-col span="6" offset="6">
        <div>6</div>
      </h-col>
      <h-col span="6" offset="6">
        <div>6</div>
      </h-col>
    </h-row>
    <h-row gutter="10" align="center">
      <h-col span="4">
        <div>4</div>
      </h-col>
      <h-col span="4" offset="4">
        <div>4</div>
      </h-col>
      <h-col span="4" offset="8">
        <div>4</div>
      </h-col>
    </h-row>
    <h-row gutter="10" align="center">
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2" offset="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2" offset="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2" offset="2">
        <div>2</div>
      </h-col>
      <h-col span="2">
        <div>2</div>
      </h-col>
      <h-col span="2" offset="2">
        <div>2</div>
      </h-col>
    </h-row>
    <h4>代码</h4>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<script>

export default {
  data () {
    return {
      content: `
        * {
        box-sizing: border-box;
         }
        <h-row align="center">
            <h-col span="8">
                <div>8</div>
            </h-col>
            <h-col span="8">
                <div>8</div>
            </h-col>
            <h-col span="8">
                <div>8</div>
            </h-col>
        </h-row>
        <h-row align="center">
            <h-col span="6">
                <div>6</div>
            </h-col>
            <h-col span="6">
                <div>6</div>
            </h-col>
            <h-col span="6">
                <div>6</div>
            </h-col>
            <h-col span="6">
                <div>6</div>
            </h-col>
        </h-row>
        <h-row align="center">
            <h-col span="4">
                <div>4</div>
            </h-col>
            <h-col span="4">
                <div>4</div>
            </h-col>
            <h-col span="4">
                <div>4</div>
            </h-col>
            <h-col span="4">
                <div>4</div>
            </h-col>
            <h-col span="4">
                <div>4</div>
            </h-col>
            <h-col span="4">
                <div>4</div>
            </h-col>
        </h-row>
        <h-row align="center">
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
        </h-row>
      `.replace(/\s{2,}/, '').trim(),
      content1: `
         <h-row align="center" gutter="10">
            <h-col span="8">
                <div>8</div>
            </h-col>
            <h-col span="8">
                <div>8</div>
            </h-col>
            <h-col span="8">
                <div>8</div>
            </h-col>
        </h-row>
        <h-row align="center" gutter="10">
            <h-col span="6">
                <div>6</div>
            </h-col>
            <h-col span="6">
                <div>6</div>
            </h-col>
            <h-col span="6">
                <div>6</div>
            </h-col>
            <h-col span="6">
                <div>6</div>
            </h-col>
        </h-row>`.replace(/\s{2,}/, '').trim(),
      content2: `
                <h-row gutter="10" align="center">
            <h-col span="8">
                <div>8</div>
            </h-col>
            <h-col span="8" offset="8">
                <div>8</div>
            </h-col>
        </h-row>
        <h-row gutter="10" align="center">
            <h-col span="6" offset="6">
                <div>6</div>
            </h-col>
            <h-col span="6" offset="6">
                <div>6</div>
            </h-col>
        </h-row>
        <h-row gutter="10" align="center">
            <h-col span="4">
                <div>4</div>
            </h-col>
            <h-col span="4" offset="4">
                <div>4</div>
            </h-col>
            <h-col span="4" offset="8">
                <div>4</div>
            </h-col>
        </h-row>
        <h-row gutter="10" align="center">
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div>2</div>
            </h-col>
            <h-col span="2">
                <div>2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div>2</div>
            </h-col>
        </h-row>
                `.replace(/\s{2,}/, '').trim()
    }
  },
}
</script>
<style>
* {
  box-sizing: border-box;
}
</style>