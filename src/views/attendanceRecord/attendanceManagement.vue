<!--考勤管理-->
<template>
  <div class="container">
    <div class="top">
      <p>考勤信息</p>
    </div>
    <div class="box">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- 签到记录 -->
        <el-tab-pane label="签到记录" name="first">
          <el-table :data="alarmEvent" style="width: 100%">
            <el-table-column prop="" label="签到时间" width="180">
            </el-table-column>
            <el-table-column prop="title" label="签到位置" width="180">
            </el-table-column>
            <el-table-column prop="content" label="签到坐标" width="250">
            </el-table-column>
            <el-table-column prop="created_time" label="所在公司" width="180">
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <!-- 请假记录 -->
        <el-tab-pane label="请假记录" name="second">
          <el-table :data="alarmEvent" style="width: 100%">
            <el-table-column prop="" label="提交请假单时间" width="150">
            </el-table-column>
            <el-table-column prop="title" label="请假时间" width="150">
            </el-table-column>
            <el-table-column prop="content" label="请假天数" width="150">
            </el-table-column>
            <el-table-column prop="created_time" label="所在公司" width="150">
            </el-table-column>
            <el-table-column prop="created_time" label="请假原因" width="100">
            </el-table-column>
            <el-table-column prop="created_time" label="审核状态" width="100">
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <!-- 缺勤记录 -->
        <el-tab-pane label="缺勤记录" name="third">
          <el-table :data="alarmEvent" style="width: 100%">
            <el-table-column prop="" label="缺勤开始时间" width="180">
            </el-table-column>
            <el-table-column prop="title" label="缺勤结束时间" width="180">
            </el-table-column>
            <el-table-column prop="content" label="缺勤天数" width="150">
            </el-table-column>
            <el-table-column prop="created_time" label="所在公司" width="150">
            </el-table-column>
            <el-table-column prop="created_time" label="备注" width="150">
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <!-- 新建请假单 -->
        <el-tab-pane label="新建请假单" name="fourth">
          <p class="title">新增请假单</p>
          <div class="box-time">
            <p>请假时间：</p>
            <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
          </div>
          <div class="box-reason">
            <p>请假原因：</p>
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" class="reason-input">
            </el-input>
          </div>
          <div class="box-btn">
            <el-button type="success" plain class="save">确认提交</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'attendanceManagement'
}
</script>

<style scoped>
  .top {
    color: rgb(40, 150, 221);
    font-size: 25px;
    height: 35px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .title {
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    margin-left: 25px;
  }

  .box-time {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    padding-left: 170px;
    padding-top: 25px;
    font-weight: 600;
    border-top: 1px solid #CCCCCC;
    border-left: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
  }

  .input {
    width: 300px;
    margin-left: 15px;
  }

  .box-reason {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    padding-left: 170px;
    font-weight: 600;
    padding-top: 15px;
    border-left: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
  }

  .reason-input {
    width: 300px;
    margin-left: 15px;
  }

  .box-btn {
    padding-top: 15px;
    text-align: center;
    border-left: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    padding-bottom: 25px;
  }
</style>
