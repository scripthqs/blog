<template>
  <div>
    <h-tabs :selected.sync="selectedTabs">
      <h-tabs-head>
        <template slot="actions">
          <h-button>设置</h-button>
        </template>
        <h-tabs-item name="game" disabled>
          游戏
        </h-tabs-item>
        <h-tabs-item name="news">
          新闻
        </h-tabs-item>
        <h-tabs-item name="sport">
          体育
        </h-tabs-item>
      </h-tabs-head>
      <h-tabs-body>
        <h-tabs-pane name="game">
          游戏相关资讯
        </h-tabs-pane>
        <h-tabs-pane name="news">
          新闻相关资讯
        </h-tabs-pane>
        <h-tabs-pane name="sport">
          体育相关资讯
        </h-tabs-pane>
      </h-tabs-body>
    </h-tabs>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTabs: "sport",
      content: `
data(){selectedTabs: 'sport'}
<h-tabs :selected.sync="selectedTabs">
        <h-tabs-head>
            <template slot="actions">
                <button>设置</button>
            </template>
            <h-tabs-item name="game" disabled>
                游戏
            </h-tabs-item>
            <h-tabs-item name="news">
                新闻
            </h-tabs-item>
            <h-tabs-item name="sport">
                体育
            </h-tabs-item>
        </h-tabs-head>
        <h-tabs-body>
            <h-tabs-pane name="game">
                游戏相关资讯
            </h-tabs-pane>
            <h-tabs-pane name="news">
                新闻相关资讯
            </h-tabs-pane>
            <h-tabs-pane name="sport">
                体育相关资讯
            </h-tabs-pane>
        </h-tabs-body>
    </h-tabs>
      `
        .replace(/\s{2,}/, "")
        .trim(),
    };
  },
};
</script>
