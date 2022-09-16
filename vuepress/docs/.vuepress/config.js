module.exports = {
  title: 'ckcoding',
  description: '愿天堂没有996',
  dest: '../dist',
  themeConfig: {
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/images/logo.png',
        },
      ],
      [
        'script',
        {},
        `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?ae654500c1e01de107152eb899284153";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
          `,
      ],
    ],
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '知识库',
        items:[
          {text:'github自动化', link: '/knowledge/githubAction.md'}, // 可不写后缀 .md,也可以设置外部链接
          {text:'uniapp', link: '/knowledge/uniapp'},
          {text:'微信小程序', link: '/knowledge/miniProgram'},
          {text:'Nodejs', link: '/knowledge/nodejs'},
          {text:'js', link: '/knowledge/javaScript'},
          {text:'css', link: '/knowledge/css'}
      ]
      },
      {
        text: '开发日记',
        link: '/daynotes/',
      },
      {
        text: 'API',
        link: '/apidocs/',
      },
      { 
        text: 'GitHub',
        link: 'https://github.com/ckcoding',
      },
    ],
    sidebar: {
      '/apidocs/': ['', 'xiaobingBot', 'globalAlipay'],
      '/daynotes/': [''],
      // '/knowledge/': ['','githubAction','uniapp','miniProgram','nodejs','javaScript','css'],
    },
    lastUpdated: '上次更新',
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale(lang)
            return moment(timestamp).fromNow()
          }
        }
      ]
    ]
  },
};
