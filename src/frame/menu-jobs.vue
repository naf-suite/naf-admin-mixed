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
    title: '企业管理',
    path: '/jobs/corp',
    icon: 'corp',
    children: [
      {
        title: '注册审核',
        path: '/jobs/corp-check',
        icon: 'shenhe',
      },
      {
        title: '信息认证',
        path: '/jobs/corp-info',
        icon: 'renzheng',
      },
      {
        title: '积分体系',
        path: '/jobs/corp-points',
        icon: 'jifen',
      },
      {
        title: '企业用户',
        path: '/jobs/corp-user',
        icon: 'corpuser',
      },
    ],
  },
  {
    title: '招聘管理',
    path: '/jobs',
    icon: 'job',
    children: [
      {
        title: '招聘信息',
        path: '/jobs/job-info',
        icon: 'info',
      },
      {
        title: '招聘会',
        path: '/jobs/job-fair',
        page: 'job.fair',
        icon: 'info',
      },
      {
        title: '校园宣讲会',
        path: '/jobs/campus-talk',
        icon: 'info',
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
