<template>
  <div class="container">
    <div class="top">
      <p>个人信息</p>
    </div>
    <el-divider></el-divider>
    <div class="bottom">
      <div class="name">
        <p class="text">姓名：</p>
        <el-input v-model="username" placeholder="请输入内容" class="input"></el-input>
      </div>
      <div class="name">
        <p class="text">邮箱：</p>
        <el-input v-model="email" placeholder="请输入内容" class="input"></el-input>
      </div>
      <div class="name">
        <p class="text">手机号码：</p>
        <el-input v-model="phone" placeholder="请输入内容" class="input"></el-input>
      </div>
      <div class="name">
        <p class="text">原密码：</p>
        <el-input placeholder="请输入原密码" v-model="currentPassword" show-password class="input"></el-input>
      </div>
      <div class="name">
        <p class="text">新密码：</p>
        <el-input placeholder="请输新密码" v-model="newPassword" show-password class="input"></el-input>
      </div>
      <div class="password">
        <p class="text1"></p>
        <p class="null">如果不修改密码则保持该字段为空</p>
      </div>
      <el-button type="success" plain class="save" @click="updateInformation">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPassword: '',
      newPassword: '',
      user: {},
      student: {},
      username: '',
      email: '',
      phone: ''
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.student = JSON.parse(localStorage.getItem('student'))
    this.username = this.user.lastName
    this.email = this.user.email
    this.phone = this.student.phone
    // console.log('infomation user', this.user)
    // console.log('infomation student', this.student)
  },
  methods: {
    updateInformation () {
      if (this.username != this.user.username || this.email != this.user.email) {
        this.updateUser()
      }
      if (this.phone != this.student.phone) {
        this.updateStudent()
      }
      if (this.currentPassword != '' && this.newPassword != '') {
        this.updatePassword()
      }
    },
    updatePassword () {
      this.$http.post(this.$serverPath + '/api/account/change-password', {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword
      }).then((result) => {
        if (result.status == 200) {
          console.log('新密码', this.newPassword)
        } else {
          console.log('接口请求错误')
        }
      })
    },
    updateUser () {
      this.$http.put(this.$serverPath + '/api/users', {
        activated: this.user.activated,
        authorities: this.user.authorities,
        createdBy: this.user.createdBy,
        createdDate: this.user.createdDate,
        email: this.email,
        firstName: this.user.firstName,
        imageUrl: this.user.imageUrl,
        langKey: this.user.langKey,
        lastModifiedBy: this.user.lastModifiedBy,
        lastModifiedDate: this.user.lastModifiedDate,
        lastName: this.username,
        login: this.user.login,
        id: this.user.id
      }).then((result) => {
        if (result.status == 200) {
          console.log('put user', this.user)
          localStorage.setItem('user', JSON.stringify(this.user))
        } else {
          console.log('接口请求错误')
        }
      })
    },
    updateStudent () {
      console.log('updta 接口请求前', this.student)
      this.$http.put(this.$serverPath + '/api/students', {
        address: this.student.address,
        city: this.student.city,
        cityCode: this.student.city_code,
        country: this.student.country,
        countryCode: this.student.country_code,
        // createdTime: '2020-05-08 04:52:21',
        gender: this.student.gender,
        hobby: this.student.hobby,
        id: this.student.id,
        // modifyTime: this.student.modify_time,
        phone: this.phone,
        privince: this.student.privince,
        privinceCode: this.student.privince_code,
        selfEvaluation: this.student.self_evaluation,
        skill: this.student.skill,
        skin: this.student.skin,
        stuClass: this.student.stu_class,
        stuDepartment: this.student.stu_department,
        stuId: this.student.stu_id,
        stuProfession: this.student.stu_profession
      }).then((result) => {
        console.log('put student', result)
        localStorage.setItem('student', JSON.stringify(this.student))
      })
    }
  }
}
</script>

<style scoped>
  .container {
    width: 70%;
  }

  .top {
    text-align: left;
    color: rgb(40, 150, 221);
    font-size: 25px;
  }

  .name {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    text-align: left;
    padding-left: 20px;
    width: 70%;
    margin-top: 10px;
  }

  .text {
    flex: 1 30%;
  }

  .bottom {
    /*border: 2px solid #CCCCCC;*/
  }

  .save {
    width: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .password {
    display: flex;
    flex-direction: row;
    width: 55%;
    margin-top: -10px;
  }

  .text1 {
    flex: 1 5%;
  }

  .null {
    font-size: 12px;
    color: darkgray;
    text-align: left;
    flex: 1 30%;
  }
</style>
