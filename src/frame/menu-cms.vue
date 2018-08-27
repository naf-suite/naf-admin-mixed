<template>
  <el-menu default-active="0" class="nav-menu" :router="false">
    <naf-menu-item v-for="(item,idx) in menus" :key="idx" :index="idx.toString()" :title="item.title"
      :options="item.options" :children="item.children" :target="item.target">
    </naf-menu-item>
  </el-menu>
</template>
<script>
import NafMenuItem from './menu-item';
import { MapMenu } from '@/config/menus';

const menus = [
  {
    title: '信息发布',
    path: '/cms',
    icon: 'news',
    children: [
      {
        title: '通知公告',
        path: '/cms/notice',
        icon: 'column',
      },
      {
        title: '政策法规',
        path: '/cms/policy',
        icon: 'column',
      },
      {
        title: '新闻栏目',
        path: '/cms/news',
        icon: 'column',
      },
    ],
  },
].map(MapMenu);

export default {
  components: {
    NafMenuItem,
  },
  data() {
    return {
      menus,
    };
  },
};
</script>

