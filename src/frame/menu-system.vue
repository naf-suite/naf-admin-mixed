<template>
  <el-menu default-active="0" class="nav-menu" :router="false" >
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
    title: '系统管理',
    path: '/system',
    icon: 'system',
    children: [
      /*{
        title: '通讯录',
        path: '/system/contacts',
        icon: 'account ',
      },*/
      {
        title: '用户管理',
        path: '/system/user',
        icon: 'account',
      },
      {
        title: '部门管理',
        path: '/system/dept',
        icon: 'dept',
      },
      {
        title: '标签管理',
        path: '/system/tag',
        icon: 'tag',
      },
      {
        title: '字典管理',
        path: '/system/dict',
        icon: 'dict',
      },
      {
        title: '证书管理',
        path: '/system/cert',
        icon: 'cert',
      },
      {
        title: '分站管理',
        path: '/system/site',
        icon: 'site',
      },
      {
        title: '操作日志',
        path: '/system/log',
        icon: 'log',
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

