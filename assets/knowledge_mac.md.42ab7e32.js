import{_ as s,o as a,c as e,d as n}from"./app.e1b73e93.js";const h=JSON.parse('{"title":"\u6C38\u4E45\u5C4F\u853D\u7CFB\u7EDF\u66F4\u65B0","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/mac.md"}'),o={name:"knowledge/mac.md"},p=n(`<p>\u6C38\u4E45\u5173\u95EDMac\u81EA\u52A8\u751F\u6210.ds_store\u6587\u4EF6</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">defaults write com.apple.desktopservices DSDontWriteNetworkStores </span><span style="color:#82AAFF;">true</span></span>
<span class="line"></span></code></pre></div><p>\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E\u5E76\u91CD\u65B0\u542F\u7528 .DS_Store \u6587\u4EF6\u81EA\u52A8\u751F\u6210</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">defaults delete com.apple.desktopservices DSDontWriteNetworkStores</span></span>
<span class="line"></span></code></pre></div><h1 id="\u6C38\u4E45\u5C4F\u853D\u7CFB\u7EDF\u66F4\u65B0" tabindex="-1">\u6C38\u4E45\u5C4F\u853D\u7CFB\u7EDF\u66F4\u65B0 <a class="header-anchor" href="#\u6C38\u4E45\u5C4F\u853D\u7CFB\u7EDF\u66F4\u65B0" aria-hidden="true">#</a></h1><p>\u5982\u679C\u60F3\u6C38\u4E45\u5730\u963B\u6B62\u66F4\u65B0\uFF0C\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\uFF1A \u4F7F\u7528\u7EC8\u7AEF\u547D\u4EE4</p><p>\u5F00\u542F\u6216\u5173\u95ED\u81EA\u52A8\u66F4\u65B0\uFF1A</p><p>\u6253\u5F00\u201C\u7EC8\u7AEF\u201D\uFF0C\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u6765\u5173\u95ED\u81EA\u52A8\u8F6F\u4EF6\u66F4\u65B0\u7684\u68C0\u67E5\u529F\u80FD\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo softwareupdate --schedule off</span></span>
<span class="line"></span></code></pre></div><p>\u5173\u95ED\u540E\u7CFB\u7EDF\u4E0D\u518D\u81EA\u52A8\u68C0\u67E5\u66F4\u65B0\uFF0C\u4F46\u8FD8\u80FD\u624B\u52A8\u66F4\u65B0\u3002</p><p>\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u8BBE\u7F6E\u7CFB\u7EDF\u4E0D\u81EA\u52A8\u4E0B\u8F7D\u548C\u5B89\u88C5\u66F4\u65B0\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate AutomaticDownload -boolean FALSE</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo defaults write /Library/Preferences/com.apple.commerce AutoUpdate -bool FALSE</span></span>
<span class="line"></span></code></pre></div><p>\u56DE\u5230\u539F\u59CB\u8BBE\u7F6E\uFF0C\u5141\u8BB8\u81EA\u52A8\u66F4\u65B0\uFF0C\u53EF\u4EE5\u6267\u884C\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo softwareupdate --schedule on</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate AutomaticDownload -boolean TRUE</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo defaults write /Library/Preferences/com.apple.commerce AutoUpdate -bool TRUE</span></span>
<span class="line"></span></code></pre></div>`,14),t=[p];function l(c,r,d,i,u,b){return a(),e("div",null,t)}const C=s(o,[["render",l]]);export{h as __pageData,C as default};