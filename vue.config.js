// // Vue.config.js 配置选项

// module.exports = {
//   // 选项
//   //  基本路径
//   publicPath: "./",
//   //  构建时的输出目录
//   outputDir: "dist",
//   //  放置静态资源的目录
//   assetsDir: "static",
//   //  html 的输出路径
//   indexPath: "index.html",
//   //文件名哈希
//   filenameHashing: true,
//   //用于多页配置，默认是 undefined
//   pages: {
//     index: {

//     },
//   },
//   //  是否在保存的时候使用 `eslint-loader` 进行检查。
//   lintOnSave: true,
//   //  是否使用带有浏览器内编译器的完整构建版本
//   runtimeCompiler: false,
//   //  babel-loader 默认会跳过 node_modules 依赖。
//   transpileDependencies: [ /* string or regex */],
//   //  是否为生产环境构建生成 source map？
//   productionSourceMap: true,
//   //  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
//   crossorigin: "",
//   //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
//   integrity: false,
//   //  调整内部的 webpack 配置
//   configureWebpack: () => { }, //(Object | Function)
//   chainWebpack: () => { },
//   // 配置 webpack-dev-server 行为。
//   devServer: {
//     open: process.platform === 'darwin',
//     host: '0.0.0.0',
//     port: 8080,
//     https: false,
//     hotOnly: false,
//     proxy: {
//       '/api': {
//         target: "http://app.rmsdmedia.com",
//         changeOrigin: true,
//         secure: false,
//         pathRewrite: {
//           "^/api": ""
//         }
//       },
//       '/foo': {
//         target: '<other_url>'
//       }
//     }, // string | Object
//     before: app => { }
//   },
//   // CSS 相关选项
//   css: {
//     // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
//     // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
//     extract: true,
//     // 是否开启 CSS source map？
//     sourceMap: false,
//     // 为预处理器的 loader 传递自定义选项。比如传递给
//     // Css-loader 时，使用 `{ Css: { ... } }`。
//     loaderOptions: {
//       css: {
//         // 这里的选项会传递给 css-loader
//       },
//       postcss: {
//         // 这里的选项会传递给 postcss-loader
//       }
//     },
//     // 为所有的 CSS 及其预处理文件开启 CSS Modules。
//     // 这个选项不会影响 `*.vue` 文件。
//     modules: false
//   },
//   parallel: require('os').cpus().length > 1,
//   // 三方插件的选项
//   pluginOptions: {
//     // ...
//   }
// }
