<template>
  <span> {{copyright}}</span>
</template>
<script>
import config from '@/config';

export default {
  data() {
    return {
      copyright: config.copyright,
    };
  },
};
</script>
<style>
.el-footer {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  color: #999;
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 4px 4px 40px 0 rgba(0, 0, 0, 0.05);
  width: 100%;
}
.footer {
  border-top: solid 1px #e6e6e6;
}
</style>

