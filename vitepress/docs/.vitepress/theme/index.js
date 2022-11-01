// // .vitepress/theme/index.js
// import DefaultTheme from 'vitepress/theme'

// export default {
//   ...DefaultTheme,
//   enhanceApp(ctx) {
//     // extend default theme custom behaviour.
//     // DefaultTheme.enhanceApp(ctx)

//     // register your custom global components
//     ctx.app.component('MyGlobalComponent' /* ... */)
//   }
// }


import DefaultTheme from 'vitepress/theme'
// import testCode from '../../../components/test-code.vue' //测试组件
export default{
  ...DefaultTheme,
  enhanceApp(ctx) {
    // ctx.app.component('test-code',testCode)
  }
}
