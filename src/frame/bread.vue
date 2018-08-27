<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in catalog" :key="index">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { routes }  from '@/config/menus';

const RouteMeta = (path) => {
  const menu = routes.find(p=>p.path==path);
  return (menu && menu.meta) || {};
}
export default {
  computed: {
    catalog() {
      // console.log(this.$route)
      // return this.$route.meta.catalog;
      return RouteMeta(this.$route.path).catalog;
    },
  },
};
</script>

