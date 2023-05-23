# VSCode 配置

## 我的 vscode 配置文件（setting.json）

```json
{
  "editor.formatOnSave": true,
  // 保存时自动修复错误
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.markdownlint": true
  },
  //自定义vscode的各种颜色主题
  "workbench.colorCustomizations": {
    // "editorLineNumber.foreground": "#17a346",
    // "editorGutter.background": "#020230",
    // "editorCursor.foreground": "#f00",
    // "editor.foreground": "#201515",//
    // "editor.selectionHighlightBorder": "#94767c00",
    // "editor.selectionHighlightBackground": "#ff000078",
    // "editorIndentGuide.activeBackground": "#81868d",
    // "editorBracketMatch.background": "#ca9fdb5e",
    // "editorBracketMatch.border": "#ff0000",
    // "tab.activeBackground": "#ad9cd4b2",
    // "textLink.foreground": "#d6561ac4",
    // "descriptionForeground": "#ff0000",
    // "selection.background": "#b98cd693",
    // "textBlockQuote.background": "#b89a9a",
    // "textSeparator.foreground": "#86c2df",
    "editor.selectionBackground": "#f00" // 选中高亮的颜色
  },
  "editor.tokenColorCustomizations": {
    // "comments": "#999", // 注释
    // "keywords": "#0a0", // 关键字
    // "variables": "#FF0000", // 变量名
    // "strings": "#e2d75dbd", // 字符串
    // "functions": "#AE81FF", // 函数名
    // "numbers": "#665bfcc9" // 数字
  },
  "workbench.colorTheme": "Monokai",
  //
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "editor.suggestSelection": "first",
  "[python]": {
    "editor.wordBasedSuggestions": false
  },
  //markdown
  "markdownlint.focusMode": true,
  "markdownlint.run": "onSave",
  "openInExternalApp.openMapper": [
    {
      "extensionName": "md",
      "apps": [
        {
          "isElectronApp": true,
          "title": "typora",
          "openCommand": "C:/Software/Typora/Typora.exe"
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
  "workbench.iconTheme": "vscode-great-icons",
  // 终端配置
  "terminal.integrated.profiles.windows": {
    "GitBash": {
      "path": "C:\\Software\\Git\\bin\\bash.exe",
      "args": []
    }
  },
  "terminal.integrated.defaultProfile.windows": "GitBash",
  "editor.fontSize": 24,
  "debug.console.fontSize": 16,
  "terminal.integrated.fontSize": 16,
  "editor.suggest.showStatusBar": true,
  "leetcode.nodePath": "D:\\software\\node\\node.exe",
  "leetcode.endpoint": "leetcode-cn",
  "leetcode.workspaceFolder": "c:\\Users\\Administrator\\Desktop\\scripthqs\\scripthqs.github.io\\docs\\web\\algorithm\\leetcode",
  "leetcode.showDescription": "In File Comment",
  "leetcode.defaultLanguage": "typescript",
  "leetcode.hint.commentDescription": false,
  "leetcode.hint.configWebviewMarkdown": false,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.linkedEditing": true,
  "remote.SSH.remotePlatform": {
    "140.82.5.72": "linux"
  },
  "remote.SSH.enableRemoteCommand": true,
  "cSpell.userWords": ["pinia", "esbenp"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.bracketSameLine": true,
  "prettier.printWidth": 120,
  "files.autoSave": "afterDelay",
  "window.zoomLevel": -1,
  "liveServer.settings.CustomBrowser": "chrome",
  "editor.tabSize": 2
}
```

## 将 vscode 的终端更改为 gitbash

```json
// 终端配置
  "terminal.integrated.profiles.windows": {
    "GitBash": {
      "path": "C:\\Software\\Git\\Git\\bin\\bash.exe",
      "args": []
    }
  },
  "terminal.integrated.defaultProfile.windows": "GitBash",
```
