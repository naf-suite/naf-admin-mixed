<template>
  <div class="header-box">
      <div class="logo" :style="{width: logoWidth}">
        <router-link to="/">
          <img src="~/assets/logo1.svg" alt="logo" style="height:32px;width:32px;" />
        </router-link>
        <h1>{{shortName}}</h1>
      </div>
      <div class="banner">
        <i class="naf-icons" :class="{'naf-icon-unfold': menuCollapse, 'naf-icon-fold': !menuCollapse,}" @click="toggleMenu"></i>
        <!--下拉用户菜单-->
        <el-dropdown class="right" @command="handleUserCommand" v-if="false">
          <span class="el-dropdown-link">
            <i class="naf-icons naf-icon-avatar"></i>
            <span class="name">{{userinfo && userinfo.fullname || '管理員'}}</span>
          </span>
          <el-dropdown-menu class="action-menu" slot="dropdown">
            <el-dropdown-item>
              <i class="naf-icons naf-icon-user"></i>
              <span>个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="naf-icons naf-icon-setting"></i>
              <span>设置</span>
            </el-dropdown-item>
            <el-dropdown-item command="logout" divided>
              <i class="naf-icons naf-icon-quit"></i>
              <span>退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--简洁用户菜单-->
        <div class="right lite">
            <span class="name">{{userinfo && userinfo.fullname || '管理員'}}</span>
            <span>|</span>
            <el-button type="text" @click="handleLogout">退出</el-button>
        </div>
      </div>
  </div>    
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: {
    shortName: String,
    logoWidth: {
      type: String,
      default: '256px',
    },
    menuCollapse: Boolean,
  },
  methods: {
    ...mapActions({
      logout: 'login/logout',
    }),
    toggleMenu() {
      this.$emit('toggle-menu');
    },
    async handleUserCommand(command) {
      if(command === 'logout') {
        await this.handleLogout();
      } else {
        this.$message({
          type: 'info',
          message: '即将上线，敬请期待...',
        });
      }
    },
    async handleLogout() {
      console.log(this.userinfo);
      console.log(this);
      const res = await this.logout();
      // console.log(res);
      if (res.errcode === 0) {
        this.$router.push(this.$route.query.redirect || '/login');
      } else {
        console.log(res);
        this.$message({
          type: 'error',
          message: res.message,
        });
      }
    }
  },
  computed: mapState({
    userinfo: state=>state.login.userinfo,
  })  
};
</script>
<style lang="less" scoped>
  .header-box {
    border-bottom: solid 1px #e6e6e6;
    background: #20a0ff;
    color: #fff;
    display: flex;
    flex-direction: row;
    padding: 0;
    height: 100%;
    .logo {
      border-right: solid 1px #e6e6e6;
      padding: 0 16px;
      overflow: hidden;
      img, h1 {
        vertical-align: middle;
      }
      h1 {
        display: inline-block;
        margin: 0 0 0 12px;
      }
    }
    .banner {
      flex: 1;
      padding: 0 20px;
      .right {
        float: right;
      }
      .naf-icon-avatar {
        margin-right: 4px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
        border-radius: 14px;
        background: grey;
        padding: 4px;
      }
      .right.lite{
        font-size: 14px;
      }
    }
  }
  .el-button--text{
    color: white;
  }
</style>
