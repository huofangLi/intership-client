<template>
  <div class="container">
    <div class="top">
      <p>毕业设计</p>
    </div>
    <!-- 第一行 -->
    <div class="box">
      <div class="box1">
      </div>
      <div class="box2">
      </div>
      <div class="box3">
        <p>导师是否查阅</p>
      </div>
      <div class="box4">
        <p>导师评语</p>
      </div>
    </div>
    <!-- 第二行 -->
    <div class="box">
      <div class="box1">
        <p style="font-weight: 600;">毕业设计（论文）标题</p>
      </div>
      <div class="box2">
        <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
      </div>
      <div class="box3">
      </div>
      <div class="box4">
      </div>
    </div>
    <!-- 第三行 -->
    <div class="box">
      <div class="box1">
        <p style="font-weight: 600;">题目来源</p>
      </div>
      <div class="box2">
        <el-radio v-model="radio" label="1">顶岗实习</el-radio>
        <el-radio v-model="radio" label="2">教师指定</el-radio>
        <el-radio v-model="radio" label="3">自选课题</el-radio>
      </div>
      <div class="box3">
      </div>
      <div class="box4">
      </div>
    </div>
    <!-- 第四行 -->
    <div class="box">
      <div class="box1">
        <p style="font-weight: 600;">任务书</p>
      </div>
      <div class="box2">
        <button class="btn">选择文件</button>
        <el-input v-model="input" placeholder="未选择任何文件" class="input"></el-input>
      </div>
      <div class="box3">
        <p>【未查阅】</p>
      </div>
      <div class="box4">
        <p>【未评论】</p>
      </div>
    </div>
    <!-- 第五行 -->
    <div class="box">
      <div class="box1">
        <p style="font-weight: 600;">开题报告</p>
      </div>
      <div class="box2">
        <button class="btn">选择文件</button>
        <el-input v-model="input" placeholder="未选择任何文件" class="input"></el-input>
      </div>
      <div class="box3">
        <p>【未查阅】</p>
      </div>
      <div class="box4">
        <p>【未评论】</p>
      </div>
    </div>
    <!-- 第六行 -->
    <div class="box">
      <div class="box1">
        <p style="font-weight: 600;">中期检查</p>
      </div>
      <div class="box2">
        <button class="btn">选择文件</button>
        <el-input v-model="input" placeholder="未选择任何文件" class="input"></el-input>
      </div>
      <div class="box3">
        <p>【未查阅】</p>
      </div>
      <div class="box4">
        <p>【未评论】</p>
      </div>
    </div>
    <!-- 第七行 -->
    <div class="box">
      <div class="box1">
        <p style="font-weight: 600;">毕业设计初稿</p>
      </div>
      <div class="box2">
        <button class="btn">选择文件</button>
        <el-input v-model="input" placeholder="未选择任何文件" class="input"></el-input>
      </div>
      <div class="box3">
        <p>【未查阅】</p>
      </div>
      <div class="box4">
        <p>【未评论】</p>
      </div>
    </div>
    <!-- 第八行 -->
    <div class="box-box">
      <div class="box1">
        <p style="font-weight: 600;">毕业设计终稿</p>
      </div>
      <div class="box2">
        <button class="btn">选择文件</button>
        <el-input v-model="input" placeholder="未选择任何文件" class="input"></el-input>
      </div>
      <div class="box3">
        <p>【未查阅】</p>
      </div>
      <div class="box4">
        <p>【未评论】</p>
      </div>
    </div>
    <div class="box-bottom">
      <p>注：文件大小不能超过50M.</p>
      <el-button type="success" plain class="save">确认提交</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'graduationProject',
    data() {
      return {
        radio: '1'
      };
    }
  }
</script>

<style scoped>
  .container {
    border-bottom: 2px solid #CCCCCC;
  }

  .top {
    color: rgb(40, 150, 221);
    font-size: 25px;
    height: 35px;
    display: flex;
    align-items: center;
  }

  .box {
    display: flex;
    flex-direction: row;
    border-left: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    border-top: 1px solid #CCCCCC;
  }

  .box1 {
    display: flex;
    flex: 1 17%;
    font-size: 12px;
    font-weight: 600;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    border-right: 1px solid #CCCCCC;
  }

  .box2 {
    display: flex;
    flex: 1 40%;
    font-size: 12px;
    height: 50px;
    align-items: center;
    justify-content: flex-start;
    border-right: 1px solid #CCCCCC;
    padding-left: 10px;
  }

  .box3 {
    flex: 1 20%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    border-right: 1px solid #CCCCCC;
  }

  .box4 {
    flex: 1 20%;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input {
    width: 220px;
    height: 85%;
    border-radius: 5px;
    /* border-color: #DDDDDD; */
    outline: none;
  }
  .btn{
    border: 1px solid rgb(194, 231, 176);
    background-color: rgb(240, 249, 235);
    color: rgb(125, 198, 166);
    border-radius: 5px;
    margin-right: 10px;
    height: 30px;
  }

  .box-box {
    display: flex;
    flex-direction: row;
    border-left: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
  }

  .box-bottom {
    font-size: 12px;
    border-left: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    margin-top: -12px;
    padding-bottom: 10px;
    padding-top: 5px;
  }
</style>
