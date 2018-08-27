const path = require("path");
// const menus = require('./src/config/menus').routes;

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
// const RouteMeta = (path) => {
//   const menu = menus.find(p=>p.path==path);
//   return (menu && menu.meta) || {};
// }

module.exports = {
  // mode: 'spa',
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: '智慧就业',
    // titleTemplate: '%s - 智慧就业',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/smart/naf-icons/iconfont.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~/style/index.less', lang: 'less' },
    { src: '~/style/common.less', lang: 'less' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui', '@/plugins/axios'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // '~/modules/router-meta'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
  },
  proxy: {
    '/apps.tcdg': 'http://wxqd.cpcxc.com/',
  },
  loader: [
    {
      test: /\.less$/,
      loaders: 'style-loader!css-loader!less-loader'
    }
  ],
  /*
    ** Build configuration 
    */
  build: {
    publicPath: '/smart/_nuxt/',
    vendor:['axios', 'element-ui', 'babel-polyfill'],
    babel:{
        "plugins":[
            ['component',{
                "libraryName":"element-ui",
                "styleLibraryName":"theme-chalk"
            }]
        ]
    },    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // // 设置别名
      // config.resolve.alias = {
      //   ...(config.resolve.alias||{}),
      //   '@': resolve('src'),
      // }
    }
  },
  router: {
    base: '/smart/',
    routes: [
      { path: '/system/contacts', meta: {mymeta: 'hello,meta'}}
    ]
    // middleware: ['meta'],
    // extendRoutes (routes, resolve) {
    //   let ret= routes.map(p=>({...p, meta: RouteMeta(p.path)}));
    //   console.log(ret);
    //   return ret;
    // }
  },  
  // serverMiddleware: [
  //   // API middleware
  //   './server/index.js'
  // ]
}
