<template>
  	<div>
	  	<transition name="form-fade" mode="in-out">
	  		<div class="container" v-show="showLogin">
          <div class="top">
            <div class="header">
              <img alt="" class="logo" src="~/assets/logo.svg" />
              <span class="title">{{productName}}</span>
            </div>
            <p class="desc">{{description}}</p>
          </div>
		    	<el-form class="main" :model="loginForm" :rules="rules" ref="loginForm">
						<el-form-item prop="username">
							<el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="naf-icons naf-icon-user"><span>dsfsf</span></el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input type="password" placeholder="密码" v-model="loginForm.password" prefix-icon="naf-icons naf-icon-password"></el-input>
						</el-form-item>
						<el-form-item>
								<el-button type="primary" @click="submitForm('loginForm')" :style="{width: '100%'}">登录</el-button>
							</el-form-item>
					</el-form>
	  		</div>
	  	</transition>
			<el-footer class="footer" height="layout.footerHeight">
				<my-footer></my-footer>
			</el-footer>
  	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import config from '@/config';
import MyFooter from './footer';

const {
  productName, description, copyright, layout
} = config;

const { /* mapState, */ mapActions } = createNamespacedHelpers('login');

// import {login, getAdminInfo} from '@/api/getData'
// import {mapActions, mapState} from 'vuex'
export default {
  components: {
    MyFooter,
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      showLogin: false,
      productName,
      description,
      copyright,
      layout,
    };
  },
  mounted() {
    this.showLogin = true;
    // if (!this.adminInfo.id) {
    // this.getAdminData()
    // }
  },
  // computed: {
  // ...mapState(['adminInfo']),
  // },
  methods: {
    ...mapActions(['login']),
    async submitForm(formName) {
      // this.login({username:'admin',password:'pass'})
      // this.$message({
      //   type: "success",
      //   message: "登录成功"
      // });
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const res = await this.login({
            username: this.loginForm.username || 'admin',
            password: this.loginForm.password,
          });
          console.log(res);
          if (res.errcode === 0) {
            this.$message({
              type: 'success',
              message: '登录成功',
              duration: 1000,
            });
            this.$router.push(this.$route.query.redirect || '/');
          } else {
            this.$message({
              type: 'error',
              message: res.message,
            });
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100,
          });
          return false;
        }
        return true;
      });
    },
  },
  // watch: {
  // 	adminInfo: function (newValue){
  // 		if (newValue.id) {
  // 			this.$message({
  //                     type: 'success',
  //                     message: '检测到您之前登录过，将自动登录'
  //                 });
  // 			this.$router.push('manage')
  // 		}
  // 	}
  // }
};
</script>

<style lang="less" scoped>
@import "~style/theme";

.container {
  background: #f0f2f5;
  background-image: url("~assets/bg.svg");
  width: 100%;
  min-height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding: 110px 0 144px 0;
  position: relative;
}
.main {
  width: 368px;
  margin: 0 auto;
}
.top {
  text-align: center;
}

.header {
  height: 44px;
  line-height: 44px;
  a {
    text-decoration: none;
  }
}

.logo {
  height: 44px;
  vertical-align: top;
  margin-right: 16px;
}

.title {
  font-size: 33px;
  color: @heading-color;
  font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  top: 2px;
}

.desc {
  font-size: @font-size-base;
  color: @text-color-secondary;
  margin-top: 12px;
  margin-bottom: 40px;
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