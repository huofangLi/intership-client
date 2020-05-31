<!-- 我的实习 -->
<template>
  <div class="all">
    <!-- 正在进行的实习 -->
    <div class="one">
      <!-- 标题-->
      <div class="top">
        <div class="top-left" style="font-weight:900;">
          <p class="title">正在进行的实习</p>
        </div>
        <div class="top-right">
          <el-button type="danger" plain round @click="changeOfPractice">变更实习类型</el-button>
        </div>
      </div>
      <!-- 数据-->
      <div class="data">
        <!-- 数据标题 按钮部分-->
        <div class="data-top">
          <div class="data-title">
            <div class="data-title-grade"><p style="font-weight: 600;">2020</p></div>
            <div class="data-title-topic"><p style="font-weight: 900;">届毕业生实毕业践</p></div>
            <div class="data-title-type"><p style="color: rgb(255,255,255);">全国统一批次</p></div>
          </div>
          <div class="data-box">
            <div class="data-box-btn">
              <button @click="attendanceManagement"
                style="height: 100%; margin-left: 1%; background-color: rgb(238, 238, 238); color:rgb(40, 150, 221) ; ">
                查看考勤管理
              </button>
              <button @click="intershipResults"
                style="height: 100%; margin-left: 1%; background-color: rgb(238, 238, 238); color:rgb(40, 150, 221) ;">
                查看实习成绩
              </button>
              <button
                style="height: 100%; margin-left: 1%; background-color: rgb(238, 238, 238); color:rgb(40, 150, 221) ;">
                查看实习报告
              </button>
              <button @click="intershipTask"
                style="height: 100%; margin-left: 1%; background-color: rgb(238, 238, 238); color:rgb(40, 150, 221) ;">
                查看实习任务
              </button>
              <button @click="internshipRegistration"
                      style="height: 100%; margin-left: 1%; background-color: rgb(238, 238, 238); color:rgb(40, 150, 221) ;">
                实习登记(已登记)
              </button>
            </div>

          </div>
        </div>
        <!--数据 毕业实践部分-->
        <div class="data-data" style="width: 98%; margin: auto;">
          <table style="width:100%; height: 100%;">
            <tr style="height: 50%;">
              <td style="width: 10%; color: rgb(217, 83, 79);">批次名称</td>
              <td
                style="width: 40%; border-left: 1px solid rgb(238,238,238); border-right: 1px solid rgb(238,238,238);">
                <p style="color: rgb(40, 150, 221);">2020届毕业生实毕业践</p>
                <p>批次编号：B20200102113952</p></td>
              <td style="width: 10%; color: rgb(217, 83, 79);">实习类型</td>
              <td style="width: 40%; border-left: 1px solid rgb(238,238,238);">顶岗实习</td>
            </tr>
            <tr>
              <td style="width: 10%; color: rgb(217, 83, 79);">课程</td>
              <td
                style="width: 40%; border-left: 1px solid rgb(238,238,238); border-right: 1px solid rgb(238,238,238);border-top:1px solid rgb(238,238,238);"></td>
              <td
                style="width: 10%; color: rgb(217, 83, 79);color: rgb(217, 83, 79); ">
                实习时间
              </td>
              <td style="width: 40%; border-left: 1px solid rgb(238,238,238); border-top:1px solid rgb(238,238,238) ;">
                <p>2019年11月25日 至 2020年6月5日</p></td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- 已完成的实习-->
    <div class="two">
      <!-- 标题-->
      <div class="top">
        <div class="top-left">
          <p class="title">已完成的实习</p>
        </div>
      </div>
      <!-- 数据-->
      <div class="two-data">
        <p style="font-size: 20pt;">暂无已完成的批次</p>
      </div>
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
  },
  methods: {
    /* 变更实习类型*/
    changeOfPractice () {
      this.$router.push('/changeOfPractice')
    },
    /* 实习登记*/
    internshipRegistration () {
      this.$router.push('/internshipRegistration')
    },
    /* 实习任务*/
    intershipTask () {
      this.$router.push('/intershipTask')
    },
    /* 实习成绩*/
    intershipResults () {
      this.$router.push('/intershipResults')
    },
    /* 考勤管理 */
    attendanceManagement () {
      this.$router.push('/attendanceManagement')
    },

  }
}
</script>

<style scoped>
  .top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid rgb(34, 34, 34);
    font-size: 25px;

  }

  .data {
    border-left: 1PX solid rgb(204, 204, 204);
    border-right: 1PX solid rgb(204, 204, 204);
    border-bottom: 2PX solid rgb(204, 204, 204);
  }

  .data-top {
    width: 98%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

  }

  .data-title {
    display: flex;
    align-items: center;
    margin-left: 2px;

  }

  .data-title-type {
    margin-left: 5px;
    display: flex;
    align-items: center;
    height: 30%;
    font-size: 1pt;
    border-radius: 10px;
    background-color: rgb(0, 128, 0);
  }

  .data-box {
    height: 50%;
    width: 70%;
    display: flex;
    float: right;
    align-items: center;
  }

  .data-box-btn {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;

  }

  .data-btn-first {
    background-color: rgb(238, 238, 238);
    color: rgb(40, 150, 221)
  }

  .data-data {

    background-color: rgb(245, 245, 245);
    margin-top: 10px;
  }

  .two {
    margin-top: 20px;
  }

  .two-data {
    height: 150px;
    border: 1PX solid rgb(204, 204, 204);
  }

</style>
