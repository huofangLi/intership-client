<template>
  <div class="login-wrap">
    <el-form class="login-container" lable-position="left" label-width="0px" v-loading="loading">
      <div class="item">
        <h3 class="login_title">校企实习服务平台</h3>

        <el-form-item prop="account">
          <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>

        <el-form-item prop="checkPass">
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>

        <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%" @click="submitClick">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        rules: {
          account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          checkPass: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        },
        checked: true,
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        loading: false
      }
    },
    created () {
    },
    methods: {
      submitClick () {
        this.$http.post(this.$serverPath + '/api/authenticate', {
          password: this.loginForm.password,
          rememberMe: true,
          username: this.loginForm.username
        }).then((result) => {
          console.log('login callback', result)
          if (result.status == 200) {
            // 存储本次登录的token
            var token = result.data.id_token
            this.$store.commit('addToken', token)
            this.$router.push('/')
          } else {

          }
        })
      },

    }
  }
</script>

<style scoped>
  .login-wrap {

    /*background-image: url('../assets/img/login-bg.jpg');*/
    /* 背景图垂直、水平均居中 */
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
    /* 设置背景颜色，背景图加载过程中会显示背景色 */
    background-color: #cccccc;
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 100%;
  }

  .login-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: 0px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }

  .item {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .login_title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #505458;
    border-bottom: 1px solid #ddd;
  }

  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>
