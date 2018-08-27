<template>
  <div style="height:100%;overflow:auto;">
    <transition name="form-fade" mode="in-out">
      <nuxt />
    </transition>
    <el-footer class="footer" height="layout.footerHeight">
      <naf-footer></naf-footer>
    </el-footer>
  </div>
</template>
<script>
import NafFooter from '@/frame/footer';
import config from '@/config';

const { layout } = config;

export default {
  components: {
    NafFooter
  },
  data() {
    return {
      layout
    };
  }
};
</script>

<style lang="less" scoped>
@import '~@/style/theme';

#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  height: 48px;
}

.copyright {
  color: @text-color-secondary;
  font-size: @font-size-base;
}

</style>
