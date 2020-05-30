<template>
  <div class="container">
    <el-divider></el-divider>
    <p class="title"> 告警事件</p>
    <el-table :data="alarmEvent" style="width: 100%" height="500">
      <el-table-column type="index" label="序号" width="180"></el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="300">
      </el-table-column>
      <el-table-column
        prop="createdTime"
        label="发送时间"
        width="300">
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'alarmEvent',
  data () {
    return {
      alarmEvent: []
    }
  },
  created () {
    this.getAlarmEvents()
  },
  methods: {
    getAlarmEvents () {
      this.$http.get(this.$serverPath + '/api/alarm-event/' + localStorage.getItem('userId'), {}).then((result) => {
        console.log('getAlarmEvents callback', result.data)
        if (result.status === 200) {
          for (let i in result.data) {
            this.alarmEvent.push(result.data[i])
          }
          console.log('alarm 数组', this.alarmEvent)
        } else {
          console.log('接口返回错误！')
        }
      })
    }
  }
}
</script>

<style scoped>
  .container {
    border-bottom: 3PX solid rgb(62, 95, 125);
  }

  .title {
    font-size: 15px;
    text-align: left;
  }

</style>
