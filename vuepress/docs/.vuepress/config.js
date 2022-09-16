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
        text: '开发日记',
        link: '/daynotes/',
      },
      {
        text: 'API',
        link: '/apidocs/',
      },
      {
        text: 'GitHup',
        link: 'https://github.com/ckcoding',
      },
    ],
    sidebar: {
      '/apidocs/': ['', 'xiaobingBot', 'globalAlipay'],
      '/daynotes/': [''],
    },
    lastUpdated: 'Last Updated',
  },
};
