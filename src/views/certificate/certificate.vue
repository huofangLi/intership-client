<template>
  <div class="all">
    <div class="top">
      <p class="title">证书上传</p>
    </div>
    <div class="box">
      <p class="table">已登记证书列表</p>
      <el-table
        :data="alarmEvent"
        style="width: 100%">
        <el-table-column
          prop=""
          label="证书名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="title"
          label="证书类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="content"
          label="证书级别"
          width="150">
        </el-table-column>
        <el-table-column
          prop="created_time"
          label="证书获得时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remarks"
          label="证书照片"
          width="150">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  onLoad () {

  },
  onShow () {
  }
}
</script>

<style scoped>
  .top {
    height: 100%;
    text-align: left;
    border-bottom: 3px solid rgb(34, 34, 34);
    color: rgb(40, 150, 221);
    font-size: 25px;
  }

  .table {
    font-size: 18px;
    text-align: left;
    padding-left: 20px;
    padding-top: 20px;
    margin-top: 0px;
  }

  .box {
    border-left: 1PX solid rgb(204, 204, 204);
    border-right: 1PX solid rgb(204, 204, 204);
    border-bottom: 2PX solid rgb(204, 204, 204);
  }

</style>
