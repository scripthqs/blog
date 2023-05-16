<template>
  <div>
    <h-popover>
      <h-button>上方弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="bottom">
      <h-button>下方弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="left">
      <h-button>左边弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="right">
      <h-button>右边弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>

    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>

    <br />
    <h3>将触发方式改为 hover</h3>
    <hr />
    <h4>预览</h4>
    <h-popover trigger="hover">
      <h-button>上方弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="bottom" trigger="hover">
      <h-button>下方弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="left" trigger="hover">
      <h-button>左边弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="right" trigger="hover">
      <h-button>右边弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h4>代码</h4>
    <pre><code>{{content1}}</code></pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: `
        <h-popover>
            <h-button>上方弹出</h-button>
            <template slot="content">
                弹出内容
            </template>
        </h-popover>
        <h-popover position="bottom">
            <h-button>下方弹出</h-button>
            <template slot="content">
                弹出内容
            </template>
        </h-popover>
        <h-popover position="left">
            <h-button>左边弹出</h-button>
            <template slot="content">
                弹出内容
            </template>
        </h-popover>
        <h-popover position="right">
            <h-button>右边弹出</h-button>
            <template slot="content">
                弹出内容
            </template>
        </h-popover>
      `
        .replace(/\s{2,}/, "")
        .trim(),
      content1: `
                <h-popover trigger="hover">
            <h-button>上方弹出</h-button>
            <template slot="content">
                弹出内容
            </template>
        </h-popover>
        <h-popover position="bottom" trigger="hover">
            <h-button>下方弹出</h-button>
            <template slot="content">
                弹出内容
            </template>
        </h-popover>
        <h-popover position="left" trigger="hover">
            <h-button>左边弹出</h-button>
            <template slot="content">
                弹出内容
            </template>
        </h-popover>
        <h-popover position="right" trigger="hover">
            <h-button>右边弹出</h-button>
            <template slot="content">
                弹出内容
            </template>
        </h-popover>
                `
        .replace(/\s{2,}/, "")
        .trim(),
    };
  },
};
</script>
