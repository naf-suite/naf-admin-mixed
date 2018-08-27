const menus = require('../config/menus').routes;

const RouteMeta = (path) => {
  const menu = menus.find(p=>p.path==path);
  return (menu && menu.meta) || {};
}

export default function (context) {
  const { route } = context;
  console.log('call my middleware');
  console.log(route);
  if(!route.meta || !route.meta.catalog){
    route.meta.catalog = RouteMeta(route.path).catalog;
  }
}