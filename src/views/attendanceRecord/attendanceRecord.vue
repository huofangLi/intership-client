<template>
  <div class="container">
    <p class="title">考勤记录</p>
    <el-table :data="alarmEvent" style="width: 100%;">
      <el-table-column prop="" label="实习批次" width="130">
      </el-table-column>
      <el-table-column prop="title" label="院系班级" width="150">
      </el-table-column>
      <el-table-column prop="content" label="学生姓名" width="150">
      </el-table-column>
      <el-table-column prop="created_time" label="打卡时间" width="150">
      </el-table-column>
      <el-table-column prop="remarks" label="打卡地点" width="130">
      </el-table-column>
      <el-table-column prop="remarks" label="考勤状态" width="150">
      </el-table-column>
    </el-table>

    <div class="box-bottom">
      <p class="jilu">共有记录0条</p>
      <div class="input-box">
        <p>第</p>
        <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
        <p>页</p>
        <p class="yeshu">共0页</p>
      </div>
      <div class="btn">
        <el-button>上一页</el-button>
        <el-button>下一页</el-button>
      </div>

    </div>
  </div>
</template>


<script>

</script>

<style scoped>
  .container {
    border-bottom: 2PX solid rgb(62, 95, 125);
  }

  .title {
    font-size: 15px;
    text-align: left;
    border-bottom: 2PX solid rgb(62, 95, 125);
    padding-bottom: 10px;
  }

  .box-bottom {
    font-size: 13px;
    padding-left: 10px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* flex局部--垂直居中 */
  }

  .input-box {
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    flex: 1 35%;
  }

  .input {
    width: 100px;
    height: 10px;
    font-size: 12px;
    padding-top: 2px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .yeshu {
    margin-left: 10px;
  }

  .btn {
    flex: 1 40%;
  }
</style>
