export default  {
  title: 'ckcoding',
  description: '愿天堂没有996',
  outDir: '../../dist',
  themeConfig: {
    logo: '../images/logo.svg',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '开发日记',
        link: '/daynotes/',
        activeMatch:'daynotes'
      },
      {
        text: '代码块',
        link: '/codeblock/',
        activeMatch:'codeblock'
      },
      {
        text: '知识库',
        items:[
          {text:'github自动化', link: '/knowledge/githubAction.md'}, // 可不写后缀 .md,也可以设置外部链接
          {text:'uniapp', link: '/knowledge/uniapp'},
          {text:'微信小程序', link: '/knowledge/miniProgram'},
          {text:'更多🎉', link: '/knowledge/nodejs'},
      ]
      , activeMatch:'knowledge'
      },
      {
        text: '工具',
        items:[
          {text:'时间戳', link: 'https://tool.lu/timestamp/',target:'_blank'},
          {text:'postMan', link: 'https://hoppscotch.io/cn/',target:'_blank'},
          {text:'Grid布局生成', link: 'https://cssgrid-generator.netlify.app/',target:'_blank'},
          {text:'更多🎉', link: '/url/'},
      ]
      },
      
      {
        text: 'API',
        link: '/apidocs/',
        activeMatch:'apidocs'
      },
      { 
        text: 'GitHub',
        link: 'https://github.com/ckcoding',
      },
    ],
    sidebar: {
      '/apidocs/': [
        {
          text: 'API文档',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'API文档', link: '/apidocs/' }, 
            { text: '微软小冰', link: '/apidocs/xiaobingBot' }, 
            { text: '国际支付宝', link: '/apidocs/globalAlipay' } 
          ]
        }
      ],
      '/codeblock/': [
        {
          text: '代码块',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'JavaScript', link: '/codeblock/js' }, 
            { text: 'css', link: '/codeblock/css' }, 
            { text: '微信小程序', link: '/codeblock/miniprogram' }, 
          ]
        }
      ],
      '/daynotes/': [
        {
          text: '开发日记',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'GitHub自动化', link: '/daynotes/githubAction' }, 
            { text: 'ivp6', link: '/daynotes/ipv6' },
            { text: '国际支付宝', link: '/daynotes/globalAlipay' } 
          ]
        }
      ]
      ,
      '/knowledge/': [
        {
          text: '知识库',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'GitHub自动化', link: '/knowledge/githubAction' }, 
            { text: 'vue', link: '/knowledge/vue' },
            { text: 'uniapp', link: '/knowledge/uniapp' },
            { text: '微信小程序', link: '/knowledge/miniProgram' },
            { text: 'Nodejs', link: '/knowledge/nodejs' },
            { text: 'js', link: '/knowledge/javaScript' },
            { text: 'css', link: '/knowledge/css' },
            { text: '服务器开发', link: '/knowledge/serverDocs' }, 
            { text: 'docker', link: '/knowledge/docker' }, 
            { text: 'win', link: '/knowledge/win' }, 
            
          ]
        }
      ]
    },
    lang:'zh-CN',
    lastUpdated: true,
    algolia: {
      apiId:'HY8R6J42TY',
      apiKey: '921e8aa99c643c8e7e80f2158c75df3a',
      indexName: 'ckcode'
    },
    lastUpdatedText: '上次更新',
    outlineTitle: '目录',
    footer: {
      message: '本项基于 <a href="https://github.com/ckcoding"  target="_blank">GitHub</a> 构建',
      copyright: getData()
    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '更正此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
}
function getData() {
  return `Copyright © ${new Date().getFullYear()} CkCode`
}
