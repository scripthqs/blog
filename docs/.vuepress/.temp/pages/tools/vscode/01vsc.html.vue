<template><div><h1 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置" aria-hidden="true">#</a> VSCode 配置</h1>
<h2 id="我的-vscode-配置文件-setting-json" tabindex="-1"><a class="header-anchor" href="#我的-vscode-配置文件-setting-json" aria-hidden="true">#</a> 我的 vscode 配置文件（setting.json）</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 保存时自动修复错误</span>
  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"source.fixAll.markdownlint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//自定义vscode的各种颜色主题</span>
  <span class="token property">"workbench.colorCustomizations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// "editorLineNumber.foreground": "#17a346",</span>
    <span class="token comment">// "editorGutter.background": "#020230",</span>
    <span class="token comment">// "editorCursor.foreground": "#f00",</span>
    <span class="token comment">// "editor.foreground": "#201515",//</span>
    <span class="token comment">// "editor.selectionHighlightBorder": "#94767c00",</span>
    <span class="token comment">// "editor.selectionHighlightBackground": "#ff000078",</span>
    <span class="token comment">// "editorIndentGuide.activeBackground": "#81868d",</span>
    <span class="token comment">// "editorBracketMatch.background": "#ca9fdb5e",</span>
    <span class="token comment">// "editorBracketMatch.border": "#ff0000",</span>
    <span class="token comment">// "tab.activeBackground": "#ad9cd4b2",</span>
    <span class="token comment">// "textLink.foreground": "#d6561ac4",</span>
    <span class="token comment">// "descriptionForeground": "#ff0000",</span>
    <span class="token comment">// "selection.background": "#b98cd693",</span>
    <span class="token comment">// "textBlockQuote.background": "#b89a9a",</span>
    <span class="token comment">// "textSeparator.foreground": "#86c2df",</span>
    <span class="token property">"editor.selectionBackground"</span><span class="token operator">:</span> <span class="token string">"#f00"</span> <span class="token comment">// 选中高亮的颜色</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"editor.tokenColorCustomizations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// "comments": "#999", // 注释</span>
    <span class="token comment">// "keywords": "#0a0", // 关键字</span>
    <span class="token comment">// "variables": "#FF0000", // 变量名</span>
    <span class="token comment">// "strings": "#e2d75dbd", // 字符串</span>
    <span class="token comment">// "functions": "#AE81FF", // 函数名</span>
    <span class="token comment">// "numbers": "#665bfcc9" // 数字</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.colorTheme"</span><span class="token operator">:</span> <span class="token string">"Monokai"</span><span class="token punctuation">,</span>
  <span class="token comment">//</span>
  <span class="token property">"git.enableSmartCommit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"git.confirmSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"first"</span><span class="token punctuation">,</span>
  <span class="token property">"[python]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.wordBasedSuggestions"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//markdown</span>
  <span class="token property">"markdownlint.focusMode"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"markdownlint.run"</span><span class="token operator">:</span> <span class="token string">"onSave"</span><span class="token punctuation">,</span>
  <span class="token property">"openInExternalApp.openMapper"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"extensionName"</span><span class="token operator">:</span> <span class="token string">"md"</span><span class="token punctuation">,</span>
      <span class="token property">"apps"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"isElectronApp"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"typora"</span><span class="token punctuation">,</span>
          <span class="token property">"openCommand"</span><span class="token operator">:</span> <span class="token string">"C:/Software/Typora/Typora.exe"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"files.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*.cjson"</span><span class="token operator">:</span> <span class="token string">"jsonc"</span><span class="token punctuation">,</span>
    <span class="token property">"*.wxss"</span><span class="token operator">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span>
    <span class="token property">"*.wxs"</span><span class="token operator">:</span> <span class="token string">"javascript"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"emmet.includeLanguages"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"wxml"</span><span class="token operator">:</span> <span class="token string">"html"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"minapp-vscode.disableAutoConfig"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.iconTheme"</span><span class="token operator">:</span> <span class="token string">"vscode-great-icons"</span><span class="token punctuation">,</span>
  <span class="token comment">// 终端配置</span>
  <span class="token property">"terminal.integrated.profiles.windows"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"GitBash"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"C:\\Software\\Git\\bin\\bash.exe"</span><span class="token punctuation">,</span>
      <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.defaultProfile.windows"</span><span class="token operator">:</span> <span class="token string">"GitBash"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.fontSize"</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
  <span class="token property">"debug.console.fontSize"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.fontSize"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">"editor.suggest.showStatusBar"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.nodePath"</span><span class="token operator">:</span> <span class="token string">"D:\\software\\node\\node.exe"</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.endpoint"</span><span class="token operator">:</span> <span class="token string">"leetcode-cn"</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.workspaceFolder"</span><span class="token operator">:</span> <span class="token string">"c:\\Users\\Administrator\\Desktop\\scripthqs\\scripthqs.github.io\\docs\\web\\algorithm\\leetcode"</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.showDescription"</span><span class="token operator">:</span> <span class="token string">"In File Comment"</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"typescript"</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.hint.commentDescription"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.hint.configWebviewMarkdown"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"editor.bracketPairColorization.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.guides.bracketPairs"</span><span class="token operator">:</span> <span class="token string">"active"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.linkedEditing"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"remote.SSH.remotePlatform"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"140.82.5.72"</span><span class="token operator">:</span> <span class="token string">"linux"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"remote.SSH.enableRemoteCommand"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"cSpell.userWords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pinia"</span><span class="token punctuation">,</span> <span class="token string">"esbenp"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span>
  <span class="token property">"prettier.bracketSameLine"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"prettier.printWidth"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"afterDelay"</span><span class="token punctuation">,</span>
  <span class="token property">"window.zoomLevel"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
  <span class="token property">"liveServer.settings.CustomBrowser"</span><span class="token operator">:</span> <span class="token string">"chrome"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将-vscode-的终端更改为-gitbash" tabindex="-1"><a class="header-anchor" href="#将-vscode-的终端更改为-gitbash" aria-hidden="true">#</a> 将 vscode 的终端更改为 gitbash</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 终端配置</span>
  <span class="token property">"terminal.integrated.profiles.windows"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"GitBash"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"C:\\Software\\Git\\Git\\bin\\bash.exe"</span><span class="token punctuation">,</span>
      <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.defaultProfile.windows"</span><span class="token operator">:</span> <span class="token string">"GitBash"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


