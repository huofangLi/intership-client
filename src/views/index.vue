<template>
  <div>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-row>
          <el-col :span="21">
            <div class="grid-content bg-purple" style="display: flex;">
              <el-menu-item index="1">
                首页
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">共享中心</template>
                <el-menu-item index="2.1">
                  学校共享
                </el-menu-item>
              </el-submenu>
              <el-menu-item index="3">
                我的实习
              </el-menu-item>
              <el-submenu index="4">
                <template slot="title">事件管理</template>
                <el-menu-item index="4.1">
                  考勤记录
                </el-menu-item>
                <el-menu-item index="4.2">
                  告警事件
                </el-menu-item>
              </el-submenu>
              <el-menu-item index="5">
                毕业设计
              </el-menu-item>
              <el-menu-item index="6">
                我的证书
              </el-menu-item>
            </div>
          </el-col>
          <el-col :span="3" style="text-align: right">
            <div class="grid-content bg-purple" style="display: flex;">
              <el-menu-item index="7">
                <i class="el-icon-message-solid"></i>
              </el-menu-item>
              <el-submenu index="8">
                <template slot="title">学生：{{user.lastName}}</template>
                <el-menu-item index="8.1">
                  个人信息
                </el-menu-item>
                <el-menu-item index="8.2">
                  退出系统
                </el-menu-item>
              </el-submenu>
            </div>
          </el-col>
        </el-row>
      </el-menu>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      activeIndex: '1',
      username: '',
      user: {}
    }
  },
  mounted () {
    this.getUser(localStorage.getItem('username'))
  },
  methods: {
    getUser (username) {
      this.$http.get(this.$serverPath + '/api/users/' + username, {}).then((result) => {
        if (result.status == 200) {
          this.user = result.data
          localStorage.setItem('userId', result.data.id)
          localStorage.setItem('user', JSON.stringify(result.data))
          // console.log('userId', localStorage.getItem('user'))
          // console.log('getUser callback', this.user)
          this.$router.push('/homepage')
        } else {
          console.log('接口请求错误')
        }
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key == 1) {
        this.$router.push('/homepage')
      } else if (key == 2.1) {
        this.$router.push('/sharing_center')
      } else if (key == 3) {
        this.$router.push('/intership')
      } else if (key == 4.1) {
        this.$router.push('/attendance_record')
      } else if (key == 4.2) {
        this.$router.push('/alarm_event')
      } else if (key == 5) {
        this.$router.push('/graduation_project')
      } else if (key == 6) {
        this.$router.push('/certificate')
      } else if (key == 8.1) {
        this.$router.push('/information')
      } else if (key == 8.2) {
        localStorage.clear()
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
  .content {
    width: 60%;
    margin: 20px auto;
    /*background-color: #dddddd;*/
    /*margin-top: 20px;*/
  }

</style>
