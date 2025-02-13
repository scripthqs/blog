import{_ as n,o as s,c as a,f as t}from"./app-f4e03468.js";const o={},e=t(`<h1 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置" aria-hidden="true">#</a> VSCode 配置</h1><h2 id="我的-vscode-配置文件-setting-json" tabindex="-1"><a class="header-anchor" href="#我的-vscode-配置文件-setting-json" aria-hidden="true">#</a> 我的 vscode 配置文件（setting.json）</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 保存时自动修复错误</span>
  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source.fixAll.markdownlint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//自定义vscode的各种颜色主题</span>
  <span class="token property">&quot;workbench.colorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;editorLineNumber.foreground&quot;: &quot;#17a346&quot;,</span>
    <span class="token comment">// &quot;editorGutter.background&quot;: &quot;#020230&quot;,</span>
    <span class="token comment">// &quot;editorCursor.foreground&quot;: &quot;#f00&quot;,</span>
    <span class="token comment">// &quot;editor.foreground&quot;: &quot;#201515&quot;,//</span>
    <span class="token comment">// &quot;editor.selectionHighlightBorder&quot;: &quot;#94767c00&quot;,</span>
    <span class="token comment">// &quot;editor.selectionHighlightBackground&quot;: &quot;#ff000078&quot;,</span>
    <span class="token comment">// &quot;editorIndentGuide.activeBackground&quot;: &quot;#81868d&quot;,</span>
    <span class="token comment">// &quot;editorBracketMatch.background&quot;: &quot;#ca9fdb5e&quot;,</span>
    <span class="token comment">// &quot;editorBracketMatch.border&quot;: &quot;#ff0000&quot;,</span>
    <span class="token comment">// &quot;tab.activeBackground&quot;: &quot;#ad9cd4b2&quot;,</span>
    <span class="token comment">// &quot;textLink.foreground&quot;: &quot;#d6561ac4&quot;,</span>
    <span class="token comment">// &quot;descriptionForeground&quot;: &quot;#ff0000&quot;,</span>
    <span class="token comment">// &quot;selection.background&quot;: &quot;#b98cd693&quot;,</span>
    <span class="token comment">// &quot;textBlockQuote.background&quot;: &quot;#b89a9a&quot;,</span>
    <span class="token comment">// &quot;textSeparator.foreground&quot;: &quot;#86c2df&quot;,</span>
    <span class="token property">&quot;editor.selectionBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#f00&quot;</span> <span class="token comment">// 选中高亮的颜色</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tokenColorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;comments&quot;: &quot;#999&quot;, // 注释</span>
    <span class="token comment">// &quot;keywords&quot;: &quot;#0a0&quot;, // 关键字</span>
    <span class="token comment">// &quot;variables&quot;: &quot;#FF0000&quot;, // 变量名</span>
    <span class="token comment">// &quot;strings&quot;: &quot;#e2d75dbd&quot;, // 字符串</span>
    <span class="token comment">// &quot;functions&quot;: &quot;#AE81FF&quot;, // 函数名</span>
    <span class="token comment">// &quot;numbers&quot;: &quot;#665bfcc9&quot; // 数字</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Monokai&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//</span>
  <span class="token property">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.confirmSync&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[python]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.wordBasedSuggestions&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//markdown</span>
  <span class="token property">&quot;markdownlint.focusMode&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdownlint.run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onSave&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;openInExternalApp.openMapper&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;extensionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;apps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;isElectronApp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typora&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;openCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Software/Typora/Typora.exe&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minapp-vscode.disableAutoConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-great-icons&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 终端配置</span>
  <span class="token property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;GitBash&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Software\\\\Git\\\\bin\\\\bash.exe&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.defaultProfile.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GitBash&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debug.console.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.suggest.showStatusBar&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.nodePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\software\\\\node\\\\node.exe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leetcode-cn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.workspaceFolder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c:\\\\Users\\\\Administrator\\\\Desktop\\\\scripthqs\\\\scripthqs.github.io\\\\docs\\\\web\\\\algorithm\\\\leetcode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.showDescription&quot;</span><span class="token operator">:</span> <span class="token string">&quot;In File Comment&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.hint.commentDescription&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.hint.configWebviewMarkdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.bracketPairColorization.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.guides.bracketPairs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;active&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.linkedEditing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;remote.SSH.remotePlatform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;140.82.5.72&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;remote.SSH.enableRemoteCommand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cSpell.userWords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pinia&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;esbenp&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.bracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.printWidth&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;afterDelay&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;liveServer.settings.CustomBrowser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">//猜测文件类型</span>
  <span class="token property">&quot;files.autoGuessEncoding&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//动画</span>
  <span class="token property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.list.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//鼠标滚轮字体大小</span>
  <span class="token property">&quot;editor.mouseWheelZoom&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//折行不换行</span>
  <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将-vscode-的终端更改为-gitbash" tabindex="-1"><a class="header-anchor" href="#将-vscode-的终端更改为-gitbash" aria-hidden="true">#</a> 将 vscode 的终端更改为 gitbash</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 终端配置</span>
  <span class="token property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;GitBash&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Software\\\\Git\\\\Git\\\\bin\\\\bash.exe&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.defaultProfile.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GitBash&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[e];function c(l,u){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","01vsc.html.vue"]]);export{r as default};
