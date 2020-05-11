<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    created () {
      console.log('onload')
      console.log('home onLoad', this.$store.state.token)
      this.getAccount()
    },
    methods: {
      getAccount () {
        this.$http.get(this.$serverPath + '/api/account', {
          // headers: {
          //   Authorization: 'Bearer ' + this.$store.state.token
          // }
        }).then((res) => {
          // eslint-disable-next-line eqeqeq
          if (res.status == 200) {
            console.log('getAccount callback', res)
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
