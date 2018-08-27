<template>
  <div class="exception">
      <div class="imgBlock"><div class="imgEle" :style="{backgroundImage: 'url(' + this.imgUrl + ')'}"></div></div>
      <div class="content">
        <h1>{{title}}</h1>
        <div class="desc">{{desc}}</div>
        <div class="actions">
          <router-link to="/"><el-button type="primary">返回首页</el-button></router-link>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    desc: String,
    'img-url': String,
  },
  computed: {
    styleObject() {
      return {
        backgroundImage: `url("${this.imgUrl}")`,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.exception {
  display: flex;
  align-items: center;
  height: 100%;
  font-family: "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif;

  .imgBlock {
    flex: 0 0 50%;
    width: 50%;
    padding-right: 152px;

    .imgEle {
      height: 360px;
      width: 100%;
      max-width: 430px;
      float: right;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 100% 100%;
    }
  }

  .content {
    flex: auto;

    h1 {
      color: #434e59;
      font-size: 72px;
      font-weight: 600;
      line-height: 72px;
      margin-top: 0;
      margin-bottom: 24px;
    }
    .desc {
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .exception .imgBlock {
    flex: 0 0 62.5%;
    width: 62.5%;
    padding-right: 88px;
  }
}
@media screen and (max-width: 576px) {
  .exception {
    display: block;
    text-align: center;
  }
  .exception .imgBlock {
    padding-right: 0;
    margin: 0 auto 24px;
  }
}
@media screen and (max-width: 480px) {
  .exception .imgBlock {
    margin-bottom: -24px;
    overflow: hidden;
  }
}
</style>

