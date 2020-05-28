<template>
  <div>
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    首页
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {

    },
    created () {
      // console.log('onload')
      // console.log('home onLoad', this.$store.state.token)
      // this.getAccount()
      this.username = this.$store.state.username
      console.log('store username', this.username)
      this.getUser(this.$store.state.username)
    },
    methods: {
      // getAccount () {
      //   this.$http.get(this.$serverPath + '/api/account', {
      //     // headers: {
      //     //   Authorization: 'Bearer ' + this.$store.state.token
      //     // }
      //   }).then((res) => {
      //     // eslint-disable-next-line eqeqeq
      //     if (res.status == 200) {
      //       console.log('getAccount callback', res)
      //     }
      //   }).catch(error => {
      //     console.log(error)
      //   })
      // }
      getUser (username) {
        this.$http.get(this.$serverPath + '/api/users/admin', {
          login: username
        }).then((result) => {
          console.log('login callback', result.data)
          if (result.status == 200) {
            // 存储本次登录的token
            this.user = result.data
          } else {
          }
        })
      }
    }
  }
</script>
<style>
</style>
