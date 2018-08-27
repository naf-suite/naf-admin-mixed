<template>
  <el-container class="layout" direction="vertical">
    <el-header class="header" :style="{lineHeight: layout.headerHeight}">
      <nav-header :logo-width="asideWidth" :short-name="name" :menu-collapse="menuCollapse" @toggle-menu="toggleMenu">
      </nav-header>
    </el-header>
    <el-main style="display: flex;flex-direction: column;">
      <div class="bread" :height="layout.breadHeight">
        <naf-bread></naf-bread>
      </div>
      <div class="page">
        <transition>
          <nuxt />
        </transition>
      </div>
    </el-main>
    <el-footer class="footer" height="layout.footerHeight">
      <naf-footer></naf-footer>
    </el-footer>
  </el-container>
</template>
<script>
import config from '@/config';
import NavHeader from '@/frame/nav-header';
import NafFooter from '@/frame/footer';
import NafBread from '@/frame/bread';

const defaultConfig = {
  breadHeight: '24px',
  headerHeight: '64px',
  footerHeight: '48px',
  asideExpandWidth: '256px',
  asideCollapseWidth: '64px'
};

const { layout = {} } = config;
export default {
  middleware: 'auth',
  components: {
    NavHeader,
    NafFooter,
    NafBread
  },
  data() {
    return {
      menuCollapse: false,
      name: config.shortName,
      layout: { ...defaultConfig, ...layout }
    };
  },
  methods: {
    toggleMenu() {
      this.menuCollapse = !this.menuCollapse;
    }
  },
  computed: {
    asideWidth() {
      return this.menuCollapse
        ? layout.asideCollapseWidth
        : layout.asideExpandWidth;
    }
  }
};
</script>


<style scoped lang="less">
.layout {
  height: 100%;
  overflow: hidden;
  .header {
    padding: 0;
  }
  .sider {
    background: #fff;
    max-height: 100%;
    overflow: initial;
    overflow-y: auto;
    .el-menu {
      height: 100%;
    }
  }
  .main {
    // FOR EDGE
    overflow: hidden;
  }
  .content {
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 10px;
    .bread,
    .page {
      padding: 10px;
    }
    .page {
      flex: 1;
    }
  }
}

.action-menu {
  .naf-icons {
    margin-right: 4px;
  }
}
</style>
<style>
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}
</style>
