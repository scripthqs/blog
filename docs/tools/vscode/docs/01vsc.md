# VSCode 配置

## 我的 vscode 配置文件（setting.json）

```json
{
  "editor.formatOnSave": true,
  // eslint配置项，保存时自动修复错误
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.markdownlint": true
  },
  //对于HTML和css，js的格式，vscode自带的格式化程序基本就够用了
  "html.format.endWithNewline": true,
  //对于vue文件的vetur官方插件，需要按照eslint规范开发，进行简单的配置即可
  //vetur支持很多种格式化程序，先配置vetur的默认格式化程序
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  //设置搜索format即可设置vscode-typescript
  "javascript.format.semicolons": "remove", //去掉js末尾的分号
  "vetur.ignoreProjectWarning": true,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 580, //换行长度
      "wrap_attributes": "aligned-multiple" //属性换行
      // 对属性进行换行。
      // - auto: 仅在超出行长度时才对属性进行换行。
      // - force: 对除第一个属性外的其他每个属性进行换行。
      // - force-aligned: 对除第一个属性外的其他每个属性进行换行，并保持对齐。
      // - force-expand-multiline: 对每个属性进行换行。
      // - aligned-multiple: 当超出折行长度时，将属性进行垂直对齐。
      // "singleQuote": true,
    }
  },
  "editor.tabSize": 2,
  //自定义vscode的各种颜色主题
  "workbench.colorCustomizations": {
    // "editorLineNumber.foreground": "#17a346",
    // "editorGutter.background": "#020230",
    "editorCursor.foreground": "#f00",
    // "editor.foreground": "#201515",//
    "editor.selectionHighlightBorder": "#94767c00",
    "editor.selectionHighlightBackground": "#ff000078",
    "editorIndentGuide.activeBackground": "#81868d",
    "editorBracketMatch.background": "#ca9fdb5e",
    "editorBracketMatch.border": "#ff0000",
    "tab.activeBackground": "#ad9cd4b2",
    "textLink.foreground": "#d6561ac4",
    "descriptionForeground": "#ff0000",
    "selection.background": "#b98cd693",
    "textBlockQuote.background": "#b89a9a",
    "textSeparator.foreground": "#86c2df",
    "editor.selectionBackground": "#aa0000" // 选中高亮的颜色
  },
  "editor.tokenColorCustomizations": {
    "comments": "#999", // 注释
    "keywords": "#0a0", // 关键字
    "variables": "#FF0000", // 变量名
    "strings": "#e2d75dbd", // 字符串
    "functions": "#AE81FF", // 函数名
    "numbers": "#665bfcc9" // 数字
  },
  "workbench.colorTheme": "Monokai",
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "editor.suggestSelection": "first",
  "[python]": {
    "editor.wordBasedSuggestions": false
  },
  "editor.tabCompletion": "on",
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 120,
  "markdownlint.focusMode": true,
  "markdownlint.run": "onSave",
  "less.compile": {
    "compress": false, //是否压缩
    "sourceMap": false, //是否生成map文件，有了这个可以在调试台看到less行数
    "out": false, // 是否输出css文件，false为不输出
    "outExt": ".css" // 输出文件的后缀
  },
  "path-autocomplete.extensionOnImport": true,
  "path-autocomplete.pathMappings": {
    "@": "${folder}/src/",
    "@views": "${folder}/src/views/"
  },
  // "eslint.alwaysShowStatus": true,
  // "editor.formatOnPaste": true,
  // "editor.formatOnType": true,
  // "files.autoSave": "afterDelay",
  // "typescript.format.insertSpaceAfterConstructor": true,
  // "javascript.format.insertSpaceAfterConstructor": true, //在函数前面加个空格
  // "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // "bracket-pair-colorizer-2.depreciation-notice": false,
  // "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": true,
  // "javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  // "typescript.format.insertSpaceAfterConstructor": true,
  "openInExternalApp.openMapper": [
    {
      "extensionName": "md",
      "apps": [
        {
          "isElectronApp": true,
          "title": "typora",
          "openCommand": "D:/Software/Typora/Typora.exe"
        }
      ]
    }
  ],
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  "files.autoSaveDelay": 3000,
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 文件夹 icon 图标
  "workbench.iconTheme": "vscode-great-icons",
  "files.autoSave": "afterDelay",
  // 终端配置
  "terminal.integrated.profiles.windows": {
    "GitBash": {
      "path": "D:\\Software\\Git\\Git\\bin\\bash.exe",
      "args": []
    }
  },
  "terminal.integrated.defaultProfile.windows": "GitBash",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
}
```

## 将 vscode 的终端更改为 gitbash

```json
// 终端配置
  "terminal.integrated.profiles.windows": {
    "GitBash": {
      "path": "D:\\Software\\Git\\Git\\bin\\bash.exe",
      "args": []
    }
  },
  "terminal.integrated.defaultProfile.windows": "GitBash",
```
