import{_ as s,o as n,c as a,d as l}from"./app.4cd28a6d.js";const g=JSON.parse('{"title":"\u7EAF\u4E2A\u4EBA\u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9752\u9F99\u{1F409}","slug":"\u9752\u9F99\u{1F409}","link":"#\u9752\u9F99\u{1F409}","children":[{"level":3,"title":"\u8BA2\u9605\u5730\u5740","slug":"\u8BA2\u9605\u5730\u5740","link":"#\u8BA2\u9605\u5730\u5740","children":[]},{"level":3,"title":"\u4F9D\u8D56","slug":"\u4F9D\u8D56","link":"#\u4F9D\u8D56","children":[]}]}],"relativePath":"knowledge/docker.md"}'),e={name:"knowledge/docker.md"},p=l(`<h1 id="\u7EAF\u4E2A\u4EBA\u9879\u76EE" tabindex="-1">\u7EAF\u4E2A\u4EBA\u9879\u76EE <a class="header-anchor" href="#\u7EAF\u4E2A\u4EBA\u9879\u76EE" aria-hidden="true">#</a></h1><h2 id="\u9752\u9F99\u{1F409}" tabindex="-1">\u9752\u9F99\u{1F409} <a class="header-anchor" href="#\u9752\u9F99\u{1F409}" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker run -dit \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /root/docker/ql:/ql/data \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 5700:5700 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name qinglong \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --hostname qinglong \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --restart unless-stopped \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  whyour/qinglong:latest</span></span>
<span class="line"><span style="color:#676E95;"># \u542F\u52A8 127.0.0.1:5700</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8BA2\u9605\u5730\u5740" tabindex="-1">\u8BA2\u9605\u5730\u5740 <a class="header-anchor" href="#\u8BA2\u9605\u5730\u5740" aria-hidden="true">#</a></h3><p><code>CK</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://github.com/ckcoding/qinglong.git</span></span>
<span class="line"></span></code></pre></div><p><code>KingRan</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://github.com/KingRan/KR.git</span></span>
<span class="line"></span></code></pre></div><p><code>he1pu</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://github.com/he1pu/JDHelp.git</span></span>
<span class="line"></span></code></pre></div><p><code>JDHelloWorld</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://github.com/JDHelloWorld/jd_scripts.git</span></span>
<span class="line"></span></code></pre></div><p><code>shufflewzc</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker2.git</span></span>
<span class="line"></span></code></pre></div><p><code>leafTheFish</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://github.com/leafTheFish/DeathNote.git</span></span>
<span class="line"></span></code></pre></div><p><code>6dylan6</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://github.com/6dylan6/jdpro.git</span></span>
<span class="line"></span></code></pre></div><p><code>shufflewzc</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://github.com/gys619/jdd.git</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4F9D\u8D56" tabindex="-1">\u4F9D\u8D56 <a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sablejs</span></span>
<span class="line"><span style="color:#A6ACCD;">string-random</span></span>
<span class="line"><span style="color:#A6ACCD;">js-sha256</span></span>
<span class="line"><span style="color:#A6ACCD;">ts-node</span></span>
<span class="line"><span style="color:#A6ACCD;">typescript</span></span>
<span class="line"><span style="color:#A6ACCD;">crypto-js</span></span>
<span class="line"><span style="color:#A6ACCD;">md5</span></span>
<span class="line"><span style="color:#A6ACCD;">dotenv</span></span>
<span class="line"><span style="color:#A6ACCD;">got</span></span>
<span class="line"><span style="color:#A6ACCD;">ts-md5</span></span>
<span class="line"><span style="color:#A6ACCD;">tslib</span></span>
<span class="line"><span style="color:#A6ACCD;">@types/node</span></span>
<span class="line"><span style="color:#A6ACCD;">requests</span></span>
<span class="line"><span style="color:#A6ACCD;">tough-cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">jsdom</span></span>
<span class="line"><span style="color:#A6ACCD;">download</span></span>
<span class="line"><span style="color:#A6ACCD;">tunnel</span></span>
<span class="line"><span style="color:#A6ACCD;">ws</span></span>
<span class="line"><span style="color:#A6ACCD;">js-base64</span></span>
<span class="line"><span style="color:#A6ACCD;">date-fns</span></span>
<span class="line"><span style="color:#A6ACCD;">png-js</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span></span>
<span class="line"><span style="color:#A6ACCD;">nodemailer</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,22),o=[p];function c(t,i,d,r,C,h){return n(),a("div",null,o)}const y=s(e,[["render",c]]);export{g as __pageData,y as default};
