# VSCode 生成代码片段

使用 vscode 时，有些代码片段是需要经常写的，VSCode 中可以生成一个代码片段，方便我们快速生成。

- VSCode 中的代码片段有固定的格式，所以我们一般会借助于一个在线工具来完成。

具体的步骤如下：

- 点击设置-用户代码片段-选择需要的文件（比如 vue 片段就选 vue.json）
- 一般是一个空的 json 对象
- 复制自己需要生成代码片段的代码；
- <https://snippet-generator.app/>在该网站中生成代码片段；
- 在 VSCode 中的.json 文件（vue 代码片段就在 vue.json）配置代码片段
- 多个代码片段使用`,`隔开
- 在文件中输入配置的 "prefix"后面的关键字，按 tab 即可生成

```json
{
  "vue3 typescript": {
    "prefix": "tsvue",
    "body": [
      "<template>",
      "  <div class=\"${1:home}\">",
      "    <h2>${1:home}</h2>",
      "  </div>",
      "</template>",
      "",
      "<script setup lang=\"ts\">",
      "</script>",
      "",
      "<style lang=\"less\" scoped>",
      ".${1:home}{",
      "  color: red;",
      "}",
      "</style>"
    ],
    "description": "vue3 typescript"
  }
}
```

输入 tem 再按 tab 即可生成自定义代码片段。

## Lorem

乱数假文
