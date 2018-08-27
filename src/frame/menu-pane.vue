<template>
  <el-menu default-active="0" class="nav-menu" v-bind="themeStyles"
     :collapse="isCollapse" :router="false">
    <naf-menu-item v-for="(item,idx) in menus" :key="idx" :index="idx.toString()" :title="item.title"
      :options="item.options" :children="item.children" :target="item.target">
    </naf-menu-item>
  </el-menu>
</template>
<script>
import { menus } from '@/config/menus';
import NafMenuItem from './menu-item';

export default {
  components: {
    NafMenuItem,
  },
  props: {
    theme: String,
    isCollapse: Boolean,
  },
  data() {
    return {
      msg: 'Use Vue 2.0 Today!',
      menus,
    };
  },
  computed: {
    // 计算属性的 getter
    themeStyles() {
      // `this` 指向 vm 实例
      if (this.theme === 'dark') {
        // dark styles
        return {
          backgroundColor: '#545c64',
          textColor: '#fff',
          activeTextColor: '#ffd04b',
        };
      }
      // default styles
      return {
        backgroundColor: undefined,
        textColor: undefined,
        activeTextColor: undefined,
      };
    },
  },
};
</script>
<style lang="less" scoped>

</style>
