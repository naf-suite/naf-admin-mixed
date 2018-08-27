
const menus = require('../config/menus').routes;

module.exports = function routerMetaModule() {

  console.log('loading my module...');

  // Add hook for generate
  this.nuxt.hook('build:extendRoutes', async (routes) => {
    console.log('call my hook...');
    routes.forEach(acc=>{
      const menu = menus.find(p=>p.path==acc.path);
      if(menu) acc.meta=menu.meta;
    });
    console.log(routes)
  })

}