<template>
  <div class="container">
    <div class="top">
      <p>实习任务</p>
    </div>
    <div class="center">
      <div class="center-top">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select placeholder="任务状态" class="select">
              <el-option label="未开始" value="beijing"></el-option>
              <el-option label="进行中" value="beijing"></el-option>
              <el-option label="待评价" value="beijing"></el-option>
              <el-option label="已评价" value="beijing"></el-option>
            </el-select>
            <el-button type="primary" @click="onSubmit" class="btn">查询</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="center-box">
        <el-table :data="alarmEvent" style="width: 100%">
          <el-table-column prop="" label="任务标题" width="150">
          </el-table-column>
          <el-table-column prop="title" label="创建人" width="120">
          </el-table-column>
          <el-table-column prop="content" label="任务要求时间范围" width="180">
          </el-table-column>
          <el-table-column prop="created_time" label="重要程度" width="150">
          </el-table-column>
          <el-table-column prop="remarks" label="复杂度" width="150">
          </el-table-column>
          <el-table-column prop="remarks" label="任务书附件" width="150">
          </el-table-column>
          <el-table-column prop="remarks" label="评价星级" width="150">
          </el-table-column>
          <el-table-column prop="remarks" label="状态" width="150">
          </el-table-column>
          <el-table-column prop="remarks" label="操作" width="150">
          </el-table-column>
        </el-table>
      </div>

      <div class="box-bottom">
        <p class="jilu">每页显示10条</p>
        <div class="input-box">
          <p>第</p>
          <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
          <p>页</p>
          <p class="yeshu">跳转</p>
        </div>
        <div class="btn">
          <el-button>上一页</el-button>
          <el-button>下一页</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
</script>

<style>
  .select {
    width: 130px;
    height: 80%;
  }

  .center {
    border: 1px solid #CCCCCC;
  }

  .center-top {
    text-align: right;
    padding-top: 15px;
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
    color: #0563C1;
  }

  .btn {
    flex: 1 40%;
  }
</style>
